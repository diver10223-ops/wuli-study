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
  const softTemplates = ['比较两种情况','比较v与a同向和反向','由已知量求未知量','给v0、a、t求','画时间线','正确做法是','应如何处理','应使用什么','首先检查什么','写出对应关系','完成建模与核验','完成公式检查'];
  const requiredFields = ['summary','conditions','misconception','example','check'];
  const normalizeNearPrompt = text => text
    .replace(/[甲乙前后小汽车车辆车列车小车滑块质点物体机器人无人车公交车电动车]/g, '对象')
    .replace(/-?\d+(?:\.\d+)?(?:\/\d+)?/g, '#')
    .replace(/m\/s²|m\/s|cm|ms|m|s|SI/g, '单位')
    .replace(/[，。；：、“”‘’（）()\s]/g, '');
  const bigrams = text => {
    const normalized = text.replace(/[，。；：、“”‘’（）()\s]/g, '');
    return new Set(Array.from({ length: Math.max(0, normalized.length - 1) }, (_, index) => normalized.slice(index, index + 2)));
  };
  const similarity = (left, right) => {
    const a = bigrams(left), b = bigrams(right);
    const intersection = [...a].filter(token => b.has(token)).length;
    return intersection / Math.max(1, a.size + b.size - intersection);
  };
  const questionTexts = new Map();
  const assessmentPrompts = [];
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
        if (stage === 'learning' || stage === 'models') {
          for (const field of requiredFields) if (typeof item[field] !== 'string' || !item[field].trim()) {
            throw new Error(`${file}: ${item.id} missing non-empty ${field}`);
          }
          for (const phrase of softTemplates) if (requiredFields.some(field => item[field].includes(phrase))) {
            throw new Error(`${file}: ${item.id} contains soft template phrase: ${phrase}`);
          }
          if (item.summary.trim() === item.example.trim() || similarity(item.summary, item.example) >= 0.72) {
            throw new Error(`${file}: ${item.id} summary and example duplicate or near-duplicate duties`);
          }
          if (!/[\d=<>≤≥]|是否|判断|结论|支持|不能/.test(item.example)) {
            throw new Error(`${file}: ${item.id} example lacks a concrete value, relation, or verifiable conclusion`);
          }
          if (/^注意|我能|我会|完成核验|完成检查/.test(item.check)) {
            throw new Error(`${file}: ${item.id} check is not an executable student action`);
          }
        }
        if (!item.text) continue;
        const normalized = item.text.replace(/\s+/g, '');
        if (questionTexts.has(normalized)) throw new Error(`${file}: repeats question text from ${questionTexts.get(normalized)}`);
        questionTexts.set(normalized, `${track}-${stage}-${item.id}`);
        if (['check','exam','retest'].includes(stage)) assessmentPrompts.push({ track, stage, id: item.id, text: item.text });
        if (stage === 'exam' && item.task !== item.node.replace(/^M2-/, '')) {
          throw new Error(`${file}: ${item.id} task ${item.task} does not match node ${item.node}`);
        }
      }
    }
    const examNodes = new Set(configs.exam.questions.map(question => question.node));
    const missing = [...matrices[track]].filter(node => !examNodes.has(node));
    if (missing.length) throw new Error(`M2 ${track.toUpperCase()} exam misses matrix nodes: ${missing.join(', ')}`);
  }
  for (let i = 0; i < assessmentPrompts.length; i++) for (let j = i + 1; j < assessmentPrompts.length; j++) {
    const left = assessmentPrompts[i], right = assessmentPrompts[j];
    if (left.stage === right.stage && left.track === right.track) continue;
    const normalizedLeft = normalizeNearPrompt(left.text), normalizedRight = normalizeNearPrompt(right.text);
    if (normalizedLeft === normalizedRight || similarity(normalizedLeft, normalizedRight) >= 0.82) {
      throw new Error(`M2 near-duplicate assessment prompts: ${left.track}-${left.stage}-${left.id} / ${right.track}-${right.stage}-${right.id}`);
    }
  }
  console.log('OK: M2 content audit found mapped nodes, task alignment, full exam coverage, distinct field duties, and no template or near-duplicate prompts');
}

