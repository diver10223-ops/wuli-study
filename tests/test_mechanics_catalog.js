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
  const allM3Ids = new Set();
  const structureKeys = [
    "objectType", "contactCount", "forceTypes", "balanceDimension",
    "takesMoment", "target", "hasParameter", "hasCritical",
    "hasStateSwitch", "hasExperimentError", "steps",
  ];
  const allowedObjectTypes = new Set([
    "ball", "beam", "block", "book", "experiment-system",
    "force-representation", "joint", "rod", "spring-system",
    "stacked-system", "suspended-object",
  ]);
  const allowedForceTypes = new Set([
    "applied-force", "distributed-load", "friction", "gravity",
    "hinge-reaction", "normal", "rod-force", "spring", "tension",
  ]);
  const allowedBalanceDimensions = new Set([
    "one-axis-force", "planar-force", "planar-force-and-moment",
  ]);
  const allowedTargets = new Set([
    "constraint-existence", "constraint-force", "contact-force",
    "contact-or-friction-state", "corrected-friction", "equilibrium-range",
    "equivalence-criterion", "equivalent-resultant",
    "experimental-result-or-error", "force-identification", "force-polygon",
    "friction-or-state", "gravity-or-center", "internal-or-external-force",
    "reaction-or-moment", "resultant-or-component",
    "spring-deformation-or-force", "static-model-validity",
    "tension-or-rod-force", "zero-offset-direction",
  ]);
  const booleanStructureKeys = [
    "takesMoment", "hasParameter", "hasCritical", "hasStateSwitch",
    "hasExperimentError",
  ];
  const structureSignature = (item, includeTrack = true, track = "") => {
    const values = structureKeys.map((key) => {
      const value = item.structure[key];
      return Array.isArray(value) ? [...value].sort().join("+") : String(value);
    });
    return [...(includeTrack ? [track] : []), item.node.slice(-3), ...values].join("|");
  };
  const maxAnswerRun = (answers) => answers.reduce(
    (state, answer, index) => {
      const run = index && answer === answers[index - 1] ? state.run + 1 : 1;
      return { run, max: Math.max(state.max, run) };
    },
    { run: 0, max: 0 },
  ).max;
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
        if (allM3Ids.has(item.id))
          throw new Error(`${file}: duplicate M3 id ${item.id}`);
        allM3Ids.add(item.id);
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
          if (!Array.isArray(item.options) || item.options.length < 3)
            throw new Error(`${file}: ${item.id} needs at least three options`);
          if (new Set(item.options).size !== item.options.length)
            throw new Error(`${file}: ${item.id} has duplicate option text`);
          if (
            !Number.isInteger(item.answer) ||
            item.answer < 0 ||
            item.answer >= item.options.length
          )
            throw new Error(`${file}: ${item.id} answer index is invalid`);
          if (
            typeof item.skill !== "string" || typeof item.level !== "string" ||
            typeof item.constraint !== "string" || !item.structure ||
            structureKeys.some((key) => !(key in item.structure)) ||
            !Number.isInteger(item.structure.contactCount) ||
            !Number.isInteger(item.structure.steps) ||
            !Array.isArray(item.structure.forceTypes)
          )
            throw new Error(`${file}: ${item.id} lacks reviewable M3 physical metadata`);
          if (!allowedObjectTypes.has(item.structure.objectType))
            throw new Error(`${file}: ${item.id} has an invalid physical objectType`);
          if (!allowedBalanceDimensions.has(item.structure.balanceDimension))
            throw new Error(`${file}: ${item.id} has an invalid balanceDimension`);
          if (item.structure.contactCount < 0 || item.structure.steps < 0)
            throw new Error(`${file}: ${item.id} has a negative contactCount or steps`);
          if (!item.structure.forceTypes.length ||
            new Set(item.structure.forceTypes).size !== item.structure.forceTypes.length ||
            item.structure.forceTypes.some((type) => !allowedForceTypes.has(type)))
            throw new Error(`${file}: ${item.id} has empty, duplicate, or invalid forceTypes`);
          if (booleanStructureKeys.some((key) => typeof item.structure[key] !== "boolean"))
            throw new Error(`${file}: ${item.id} has a non-boolean structure flag`);
          if (!allowedTargets.has(item.structure.target))
            throw new Error(`${file}: ${item.id} has an unmapped physical target`);
          if (item.structure.takesMoment !==
            (item.structure.balanceDimension === "planar-force-and-moment"))
            throw new Error(`${file}: ${item.id} has inconsistent moment metadata`);
          if (item.structure.forceTypes.includes("distributed-load") &&
            item.structure.objectType !== "beam")
            throw new Error(`${file}: ${item.id} hides a loaded beam behind another objectType`);
          if (item.structure.contactCount > 0 &&
            !item.structure.forceTypes.some((type) => ["normal", "friction"].includes(type)))
            throw new Error(`${file}: ${item.id} counts contact without a contact force`);
          if (["diagnostic", "check", "exam", "retest"].includes(stage))
            assessmentPrompts.push({
              track,
              stage,
              id: item.id,
              text: item.text,
              item,
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
      const counts = [0, 1, 2].map(
        (answer) => answers.filter((value) => value === answer).length,
      );
      const limits = answers.length === 6 ? [1, 3]
        : answers.length === 8 ? [2, 3]
          : answers.length === 12 ? [3, 5] : null;
      if (!limits || counts.some((count) => count < limits[0] || count > limits[1]))
        throw new Error(
          `M3 ${track.toUpperCase()} ${stage} answer distribution ${counts.join("/")} violates ${answers.length}-item limits`,
        );
      if (maxAnswerRun(answers) > 2)
        throw new Error(`M3 ${track.toUpperCase()} ${stage} repeats one answer position more than twice`);
    }
    for (const node of matrices[track]) {
      const pair = configs.exam.questions.filter((question) => question.node === node);
      if (pair.length !== 2)
        throw new Error(`M3 ${track.toUpperCase()} exam ${node} must contain exactly two questions`);
      if (pair[0].answer === pair[1].answer)
        throw new Error(`M3 ${track.toUpperCase()} exam ${node} repeats its answer position`);
      if (pair[0].level === pair[1].level)
        throw new Error(`M3 ${track.toUpperCase()} exam ${node} lacks a cognitive-level contrast`);
      if (structureSignature(pair[0], false) === structureSignature(pair[1], false))
        throw new Error(`M3 ${track.toUpperCase()} exam ${node} repeats one physical structure`);
    }
    if (track === "b" && !configs.exam.questions.some((item) =>
      item.structure.contactCount >= 2 || item.structure.hasStateSwitch || item.structure.hasExperimentError))
      throw new Error("M3 B exam lacks multi-contact, constraint, or experiment transfer");
    if (track === "c" && !configs.exam.questions.some((item) =>
      item.structure.hasParameter || item.structure.takesMoment || item.structure.forceTypes.includes("distributed-load")))
      throw new Error("M3 C exam lacks parameter, distributed-load, vector, or moment modeling");
    if (track === "a" && [...Object.values(configs)].some((config) =>
      (config.questions || config.items).some((item) => /加速度|牛顿第二定律|向心|超重|失重|惯性力/.test(JSON.stringify(item)))))
      throw new Error("M3 A crosses into dynamics or non-inertial modeling");
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
  // A whitelist is intentionally explicit: every future entry must name the two
  // question IDs and give a physical reason; lowering similarity thresholds is
  // not an acceptable substitute.
  const structuralReuseWhitelist = new Map([
  ]);
  for (const [pair, reason] of structuralReuseWhitelist) {
    if (!/^M3\w+\/M3\w+$/.test(pair) || typeof reason !== "string" || reason.length < 12)
      throw new Error(`M3 invalid structural-reuse whitelist entry: ${pair}`);
  }
  const signatureGroups = new Map();
  assessmentPrompts.forEach((prompt) => {
    const signature = structureSignature(prompt.item, false);
    if (!signatureGroups.has(signature)) signatureGroups.set(signature, []);
    signatureGroups.get(signature).push(`${prompt.track}-${prompt.stage}-${prompt.id}`);
  });
  const repeatedSignatureGroups = [...signatureGroups.values()].filter((ids) => ids.length > 1);
  repeatedSignatureGroups.forEach((ids, index) =>
    console.log(`REPORT: M3 same-signature group ${index + 1}: ${ids.join(" / ")}`));
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
      const sameStructure = structureSignature(left.item, false) ===
        structureSignature(right.item, false);
      if (sameStructure && similarity(a, b) >= 0.55) {
        const pairKey = [left.id, right.id].sort().join("/");
        if (!structuralReuseWhitelist.has(pairKey))
          throw new Error(
            `M3 structural near-duplicate prompts: ${left.track}-${left.stage}-${left.id} / ${right.track}-${right.stage}-${right.id}`,
          );
      }
    }
  console.log(
    `OK: M3 structural report found ${repeatedSignatureGroups.length} same-signature groups and printed every ID; the separate textual-near-duplicate gate found no unhandled pair`,
  );
  console.log(
    "OK: M3 automated audit found balanced answers, typed metadata, contrasting declared exam structures, valid ids/options, prerequisites, and distinct prompts; it does not prove physical correctness",
  );
}

