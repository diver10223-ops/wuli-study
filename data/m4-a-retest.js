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
            "wrongObjectOrForces": "误以“相对舱静止所以惯性为零”对应的量为受力结论，因而没有在“太空舱中关闭发动机的工具箱仍受重力但相对舱静止”上同时核对重力、支持力。",
            "wrongResult": "相对舱静止所以惯性为零",
            "conflict": "正确对象“太空舱中关闭发动机的工具箱仍受重力但相对舱静止”在地面近似惯性参考系中应列太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定”；代入为本题为判别题，不作数值代入；使用判据“工具箱仍有惯性，惯性由质量决定”，所以工具箱仍有惯性，惯性由质量决定；这与“相对舱静止所以惯性为零”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“相对舱静止所以惯性为零”的表面状态判定，没有检验宏观低速物体、地面近似惯性系且合外力为零下的按题干所述运动方向取正与太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定”。"
          },
          {
            "option": "失重使质量和惯性同时消失",
            "wrongObjectOrForces": "研究对象虽写成“太空舱中关闭发动机的工具箱仍受重力但相对舱静止”，但由“失重使质量和惯性同时消失”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "失重使质量和惯性同时消失",
            "conflict": "用宏观低速物体、地面近似惯性系且合外力为零检验：正确对象“太空舱中关闭发动机的工具箱仍受重力但相对舱静止”在地面近似惯性参考系中应列太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确；正确判据为“工具箱仍有惯性，惯性由质量决定”；代入为本题为判别题，不作数值代入；使用判据“工具箱仍有惯性，惯性由质量决定”，所以工具箱仍有惯性，惯性由质量决定；因此不能得到“失重使质量和惯性同时消失”。",
            "wrongCriterion": "错误地认为“失重使质量和惯性同时消失”可直接成立，未比较重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“必须等球停下后才有向左加速度”对应的量为受力结论，因而没有在“向右运动的球受恒定向左合力”上同时核对水平外加力、水平阻力、重力、支持力。",
            "wrongResult": "必须等球停下后才有向左加速度",
            "conflict": "正确对象“向右运动的球受恒定向左合力”在地面近似惯性参考系中应列向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右”；代入为本题为判别题，不作数值代入；使用判据“加速度立即向左，速度可暂时仍向右”，所以加速度立即向左，速度可暂时仍向右；这与“必须等球停下后才有向左加速度”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“必须等球停下后才有向左加速度”的表面状态判定，没有检验质量不变、宏观低速、惯性参考系，分量力属于同一对象下的按题干所述运动方向取正与向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右”。"
          },
          {
            "option": "加速度因速度向右而向右",
            "wrongObjectOrForces": "研究对象虽写成“向右运动的球受恒定向左合力”，但由“加速度因速度向右而向右”反推时改变了水平外加力、水平阻力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "加速度因速度向右而向右",
            "conflict": "用质量不变、宏观低速、惯性参考系，分量力属于同一对象检验：正确对象“向右运动的球受恒定向左合力”在地面近似惯性参考系中应列向右运动的球受恒定向左合力，瞬时加速度怎样；正确判据为“加速度立即向左，速度可暂时仍向右”；代入为本题为判别题，不作数值代入；使用判据“加速度立即向左，速度可暂时仍向右”，所以加速度立即向左，速度可暂时仍向右；因此不能得到“加速度因速度向右而向右”。",
            "wrongCriterion": "错误地认为“加速度因速度向右而向右”可直接成立，未比较水平外加力、水平阻力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“1000 N”对应的量为受力结论，因而没有在“一力使250 g物体产生4.0 m/s²加速度”上同时核对题设合外力、重力、支持力。",
            "wrongResult": "1000 N",
            "conflict": "正确对象“一力使250 g物体产生4.0 m/s²加速度”在地面近似惯性参考系中应列一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N”；代入为一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N”，所以1.0 N；这与“1000 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：1000 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=1000÷1 N"
          },
          {
            "option": "0.0625 N",
            "wrongObjectOrForces": "研究对象虽写成“一力使250 g物体产生4.0 m/s²加速度”，但由“0.0625 N”反推时改变了题设合外力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "0.0625 N",
            "conflict": "用代入前统一国际单位，等式两边量纲一致检验：正确对象“一力使250 g物体产生4.0 m/s²加速度”在地面近似惯性参考系中应列一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N”；代入为一力使250 g物体产生4.0 m/s²加速度，该力应为多少；正确判据为“1.0 N”，所以1.0 N；因此不能得到“0.0625 N”。",
            "wrongEquation": "错误物理关系写成：0.0625 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=0.0625÷1 N"
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
            "wrongObjectOrForces": "误以“5.0 m/s”对应的量为受力结论，因而没有在“3.0 kg箱受右15 N拉力、左6 N摩擦”上同时核对拉力、摩擦力、重力、支持力。",
            "wrongResult": "5.0 m/s",
            "conflict": "正确对象“3.0 kg箱受右15 N拉力、左6 N摩擦”在地面近似惯性参考系中应列3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s”；代入为3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s”，所以3.0 m/s；这与“5.0 m/s”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：5.0 m/s",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=5.0 m/s"
          },
          {
            "option": "7.0 m/s",
            "wrongObjectOrForces": "研究对象虽写成“3.0 kg箱受右15 N拉力、左6 N摩擦”，但由“7.0 m/s”反推时改变了拉力、摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "7.0 m/s",
            "conflict": "用单对象、分段内合力恒定、地面惯性系检验：正确对象“3.0 kg箱受右15 N拉力、左6 N摩擦”在地面近似惯性参考系中应列3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s”；代入为3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少；正确判据为“3.0 m/s”，所以3.0 m/s；因此不能得到“7.0 m/s”。",
            "wrongEquation": "错误物理关系写成：7.0 m/s",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=7.0 m/s"
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
            "wrongObjectOrForces": "误以“3.0 N”对应的量为受力结论，因而没有在“2.0 kg小车向右加速度1.5 m/s²”上同时核对拉力、阻力、重力、支持力。",
            "wrongResult": "3.0 N",
            "conflict": "正确对象“2.0 kg小车向右加速度1.5 m/s²”在地面近似惯性参考系中应列2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N”；代入为2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N”，所以4.0 N；这与“3.0 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：3.0 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=3.0÷1 N"
          },
          {
            "option": "2.0 N",
            "wrongObjectOrForces": "研究对象虽写成“2.0 kg小车向右加速度1.5 m/s²”，但由“2.0 N”反推时改变了拉力、阻力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "2.0 N",
            "conflict": "用运动数据和动力学方程对应同一对象、时段和方向检验：正确对象“2.0 kg小车向右加速度1.5 m/s²”在地面近似惯性参考系中应列2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N”；代入为2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大；正确判据为“4.0 N”，所以4.0 N；因此不能得到“2.0 N”。",
            "wrongEquation": "错误物理关系写成：2.0 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=2.0÷1 N"
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
            "wrongObjectOrForces": "误以“450 N”对应的量为受力结论，因而没有在“电梯向下运动却以1.0 m/s²减速”上同时核对重力、支持力。",
            "wrongResult": "450 N",
            "conflict": "正确对象“电梯向下运动却以1.0 m/s²减速”在地面近似惯性参考系中应列电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N”；代入为电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N”，所以550 N；这与“450 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：450 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=450÷1 N"
          },
          {
            "option": "500 N",
            "wrongObjectOrForces": "研究对象虽写成“电梯向下运动却以1.0 m/s²减速”，但由“500 N”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "500 N",
            "conflict": "用地面惯性系、人与秤共同加速并保持接触，g=10 m/s²检验：正确对象“电梯向下运动却以1.0 m/s²减速”在地面近似惯性参考系中应列电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N”；代入为电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少；正确判据为“550 N”，所以550 N；因此不能得到“500 N”。",
            "wrongEquation": "错误物理关系写成：500 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=500÷1 N"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 80 })
});
