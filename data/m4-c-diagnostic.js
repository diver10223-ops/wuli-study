window.M4CDiagnostic=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-diagnostic-v1",
  "passCorrect": 5,
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-b-exam-v1",
      "label": "前轨正式卷未通过"
    }
  ],
  "passTitle": "C轨诊断通过",
  "failTitle": "需回补前置",
  "initialPlan": "提交后生成节点路线。",
  "passPlan": "进入知识学习。",
  "failPlan": "返回失败节点。",
  "questions": [
    {
      "id": "M4CD01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": false,
      "text": "什么参考系中可引入-mA以保持牛顿方程形式？",
      "options": [
        "相对惯性系有平动加速度的随动系",
        "模型判断：在地面系添加惯性力",
        "模型判断：给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "非惯性系与惯性力边界",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "相对惯性系有平动加速度的随动系",
        "constraint": "必须声明非惯性参考系，只处理平动随动系",
        "final": "相对惯性系有平动加速度的随动系",
        "answerIndex": 0,
        "unique": "只有选项“相对惯性系有平动加速度的随动系”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：在地面系添加惯性力",
            "wrongObjectOrForces": "仍取非惯性系与惯性力边界，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：在地面系添加惯性力”",
            "wrongResult": "模型判断：在地面系添加惯性力",
            "conflict": "该结果不满足正确关系或条件：必须声明非惯性参考系，只处理平动随动系"
          },
          {
            "option": "模型判断：给惯性力找施力者",
            "wrongObjectOrForces": "仍取非惯性系与惯性力边界，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：给惯性力找施力者”",
            "wrongResult": "模型判断：给惯性力找施力者",
            "conflict": "该结果不满足正确关系或条件：必须声明非惯性参考系，只处理平动随动系"
          }
        ]
      }
    },
    {
      "id": "M4CD02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": false,
      "text": "参数解N=m(g+a)还必须满足什么条件？",
      "options": [
        "计算结果：只给代数解不写区间",
        "m>0且N≥0",
        "模型判断：保留负接触力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "参数动力学与存在区间",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "m>0且N≥0",
        "constraint": "质量为正且所有单侧约束成立",
        "final": "m>0且N≥0",
        "answerIndex": 1,
        "unique": "只有选项“m>0且N≥0”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：只给代数解不写区间",
            "wrongObjectOrForces": "仍取参数动力学与存在区间，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：只给代数解不写区间”",
            "wrongResult": "计算结果：只给代数解不写区间",
            "conflict": "该结果不满足正确关系或条件：质量为正且所有单侧约束成立"
          },
          {
            "option": "模型判断：保留负接触力",
            "wrongObjectOrForces": "仍取参数动力学与存在区间，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：保留负接触力”",
            "wrongResult": "模型判断：保留负接触力",
            "conflict": "该结果不满足正确关系或条件：质量为正且所有单侧约束成立"
          }
        ]
      }
    },
    {
      "id": "M4CD03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": false,
      "text": "线性阻力下速度增大时加速度为何减小？",
      "options": [
        "计算结果：把阻力当恒力",
        "模型判断：认为终端速度时重力消失",
        "kv增大使mg-kv减小"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "速度阻力与终端速度",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "kv增大使mg-kv减小",
        "constraint": "下落取正，k恒定且模型只在给定速度范围内",
        "final": "kv增大使mg-kv减小",
        "answerIndex": 2,
        "unique": "只有选项“kv增大使mg-kv减小”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把阻力当恒力",
            "wrongObjectOrForces": "仍取速度阻力与终端速度，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把阻力当恒力”",
            "wrongResult": "计算结果：把阻力当恒力",
            "conflict": "该结果不满足正确关系或条件：下落取正，k恒定且模型只在给定速度范围内"
          },
          {
            "option": "模型判断：认为终端速度时重力消失",
            "wrongObjectOrForces": "仍取速度阻力与终端速度，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为终端速度时重力消失”",
            "wrongResult": "模型判断：认为终端速度时重力消失",
            "conflict": "该结果不满足正确关系或条件：下落取正，k恒定且模型只在给定速度范围内"
          }
        ]
      }
    },
    {
      "id": "M4CD04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": false,
      "text": "喷气火箭建模为何先声明系统边界？",
      "options": [
        "跨边界质量携带动量",
        "模型判断：未计入推力项",
        "模型判断：把质量变化本身当外力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "变质量系统与动量流",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "跨边界质量携带动量",
        "constraint": "声明控制体、相对喷射速度和质量变化率符号",
        "final": "跨边界质量携带动量",
        "answerIndex": 0,
        "unique": "只有选项“跨边界质量携带动量”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：未计入推力项",
            "wrongObjectOrForces": "仍取变质量系统与动量流，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未计入推力项”",
            "wrongResult": "模型判断：未计入推力项",
            "conflict": "该结果不满足正确关系或条件：声明控制体、相对喷射速度和质量变化率符号"
          },
          {
            "option": "模型判断：把质量变化本身当外力",
            "wrongObjectOrForces": "仍取变质量系统与动量流，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把质量变化本身当外力”",
            "wrongResult": "模型判断：把质量变化本身当外力",
            "conflict": "该结果不满足正确关系或条件：声明控制体、相对喷射速度和质量变化率符号"
          }
        ]
      }
    },
    {
      "id": "M4CD05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": false,
      "text": "dv/dt=4-2v左边表示什么物理量？",
      "options": [
        "计算结果：把dv/dt当速度",
        "速度对时间的瞬时变化率",
        "模型判断：未计入非齐次驱动力"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "一阶动力学微分方程",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "速度对时间的瞬时变化率",
        "constraint": "质量恒定、惯性系、给定力模型区间与初值",
        "final": "速度对时间的瞬时变化率",
        "answerIndex": 1,
        "unique": "只有选项“速度对时间的瞬时变化率”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把dv/dt当速度",
            "wrongObjectOrForces": "仍取一阶动力学微分方程，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把dv/dt当速度”",
            "wrongResult": "计算结果：把dv/dt当速度",
            "conflict": "该结果不满足正确关系或条件：质量恒定、惯性系、给定力模型区间与初值"
          },
          {
            "option": "模型判断：未计入非齐次驱动力",
            "wrongObjectOrForces": "仍取一阶动力学微分方程，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未计入非齐次驱动力”",
            "wrongResult": "模型判断：未计入非齐次驱动力",
            "conflict": "该结果不满足正确关系或条件：质量恒定、惯性系、给定力模型区间与初值"
          }
        ]
      }
    },
    {
      "id": "M4CD06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": false,
      "text": "欧拉更新式为什么不能未计入Δt？",
      "options": [
        "计算结果：更新漏乘Δt",
        "模型判断：用一次大步宣称模型正确",
        "aΔt才是速度增量"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "欧拉法数值动力学",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "aΔt才是速度增量",
        "constraint": "每步用当前状态算力，Δt单位为s且足够小",
        "final": "aΔt才是速度增量",
        "answerIndex": 2,
        "unique": "只有选项“aΔt才是速度增量”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：更新漏乘Δt",
            "wrongObjectOrForces": "仍取欧拉法数值动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：更新漏乘Δt”",
            "wrongResult": "计算结果：更新漏乘Δt",
            "conflict": "该结果不满足正确关系或条件：每步用当前状态算力，Δt单位为s且足够小"
          },
          {
            "option": "模型判断：用一次大步宣称模型正确",
            "wrongObjectOrForces": "仍取欧拉法数值动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：用一次大步宣称模型正确”",
            "wrongResult": "模型判断：用一次大步宣称模型正确",
            "conflict": "该结果不满足正确关系或条件：每步用当前状态算力，Δt单位为s且足够小"
          }
        ]
      }
    }
  ]
});
