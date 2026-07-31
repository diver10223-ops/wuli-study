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
            "wrongObjectOrForces": "误以“匀速时不受力”对应的量为受力结论，因而没有在“0.50 kg气垫滑块以2.0 m/s运动”上同时核对重力、支持力。",
            "wrongResult": "匀速时不受力",
            "conflict": "正确对象“0.50 kg气垫滑块以2.0 m/s运动”在地面近似惯性参考系中应列0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速；代入为0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速，所以故保持匀速；这与“匀速时不受力”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“匀速时不受力”的表面状态判定，没有检验宏观低速物体、地面近似惯性系且合外力为零下的按题干所述运动方向取正与0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速。"
          },
          {
            "option": "速度等于惯性大小",
            "wrongObjectOrForces": "研究对象虽写成“0.50 kg气垫滑块以2.0 m/s运动”，但由“速度等于惯性大小”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "速度等于惯性大小",
            "conflict": "用宏观低速物体、地面近似惯性系且合外力为零检验：正确对象“0.50 kg气垫滑块以2.0 m/s运动”在地面近似惯性参考系中应列0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速；代入为0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速，所以故保持匀速；因此不能得到“速度等于惯性大小”。",
            "wrongCriterion": "错误地认为“速度等于惯性大小”可直接成立，未比较重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "加速度向右",
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
            "option": "加速度向右",
            "wrongObjectOrForces": "误以“加速度向右”对应的量为受力结论，因而没有在“2.0 kg小车受右10 N、左4 N”上同时核对水平外加力、水平阻力、重力、支持力。",
            "wrongResult": "加速度向右",
            "conflict": "正确对象“2.0 kg小车受右10 N、左4 N”在地面近似惯性参考系中应列2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右；代入为2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右，所以得a=3.0 m/s²向右；这与“加速度向右”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“加速度向右”的表面状态判定，没有检验质量不变、宏观低速、惯性参考系，分量力属于同一对象下的按题干所述运动方向取正与2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右。"
          },
          {
            "option": "由速度方向决定加速度方向",
            "wrongObjectOrForces": "研究对象虽写成“2.0 kg小车受右10 N、左4 N”，但由“由速度方向决定加速度方向”反推时改变了水平外加力、水平阻力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "由速度方向决定加速度方向",
            "conflict": "用质量不变、宏观低速、惯性参考系，分量力属于同一对象检验：正确对象“2.0 kg小车受右10 N、左4 N”在地面近似惯性参考系中应列2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右；代入为2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右，所以得a=3.0 m/s²向右；因此不能得到“由速度方向决定加速度方向”。",
            "wrongCriterion": "错误地认为“由速度方向决定加速度方向”可直接成立，未比较水平外加力、水平阻力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "500 m/s²",
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
            "wrongObjectOrForces": "误以“2 kg为2 N”对应的量为受力结论，因而没有在“500 g=0.500 kg”上同时核对题设合外力、重力、支持力。",
            "wrongResult": "2 kg为2 N",
            "conflict": "正确对象“500 g=0.500 kg”在地面近似惯性参考系中应列500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²；代入为500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²，所以合力1.5 N时a=1.5/0.500=3.0 m/s²；这与“2 kg为2 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：2 kg为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=2÷1 kg为2 N"
          },
          {
            "option": "500 m/s²",
            "wrongObjectOrForces": "研究对象虽写成“500 g=0.500 kg”，但由“500 m/s²”反推时改变了题设合外力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "500 m/s²",
            "conflict": "用代入前统一国际单位，等式两边量纲一致检验：正确对象“500 g=0.500 kg”在地面近似惯性参考系中应列500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²；代入为500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²，所以合力1.5 N时a=1.5/0.500=3.0 m/s²；因此不能得到“500 m/s²”。",
            "wrongEquation": "错误物理关系写成：500 m/s²",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=500 m/s²"
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
        "速度增加10 m/s",
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
            "option": "速度增加10 m/s",
            "wrongObjectOrForces": "误以“速度增加10 m/s”对应的量为受力结论，因而没有在“2.0 kg物块受8 N拉力和2 N摩擦”上同时核对拉力、摩擦力、重力、支持力。",
            "wrongResult": "速度增加10 m/s",
            "conflict": "正确对象“2.0 kg物块受8 N拉力和2 N摩擦”在地面近似惯性参考系中应列2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s；代入为2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s，所以8-2=2a得a=3 m/s²；静止2 s后v=6 m/s；这与“速度增加10 m/s”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：速度增加10 m/s",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=速度增加10 m/s"
          },
          {
            "option": "拉力等于合力",
            "wrongObjectOrForces": "研究对象虽写成“2.0 kg物块受8 N拉力和2 N摩擦”，但由“拉力等于合力”反推时改变了拉力、摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "拉力等于合力",
            "conflict": "用单对象、分段内合力恒定、地面惯性系检验：正确对象“2.0 kg物块受8 N拉力和2 N摩擦”在地面近似惯性参考系中应列2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s；代入为2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s，所以8-2=2a得a=3 m/s²；静止2 s后v=6 m/s；因此不能得到“拉力等于合力”。",
            "wrongCriterion": "错误地认为“拉力等于合力”可直接成立，未比较拉力、摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "拉力为13 N",
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
            "option": "拉力为13 N",
            "wrongObjectOrForces": "误以“拉力为13 N”对应的量为受力结论，因而没有在“1.0 kg小车2 s内由2增至6 m/s”上同时核对拉力、阻力、重力、支持力。",
            "wrongResult": "拉力为13 N",
            "conflict": "正确对象“1.0 kg小车2 s内由2增至6 m/s”在地面近似惯性参考系中应列1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N；代入为1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N，所以得T=3 N；这与“拉力为13 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：拉力为13 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=拉力为13÷1 N"
          },
          {
            "option": "合力等于未知拉力",
            "wrongObjectOrForces": "研究对象虽写成“1.0 kg小车2 s内由2增至6 m/s”，但由“合力等于未知拉力”反推时改变了拉力、阻力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "合力等于未知拉力",
            "conflict": "用运动数据和动力学方程对应同一对象、时段和方向检验：正确对象“1.0 kg小车2 s内由2增至6 m/s”在地面近似惯性参考系中应列1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N；代入为1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N，所以得T=3 N；因此不能得到“合力等于未知拉力”。",
            "wrongCriterion": "错误地认为“合力等于未知拉力”可直接成立，未比较拉力、阻力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“用速度方向判断超失重”对应的量为受力结论，因而没有在“60 kg乘客向上加速2.0 m/s²”上同时核对重力、支持力。",
            "wrongResult": "用速度方向判断超失重",
            "conflict": "正确对象“60 kg乘客向上加速2.0 m/s²”在地面近似惯性参考系中应列60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N；代入为60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N，所以得N=720 N而重力仍600 N；这与“用速度方向判断超失重”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“用速度方向判断超失重”的表面状态判定，没有检验地面惯性系、人与秤共同加速并保持接触，g=10 m/s²下的按题干所述运动方向取正与60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N。"
          },
          {
            "option": "失重时重力消失",
            "wrongObjectOrForces": "研究对象虽写成“60 kg乘客向上加速2.0 m/s²”，但由“失重时重力消失”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "失重时重力消失",
            "conflict": "用地面惯性系、人与秤共同加速并保持接触，g=10 m/s²检验：正确对象“60 kg乘客向上加速2.0 m/s²”在地面近似惯性参考系中应列60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N；代入为60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N，所以得N=720 N而重力仍600 N；因此不能得到“失重时重力消失”。",
            "wrongCriterion": "错误地认为“失重时重力消失”可直接成立，未比较重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    }
  ]
});