if (modules.includes("m4")) {
  const matrices = Object.fromEntries(tracks.map(track => [track,
    new Set(Array.from({ length: 6 }, (_, i) => `M4-${track.toUpperCase()}K0${i + 1}`))]));
  const required = ["summary","conditions","misconception","example","check"];
  const structureKeys = ["objectType","bodyCount","forceTypes","balanceDimension","referenceFrame","target","hasParameter","hasCritical","hasStateSwitch","hasExperimentError","steps"];
  const leak = /错误路径|错误：|漏掉|混淆|违反约束|改变参考系却|认为|把.+当作|未计入|误认|模型判断：|计算结果：/;
  const placeholder = /题设对象|题设参考系|题干所列真实力|按节点规律列方程|核对相关约束|答案唯一|先备能力判断/;
  const genericWrongEquation = /与选项\d相符|与正确关系不相容|错误关系导向/;
  const genericWrongSubstitution = /错误符号或错误单位|按错误符号或单位/;
  const genericConflict = /该结果不满足题目约束|不满足正确关系或条件/;
  const proceduralOption = /求内力时|列入整体式|不隔离|漏摩擦|速度当加速度|无需方程|只给代数解|保留负/;
  const pseudoEquation = /按选项建立关系|该式取代了本题关系/;
  const pseudoSubstitution = /将本题给定量代入该关系/;
  const pseudoCriterion = /采用判据“.*”而非本题判据“.*”/;
  const pseudoForces = /该选项改变了其中的合力或状态判断/;
  const repeatedChainWhitelist = new Map([
    ["M4AD03/M4AC03", "同一单位换算误区在诊断与检查中复测，但题干数据和教学阶段不同"],
    ["M4AC03/M4AE03", "同一单位换算误区进入正式卷第一层，保留用于证据链纵向比较"],
    ["M4AD04/M4AC04", "同一漏计摩擦结果用于诊断后立即检查纠正效果"],
    ["M4AC04/M4AE04", "同一漏计摩擦结果在正式卷以不同雪橇数据复核"],
    ["M4AD05/M4AC05", "同一速度与加速度混淆在反推受力节点纵向复测"],
    ["M4AC05/M4AE05", "同一反推受力误区在正式卷以不同质量和时段复核"],
    ["M4BD02/M4BC02", "轻绳负张力误判在诊断与检查间纵向复测"],
    ["M4BC02/M4BE02", "轻绳边界误判在正式卷以不同连接装置复核"],
    ["M4BD03/M4BC03", "负支持力误判在接触临界节点纵向复测"],
    ["M4BC03/M4BE03", "接触临界误判在正式卷以不同竖直装置复核"],
    ["M4CD02/M4CC02", "参数接触域误判在诊断与检查间纵向复测"],
    ["M4CC02/M4CE02", "参数接触域误判在正式卷更换参数后复核"],
    ["M4CD06/M4CC06", "欧拉更新漏步长误区在诊断与检查间纵向复测"],
    ["M4CC06/M4CE06", "欧拉更新漏步长误区在正式卷更换初值后复核"],
  ]);
  const forceMap = new Map([["重力","gravity"],["支持力","normal"],["水平外加力","applied"],["外加力","applied"],["拉力","tension"],["推力","thrust"],["驱动力","applied"],["水平阻力","resistance"],["阻力","resistance"],["摩擦力","friction"],["静摩擦力","friction"],["滑动摩擦力","friction"],["张力","tension"],["弹簧弹力","spring"],["速度相关阻力","drag"],["题设合外力","resultant"]]);
  const normalize = text => text.replace(/\d+(?:\.\d+)?/g,"#").replace(/[甲乙小车物块物体箱子滑块包裹乘客雪橇]/g,"对象").replace(/kg|N·s\/m|N|m\/s²|m\/s|s/g,"单位").replace(/[，。；：、“”‘’（）()\s]/g,"");
  const signature = q => structureKeys.map(k => Array.isArray(q.structure[k]) ? [...q.structure[k]].sort().join('+') : String(q.structure[k])).join('|');
  const maxRun = a => a.reduce((s,v,i)=>{const run=i&&a[i-1]===v?s.run+1:1;return {run,max:Math.max(s.max,run)}},{run:0,max:0}).max;
  const ids=new Set(), exports=new Set(), keys=new Set(), prompts=[];
  for (const track of tracks) {
    const configs={};
    for (const stage of stages) {
      const file=path.join(root,"data",`m4-${track}-${stage}.js`), source=fs.readFileSync(file,"utf8"), window={};
      vm.runInNewContext(source,{window,Set},{filename:file}); const names=Object.keys(window);
      if(names.length!==1||exports.has(names[0])) throw new Error(`${file}: export not unique`); exports.add(names[0]);
      const config=Object.values(window)[0]; configs[stage]=config;
      if(keys.has(config.storageKey)) throw new Error(`${file}: storageKey not unique`); keys.add(config.storageKey);
      const items=config.questions||config.items; if(items.some(x=>!x)) throw new Error(`${file}: sparse array`);
      for(const item of items){
        if(ids.has(item.id)) throw new Error(`${file}: duplicate ${item.id}`); ids.add(item.id);
        if(!matrices[track].has(item.node)) throw new Error(`${file}: bad node ${item.node}`);
        if(["learning","models"].includes(stage)){for(const field of required) if(typeof item[field]!=="string"||!item[field].trim()) throw new Error(`${file}: ${item.id} missing ${field}`);}
        else {
          if(item.task!==item.node.slice(-3)||new Set(item.options).size!==item.options.length||!item.options[item.answer]) throw new Error(`${file}: ${item.id} invalid task/options/answer`);
          if(item.options.some(o=>leak.test(o))) throw new Error(`${file}: ${item.id} leaks answer in options`);
          if(item.options.some(o=>proceduralOption.test(o))) throw new Error(`${file}: ${item.id} exposes a procedural distractor`);
          if(structureKeys.some(k=>!(k in item.structure))||!Number.isInteger(item.structure.bodyCount)||item.structure.bodyCount<1||!Array.isArray(item.structure.forceTypes)||!item.structure.forceTypes.length||new Set(item.structure.forceTypes).size!==item.structure.forceTypes.length||!Number.isInteger(item.structure.steps)||item.structure.steps<1) throw new Error(`${file}: ${item.id} invalid structure types`);
          if(item.structure.objectType==="multi-body"&&item.structure.bodyCount<2) throw new Error(`${file}: ${item.id} multi-body object has bodyCount < 2`);
          for(const k of ["hasParameter","hasCritical","hasStateSwitch","hasExperimentError"]) if(typeof item.structure[k]!=="boolean") throw new Error(`${file}: ${item.id} ${k} not boolean`);
          const r=item.review;if(!r||r.answerIndex!==item.answer||placeholder.test(JSON.stringify(r))||!Array.isArray(r.forces)||!r.forces.length) throw new Error(`${file}: ${item.id} review incomplete or placeholder`);
          if(!Array.isArray(r.distractors)||r.distractors.length!==item.options.length-1) throw new Error(`${file}: ${item.id} distractor count`);
          const mapped=r.forces.map(force=>forceMap.get(force));
          if(mapped.some(type=>!type)||mapped.sort().join("|")!==[...item.structure.forceTypes].sort().join("|")) throw new Error(`${file}: ${item.id} review.forces disagrees with structure.forceTypes`);
          if(item.structure.referenceFrame==="non-inertial"&&item.structure.forceTypes.some(type=>/inertia|fictitious/.test(type))) throw new Error(`${file}: ${item.id} puts inertia force in the real-force set`);
          const wrong=item.options.filter((_,i)=>i!==item.answer); for(const d of r.distractors) {
            if(!wrong.includes(d.option)||!(d.wrongEquation||d.wrongCriterion)||!d.wrongResult||!d.conflict) throw new Error(`${file}: ${item.id} distractor is not option-bound`);
            if(d.option!==d.wrongResult) throw new Error(`${file}: ${item.id} wrongResult differs from its option`);
            if(pseudoEquation.test(d.wrongEquation||"")||pseudoSubstitution.test(d.wrongSubstitution||"")||pseudoCriterion.test(d.wrongCriterion||"")||pseudoForces.test(d.wrongObjectOrForces||"")) throw new Error(`${file}: ${item.id} retains a pseudo-specific error chain`);
            if(d.wrongEquation&&d.wrongEquation.trim()===d.wrongResult.trim()) throw new Error(`${file}: ${item.id} wrongEquation only repeats wrongResult`);
            if(d.wrongCriterion&&!/(错误地|依据|认为|检验|比较|判定)/.test(d.wrongCriterion)) throw new Error(`${file}: ${item.id} wrongCriterion lacks a decision basis`);
            if(d.wrongSubstitution){
              const resultNumbers=d.wrongResult.match(/-?\d+(?:\.\d+)?/g)||[];
              if(!/[=+\-×÷*/]/.test(d.wrongSubstitution)||!/(\d)/.test(d.wrongSubstitution)||resultNumbers.some(n=>!d.wrongSubstitution.includes(n))) throw new Error(`${file}: ${item.id} wrongSubstitution is not reproducible`);
            }
            if(d.wrongEquation&&genericWrongEquation.test(d.wrongEquation)||d.wrongSubstitution&&genericWrongSubstitution.test(d.wrongSubstitution)||genericConflict.test(d.conflict)) throw new Error(`${file}: ${item.id} retains a generic distractor chain`);
            if(!d.wrongSubstitution&&!d.wrongCriterion) throw new Error(`${file}: ${item.id} distractor lacks a concrete substitution or criterion`);
          }
          prompts.push({track,stage,id:item.id,text:item.text,n:normalize(item.text),item});
        }
      }
    }
    for(const stage of ["check","retest"]){const q=configs[stage].questions;for(const node of matrices[track])if(!q.some(x=>x.node===node))throw new Error(`M4 ${track} ${stage} misses ${node}`);}
    const exam=configs.exam.questions;if(exam.length!==12)throw new Error(`M4 ${track} exam must have 12 questions`);
    for(const node of matrices[track]){const pair=exam.filter(q=>q.node===node);if(pair.length!==2||pair[0].level===pair[1].level||pair[0].answer===pair[1].answer||signature(pair[0])===signature(pair[1]))throw new Error(`M4 ${track} ${node} lacks two contrasting exam layers`);if(pair[0].review.object===pair[1].review.object&&pair[0].review.equation===pair[1].review.equation)throw new Error(`M4 ${track} ${node} differs only in declared metadata`);}
    for(const stage of ["check","exam","retest"]){const a=configs[stage].questions.map(q=>q.answer), counts=[0,1,2].map(v=>a.filter(x=>x===v).length), expected=a.length/3;if(counts.some(x=>x!==expected)||maxRun(a)>2)throw new Error(`M4 ${track} ${stage} answer distribution ${counts}`);}
    const learning=new Set(configs.learning.items.map(x=>normalize(x.example))), models=new Set(configs.models.items.map(x=>normalize(x.example)));
    if(configs.check.questions.some(q=>learning.has(normalize(q.text))))throw new Error(`M4 ${track} check repeats learning example`);
    if(exam.some(q=>models.has(normalize(q.text))))throw new Error(`M4 ${track} exam repeats model example`);
    if(track!=="a"&&configs.diagnostic.prerequisites[0]?.key!==`physics-mechanics-m4-${track==="b"?"a":"b"}-exam-v1`)throw new Error(`M4 ${track} wrong prerequisite`);
    if(configs.exam.prerequisites[0]?.key!==`physics-mechanics-m4-${track}-check-v1`||configs.retest.prerequisites[0]?.key!==`physics-mechanics-m4-${track}-exam-v1`)throw new Error(`M4 ${track} broken evidence chain`);
  }
  for(let i=0;i<prompts.length;i++)for(let j=i+1;j<prompts.length;j++)if(prompts[i].text===prompts[j].text||prompts[i].n===prompts[j].n)throw new Error(`M4 duplicate/number-only prompts: ${prompts[i].id}/${prompts[j].id}`);
  for(const field of ["equation","wrongEquation","wrongSubstitution","conflict"]){const groups=new Map();for(const p of prompts){const values=field==="equation"?[p.item?.review?.equation]:p.item?.review?.distractors?.map(d=>d[field]);for(const value of values||[])if(value)groups.set(value,[...(groups.get(value)||[]),p.id]);}for(const [value,group] of groups)if(group.length>1){for(let i=0;i<group.length-1;i++){const key=`${group[i]}/${group[i+1]}`, reason=repeatedChainWhitelist.get(key);if(!reason||reason.length<12)throw new Error(`M4 unregistered repeated chain ${key}`);}console.log(`REPORT: M4 whitelisted repeated review.${field}: ${group.join("/")} :: ${value}`);}}
  for(const key of repeatedChainWhitelist.keys()){const pair=key.split("/");if(pair.length!==2||pair.some(id=>!ids.has(id)))throw new Error(`M4 invalid repeated-chain whitelist key ${key}`);}
  console.log("OK: M4 audit proves typed fields, 12-item/two-layer exams, mapping, answer distribution, evidence chains, option/review hygiene and text-distinctness; it cannot prove physical correctness or uniqueness, replace author per-question recalculation, or substitute for teacher review or real-student validation; teacher review and real-student validation were not performed in this round");
}
