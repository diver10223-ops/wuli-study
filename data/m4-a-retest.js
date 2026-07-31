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
        "相对舱静止所以惯性为零",
        "失重使质量和惯性同时消失"
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
        "object": "太空舱中关闭发动机的工具箱仍受重力但相对舱静止",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定”",
        "substitution": "本题为判别题，不作数值代入；使用判据“工具箱仍有惯性，惯性由质量决定”",
        "candidate": "工具箱仍有惯性，惯性由质量决定",
        "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
        "final": "工具箱仍有惯性，惯性由质量决定",
        "answerIndex": 0,
        "unique": "由本题关系“太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定””只能得到“工具箱仍有惯性，惯性由质量决定”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "相对舱静止所以惯性为零",
            "wrongObjectOrForces": "以太空舱中关闭发动机的工具箱仍受重力但相对舱静止为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "相对舱静止所以惯性为零",
            "conflict": "题干应使用“太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定””，由此得到“工具箱仍有惯性，惯性由质量决定”；错误结果“相对舱静止所以惯性为零”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“相对舱静止所以惯性为零”所表达的状态作为判定结果，而未检验宏观低速物体、地面近似惯性系且合外力为零及方程“太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定””。"
          },
          {
            "option": "失重使质量和惯性同时消失",
            "wrongObjectOrForces": "以太空舱中关闭发动机的工具箱仍受重力但相对舱静止为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "失重使质量和惯性同时消失",
            "conflict": "题干应使用“太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定””，由此得到“工具箱仍有惯性，惯性由质量决定”；错误结果“失重使质量和惯性同时消失”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“失重使质量和惯性同时消失”所表达的状态作为判定结果，而未检验宏观低速物体、地面近似惯性系且合外力为零及方程“太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定””。"
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
        "必须等球停下后才有向左加速度",
        "加速度立即向左，速度可暂时仍向右",
        "加速度因速度向右而向右"
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
          "resistance",
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
        "object": "向右运动的球受恒定向左合力",
        "frame": "地面近似惯性参考系",
        "forces": [
          "水平外加力",
          "水平阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右”",
        "substitution": "本题为判别题，不作数值代入；使用判据“加速度立即向左，速度可暂时仍向右”",
        "candidate": "加速度立即向左，速度可暂时仍向右",
        "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
        "final": "加速度立即向左，速度可暂时仍向右",
        "answerIndex": 1,
        "unique": "由本题关系“向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右””只能得到“加速度立即向左，速度可暂时仍向右”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "必须等球停下后才有向左加速度",
            "wrongObjectOrForces": "以向右运动的球受恒定向左合力为研究对象，但错误模型未按水平外加力、水平阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "必须等球停下后才有向左加速度",
            "conflict": "题干应使用“向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右””，由此得到“加速度立即向左，速度可暂时仍向右”；错误结果“必须等球停下后才有向左加速度”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“必须等球停下后才有向左加速度”所表达的状态作为判定结果，而未检验质量不变、宏观低速、惯性参考系，分量力属于同一对象及方程“向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右””。"
          },
          {
            "option": "加速度因速度向右而向右",
            "wrongObjectOrForces": "以向右运动的球受恒定向左合力为研究对象，但错误模型未按水平外加力、水平阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "加速度因速度向右而向右",
            "conflict": "题干应使用“向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右””，由此得到“加速度立即向左，速度可暂时仍向右”；错误结果“加速度因速度向右而向右”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“加速度因速度向右而向右”所表达的状态作为判定结果，而未检验质量不变、宏观低速、惯性参考系，分量力属于同一对象及方程“向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右””。"
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
        "1000 N",
        "0.0625 N",
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
          "resultant",
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
        "object": "一力使250 g物体产生4.0 m/s²加速度",
        "frame": "地面近似惯性参考系",
        "forces": [
          "题设合外力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N”",
        "substitution": "一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N”",
        "candidate": "1.0 N",
        "constraint": "代入前统一国际单位，等式两边量纲一致",
        "final": "1.0 N",
        "answerIndex": 2,
        "unique": "由本题关系“一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N””只能得到“1.0 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "1000 N",
            "wrongObjectOrForces": "以一力使250 g物体产生4.0 m/s²加速度为研究对象，但错误模型未按题设合外力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "1000 N",
            "conflict": "题干应使用“一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N””，由此得到“1.0 N”；错误结果“1000 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=1000 N",
            "wrongSubstitution": "把本题数值250、4.0、250、4.0、1.0按该错误关系计算：X=1000 N"
          },
          {
            "option": "0.0625 N",
            "wrongObjectOrForces": "以一力使250 g物体产生4.0 m/s²加速度为研究对象，但错误模型未按题设合外力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "0.0625 N",
            "conflict": "题干应使用“一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N””，由此得到“1.0 N”；错误结果“0.0625 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=0.0625 N",
            "wrongSubstitution": "把本题数值250、4.0、250、4.0、1.0按该错误关系计算：X=0.0625 N"
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
        "5.0 m/s",
        "7.0 m/s"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "3.0 kg箱受右15 N拉力、左6 N摩擦",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s”",
        "substitution": "3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s”",
        "candidate": "3.0 m/s",
        "constraint": "单对象、分段内合力恒定、地面惯性系",
        "final": "3.0 m/s",
        "answerIndex": 0,
        "unique": "由本题关系“3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s””只能得到“3.0 m/s”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "5.0 m/s",
            "wrongObjectOrForces": "以3.0 kg箱受右15 N拉力、左6 N摩擦为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "5.0 m/s",
            "conflict": "题干应使用“3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s””，由此得到“3.0 m/s”；错误结果“5.0 m/s”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=5.0 m/s",
            "wrongSubstitution": "把本题数值3.0、15、6、1.0、3.0、15按该错误关系计算：X=5.0 m/s"
          },
          {
            "option": "7.0 m/s",
            "wrongObjectOrForces": "以3.0 kg箱受右15 N拉力、左6 N摩擦为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "7.0 m/s",
            "conflict": "题干应使用“3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s””，由此得到“3.0 m/s”；错误结果“7.0 m/s”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=7.0 m/s",
            "wrongSubstitution": "把本题数值3.0、15、6、1.0、3.0、15按该错误关系计算：X=7.0 m/s"
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
        "3.0 N",
        "4.0 N",
        "2.0 N"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "迁移",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2.0 kg小车向右加速度1.5 m/s²",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N”",
        "substitution": "2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N”",
        "candidate": "4.0 N",
        "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
        "final": "4.0 N",
        "answerIndex": 1,
        "unique": "由本题关系“2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N””只能得到“4.0 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "3.0 N",
            "wrongObjectOrForces": "以2.0 kg小车向右加速度1.5 m/s²为研究对象，但错误模型未按拉力、阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "3.0 N",
            "conflict": "题干应使用“2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N””，由此得到“4.0 N”；错误结果“3.0 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=3.0 N",
            "wrongSubstitution": "把本题数值2.0、1.5、1.0、2.0、1.5、1.0按该错误关系计算：X=3.0 N"
          },
          {
            "option": "2.0 N",
            "wrongObjectOrForces": "以2.0 kg小车向右加速度1.5 m/s²为研究对象，但错误模型未按拉力、阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "2.0 N",
            "conflict": "题干应使用“2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N””，由此得到“4.0 N”；错误结果“2.0 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=2.0 N",
            "wrongSubstitution": "把本题数值2.0、1.5、1.0、2.0、1.5、1.0按该错误关系计算：X=2.0 N"
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
        "450 N",
        "500 N",
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
        "object": "电梯向下运动却以1.0 m/s²减速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N”",
        "substitution": "电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N”",
        "candidate": "550 N",
        "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
        "final": "550 N",
        "answerIndex": 2,
        "unique": "由本题关系“电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N””只能得到“550 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "450 N",
            "wrongObjectOrForces": "以电梯向下运动却以1.0 m/s²减速为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "450 N",
            "conflict": "题干应使用“电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N””，由此得到“550 N”；错误结果“450 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=450 N",
            "wrongSubstitution": "把本题数值1.0、50、1.0、50、550按该错误关系计算：X=450 N"
          },
          {
            "option": "500 N",
            "wrongObjectOrForces": "以电梯向下运动却以1.0 m/s²减速为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "500 N",
            "conflict": "题干应使用“电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N””，由此得到“550 N”；错误结果“500 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=500 N",
            "wrongSubstitution": "把本题数值1.0、50、1.0、50、550按该错误关系计算：X=500 N"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
