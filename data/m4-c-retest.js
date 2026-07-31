window.M4CRetest=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-retest-v1",
  "durationSeconds": 1800,
  "reviewDays": 14,
  "passTitle": "C轨retest通过",
  "failTitle": "C轨retest未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-c-exam-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 100,
  "questions": [
    {
      "id": "M4CR01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": true,
      "text": "在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是？",
      "options": [
        "向右，大小mA",
        "向左，大小mA且有车厢施力",
        "地面系中也必须额外加入mA"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "迁移",
      "constraint": "必须声明非惯性参考系，只处理平动随动系",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "non-inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "非惯性系与惯性力边界题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是？",
        "candidate": "向右，大小mA",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "向右，大小mA",
        "answerIndex": 0,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：向左，大小mA且有车厢施力",
          "错误路径：地面系中也必须额外加入mA"
        ]
      }
    },
    {
      "id": "M4CR02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": true,
      "text": "候选支持力N=m(g-a)，参数a的接触解存在区间是什么？",
      "options": [
        "a>g且保留N<0",
        "a≤g，a=g为N=0边界",
        "任意a都由支持面提供拉力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "迁移",
      "constraint": "质量为正且所有单侧约束成立",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "参数动力学与存在区间题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "候选支持力N=m(g-a)，参数a的接触解存在区间是什么？",
        "candidate": "a≤g，a=g为N=0边界",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "a≤g，a=g为N=0边界",
        "answerIndex": 1,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：a>g且保留N<0",
          "错误路径：任意a都由支持面提供拉力"
        ]
      }
    },
    {
      "id": "M4CR03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": true,
      "text": "线性阻力下小球速度等于vt/2时，加速度与g的关系是？",
      "options": [
        "a=0",
        "a=2g",
        "a=g/2"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "迁移",
      "constraint": "下落取正，k恒定且模型只在给定速度范围内",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "速度阻力与终端速度题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "线性阻力下小球速度等于vt/2时，加速度与g的关系是？",
        "candidate": "a=g/2",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "a=g/2",
        "answerIndex": 2,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：a=0",
          "错误路径：a=2g"
        ]
      }
    },
    {
      "id": "M4CR04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": true,
      "text": "同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理？",
      "options": [
        "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "动量流项不随系统选择改变",
        "可直接写瞬时火箭质量乘全系统加速度"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "迁移",
      "constraint": "声明控制体、相对喷射速度和质量变化率符号",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "变质量系统与动量流题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理？",
        "candidate": "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "answerIndex": 0,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：动量流项不随系统选择改变",
          "错误路径：可直接写瞬时火箭质量乘全系统加速度"
        ]
      }
    },
    {
      "id": "M4CR05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": true,
      "text": "方程dv/dt=6-v在v=8 m/s时预示速度怎样变化？",
      "options": [
        "dv/dt=14 m/s²，速度上升",
        "dv/dt=-2 m/s²，速度下降",
        "速度恒为8 m/s因为方程是一阶"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "迁移",
      "constraint": "质量恒定、惯性系、给定力模型区间与初值",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "一阶动力学微分方程题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "方程dv/dt=6-v在v=8 m/s时预示速度怎样变化？",
        "candidate": "dv/dt=-2 m/s²，速度下降",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "dv/dt=-2 m/s²，速度下降",
        "answerIndex": 1,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：dv/dt=14 m/s²，速度上升",
          "错误路径：速度恒为8 m/s因为方程是一阶"
        ]
      }
    },
    {
      "id": "M4CR06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": true,
      "text": "欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么？",
      "options": [
        "模型已被真实实验完全证明",
        "更新式可省略加速度乘步长",
        "离散误差在减小，是数值收敛证据之一"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "迁移",
      "constraint": "每步用当前状态算力，Δt单位为s且足够小",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "欧拉法数值动力学题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么？",
        "candidate": "离散误差在减小，是数值收敛证据之一",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "离散误差在减小，是数值收敛证据之一",
        "answerIndex": 2,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：模型已被真实实验完全证明",
          "错误路径：更新式可省略加速度乘步长"
        ]
      }
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
