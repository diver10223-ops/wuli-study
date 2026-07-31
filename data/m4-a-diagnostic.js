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
            "wrongObjectOrForces": "以质量相同而速度不同的两车为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "匀速时不受力",
            "conflict": "题干应使用“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””，由此得到“相同，惯性只由质量决定”；错误结果“匀速时不受力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“匀速时不受力”所表达的状态作为判定结果，而未检验宏观低速物体、地面近似惯性系且合外力为零及方程“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””。"
          },
          {
            "option": "速度等于惯性大小",
            "wrongObjectOrForces": "以质量相同而速度不同的两车为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "速度等于惯性大小",
            "conflict": "题干应使用“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””，由此得到“相同，惯性只由质量决定”；错误结果“速度等于惯性大小”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“速度等于惯性大小”所表达的状态作为判定结果，而未检验宏观低速物体、地面近似惯性系且合外力为零及方程“质量相同而速度不同的两车，惯性如何比较；正确判据为“相同，惯性只由质量决定””。"
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
        "加速度向右",
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
            "option": "加速度向右",
            "wrongObjectOrForces": "以向右运动的小车正在减速为研究对象，但错误模型未按水平外加力、水平阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "加速度向右",
            "conflict": "题干应使用“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””，由此得到“向左”；错误结果“加速度向右”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“加速度向右”所表达的状态作为判定结果，而未检验质量不变、宏观低速、惯性参考系，分量力属于同一对象及方程“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””。"
          },
          {
            "option": "由速度方向决定加速度方向",
            "wrongObjectOrForces": "以向右运动的小车正在减速为研究对象，但错误模型未按水平外加力、水平阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "由速度方向决定加速度方向",
            "conflict": "题干应使用“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””，由此得到“向左”；错误结果“由速度方向决定加速度方向”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“由速度方向决定加速度方向”所表达的状态作为判定结果，而未检验质量不变、宏观低速、惯性参考系，分量力属于同一对象及方程“向右运动的小车正在减速，加速度指向哪边；正确判据为“向左””。"
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
        "500 m/s²",
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
            "wrongObjectOrForces": "以500 g质量代入F=ma前应写成多少为研究对象，但错误模型未按题设合外力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "2 kg为2 N",
            "conflict": "题干应使用“500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg””，由此得到“0.500 kg”；错误结果“2 kg为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=2 kg为2 N",
            "wrongSubstitution": "把本题数值500、500、0.500按该错误关系计算：X=2 kg为2 N"
          },
          {
            "option": "500 m/s²",
            "wrongObjectOrForces": "以500 g质量代入F=ma前应写成多少为研究对象，但错误模型未按题设合外力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "500 m/s²",
            "conflict": "题干应使用“500 g质量代入F=ma前应写成多少；正确判据为“0.500 kg””，由此得到“0.500 kg”；错误结果“500 m/s²”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=500 m/s²",
            "wrongSubstitution": "把本题数值500、500、0.500按该错误关系计算：X=500 m/s²"
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
        "速度增加10 m/s",
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
            "option": "速度增加10 m/s",
            "wrongObjectOrForces": "以已知拉力和摩擦力为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "速度增加10 m/s",
            "conflict": "题干应使用“已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力””，由此得到“同一物体的合力”；错误结果“速度增加10 m/s”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=速度增加10 m/s",
            "wrongSubstitution": "把本题数值0按该错误关系计算：X=速度增加10 m/s"
          },
          {
            "option": "拉力等于合力",
            "wrongObjectOrForces": "以已知拉力和摩擦力为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "拉力等于合力",
            "conflict": "题干应使用“已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力””，由此得到“同一物体的合力”；错误结果“拉力等于合力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“拉力等于合力”所表达的状态作为判定结果，而未检验单对象、分段内合力恒定、地面惯性系及方程“已知拉力和摩擦力，求加速度前先求什么；正确判据为“同一物体的合力””。"
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
        "拉力为13 N",
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
            "option": "拉力为13 N",
            "wrongObjectOrForces": "以从v-t图反推力时先由图线读取什么为研究对象，但错误模型未按拉力、阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "拉力为13 N",
            "conflict": "题干应使用“从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度””，由此得到“斜率给出的加速度”；错误结果“拉力为13 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=拉力为13 N",
            "wrongSubstitution": "把本题数值0按该错误关系计算：X=拉力为13 N"
          },
          {
            "option": "合力等于未知拉力",
            "wrongObjectOrForces": "以从v-t图反推力时先由图线读取什么为研究对象，但错误模型未按拉力、阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "合力等于未知拉力",
            "conflict": "题干应使用“从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度””，由此得到“斜率给出的加速度”；错误结果“合力等于未知拉力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“合力等于未知拉力”所表达的状态作为判定结果，而未检验运动数据和动力学方程对应同一对象、时段和方向及方程“从v-t图反推力时先由图线读取什么；正确判据为“斜率给出的加速度””。"
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
            "wrongObjectOrForces": "以电梯向上运动但减速为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "用速度方向判断超失重",
            "conflict": "题干应使用“电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下””，由此得到“向下”；错误结果“用速度方向判断超失重”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“用速度方向判断超失重”所表达的状态作为判定结果，而未检验地面惯性系、人与秤共同加速并保持接触，g=10 m/s²及方程“电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下””。"
          },
          {
            "option": "失重时重力消失",
            "wrongObjectOrForces": "以电梯向上运动但减速为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "失重时重力消失",
            "conflict": "题干应使用“电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下””，由此得到“向下”；错误结果“失重时重力消失”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“失重时重力消失”所表达的状态作为判定结果，而未检验地面惯性系、人与秤共同加速并保持接触，g=10 m/s²及方程“电梯向上运动但减速，乘客加速度指向何方；正确判据为“向下””。"
          }
        ]
      }
    }
  ]
});
