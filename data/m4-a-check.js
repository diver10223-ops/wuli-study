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
            "wrongObjectOrForces": "以0.50 kg气垫滑块以2.0 m/s运动为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "匀速时不受力",
            "conflict": "题干应使用“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”，由此得到“故保持匀速”；错误结果“匀速时不受力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“匀速时不受力”所表达的状态作为判定结果，而未检验宏观低速物体、地面近似惯性系且合外力为零及方程“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”。"
          },
          {
            "option": "速度等于惯性大小",
            "wrongObjectOrForces": "以0.50 kg气垫滑块以2.0 m/s运动为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "速度等于惯性大小",
            "conflict": "题干应使用“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”，由此得到“故保持匀速”；错误结果“速度等于惯性大小”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“速度等于惯性大小”所表达的状态作为判定结果，而未检验宏观低速物体、地面近似惯性系且合外力为零及方程“0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速”。"
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
            "wrongObjectOrForces": "以2.0 kg小车受右10 N、左4 N为研究对象，但错误模型未按水平外加力、水平阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "加速度向右",
            "conflict": "题干应使用“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”，由此得到“得a=3.0 m/s²向右”；错误结果“加速度向右”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“加速度向右”所表达的状态作为判定结果，而未检验质量不变、宏观低速、惯性参考系，分量力属于同一对象及方程“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”。"
          },
          {
            "option": "由速度方向决定加速度方向",
            "wrongObjectOrForces": "以2.0 kg小车受右10 N、左4 N为研究对象，但错误模型未按水平外加力、水平阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "由速度方向决定加速度方向",
            "conflict": "题干应使用“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”，由此得到“得a=3.0 m/s²向右”；错误结果“由速度方向决定加速度方向”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“由速度方向决定加速度方向”所表达的状态作为判定结果，而未检验质量不变、宏观低速、惯性参考系，分量力属于同一对象及方程“2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右”。"
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
            "wrongObjectOrForces": "以500 g=0.500 kg为研究对象，但错误模型未按题设合外力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "2 kg为2 N",
            "conflict": "题干应使用“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²”，由此得到“合力1.5 N时a=1.5/0.500=3.0 m/s²”；错误结果“2 kg为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=2 kg为2 N",
            "wrongSubstitution": "把本题数值500、0.500、1.5、1.5、0.500、3.0按该错误关系计算：X=2 kg为2 N"
          },
          {
            "option": "500 m/s²",
            "wrongObjectOrForces": "以500 g=0.500 kg为研究对象，但错误模型未按题设合外力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "500 m/s²",
            "conflict": "题干应使用“500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²”，由此得到“合力1.5 N时a=1.5/0.500=3.0 m/s²”；错误结果“500 m/s²”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=500 m/s²",
            "wrongSubstitution": "把本题数值500、0.500、1.5、1.5、0.500、3.0按该错误关系计算：X=500 m/s²"
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
            "wrongObjectOrForces": "以2.0 kg物块受8 N拉力和2 N摩擦为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "速度增加10 m/s",
            "conflict": "题干应使用“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”，由此得到“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”；错误结果“速度增加10 m/s”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=速度增加10 m/s",
            "wrongSubstitution": "把本题数值2.0、8、2、8、-2、2按该错误关系计算：X=速度增加10 m/s"
          },
          {
            "option": "拉力等于合力",
            "wrongObjectOrForces": "以2.0 kg物块受8 N拉力和2 N摩擦为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "拉力等于合力",
            "conflict": "题干应使用“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”，由此得到“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”；错误结果“拉力等于合力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“拉力等于合力”所表达的状态作为判定结果，而未检验单对象、分段内合力恒定、地面惯性系及方程“2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”。"
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
            "wrongObjectOrForces": "以1.0 kg小车2 s内由2增至6 m/s为研究对象，但错误模型未按拉力、阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "拉力为13 N",
            "conflict": "题干应使用“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N”，由此得到“得T=3 N”；错误结果“拉力为13 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=拉力为13 N",
            "wrongSubstitution": "把本题数值1.0、2、2、6、2、1按该错误关系计算：X=拉力为13 N"
          },
          {
            "option": "合力等于未知拉力",
            "wrongObjectOrForces": "以1.0 kg小车2 s内由2增至6 m/s为研究对象，但错误模型未按拉力、阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "合力等于未知拉力",
            "conflict": "题干应使用“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N”，由此得到“得T=3 N”；错误结果“合力等于未知拉力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“合力等于未知拉力”所表达的状态作为判定结果，而未检验运动数据和动力学方程对应同一对象、时段和方向及方程“1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N”。"
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
            "wrongObjectOrForces": "以60 kg乘客向上加速2.0 m/s²为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "用速度方向判断超失重",
            "conflict": "题干应使用“60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N”，由此得到“得N=720 N而重力仍600 N”；错误结果“用速度方向判断超失重”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“用速度方向判断超失重”所表达的状态作为判定结果，而未检验地面惯性系、人与秤共同加速并保持接触，g=10 m/s²及方程“60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N”。"
          },
          {
            "option": "失重时重力消失",
            "wrongObjectOrForces": "以60 kg乘客向上加速2.0 m/s²为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "失重时重力消失",
            "conflict": "题干应使用“60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N”，由此得到“得N=720 N而重力仍600 N”；错误结果“失重时重力消失”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“失重时重力消失”所表达的状态作为判定结果，而未检验地面惯性系、人与秤共同加速并保持接触，g=10 m/s²及方程“60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N”。"
          }
        ]
      }
    }
  ]
});
