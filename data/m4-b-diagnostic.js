window.M4BDiagnostic=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-diagnostic-v1",
  "passCorrect": 5,
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-exam-v1",
      "label": "前轨正式卷未通过"
    }
  ],
  "passTitle": "B轨诊断通过",
  "failTitle": "需回补前置",
  "initialPlan": "提交后生成节点路线。",
  "passPlan": "进入知识学习。",
  "failPlan": "返回失败节点。",
  "questions": [
    {
      "id": "M4BD01",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "核心边界",
      "novel": false,
      "text": "求两物块共同加速度，先选什么研究对象可消去内力？",
      "options": [
        "两物块整体",
        "模型判断：把内力列入整体式",
        "模型判断：求内力时不隔离"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "先备",
      "constraint": "物体保持共同加速度；整体只列外力",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "整体法与隔离法",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "两物块整体",
        "constraint": "物体保持共同加速度；整体只列外力",
        "final": "两物块整体",
        "answerIndex": 0,
        "unique": "只有选项“两物块整体”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：把内力列入整体式",
            "wrongObjectOrForces": "仍取整体法与隔离法，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把内力列入整体式”",
            "wrongResult": "模型判断：把内力列入整体式",
            "conflict": "该结果不满足正确关系或条件：物体保持共同加速度；整体只列外力"
          },
          {
            "option": "模型判断：求内力时不隔离",
            "wrongObjectOrForces": "仍取整体法与隔离法，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：求内力时不隔离”",
            "wrongResult": "模型判断：求内力时不隔离",
            "conflict": "该结果不满足正确关系或条件：物体保持共同加速度；整体只列外力"
          }
        ]
      }
    },
    {
      "id": "M4BD02",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": false,
      "text": "轻绳模型算得T=-2 N应怎样处理？",
      "options": [
        "计算结果：保留负张力",
        "判绳松弛并切换模型",
        "模型判断：把弹簧两端加速度强制相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "先备",
      "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "轻绳轻杆弹簧约束",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "判绳松弛并切换模型",
        "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
        "final": "判绳松弛并切换模型",
        "answerIndex": 1,
        "unique": "只有选项“判绳松弛并切换模型”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：保留负张力",
            "wrongObjectOrForces": "仍取轻绳轻杆弹簧约束，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：保留负张力”",
            "wrongResult": "计算结果：保留负张力",
            "conflict": "该结果不满足正确关系或条件：绳张紧、杆不伸长、弹簧在弹性限度内"
          },
          {
            "option": "模型判断：把弹簧两端加速度强制相同",
            "wrongObjectOrForces": "仍取轻绳轻杆弹簧约束，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把弹簧两端加速度强制相同”",
            "wrongResult": "模型判断：把弹簧两端加速度强制相同",
            "conflict": "该结果不满足正确关系或条件：绳张紧、杆不伸长、弹簧在弹性限度内"
          }
        ]
      }
    },
    {
      "id": "M4BD03",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": false,
      "text": "单侧接触算得N<0应怎样处理？",
      "options": [
        "计算结果：保留负支持力",
        "模型判断：认为N=0时重力消失",
        "舍弃候选并切换为分离模型"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "先备",
      "constraint": "接触面只推不拉，候选N<0必须舍弃",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "临界分离与接触切换",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "舍弃候选并切换为分离模型",
        "constraint": "接触面只推不拉，候选N<0必须舍弃",
        "final": "舍弃候选并切换为分离模型",
        "answerIndex": 2,
        "unique": "只有选项“舍弃候选并切换为分离模型”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：保留负支持力",
            "wrongObjectOrForces": "仍取临界分离与接触切换，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：保留负支持力”",
            "wrongResult": "计算结果：保留负支持力",
            "conflict": "该结果不满足正确关系或条件：接触面只推不拉，候选N<0必须舍弃"
          },
          {
            "option": "模型判断：认为N=0时重力消失",
            "wrongObjectOrForces": "仍取临界分离与接触切换，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为N=0时重力消失”",
            "wrongResult": "模型判断：认为N=0时重力消失",
            "conflict": "该结果不满足正确关系或条件：接触面只推不拉，候选N<0必须舍弃"
          }
        ]
      }
    },
    {
      "id": "M4BD04",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": false,
      "text": "判定箱子能否随车共同运动要比较哪两个量？",
      "options": [
        "所需静摩擦与最大静摩擦",
        "模型判断：未达上限就写f=μsN",
        "模型判断：滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "先备",
      "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "临界滑动与静摩擦需求",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "所需静摩擦与最大静摩擦",
        "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
        "final": "所需静摩擦与最大静摩擦",
        "answerIndex": 0,
        "unique": "只有选项“所需静摩擦与最大静摩擦”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：未达上限就写f=μsN",
            "wrongObjectOrForces": "仍取临界滑动与静摩擦需求，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未达上限就写f=μsN”",
            "wrongResult": "模型判断：未达上限就写f=μsN",
            "conflict": "该结果不满足正确关系或条件：未滑时|f需求|≤μsN，滑动后用μkN"
          },
          {
            "option": "模型判断：滑后仍用静摩擦",
            "wrongObjectOrForces": "仍取临界滑动与静摩擦需求，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：滑后仍用静摩擦”",
            "wrongResult": "模型判断：滑后仍用静摩擦",
            "conflict": "该结果不满足正确关系或条件：未滑时|f需求|≤μsN，滑动后用μkN"
          }
        ]
      }
    },
    {
      "id": "M4BD05",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": false,
      "text": "包裹比传送带慢时摩擦方向依据什么？",
      "options": [
        "计算结果：只看对地速度定摩擦",
        "相对运动或趋势",
        "模型判断：忽略达到带速后的切换"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "先备",
      "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "传送带板块分段动力学",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "相对运动或趋势",
        "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
        "final": "相对运动或趋势",
        "answerIndex": 1,
        "unique": "只有选项“相对运动或趋势”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：只看对地速度定摩擦",
            "wrongObjectOrForces": "仍取传送带板块分段动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：只看对地速度定摩擦”",
            "wrongResult": "计算结果：只看对地速度定摩擦",
            "conflict": "该结果不满足正确关系或条件：每段相对速度符号固定，切换时刻由速度相等或越界确定"
          },
          {
            "option": "模型判断：忽略达到带速后的切换",
            "wrongObjectOrForces": "仍取传送带板块分段动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：忽略达到带速后的切换”",
            "wrongResult": "模型判断：忽略达到带速后的切换",
            "conflict": "该结果不满足正确关系或条件：每段相对速度符号固定，切换时刻由速度相等或越界确定"
          }
        ]
      }
    },
    {
      "id": "M4BD06",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": false,
      "text": "a-F图不过原点，哪项系统误差可以被检验？",
      "options": [
        "计算结果：把平衡摩擦说成消除摩擦",
        "模型判断：把截距都当随机误差",
        "残余摩擦或未计系统质量"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "先备",
      "constraint": "控制质量或合力，拟合数据对应同一系统边界",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 2
      },
      "review": {
        "object": "动力学实验图像与误差",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "残余摩擦或未计系统质量",
        "constraint": "控制质量或合力，拟合数据对应同一系统边界",
        "final": "残余摩擦或未计系统质量",
        "answerIndex": 2,
        "unique": "只有选项“残余摩擦或未计系统质量”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把平衡摩擦说成消除摩擦",
            "wrongObjectOrForces": "仍取动力学实验图像与误差，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把平衡摩擦说成消除摩擦”",
            "wrongResult": "计算结果：把平衡摩擦说成消除摩擦",
            "conflict": "该结果不满足正确关系或条件：控制质量或合力，拟合数据对应同一系统边界"
          },
          {
            "option": "模型判断：把截距都当随机误差",
            "wrongObjectOrForces": "仍取动力学实验图像与误差，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把截距都当随机误差”",
            "wrongResult": "模型判断：把截距都当随机误差",
            "conflict": "该结果不满足正确关系或条件：控制质量或合力，拟合数据对应同一系统边界"
          }
        ]
      }
    }
  ]
});
