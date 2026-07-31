window.M4ARetest=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "A",
  "storageKey": "physics-mechanics-m4-a-retest-v1",
  "durationSeconds": 1800,
  "reviewDays": 14,
  "passTitle": "A轨retest通过",
  "failTitle": "A轨retest未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-exam-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 100,
  "questions": [
    {
      "id": "M4AR01",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": true,
      "text": "太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确？",
      "options": [
        "工具箱仍有惯性，惯性由质量决定",
        "模型判断：相对舱静止所以惯性为零",
        "模型判断：失重使质量和惯性同时消失"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "牛顿第一定律、惯性与惯性系",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界",
        "substitution": "太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确？",
        "candidate": "工具箱仍有惯性，惯性由质量决定",
        "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
        "final": "工具箱仍有惯性，惯性由质量决定",
        "answerIndex": 0,
        "unique": "只有选项“工具箱仍有惯性，惯性由质量决定”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：相对舱静止所以惯性为零",
            "wrongObjectOrForces": "仍取牛顿第一定律、惯性与惯性系，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：相对舱静止所以惯性为零”",
            "wrongResult": "模型判断：相对舱静止所以惯性为零",
            "conflict": "该结果不满足正确关系或条件：宏观低速物体、地面近似惯性系且合外力为零"
          },
          {
            "option": "模型判断：失重使质量和惯性同时消失",
            "wrongObjectOrForces": "仍取牛顿第一定律、惯性与惯性系，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：失重使质量和惯性同时消失”",
            "wrongResult": "模型判断：失重使质量和惯性同时消失",
            "conflict": "该结果不满足正确关系或条件：宏观低速物体、地面近似惯性系且合外力为零"
          }
        ]
      }
    },
    {
      "id": "M4AR02",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": true,
      "text": "向右运动的球受恒定向左合力，瞬时加速度怎样？",
      "options": [
        "计算结果：必须等球停下后才有向左加速度",
        "加速度立即向左，速度可暂时仍向右",
        "模型判断：加速度因速度向右而向右"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "牛顿第二定律三性",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界",
        "substitution": "向右运动的球受恒定向左合力，瞬时加速度怎样？",
        "candidate": "加速度立即向左，速度可暂时仍向右",
        "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
        "final": "加速度立即向左，速度可暂时仍向右",
        "answerIndex": 1,
        "unique": "只有选项“加速度立即向左，速度可暂时仍向右”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：必须等球停下后才有向左加速度",
            "wrongObjectOrForces": "仍取牛顿第二定律三性，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：必须等球停下后才有向左加速度”",
            "wrongResult": "计算结果：必须等球停下后才有向左加速度",
            "conflict": "该结果不满足正确关系或条件：质量不变、宏观低速、惯性参考系，分量力属于同一对象"
          },
          {
            "option": "模型判断：加速度因速度向右而向右",
            "wrongObjectOrForces": "仍取牛顿第二定律三性，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：加速度因速度向右而向右”",
            "wrongResult": "模型判断：加速度因速度向右而向右",
            "conflict": "该结果不满足正确关系或条件：质量不变、宏观低速、惯性参考系，分量力属于同一对象"
          }
        ]
      }
    },
    {
      "id": "M4AR03",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": true,
      "text": "一力使250 g物体产生4.0 m/s²加速度，该力应为多少？",
      "options": [
        "计算结果：1000 N",
        "模型判断：0.0625 N",
        "1.0 N"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "国际单位制与量纲",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界",
        "substitution": "一力使250 g物体产生4.0 m/s²加速度，该力应为多少？",
        "candidate": "1.0 N",
        "constraint": "代入前统一国际单位，等式两边量纲一致",
        "final": "1.0 N",
        "answerIndex": 2,
        "unique": "只有选项“1.0 N”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：1000 N",
            "wrongObjectOrForces": "仍取国际单位制与量纲，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：1000 N”",
            "wrongResult": "计算结果：1000 N",
            "conflict": "该结果不满足正确关系或条件：代入前统一国际单位，等式两边量纲一致"
          },
          {
            "option": "模型判断：0.0625 N",
            "wrongObjectOrForces": "仍取国际单位制与量纲，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：0.0625 N”",
            "wrongResult": "模型判断：0.0625 N",
            "conflict": "该结果不满足正确关系或条件：代入前统一国际单位，等式两边量纲一致"
          }
        ]
      }
    },
    {
      "id": "M4AR04",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": true,
      "text": "3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少？",
      "options": [
        "3.0 m/s",
        "模型判断：5.0 m/s",
        "模型判断：7.0 m/s"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "已知受力求运动",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界",
        "substitution": "3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少？",
        "candidate": "3.0 m/s",
        "constraint": "单对象、分段内合力恒定、地面惯性系",
        "final": "3.0 m/s",
        "answerIndex": 0,
        "unique": "只有选项“3.0 m/s”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：5.0 m/s",
            "wrongObjectOrForces": "仍取已知受力求运动，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：5.0 m/s”",
            "wrongResult": "模型判断：5.0 m/s",
            "conflict": "该结果不满足正确关系或条件：单对象、分段内合力恒定、地面惯性系"
          },
          {
            "option": "模型判断：7.0 m/s",
            "wrongObjectOrForces": "仍取已知受力求运动，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：7.0 m/s”",
            "wrongResult": "模型判断：7.0 m/s",
            "conflict": "该结果不满足正确关系或条件：单对象、分段内合力恒定、地面惯性系"
          }
        ]
      }
    },
    {
      "id": "M4AR05",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": true,
      "text": "2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大？",
      "options": [
        "计算结果：3.0 N",
        "4.0 N",
        "模型判断：2.0 N"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "已知运动反推受力",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界",
        "substitution": "2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大？",
        "candidate": "4.0 N",
        "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
        "final": "4.0 N",
        "answerIndex": 1,
        "unique": "只有选项“4.0 N”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：3.0 N",
            "wrongObjectOrForces": "仍取已知运动反推受力，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：3.0 N”",
            "wrongResult": "计算结果：3.0 N",
            "conflict": "该结果不满足正确关系或条件：运动数据和动力学方程对应同一对象、时段和方向"
          },
          {
            "option": "模型判断：2.0 N",
            "wrongObjectOrForces": "仍取已知运动反推受力，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：2.0 N”",
            "wrongResult": "模型判断：2.0 N",
            "conflict": "该结果不满足正确关系或条件：运动数据和动力学方程对应同一对象、时段和方向"
          }
        ]
      }
    },
    {
      "id": "M4AR06",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": true,
      "text": "电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少？",
      "options": [
        "计算结果：450 N",
        "模型判断：500 N",
        "550 N"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "超重失重与测力实验",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界",
        "substitution": "电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少？",
        "candidate": "550 N",
        "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
        "final": "550 N",
        "answerIndex": 2,
        "unique": "只有选项“550 N”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：450 N",
            "wrongObjectOrForces": "仍取超重失重与测力实验，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：450 N”",
            "wrongResult": "计算结果：450 N",
            "conflict": "该结果不满足正确关系或条件：地面惯性系、人与秤共同加速并保持接触，g=10 m/s²"
          },
          {
            "option": "模型判断：500 N",
            "wrongObjectOrForces": "仍取超重失重与测力实验，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“依据题干列出的各力方向作代数和，并令ΣF=ma后检查模型边界”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：500 N”",
            "wrongResult": "模型判断：500 N",
            "conflict": "该结果不满足正确关系或条件：地面惯性系、人与秤共同加速并保持接触，g=10 m/s²"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
