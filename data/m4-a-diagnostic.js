window.M4ADiagnostic=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "A",
  "storageKey": "physics-mechanics-m4-a-diagnostic-v1",
  "passCorrect": 5,
  "prerequisites": [],
  "passTitle": "A轨诊断通过",
  "failTitle": "需回补前置",
  "initialPlan": "提交后生成节点路线。",
  "passPlan": "进入知识学习。",
  "failPlan": "返回失败节点。",
  "questions": [
    {
      "id": "M4AD01",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": false,
      "text": "质量相同而速度不同的两车，惯性如何比较？",
      "options": [
        "相同，惯性只由质量决定",
        "模型判断：把匀速说成不受力",
        "模型判断：把速度当作惯性大小"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "先备",
      "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
      "structure": {
        "objectType": "single-body",
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
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "牛顿第一定律、惯性与惯性系",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "相同，惯性只由质量决定",
        "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
        "final": "相同，惯性只由质量决定",
        "answerIndex": 0,
        "unique": "只有选项“相同，惯性只由质量决定”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：把匀速说成不受力",
            "wrongObjectOrForces": "仍取牛顿第一定律、惯性与惯性系，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把匀速说成不受力”",
            "wrongResult": "模型判断：把匀速说成不受力",
            "conflict": "该结果不满足正确关系或条件：宏观低速物体、地面近似惯性系且合外力为零"
          },
          {
            "option": "模型判断：把速度当作惯性大小",
            "wrongObjectOrForces": "仍取牛顿第一定律、惯性与惯性系，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把速度当作惯性大小”",
            "wrongResult": "模型判断：把速度当作惯性大小",
            "conflict": "该结果不满足正确关系或条件：宏观低速物体、地面近似惯性系且合外力为零"
          }
        ]
      }
    },
    {
      "id": "M4AD02",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": false,
      "text": "向右运动的小车正在减速，加速度指向哪边？",
      "options": [
        "计算结果：把某个拉力直接当合力",
        "向左",
        "模型判断：由速度方向决定加速度方向"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "先备",
      "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
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
        "object": "牛顿第二定律三性",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "向左",
        "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
        "final": "向左",
        "answerIndex": 1,
        "unique": "只有选项“向左”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把某个拉力直接当合力",
            "wrongObjectOrForces": "仍取牛顿第二定律三性，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把某个拉力直接当合力”",
            "wrongResult": "计算结果：把某个拉力直接当合力",
            "conflict": "该结果不满足正确关系或条件：质量不变、宏观低速、惯性参考系，分量力属于同一对象"
          },
          {
            "option": "模型判断：由速度方向决定加速度方向",
            "wrongObjectOrForces": "仍取牛顿第二定律三性，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：由速度方向决定加速度方向”",
            "wrongResult": "模型判断：由速度方向决定加速度方向",
            "conflict": "该结果不满足正确关系或条件：质量不变、宏观低速、惯性参考系，分量力属于同一对象"
          }
        ]
      }
    },
    {
      "id": "M4AD03",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": false,
      "text": "500 g质量代入F=ma前应写成多少？",
      "options": [
        "计算结果：把2 kg写成2 N",
        "模型判断：把克直接代入F=ma",
        "0.500 kg"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "先备",
      "constraint": "代入前统一国际单位，等式两边量纲一致",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
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
        "object": "国际单位制与量纲",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "0.500 kg",
        "constraint": "代入前统一国际单位，等式两边量纲一致",
        "final": "0.500 kg",
        "answerIndex": 2,
        "unique": "只有选项“0.500 kg”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把2 kg写成2 N",
            "wrongObjectOrForces": "仍取国际单位制与量纲，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把2 kg写成2 N”",
            "wrongResult": "计算结果：把2 kg写成2 N",
            "conflict": "该结果不满足正确关系或条件：代入前统一国际单位，等式两边量纲一致"
          },
          {
            "option": "模型判断：把克直接代入F=ma",
            "wrongObjectOrForces": "仍取国际单位制与量纲，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把克直接代入F=ma”",
            "wrongResult": "模型判断：把克直接代入F=ma",
            "conflict": "该结果不满足正确关系或条件：代入前统一国际单位，等式两边量纲一致"
          }
        ]
      }
    },
    {
      "id": "M4AD04",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": false,
      "text": "已知拉力和摩擦力，求加速度前先求什么？",
      "options": [
        "同一物体的合力",
        "模型判断：漏摩擦",
        "模型判断：把拉力直接当合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "先备",
      "constraint": "单对象、分段内合力恒定、地面惯性系",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
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
        "object": "已知受力求运动",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "同一物体的合力",
        "constraint": "单对象、分段内合力恒定、地面惯性系",
        "final": "同一物体的合力",
        "answerIndex": 0,
        "unique": "只有选项“同一物体的合力”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：漏摩擦",
            "wrongObjectOrForces": "仍取已知受力求运动，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：漏摩擦”",
            "wrongResult": "模型判断：漏摩擦",
            "conflict": "该结果不满足正确关系或条件：单对象、分段内合力恒定、地面惯性系"
          },
          {
            "option": "模型判断：把拉力直接当合力",
            "wrongObjectOrForces": "仍取已知受力求运动，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把拉力直接当合力”",
            "wrongResult": "模型判断：把拉力直接当合力",
            "conflict": "该结果不满足正确关系或条件：单对象、分段内合力恒定、地面惯性系"
          }
        ]
      }
    },
    {
      "id": "M4AD05",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": false,
      "text": "从v-t图反推力时先由图线读取什么？",
      "options": [
        "计算结果：把速度当加速度",
        "斜率给出的加速度",
        "模型判断：把合力误当未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "先备",
      "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
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
        "object": "已知运动反推受力",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "斜率给出的加速度",
        "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
        "final": "斜率给出的加速度",
        "answerIndex": 1,
        "unique": "只有选项“斜率给出的加速度”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把速度当加速度",
            "wrongObjectOrForces": "仍取已知运动反推受力，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把速度当加速度”",
            "wrongResult": "计算结果：把速度当加速度",
            "conflict": "该结果不满足正确关系或条件：运动数据和动力学方程对应同一对象、时段和方向"
          },
          {
            "option": "模型判断：把合力误当未知拉力",
            "wrongObjectOrForces": "仍取已知运动反推受力，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把合力误当未知拉力”",
            "wrongResult": "模型判断：把合力误当未知拉力",
            "conflict": "该结果不满足正确关系或条件：运动数据和动力学方程对应同一对象、时段和方向"
          }
        ]
      }
    },
    {
      "id": "M4AD06",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": false,
      "text": "电梯向上运动但减速，乘客加速度指向何方？",
      "options": [
        "计算结果：用速度方向判断超失重",
        "模型判断：认为失重时重力消失",
        "向下"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "先备",
      "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
      "structure": {
        "objectType": "single-body",
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
        "object": "超重失重与测力实验",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先备能力判断",
        "substitution": "先备能力判断",
        "candidate": "向下",
        "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
        "final": "向下",
        "answerIndex": 2,
        "unique": "只有选项“向下”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：用速度方向判断超失重",
            "wrongObjectOrForces": "仍取超重失重与测力实验，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：用速度方向判断超失重”",
            "wrongResult": "计算结果：用速度方向判断超失重",
            "conflict": "该结果不满足正确关系或条件：地面惯性系、人与秤共同加速并保持接触，g=10 m/s²"
          },
          {
            "option": "模型判断：认为失重时重力消失",
            "wrongObjectOrForces": "仍取超重失重与测力实验，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先备能力判断”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为失重时重力消失”",
            "wrongResult": "模型判断：认为失重时重力消失",
            "conflict": "该结果不满足正确关系或条件：地面惯性系、人与秤共同加速并保持接触，g=10 m/s²"
          }
        ]
      }
    }
  ]
});
