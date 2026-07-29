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

if (modules.includes('m2')) {
  const matrices = {
    a: new Set(['M2-K01','M2-K02','M2-K03','M2-K04','M2-K05','M2-K06','M2-K07','M2-K08']),
    b: new Set(['M2-BK01','M2-BK02','M2-BK03','M2-BK04','M2-BK05','M2-BK06','M2-BK07','M2-BK08']),
    c: new Set(['M2-CK01','M2-CK02','M2-CK03','M2-CK04','M2-CK05','M2-CK06','M2-CK07','M2-CK08']),
  };
  const forbidden = ['任务必须','说明条件并连接物理意义','处理某任务应优先','完成一个对应的推导或数值检验','独立完成建模、推导与边界检查'];
  const questionTexts = new Map();
  for (const track of tracks) {
    const configs = {};
    for (const stage of stages) {
      const file = path.join(root, 'data', `m2-${track}-${stage}.js`);
      const source = fs.readFileSync(file, 'utf8');
      for (const phrase of forbidden) if (source.includes(phrase)) throw new Error(`${file}: generic template phrase: ${phrase}`);
      const window = {};
      vm.runInNewContext(source, { window, Set }, { filename: file });
      const config = Object.values(window)[0];
      configs[stage] = config;
      for (const item of config.questions || config.items) {
        if (!matrices[track].has(item.node)) throw new Error(`${file}: ${item.id} has unmapped node ${item.node}`);
        if (!item.text) continue;
        const normalized = item.text.replace(/\s+/g, '');
        if (questionTexts.has(normalized)) throw new Error(`${file}: repeats question text from ${questionTexts.get(normalized)}`);
        questionTexts.set(normalized, `${track}-${stage}-${item.id}`);
      }
    }
    const examNodes = new Set(configs.exam.questions.map(question => question.node));
    const missing = [...matrices[track]].filter(node => !examNodes.has(node));
    if (missing.length) throw new Error(`M2 ${track.toUpperCase()} exam misses matrix nodes: ${missing.join(', ')}`);
  }
  console.log('OK: M2 content audit found mapped nodes, full exam coverage, distinct prompts and no generic templates');
}