if (modules.includes("m3")) {
  const matrices = Object.fromEntries(
    tracks.map((track) => [
      track,
      new Set(
        Array.from(
          { length: 6 },
          (_, index) => `M3-${track.toUpperCase()}K0${index + 1}`,
        ),
      ),
    ]),
  );
  const requiredFields = [
    "summary",
    "conditions",
    "misconception",
    "example",
    "check",
  ];
  const forbidden = [
    "围绕",
    "建立对象—过程—条件—规律—检验链",
    "明确适用范围、方向、单位和阶段",
    "完成一个正例、一个反例和一道迁移任务",
    "我能解释条件并独立建模",
    "处理重力任务应优先",
  ];
  const selfClaims = /^(我能|我会|完成|检查条件|判断结果是否合理)/;
  const normalize = (text) =>
    text
      .replace(/\d+(?:\.\d+)?/g, "#")
      .replace(/[，。；：、“”‘’（）()\s]/g, "");
  const normalizeNear = (text) =>
    normalize(text)
      .replace(
        /木块|木箱|物块|小盒|工具箱|行李箱|箱体|样品|物体|结点|小球|球|路牌|画框|舞台灯|灯|广告杆|直杆|梁/g,
        "对象",
      )
      .replace(/N·m|N\/m|N\/kg|kg|cm|m|N|°/g, "单位");
  const bigrams = (text) =>
    new Set(
      Array.from({ length: Math.max(0, text.length - 1) }, (_, index) =>
        text.slice(index, index + 2),
      ),
    );
  const similarity = (left, right) => {
    const a = bigrams(left),
      b = bigrams(right);
    const overlap = [...a].filter((token) => b.has(token)).length;
    return overlap / Math.max(1, a.size + b.size - overlap);
  };
  const assessmentPrompts = [];
  for (const track of tracks) {
    const configs = {};
    for (const stage of stages) {
      const file = path.join(root, "data", `m3-${track}-${stage}.js`);
      const source = fs.readFileSync(file, "utf8");
      if (source.split("\n").length < 10)
        throw new Error(
          `${file}: M3 config is not reviewable multiline source`,
        );
      for (const phrase of forbidden)
        if (source.includes(phrase))
          throw new Error(`${file}: generic M3 template remains: ${phrase}`);
      const window = {};
      vm.runInNewContext(source, { window, Set }, { filename: file });
      const config = Object.values(window)[0];
      configs[stage] = config;
      const collection = config.questions || config.items;
      if (collection.some((item) => !item))
        throw new Error(`${file}: sparse content array is not reviewable`);
      if (
        ["learning", "models"].includes(stage) &&
        config.diagnosticKey !== `physics-mechanics-m3-${track}-diagnostic-v1`
      )
        throw new Error(`${file}: wrong diagnostic key`);
      if (
        stage === "diagnostic" &&
        track === "a" &&
        config.prerequisites.length !== 0
      )
        throw new Error(
          `${file}: A diagnostic must not be compensated by another track`,
        );
      collection.forEach((item) => {
        if (!matrices[track].has(item.node))
          throw new Error(`${file}: ${item.id} has unmapped node ${item.node}`);
        if (["learning", "models"].includes(stage)) {
          requiredFields.forEach((field) => {
            if (typeof item[field] !== "string" || !item[field].trim())
              throw new Error(`${file}: ${item.id} missing ${field}`);
          });
          if (normalize(item.summary) === normalize(item.example))
            throw new Error(`${file}: ${item.id} repeats summary as example`);
          if (
            similarity(normalize(item.summary), normalize(item.conditions)) >=
              0.68 ||
            similarity(normalize(item.summary), normalize(item.example)) >= 0.72
          )
            throw new Error(`${file}: ${item.id} field duties overlap`);
          if (
            !/\d/.test(item.example) ||
            !/(N|kg|m|°|N\/m|m\/s²)/.test(item.example) ||
            !/(=|≈|≤|≥|得|为|故|不能|范围|临界|支持|弹力|摩擦|张力|合力|反力)/.test(
              item.example,
            )
          ) {
            throw new Error(
              `${file}: ${item.id} example lacks a value, unit, target, or verifiable conclusion`,
            );
          }
          if (selfClaims.test(item.check))
            throw new Error(
              `${file}: ${item.id} check is a self-claim rather than an action`,
            );
          if (
            !/(写|画|列|算|求|代回|核对|记录|比较|标|验|判断|联立)/.test(
              item.check,
            )
          )
            throw new Error(
              `${file}: ${item.id} check lacks a concrete student action`,
            );
          if (stage === "models") {
            const chain = `${item.summary}${item.conditions}${item.example}${item.check}`;
            if (
              !/(对象|隔离|结点|梁|木块|物块|物体)/.test(chain) ||
              !/(ΣF|ΣM|平衡|力多边形)/.test(chain) ||
              !/(候选|解得|求|得|为)/.test(chain) ||
              !/(N≥0|T≥0|非负|为正|张紧|摩擦|弹性限度|离散|存在条件|相容|切换|不能)/.test(
                chain,
              )
            )
              throw new Error(
                `${file}: ${item.id} lacks a complete candidate-and-constraint modeling chain`,
              );
          }
        } else {
          if (
            !Number.isInteger(item.answer) ||
            item.answer < 0 ||
            item.answer >= item.options.length
          )
            throw new Error(`${file}: ${item.id} answer index is invalid`);
          if (["check", "exam", "retest"].includes(stage))
            assessmentPrompts.push({
              track,
              stage,
              id: item.id,
              text: item.text,
            });
          if (
            ["check", "exam", "retest"].includes(stage) &&
            item.task !== item.node.slice(-3)
          )
            throw new Error(`${file}: ${item.id} task does not match node`);
        }
      });
    }
    const missing = [...matrices[track]].filter(
      (node) =>
        !new Set(configs.exam.questions.map((question) => question.node)).has(
          node,
        ),
    );
    if (missing.length)
      throw new Error(
        `M3 ${track.toUpperCase()} exam misses matrix nodes: ${missing.join(", ")}`,
      );
    if (
      track !== "a" &&
      configs.diagnostic.prerequisites[0]?.key !==
        `physics-mechanics-m3-${track === "b" ? "a" : "b"}-exam-v1`
    )
      throw new Error(`M3 ${track.toUpperCase()} has wrong track prerequisite`);
    if (configs.check.questions.length < 8)
      throw new Error(
        `M3 ${track.toUpperCase()} check has fewer than 8 questions`,
      );
    if (configs.exam.questions.length < 12)
      throw new Error(
        `M3 ${track.toUpperCase()} exam has fewer than 12 questions`,
      );
    if (configs.retest.questions.length < 6)
      throw new Error(
        `M3 ${track.toUpperCase()} retest has fewer than 6 questions`,
      );
    for (const [stage, minimum] of [
      ["check", 1],
      ["retest", 1],
      ["exam", 2],
    ]) {
      const counts = Object.fromEntries(
        [...matrices[track]].map((node) => [node, 0]),
      );
      configs[stage].questions.forEach((question) => {
        counts[question.node] += 1;
      });
      const under = Object.entries(counts).filter(
        ([, count]) => count < minimum,
      );
      if (under.length)
        throw new Error(
          `M3 ${track.toUpperCase()} ${stage} node density insufficient: ${under.map(([node]) => node).join(", ")}`,
        );
    }
    for (const stage of ["diagnostic", "check", "exam", "retest"]) {
      const answers = configs[stage].questions.map(
        (question) => question.answer,
      );
      if (new Set(answers).size < 2 || answers.every((answer) => answer === 0))
        throw new Error(
          `M3 ${track.toUpperCase()} ${stage} answer positions are not distributed`,
        );
    }
    if (
      configs.exam.prerequisites[0]?.key !==
        `physics-mechanics-m3-${track}-check-v1` ||
      configs.retest.prerequisites[0]?.key !==
        `physics-mechanics-m3-${track}-exam-v1`
    )
      throw new Error(
        `M3 ${track.toUpperCase()} assessment evidence chain is not track-local`,
      );
  }
  const seen = new Map();
  assessmentPrompts.forEach((prompt) => {
    const key = normalize(prompt.text);
    if (seen.has(key))
      throw new Error(
        `M3 duplicate or number-only assessment prompts: ${seen.get(key)} / ${prompt.track}-${prompt.stage}-${prompt.id}`,
      );
    seen.set(key, `${prompt.track}-${prompt.stage}-${prompt.id}`);
  });
  for (let i = 0; i < assessmentPrompts.length; i++)
    for (let j = i + 1; j < assessmentPrompts.length; j++) {
      const left = assessmentPrompts[i],
        right = assessmentPrompts[j];
      const a = normalizeNear(left.text),
        b = normalizeNear(right.text);
      if (a === b || similarity(a, b) >= 0.86)
        throw new Error(
          `M3 near-duplicate prompts: ${left.track}-${left.stage}-${left.id} / ${right.track}-${right.stage}-${right.id}`,
        );
    }
  console.log(
    "OK: M3 content audit found real tri-track fields, valid answers, mapped tasks, full exam coverage, prerequisites, and distinct assessment prompts",
  );
}
