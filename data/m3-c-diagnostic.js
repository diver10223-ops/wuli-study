window.M3CDiagnostic = Object.freeze({
  version: 1,
  module: "M3",
  track: "C",
  storageKey: "physics-mechanics-m3-c-diagnostic-v1",
  passCorrect: 5,
  prerequisites: [
    {
      key: "physics-mechanics-m3-b-exam-v1",
      label: "前一轨正式卷未通过",
      test: (v) => v?.passed === true,
    },
  ],
  passTitle: "C轨诊断通过",
  failTitle: "需回补前置",
  initialPlan: "提交后生成节点路线。",
  passPlan: "<strong>下一步：</strong>进入知识学习。",
  failPlan: (d) =>
    `<strong>回补：</strong>${d.weak.join("、") || d.failedGates.join("、")}。`,
  questions: [
    {
      id: "M3CD01",
      node: "M3-CK01",
      gate: "核心边界",
      text: "地面系看加速车内物体有加速度，能否直接用ΣF=0？",
      options: [
        "不能；该对象在地面系不平衡",
        "能；相对车厢静止",
        "能；惯性力是真实接触力",
      ],
      answer: 0,
    },
    {
      id: "M3CD02",
      node: "M3-CK02",
      text: "均匀向下载荷200 N/m作用于2 m梁，合力大小是？",
      options: ["200 N", "400 N", "100 N"],
      answer: 1,
    },
    {
      id: "M3CD03",
      node: "M3-CK03",
      text: "接触力候选值N=-3 N表示什么？",
      options: ["接触失效，应切换模型", "支持力向下3 N", "仍保持接触"],
      answer: 0,
    },
    {
      id: "M3CD04",
      node: "M3-CK04",
      text: "10 N与10 N两力夹120°，合力大小是？",
      options: ["10 N", "20 N", "0 N"],
      answer: 0,
    },
    {
      id: "M3CD05",
      node: "M3-CK05",
      text: "斜面静止块由平衡求得f/N=tanθ，静止范围还需比较什么？",
      options: ["tanθ≤μs", "tanθ=μs恒成立", "N=mg恒成立"],
      answer: 0,
    },
    {
      id: "M3CD06",
      node: "M3-CK06",
      text: "水平梁静止除ΣM=0外还必须满足什么？",
      options: ["ΣFx=0且ΣFy=0", "只需ΣFx=0", "无需平动平衡"],
      answer: 0,
    },
  ],
});
