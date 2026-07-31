window.M4ACheck=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "A",
  "storageKey": "physics-mechanics-m4-a-check-v1",
  "durationSeconds": 1800,
  "reviewDays": 7,
  "passTitle": "A轨check通过",
  "failTitle": "A轨check未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-learning-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 80,
  "questions": [
    {
      "id": "M4AC01",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": false,
      "text": "0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速 由这组数据可得哪项结论？",
      "options": [
        "故保持匀速",
        "匀速时不受力",
        "速度等于惯性大小"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "0.50 kg气垫滑块以2.0 m/s运动",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速",
        "substitution": "0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速",
        "candidate": "故保持匀速",
        "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
        "final": "故保持匀速",
        "answerIndex": 0,
        "unique": "由本题关系“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”只能得到“故保持匀速”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "匀速时不受力",
            "wrongObjectOrForces": "研究对象仍为0.50 kg气垫滑块以2.0 m/s运动；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "匀速时不受力",
            "conflict": "“匀速时不受力”与本题正确关系“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”冲突；满足题设的结果是“故保持匀速”。",
            "wrongCriterion": "采用判据“匀速时不受力”而非本题判据“故保持匀速”"
          },
          {
            "option": "速度等于惯性大小",
            "wrongObjectOrForces": "研究对象仍为0.50 kg气垫滑块以2.0 m/s运动；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度等于惯性大小",
            "conflict": "“速度等于惯性大小”与本题正确关系“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”冲突；满足题设的结果是“故保持匀速”。",
            "wrongEquation": "按选项建立关系“速度等于惯性大小”；该式取代了本题关系“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”",
            "wrongSubstitution": "在“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“速度等于惯性大小”"
          }
        ]
      }
    },
    {
      "id": "M4AC02",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": false,
      "text": "2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右 由这组数据可得哪项结论？",
      "options": [
        "某个拉力等于合力",
        "得a=3.0 m/s²向右",
        "由速度方向决定加速度方向"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2.0 kg小车受右10 N、左4 N",
        "frame": "地面近似惯性参考系",
        "forces": [
          "水平外加力",
          "水平阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右",
        "substitution": "2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右",
        "candidate": "得a=3.0 m/s²向右",
        "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
        "final": "得a=3.0 m/s²向右",
        "answerIndex": 1,
        "unique": "由本题关系“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”只能得到“得a=3.0 m/s²向右”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "某个拉力等于合力",
            "wrongObjectOrForces": "研究对象仍为2.0 kg小车受右10 N、左4 N；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "某个拉力等于合力",
            "conflict": "“某个拉力等于合力”与本题正确关系“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”冲突；满足题设的结果是“得a=3.0 m/s²向右”。",
            "wrongEquation": "按选项建立关系“某个拉力等于合力”；该式取代了本题关系“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”",
            "wrongSubstitution": "在“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“某个拉力等于合力”"
          },
          {
            "option": "由速度方向决定加速度方向",
            "wrongObjectOrForces": "研究对象仍为2.0 kg小车受右10 N、左4 N；真实力应为水平外加力、水平阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "由速度方向决定加速度方向",
            "conflict": "“由速度方向决定加速度方向”与本题正确关系“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”冲突；满足题设的结果是“得a=3.0 m/s²向右”。",
            "wrongCriterion": "采用判据“由速度方向决定加速度方向”而非本题判据“得a=3.0 m/s²向右”"
          }
        ]
      }
    },
    {
      "id": "M4AC03",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": false,
      "text": "500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s² 由这组数据可得哪项结论？",
      "options": [
        "2 kg为2 N",
        "克直接代入F=ma",
        "合力1.5 N时a=1.5/0.500=3.0 m/s²"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "500 g=0.500 kg",
        "frame": "地面近似惯性参考系",
        "forces": [
          "题设合外力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "substitution": "500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "candidate": "合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "constraint": "代入前统一国际单位，等式两边量纲一致",
        "final": "合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "answerIndex": 2,
        "unique": "由本题关系“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²”只能得到“合力1.5 N时a=1.5/0.500=3.0 m/s²”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "2 kg为2 N",
            "wrongObjectOrForces": "研究对象仍为500 g=0.500 kg；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "2 kg为2 N",
            "conflict": "“2 kg为2 N”与本题正确关系“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²”冲突；满足题设的结果是“合力1.5 N时a=1.5/0.500=3.0 m/s²”。",
            "wrongEquation": "按选项建立关系“2 kg为2 N”；该式取代了本题关系“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²”",
            "wrongSubstitution": "在“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s² 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“2 kg为2 N”"
          },
          {
            "option": "克直接代入F=ma",
            "wrongObjectOrForces": "研究对象仍为500 g=0.500 kg；真实力应为题设合外力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "克直接代入F=ma",
            "conflict": "“克直接代入F=ma”与本题正确关系“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²”冲突；满足题设的结果是“合力1.5 N时a=1.5/0.500=3.0 m/s²”。",
            "wrongEquation": "按选项建立关系“克直接代入F=ma”；该式取代了本题关系“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²”",
            "wrongSubstitution": "在“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s² 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“克直接代入F=ma”"
          }
        ]
      }
    },
    {
      "id": "M4AC04",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": false,
      "text": "2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s 由这组数据可得哪项结论？",
      "options": [
        "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "漏摩擦",
        "拉力等于合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2.0 kg物块受8 N拉力和2 N摩擦",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "substitution": "2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "candidate": "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "constraint": "单对象、分段内合力恒定、地面惯性系",
        "final": "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "answerIndex": 0,
        "unique": "由本题关系“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”只能得到“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "漏摩擦",
            "wrongObjectOrForces": "研究对象仍为2.0 kg物块受8 N拉力和2 N摩擦，但方程中漏去摩擦",
            "wrongResult": "漏摩擦",
            "conflict": "“漏摩擦”与本题正确关系“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”冲突；满足题设的结果是“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”。",
            "wrongCriterion": "采用判据“漏摩擦”而非本题判据“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”"
          },
          {
            "option": "拉力等于合力",
            "wrongObjectOrForces": "研究对象仍为2.0 kg物块受8 N拉力和2 N摩擦；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "拉力等于合力",
            "conflict": "“拉力等于合力”与本题正确关系“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”冲突；满足题设的结果是“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”。",
            "wrongEquation": "按选项建立关系“拉力等于合力”；该式取代了本题关系“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”",
            "wrongSubstitution": "在“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“拉力等于合力”"
          }
        ]
      }
    },
    {
      "id": "M4AC05",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": false,
      "text": "1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N 由这组数据可得哪项结论？",
      "options": [
        "速度当加速度",
        "得T=3 N",
        "合力等于未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "1.0 kg小车2 s内由2增至6 m/s",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N",
        "substitution": "1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N",
        "candidate": "得T=3 N",
        "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
        "final": "得T=3 N",
        "answerIndex": 1,
        "unique": "由本题关系“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N”只能得到“得T=3 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "速度当加速度",
            "wrongObjectOrForces": "研究对象仍为1.0 kg小车2 s内由2增至6 m/s；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度当加速度",
            "conflict": "“速度当加速度”与本题正确关系“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N”冲突；满足题设的结果是“得T=3 N”。",
            "wrongCriterion": "采用判据“速度当加速度”而非本题判据“得T=3 N”"
          },
          {
            "option": "合力等于未知拉力",
            "wrongObjectOrForces": "研究对象仍为1.0 kg小车2 s内由2增至6 m/s；真实力应为拉力、阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "合力等于未知拉力",
            "conflict": "“合力等于未知拉力”与本题正确关系“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N”冲突；满足题设的结果是“得T=3 N”。",
            "wrongEquation": "按选项建立关系“合力等于未知拉力”；该式取代了本题关系“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N”",
            "wrongSubstitution": "在“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“合力等于未知拉力”"
          }
        ]
      }
    },
    {
      "id": "M4AC06",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": false,
      "text": "60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N 由这组数据可得哪项结论？",
      "options": [
        "用速度方向判断超失重",
        "失重时重力消失",
        "得N=720 N而重力仍600 N"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "60 kg乘客向上加速2.0 m/s²",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N",
        "substitution": "60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N",
        "candidate": "得N=720 N而重力仍600 N",
        "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
        "final": "得N=720 N而重力仍600 N",
        "answerIndex": 2,
        "unique": "由本题关系“60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N”只能得到“得N=720 N而重力仍600 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "用速度方向判断超失重",
            "wrongObjectOrForces": "研究对象仍为60 kg乘客向上加速2.0 m/s²；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "用速度方向判断超失重",
            "conflict": "“用速度方向判断超失重”与本题正确关系“60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N”冲突；满足题设的结果是“得N=720 N而重力仍600 N”。",
            "wrongCriterion": "采用判据“用速度方向判断超失重”而非本题判据“得N=720 N而重力仍600 N”"
          },
          {
            "option": "失重时重力消失",
            "wrongObjectOrForces": "研究对象仍为60 kg乘客向上加速2.0 m/s²；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "失重时重力消失",
            "conflict": "“失重时重力消失”与本题正确关系“60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N”冲突；满足题设的结果是“得N=720 N而重力仍600 N”。",
            "wrongCriterion": "采用判据“失重时重力消失”而非本题判据“得N=720 N而重力仍600 N”"
          }
        ]
      }
    }
  ]
});
