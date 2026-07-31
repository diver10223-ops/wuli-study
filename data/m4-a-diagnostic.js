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
        "匀速时不受力",
        "速度等于惯性大小"
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
        "object": "质量相同而速度不同的两车",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定”",
        "substitution": "本题为判别题，不作数值代入；使用判据“相同，惯性只由质量决定”",
        "candidate": "相同，惯性只由质量决定",
        "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
        "final": "相同，惯性只由质量决定",
        "answerIndex": 0,
        "unique": "由本题关系“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””只能得到“相同，惯性只由质量决定”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "匀速时不受力",
            "wrongObjectOrForces": "研究对象仍为质量相同而速度不同的两车；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "匀速时不受力",
            "conflict": "“匀速时不受力”与本题正确关系“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””冲突；满足题设的结果是“相同，惯性只由质量决定”。",
            "wrongCriterion": "采用判据“匀速时不受力”而非本题判据“相同，惯性只由质量决定”"
          },
          {
            "option": "速度等于惯性大小",
            "wrongObjectOrForces": "研究对象仍为质量相同而速度不同的两车；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度等于惯性大小",
            "conflict": "“速度等于惯性大小”与本题正确关系“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””冲突；满足题设的结果是“相同，惯性只由质量决定”。",
            "wrongEquation": "按选项建立关系“速度等于惯性大小”；该式取代了本题关系“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””",
            "wrongSubstitution": "在“质量相同而速度不同的两车，惯性如何比较？”给定条件下，将本题给定量代入该关系后得到“速度等于惯性大小”"
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
        "某个拉力等于合力",
        "向左",
        "由速度方向决定加速度方向"
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
          "resistance",
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
        "object": "向右运动的小车正在减速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "水平外加力",
          "水平阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "向右运动的小车正在减速，加速度指向哪边；正确判据为“向左”",
        "substitution": "本题为判别题，不作数值代入；使用判据“向左”",
        "candidate": "向左",
        "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
        "final": "向左",
        "answerIndex": 1,
        "unique": "由本题关系“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””只能得到“向左”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "某个拉力等于合力",
            "wrongObjectOrForces": "研究对象仍为向右运动的小车正在减速；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "某个拉力等于合力",
            "conflict": "“某个拉力等于合力”与本题正确关系“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””冲突；满足题设的结果是“向左”。",
            "wrongEquation": "按选项建立关系“某个拉力等于合力”；该式取代了本题关系“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””",
            "wrongSubstitution": "在“向右运动的小车正在减速，加速度指向哪边？”给定条件下，将本题给定量代入该关系后得到“某个拉力等于合力”"
          },
          {
            "option": "由速度方向决定加速度方向",
            "wrongObjectOrForces": "研究对象仍为向右运动的小车正在减速；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "由速度方向决定加速度方向",
            "conflict": "“由速度方向决定加速度方向”与本题正确关系“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””冲突；满足题设的结果是“向左”。",
            "wrongCriterion": "采用判据“由速度方向决定加速度方向”而非本题判据“向左”"
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
        "2 kg为2 N",
        "克直接代入F=ma",
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
          "resultant",
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
        "object": "500 g质量代入F=ma前应写成多少",
        "frame": "地面近似惯性参考系",
        "forces": [
          "题设合外力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg”",
        "substitution": "500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg”",
        "candidate": "0.500 kg",
        "constraint": "代入前统一国际单位，等式两边量纲一致",
        "final": "0.500 kg",
        "answerIndex": 2,
        "unique": "由本题关系“500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg””只能得到“0.500 kg”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "2 kg为2 N",
            "wrongObjectOrForces": "研究对象仍为500 g质量代入F=ma前应写成多少；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "2 kg为2 N",
            "conflict": "“2 kg为2 N”与本题正确关系“500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg””冲突；满足题设的结果是“0.500 kg”。",
            "wrongEquation": "按选项建立关系“2 kg为2 N”；该式取代了本题关系“500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg””",
            "wrongSubstitution": "在“500 g质量代入F=ma前应写成多少？”给定条件下，将本题给定量代入该关系后得到“2 kg为2 N”"
          },
          {
            "option": "克直接代入F=ma",
            "wrongObjectOrForces": "研究对象仍为500 g质量代入F=ma前应写成多少；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "克直接代入F=ma",
            "conflict": "“克直接代入F=ma”与本题正确关系“500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg””冲突；满足题设的结果是“0.500 kg”。",
            "wrongEquation": "按选项建立关系“克直接代入F=ma”；该式取代了本题关系“500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg””",
            "wrongSubstitution": "在“500 g质量代入F=ma前应写成多少？”给定条件下，将本题给定量代入该关系后得到“克直接代入F=ma”"
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
        "漏摩擦",
        "拉力等于合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "先备",
      "constraint": "单对象、分段内合力恒定、地面惯性系",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "tension",
          "friction",
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
        "object": "已知拉力和摩擦力",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力”",
        "substitution": "本题为判别题，不作数值代入；使用判据“同一物体的合力”",
        "candidate": "同一物体的合力",
        "constraint": "单对象、分段内合力恒定、地面惯性系",
        "final": "同一物体的合力",
        "answerIndex": 0,
        "unique": "由本题关系“已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力””只能得到“同一物体的合力”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "漏摩擦",
            "wrongObjectOrForces": "研究对象仍为已知拉力和摩擦力，但方程中漏去摩擦",
            "wrongResult": "漏摩擦",
            "conflict": "“漏摩擦”与本题正确关系“已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力””冲突；满足题设的结果是“同一物体的合力”。",
            "wrongCriterion": "采用判据“漏摩擦”而非本题判据“同一物体的合力”"
          },
          {
            "option": "拉力等于合力",
            "wrongObjectOrForces": "研究对象仍为已知拉力和摩擦力；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "拉力等于合力",
            "conflict": "“拉力等于合力”与本题正确关系“已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力””冲突；满足题设的结果是“同一物体的合力”。",
            "wrongEquation": "按选项建立关系“拉力等于合力”；该式取代了本题关系“已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力””",
            "wrongSubstitution": "在“已知拉力和摩擦力，求加速度前先求什么？”给定条件下，将本题给定量代入该关系后得到“拉力等于合力”"
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
        "速度当加速度",
        "斜率给出的加速度",
        "合力等于未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "先备",
      "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "tension",
          "resistance",
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
        "object": "从v-t图反推力时先由图线读取什么",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度”",
        "substitution": "本题为判别题，不作数值代入；使用判据“斜率给出的加速度”",
        "candidate": "斜率给出的加速度",
        "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
        "final": "斜率给出的加速度",
        "answerIndex": 1,
        "unique": "由本题关系“从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度””只能得到“斜率给出的加速度”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "速度当加速度",
            "wrongObjectOrForces": "研究对象仍为从v-t图反推力时先由图线读取什么；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度当加速度",
            "conflict": "“速度当加速度”与本题正确关系“从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度””冲突；满足题设的结果是“斜率给出的加速度”。",
            "wrongCriterion": "采用判据“速度当加速度”而非本题判据“斜率给出的加速度”"
          },
          {
            "option": "合力等于未知拉力",
            "wrongObjectOrForces": "研究对象仍为从v-t图反推力时先由图线读取什么；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "合力等于未知拉力",
            "conflict": "“合力等于未知拉力”与本题正确关系“从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度””冲突；满足题设的结果是“斜率给出的加速度”。",
            "wrongEquation": "按选项建立关系“合力等于未知拉力”；该式取代了本题关系“从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度””",
            "wrongSubstitution": "在“从v-t图反推力时先由图线读取什么？”给定条件下，将本题给定量代入该关系后得到“合力等于未知拉力”"
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
        "用速度方向判断超失重",
        "失重时重力消失",
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
        "object": "电梯向上运动但减速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下”",
        "substitution": "本题为判别题，不作数值代入；使用判据“向下”",
        "candidate": "向下",
        "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
        "final": "向下",
        "answerIndex": 2,
        "unique": "由本题关系“电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下””只能得到“向下”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "用速度方向判断超失重",
            "wrongObjectOrForces": "研究对象仍为电梯向上运动但减速；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "用速度方向判断超失重",
            "conflict": "“用速度方向判断超失重”与本题正确关系“电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下””冲突；满足题设的结果是“向下”。",
            "wrongCriterion": "采用判据“用速度方向判断超失重”而非本题判据“向下”"
          },
          {
            "option": "失重时重力消失",
            "wrongObjectOrForces": "研究对象仍为电梯向上运动但减速；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "失重时重力消失",
            "conflict": "“失重时重力消失”与本题正确关系“电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下””冲突；满足题设的结果是“向下”。",
            "wrongCriterion": "采用判据“失重时重力消失”而非本题判据“向下”"
          }
        ]
      }
    }
  ]
});
