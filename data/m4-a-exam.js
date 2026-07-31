window.M4AExam=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "A",
  "storageKey": "physics-mechanics-m4-a-exam-v1",
  "durationSeconds": 3600,
  "reviewDays": 7,
  "passTitle": "A轨exam通过",
  "failTitle": "A轨exam未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-check-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 80,
  "questions": [
    {
      "id": "M4AE01",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": true,
      "text": "对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s 该模型的最终结论是什么？",
      "options": [
        "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "匀速时不受力",
        "速度等于惯性大小"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "0.50 kg滑块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "substitution": "对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "candidate": "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
        "final": "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "answerIndex": 0,
        "unique": "由本题关系“对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”只能得到“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "匀速时不受力",
            "wrongObjectOrForces": "研究对象仍为0.50 kg滑块；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "匀速时不受力",
            "conflict": "“匀速时不受力”与本题正确关系“对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”冲突；满足题设的结果是“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”。",
            "wrongCriterion": "采用判据“匀速时不受力”而非本题判据“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”"
          },
          {
            "option": "速度等于惯性大小",
            "wrongObjectOrForces": "研究对象仍为0.50 kg滑块；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度等于惯性大小",
            "conflict": "“速度等于惯性大小”与本题正确关系“对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”冲突；满足题设的结果是“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”。",
            "wrongEquation": "按选项建立关系“速度等于惯性大小”；该式取代了本题关系“对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”",
            "wrongSubstitution": "在“对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“速度等于惯性大小”"
          }
        ]
      }
    },
    {
      "id": "M4AE02",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": true,
      "text": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0 该模型的最终结论是什么？",
      "options": [
        "某个拉力等于合力",
        "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "由速度方向决定加速度方向"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "3.0 kg箱",
        "frame": "地面近似惯性参考系",
        "forces": [
          "水平外加力",
          "水平阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "substitution": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "candidate": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
        "final": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "answerIndex": 1,
        "unique": "由本题关系“对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”只能得到“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "某个拉力等于合力",
            "wrongObjectOrForces": "研究对象仍为3.0 kg箱；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "某个拉力等于合力",
            "conflict": "“某个拉力等于合力”与本题正确关系“对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”冲突；满足题设的结果是“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”。",
            "wrongEquation": "按选项建立关系“某个拉力等于合力”；该式取代了本题关系“对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”",
            "wrongSubstitution": "在“对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“某个拉力等于合力”"
          },
          {
            "option": "由速度方向决定加速度方向",
            "wrongObjectOrForces": "研究对象仍为3.0 kg箱；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "由速度方向决定加速度方向",
            "conflict": "“由速度方向决定加速度方向”与本题正确关系“对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”冲突；满足题设的结果是“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”。",
            "wrongCriterion": "采用判据“由速度方向决定加速度方向”而非本题判据“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”"
          }
        ]
      }
    },
    {
      "id": "M4AE03",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": true,
      "text": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立 该模型的最终结论是什么？",
      "options": [
        "2 kg为2 N",
        "克直接代入F=ma",
        "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "0.20 kg小车",
        "frame": "地面近似惯性参考系",
        "forces": [
          "题设合外力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "substitution": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "candidate": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "constraint": "代入前统一国际单位，等式两边量纲一致",
        "final": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "answerIndex": 2,
        "unique": "由本题关系“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”只能得到“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "2 kg为2 N",
            "wrongObjectOrForces": "研究对象仍为0.20 kg小车；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "2 kg为2 N",
            "conflict": "“2 kg为2 N”与本题正确关系“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”冲突；满足题设的结果是“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”。",
            "wrongEquation": "按选项建立关系“2 kg为2 N”；该式取代了本题关系“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”",
            "wrongSubstitution": "在“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“2 kg为2 N”"
          },
          {
            "option": "克直接代入F=ma",
            "wrongObjectOrForces": "研究对象仍为0.20 kg小车；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "克直接代入F=ma",
            "conflict": "“克直接代入F=ma”与本题正确关系“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”冲突；满足题设的结果是“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”。",
            "wrongEquation": "按选项建立关系“克直接代入F=ma”；该式取代了本题关系“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”",
            "wrongSubstitution": "在“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“克直接代入F=ma”"
          }
        ]
      }
    },
    {
      "id": "M4AE04",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": true,
      "text": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负 该模型的最终结论是什么？",
      "options": [
        "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "漏摩擦",
        "拉力等于合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "4.0 kg雪橇",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "substitution": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "candidate": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "constraint": "单对象、分段内合力恒定、地面惯性系",
        "final": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "answerIndex": 0,
        "unique": "由本题关系“对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”只能得到“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "漏摩擦",
            "wrongObjectOrForces": "研究对象仍为4.0 kg雪橇，但方程中漏去摩擦",
            "wrongResult": "漏摩擦",
            "conflict": "“漏摩擦”与本题正确关系“对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”冲突；满足题设的结果是“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”。",
            "wrongCriterion": "采用判据“漏摩擦”而非本题判据“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”"
          },
          {
            "option": "拉力等于合力",
            "wrongObjectOrForces": "研究对象仍为4.0 kg雪橇；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "拉力等于合力",
            "conflict": "“拉力等于合力”与本题正确关系“对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”冲突；满足题设的结果是“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”。",
            "wrongEquation": "按选项建立关系“拉力等于合力”；该式取代了本题关系“对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”",
            "wrongSubstitution": "在“对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“拉力等于合力”"
          }
        ]
      }
    },
    {
      "id": "M4AE05",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": true,
      "text": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N 该模型的最终结论是什么？",
      "options": [
        "速度当加速度",
        "T-2.0=2.0×2.0，候选T=6.0 N",
        "合力等于未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2.0 kg小车",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N",
        "substitution": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N",
        "candidate": "T-2.0=2.0×2.0，候选T=6.0 N",
        "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
        "final": "T-2.0=2.0×2.0，候选T=6.0 N",
        "answerIndex": 1,
        "unique": "由本题关系“对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N”只能得到“T-2.0=2.0×2.0，候选T=6.0 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "速度当加速度",
            "wrongObjectOrForces": "研究对象仍为2.0 kg小车；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度当加速度",
            "conflict": "“速度当加速度”与本题正确关系“对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N”冲突；满足题设的结果是“T-2.0=2.0×2.0，候选T=6.0 N”。",
            "wrongCriterion": "采用判据“速度当加速度”而非本题判据“T-2.0=2.0×2.0，候选T=6.0 N”"
          },
          {
            "option": "合力等于未知拉力",
            "wrongObjectOrForces": "研究对象仍为2.0 kg小车；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "合力等于未知拉力",
            "conflict": "“合力等于未知拉力”与本题正确关系“对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N”冲突；满足题设的结果是“T-2.0=2.0×2.0，候选T=6.0 N”。",
            "wrongEquation": "按选项建立关系“合力等于未知拉力”；该式取代了本题关系“对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N”",
            "wrongSubstitution": "在“对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“合力等于未知拉力”"
          }
        ]
      }
    },
    {
      "id": "M4AE06",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": true,
      "text": "对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N 该模型的最终结论是什么？",
      "options": [
        "用速度方向判断超失重",
        "失重时重力消失",
        "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "50 kg乘客",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "substitution": "对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "candidate": "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
        "final": "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "answerIndex": 2,
        "unique": "由本题关系“对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”只能得到“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "用速度方向判断超失重",
            "wrongObjectOrForces": "研究对象仍为50 kg乘客；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "用速度方向判断超失重",
            "conflict": "“用速度方向判断超失重”与本题正确关系“对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”冲突；满足题设的结果是“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”。",
            "wrongCriterion": "采用判据“用速度方向判断超失重”而非本题判据“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”"
          },
          {
            "option": "失重时重力消失",
            "wrongObjectOrForces": "研究对象仍为50 kg乘客；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "失重时重力消失",
            "conflict": "“失重时重力消失”与本题正确关系“对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”冲突；满足题设的结果是“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”。",
            "wrongCriterion": "采用判据“失重时重力消失”而非本题判据“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”"
          }
        ]
      }
    },
    {
      "id": "M4AE07",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "基础边界",
      "novel": true,
      "text": "撤去水平冰面上冰壶的推力后，忽略阻力。关于冰壶随后运动，正确的是？",
      "options": [
        "立即停下",
        "仍以撤力瞬间的速度做匀速直线运动",
        "速度越来越大"
      ],
      "answer": 1,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "撤去水平冰面上冰壶的推力后",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "ΣFx=0，所以a=0；速度保持不变",
        "substitution": "ΣFx=0，所以a=0；速度保持不变",
        "candidate": "仍以撤力瞬间的速度做匀速直线运动",
        "constraint": "牛顿第一定律只要求合外力为零，不要求没有力",
        "final": "仍以撤力瞬间的速度做匀速直线运动",
        "answerIndex": 1,
        "unique": "由本题关系“ΣFx=0，所以a=0；速度保持不变”只能得到“仍以撤力瞬间的速度做匀速直线运动”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "立即停下",
            "wrongObjectOrForces": "研究对象仍为撤去水平冰面上冰壶的推力后；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "立即停下",
            "conflict": "“立即停下”与本题正确关系“ΣFx=0，所以a=0；速度保持不变”冲突；满足题设的结果是“仍以撤力瞬间的速度做匀速直线运动”。",
            "wrongCriterion": "采用判据“立即停下”而非本题判据“仍以撤力瞬间的速度做匀速直线运动”"
          },
          {
            "option": "速度越来越大",
            "wrongObjectOrForces": "研究对象仍为撤去水平冰面上冰壶的推力后；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度越来越大",
            "conflict": "“速度越来越大”与本题正确关系“ΣFx=0，所以a=0；速度保持不变”冲突；满足题设的结果是“仍以撤力瞬间的速度做匀速直线运动”。",
            "wrongCriterion": "采用判据“速度越来越大”而非本题判据“仍以撤力瞬间的速度做匀速直线运动”"
          }
        ]
      }
    },
    {
      "id": "M4AE08",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": true,
      "text": "向右运动的小车某瞬间所受水平合力向左。该瞬间加速度如何？",
      "options": [
        "向右，与速度同向",
        "为零",
        "向左，与合力同向"
      ],
      "answer": 2,
      "skill": "牛顿第二定律三性",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "向右运动的小车某瞬间所受水平合力向左",
        "frame": "地面近似惯性参考系",
        "forces": [
          "水平外加力",
          "水平阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "ΣFx<0=ma，所以a向左",
        "substitution": "ΣFx<0=ma，所以a向左",
        "candidate": "向左，与合力同向",
        "constraint": "加速度由同一时刻同一对象的合力决定",
        "final": "向左，与合力同向",
        "answerIndex": 2,
        "unique": "由本题关系“ΣFx<0=ma，所以a向左”只能得到“向左，与合力同向”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "向右，与速度同向",
            "wrongObjectOrForces": "研究对象仍为向右运动的小车某瞬间所受水平合力向左；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "向右，与速度同向",
            "conflict": "“向右，与速度同向”与本题正确关系“ΣFx<0=ma，所以a向左”冲突；满足题设的结果是“向左，与合力同向”。",
            "wrongEquation": "按选项建立关系“向右，与速度同向”；该式取代了本题关系“ΣFx<0=ma，所以a向左”",
            "wrongSubstitution": "在“向右运动的小车某瞬间所受水平合力向左。该瞬间加速度如何？”给定条件下，将本题给定量代入该关系后得到“向右，与速度同向”"
          },
          {
            "option": "为零",
            "wrongObjectOrForces": "研究对象仍为向右运动的小车某瞬间所受水平合力向左；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "为零",
            "conflict": "“为零”与本题正确关系“ΣFx<0=ma，所以a向左”冲突；满足题设的结果是“向左，与合力同向”。",
            "wrongEquation": "按选项建立关系“为零”；该式取代了本题关系“ΣFx<0=ma，所以a向左”",
            "wrongSubstitution": "在“向右运动的小车某瞬间所受水平合力向左。该瞬间加速度如何？”给定条件下，将本题给定量代入该关系后得到“为零”"
          }
        ]
      }
    },
    {
      "id": "M4AE09",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": true,
      "text": "用F=ma计算时，质量500 g、力2.0 N应怎样代入？",
      "options": [
        "先换成0.500 kg，写2.0=0.500a",
        "直接写2.0=500a",
        "质量为500 N"
      ],
      "answer": 0,
      "skill": "国际单位制与量纲",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "用F=ma计算时",
        "frame": "地面近似惯性参考系",
        "forces": [
          "题设合外力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "2.0 N=0.500 kg·a，得a=4.0 m/s²",
        "substitution": "2.0 N=0.500 kg·a，得a=4.0 m/s²",
        "candidate": "先换成0.500 kg，写2.0=0.500a",
        "constraint": "N是力单位，kg是质量单位",
        "final": "先换成0.500 kg，写2.0=0.500a",
        "answerIndex": 0,
        "unique": "由本题关系“2.0 N=0.500 kg·a，得a=4.0 m/s²”只能得到“先换成0.500 kg，写2.0=0.500a”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "直接写2.0=500a",
            "wrongObjectOrForces": "研究对象仍为用F=ma计算时；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "直接写2.0=500a",
            "conflict": "“直接写2.0=500a”与本题正确关系“2.0 N=0.500 kg·a，得a=4.0 m/s²”冲突；满足题设的结果是“先换成0.500 kg，写2.0=0.500a”。",
            "wrongEquation": "按选项建立关系“直接写2.0=500a”；该式取代了本题关系“2.0 N=0.500 kg·a，得a=4.0 m/s²”",
            "wrongSubstitution": "在“用F=ma计算时，质量500 g、力2.0 N应怎样代入？”给定条件下，将本题给定量代入该关系后得到“直接写2.0=500a”"
          },
          {
            "option": "质量为500 N",
            "wrongObjectOrForces": "研究对象仍为用F=ma计算时；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "质量为500 N",
            "conflict": "“质量为500 N”与本题正确关系“2.0 N=0.500 kg·a，得a=4.0 m/s²”冲突；满足题设的结果是“先换成0.500 kg，写2.0=0.500a”。",
            "wrongEquation": "按选项建立关系“质量为500 N”；该式取代了本题关系“2.0 N=0.500 kg·a，得a=4.0 m/s²”",
            "wrongSubstitution": "在“用F=ma计算时，质量500 g、力2.0 N应怎样代入？”给定条件下，将本题给定量代入该关系后得到“质量为500 N”"
          }
        ]
      }
    },
    {
      "id": "M4AE10",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": true,
      "text": "水平运动的木箱同时受向右8 N、向左3 N。合力和加速度方向是？",
      "options": [
        "合力11 N向右，加速度向右",
        "合力5 N向右，加速度向右",
        "合力5 N向左，加速度向左"
      ],
      "answer": 1,
      "skill": "已知受力求运动",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "水平运动的木箱同时受向右8 N、向左3 N",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "ΣFx=8-3=5 N，a与合力同向",
        "substitution": "ΣFx=8-3=5 N，a与合力同向",
        "candidate": "合力5 N向右，加速度向右",
        "constraint": "两水平力必须按方向作代数和",
        "final": "合力5 N向右，加速度向右",
        "answerIndex": 1,
        "unique": "由本题关系“ΣFx=8-3=5 N，a与合力同向”只能得到“合力5 N向右，加速度向右”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "合力11 N向右，加速度向右",
            "wrongObjectOrForces": "研究对象仍为水平运动的木箱同时受向右8 N、向左3 N；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "合力11 N向右，加速度向右",
            "conflict": "“合力11 N向右，加速度向右”与本题正确关系“ΣFx=8-3=5 N，a与合力同向”冲突；满足题设的结果是“合力5 N向右，加速度向右”。",
            "wrongEquation": "按选项建立关系“合力11 N向右，加速度向右”；该式取代了本题关系“ΣFx=8-3=5 N，a与合力同向”",
            "wrongSubstitution": "在“水平运动的木箱同时受向右8 N、向左3 N。合力和加速度方向是？”给定条件下，将本题给定量代入该关系后得到“合力11 N向右，加速度向右”"
          },
          {
            "option": "合力5 N向左，加速度向左",
            "wrongObjectOrForces": "研究对象仍为水平运动的木箱同时受向右8 N、向左3 N；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "合力5 N向左，加速度向左",
            "conflict": "“合力5 N向左，加速度向左”与本题正确关系“ΣFx=8-3=5 N，a与合力同向”冲突；满足题设的结果是“合力5 N向右，加速度向右”。",
            "wrongEquation": "按选项建立关系“合力5 N向左，加速度向左”；该式取代了本题关系“ΣFx=8-3=5 N，a与合力同向”",
            "wrongSubstitution": "在“水平运动的木箱同时受向右8 N、向左3 N。合力和加速度方向是？”给定条件下，将本题给定量代入该关系后得到“合力5 N向左，加速度向左”"
          }
        ]
      }
    },
    {
      "id": "M4AE11",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": true,
      "text": "2.0 kg小车速度在3.0 s内由1.0 m/s均匀增至7.0 m/s，其水平合力为？",
      "options": [
        "12 N向右",
        "16 N向右",
        "4.0 N向右"
      ],
      "answer": 2,
      "skill": "已知运动反推受力",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "2.0 kg小车速度在3.0 s内由1.0 m/s均匀增至7.0 m/s",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右",
        "substitution": "a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右",
        "candidate": "4.0 N向右",
        "constraint": "运动学斜率给加速度，再反求合力",
        "final": "4.0 N向右",
        "answerIndex": 2,
        "unique": "由本题关系“a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右”只能得到“4.0 N向右”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "12 N向右",
            "wrongObjectOrForces": "研究对象仍为2.0 kg小车速度在3.0 s内由1.0 m/s均匀增至7.0 m/s；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "12 N向右",
            "conflict": "“12 N向右”与本题正确关系“a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右”冲突；满足题设的结果是“4.0 N向右”。",
            "wrongEquation": "按选项建立关系“12 N向右”；该式取代了本题关系“a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右”",
            "wrongSubstitution": "在“2.0 kg小车速度在3.0 s内由1.0 m/s均匀增至7.0 m/s，其水平合力为？”给定条件下，将本题给定量代入该关系后得到“12 N向右”"
          },
          {
            "option": "16 N向右",
            "wrongObjectOrForces": "研究对象仍为2.0 kg小车速度在3.0 s内由1.0 m/s均匀增至7.0 m/s；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "16 N向右",
            "conflict": "“16 N向右”与本题正确关系“a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右”冲突；满足题设的结果是“4.0 N向右”。",
            "wrongEquation": "按选项建立关系“16 N向右”；该式取代了本题关系“a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右”",
            "wrongSubstitution": "在“2.0 kg小车速度在3.0 s内由1.0 m/s均匀增至7.0 m/s，其水平合力为？”给定条件下，将本题给定量代入该关系后得到“16 N向右”"
          }
        ]
      }
    },
    {
      "id": "M4AE12",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": true,
      "text": "电梯中人站在秤上。电梯向上运动但正在减速，秤示数与重力关系是？",
      "options": [
        "小于重力",
        "大于重力",
        "等于重力"
      ],
      "answer": 0,
      "skill": "超重失重与测力实验",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "电梯中人站在秤上",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "向上为正，a<0，N-mg=ma，故N<mg",
        "substitution": "向上为正，a<0，N-mg=ma，故N<mg",
        "candidate": "小于重力",
        "constraint": "超失重由加速度方向决定而非速度方向",
        "final": "小于重力",
        "answerIndex": 0,
        "unique": "由本题关系“向上为正，a<0，N-mg=ma，故N<mg”只能得到“小于重力”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "大于重力",
            "wrongObjectOrForces": "研究对象仍为电梯中人站在秤上；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "大于重力",
            "conflict": "“大于重力”与本题正确关系“向上为正，a<0，N-mg=ma，故N<mg”冲突；满足题设的结果是“小于重力”。",
            "wrongEquation": "按选项建立关系“大于重力”；该式取代了本题关系“向上为正，a<0，N-mg=ma，故N<mg”",
            "wrongSubstitution": "在“电梯中人站在秤上。电梯向上运动但正在减速，秤示数与重力关系是？”给定条件下，将本题给定量代入该关系后得到“大于重力”"
          },
          {
            "option": "等于重力",
            "wrongObjectOrForces": "研究对象仍为电梯中人站在秤上；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "等于重力",
            "conflict": "“等于重力”与本题正确关系“向上为正，a<0，N-mg=ma，故N<mg”冲突；满足题设的结果是“小于重力”。",
            "wrongEquation": "按选项建立关系“等于重力”；该式取代了本题关系“向上为正，a<0，N-mg=ma，故N<mg”",
            "wrongSubstitution": "在“电梯中人站在秤上。电梯向上运动但正在减速，秤示数与重力关系是？”给定条件下，将本题给定量代入该关系后得到“等于重力”"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 80 })
});
