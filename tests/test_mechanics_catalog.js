'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const root = path.resolve(__dirname, '..');
const allModules = ['m1','m2','m3','m4','m5','m6','m7','m8'];
const tracks = ['a','b','c'];
const stages = ['diagnostic','learning','models','check','exam','retest'];
const moduleFlag = process.argv.indexOf('--module');
let modules = allModules;
if (moduleFlag !== -1) {
  const requested = (process.argv[moduleFlag + 1] || '').toLowerCase();
  if (!allModules.includes(requested)) {
    throw new Error(`--module must be one of ${allModules.join(', ')}`);
  }
  modules = [requested];
}
let checked = 0;
const m1ExamNodes = new Map();
const m1TrackQuestionText = new Map();
for (const moduleId of modules) for (const track of tracks) for (const stage of stages) {
  const file = path.join(root, 'data', `${moduleId}-${track}-${stage}.js`);
  const window = {};
  vm.runInNewContext(fs.readFileSync(file, 'utf8'), { window, Set }, { filename: file });
  const configs = Object.values(window);
  if (configs.length !== 1) throw new Error(`${file}: expected one exported config`);
  const config = configs[0];
  const expectedKey = `physics-mechanics-${moduleId}-${track}-${stage}-v1`;
  if (config.storageKey !== expectedKey) throw new Error(`${file}: wrong storage key`);
  const collection = config.questions || config.items;
  if (!Array.isArray(collection) || collection.length < 3) throw new Error(`${file}: insufficient real content`);
  if ((stage === 'exam' || stage === 'retest') && typeof config.evaluate !== 'function') throw new Error(`${file}: missing evaluation`);
  if (moduleId === 'm1') {
    const source = fs.readFileSync(file, 'utf8');
    const templatePhrases = ['处理质点与参考系任务应优先', '明确条件并完成物理检验', '完成一个正例、一个反例和一道迁移任务'];
    if (templatePhrases.some(phrase => source.includes(phrase))) throw new Error(`${file}: generic template content remains`);
    if (collection.some(item => !item.node || !item.title && !item.text)) throw new Error(`${file}: content is not mapped to a knowledge node`);
    if (stage === 'exam') m1ExamNodes.set(track, new Set(collection.map(item => item.node)));
    if (stage === 'check') m1TrackQuestionText.set(track, new Set(collection.map(item => item.text)));
  }
  checked += 1;
}
if (modules.includes('m1')) {
  for (const track of tracks) {
    const expected = new Set(Array.from({ length: 6 }, (_, i) => `M1-${track.toUpperCase()}K0${i + 1}`));
    const actual = m1ExamNodes.get(track);
    if (!actual || [...expected].some(node => !actual.has(node))) throw new Error(`m1-${track}-exam: knowledge matrix coverage incomplete`);
  }
  for (let i = 0; i < tracks.length; i++) for (let j = i + 1; j < tracks.length; j++) {
    const overlap = [...m1TrackQuestionText.get(tracks[i])].filter(text => m1TrackQuestionText.get(tracks[j]).has(text));
    if (overlap.length) throw new Error(`M1 ${tracks[i].toUpperCase()}/${tracks[j].toUpperCase()} tracks contain duplicate assessment prompts`);
  }
}
console.log(`OK: validated ${checked} mechanics stage configs for ${modules.join(', ')}, keys and content collections`);
