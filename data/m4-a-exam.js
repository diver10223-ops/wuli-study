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
        "模型判断：把匀速说成不受力",
        "模型判断：把速度当作惯性大小"
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
        "object": "牛顿第一定律、惯性与惯性系",
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
        "unique": "只有选项“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：把匀速说成不受力",
            "wrongObjectOrForces": "仍取牛顿第一定律、惯性与惯性系，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把匀速说成不受力”",
            "wrongResult": "模型判断：把匀速说成不受力",
            "conflict": "该结果不满足正确关系或条件：宏观低速物体、地面近似惯性系且合外力为零"
          },
          {
            "option": "模型判断：把速度当作惯性大小",
            "wrongObjectOrForces": "仍取牛顿第一定律、惯性与惯性系，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把速度当作惯性大小”",
            "wrongResult": "模型判断：把速度当作惯性大小",
            "conflict": "该结果不满足正确关系或条件：宏观低速物体、地面近似惯性系且合外力为零"
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
        "计算结果：把某个拉力直接当合力",
        "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "模型判断：由速度方向决定加速度方向"
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
          "resistance"
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
        "object": "牛顿第二定律三性",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "substitution": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "candidate": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
        "final": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "answerIndex": 1,
        "unique": "只有选项“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把某个拉力直接当合力",
            "wrongObjectOrForces": "仍取牛顿第二定律三性，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把某个拉力直接当合力”",
            "wrongResult": "计算结果：把某个拉力直接当合力",
            "conflict": "该结果不满足正确关系或条件：质量不变、宏观低速、惯性参考系，分量力属于同一对象"
          },
          {
            "option": "模型判断：由速度方向决定加速度方向",
            "wrongObjectOrForces": "仍取牛顿第二定律三性，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：由速度方向决定加速度方向”",
            "wrongResult": "模型判断：由速度方向决定加速度方向",
            "conflict": "该结果不满足正确关系或条件：质量不变、宏观低速、惯性参考系，分量力属于同一对象"
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
        "计算结果：把2 kg写成2 N",
        "模型判断：把克直接代入F=ma",
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
          "applied",
          "resistance"
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
        "object": "国际单位制与量纲",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "substitution": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "candidate": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "constraint": "代入前统一国际单位，等式两边量纲一致",
        "final": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "answerIndex": 2,
        "unique": "只有选项“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把2 kg写成2 N",
            "wrongObjectOrForces": "仍取国际单位制与量纲，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把2 kg写成2 N”",
            "wrongResult": "计算结果：把2 kg写成2 N",
            "conflict": "该结果不满足正确关系或条件：代入前统一国际单位，等式两边量纲一致"
          },
          {
            "option": "模型判断：把克直接代入F=ma",
            "wrongObjectOrForces": "仍取国际单位制与量纲，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把克直接代入F=ma”",
            "wrongResult": "模型判断：把克直接代入F=ma",
            "conflict": "该结果不满足正确关系或条件：代入前统一国际单位，等式两边量纲一致"
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
        "模型判断：漏摩擦",
        "模型判断：把拉力直接当合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "应用",
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
        "target": "model-result",
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
        "equation": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "substitution": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "candidate": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "constraint": "单对象、分段内合力恒定、地面惯性系",
        "final": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "answerIndex": 0,
        "unique": "只有选项“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：漏摩擦",
            "wrongObjectOrForces": "仍取已知受力求运动，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：漏摩擦”",
            "wrongResult": "模型判断：漏摩擦",
            "conflict": "该结果不满足正确关系或条件：单对象、分段内合力恒定、地面惯性系"
          },
          {
            "option": "模型判断：把拉力直接当合力",
            "wrongObjectOrForces": "仍取已知受力求运动，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把拉力直接当合力”",
            "wrongResult": "模型判断：把拉力直接当合力",
            "conflict": "该结果不满足正确关系或条件：单对象、分段内合力恒定、地面惯性系"
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
        "计算结果：把速度当加速度",
        "T-2.0=2.0×2.0，候选T=6.0 N",
        "模型判断：把合力误当未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "应用",
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
        "target": "model-result",
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
        "equation": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N",
        "substitution": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N",
        "candidate": "T-2.0=2.0×2.0，候选T=6.0 N",
        "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
        "final": "T-2.0=2.0×2.0，候选T=6.0 N",
        "answerIndex": 1,
        "unique": "只有选项“T-2.0=2.0×2.0，候选T=6.0 N”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把速度当加速度",
            "wrongObjectOrForces": "仍取已知运动反推受力，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把速度当加速度”",
            "wrongResult": "计算结果：把速度当加速度",
            "conflict": "该结果不满足正确关系或条件：运动数据和动力学方程对应同一对象、时段和方向"
          },
          {
            "option": "模型判断：把合力误当未知拉力",
            "wrongObjectOrForces": "仍取已知运动反推受力，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把合力误当未知拉力”",
            "wrongResult": "模型判断：把合力误当未知拉力",
            "conflict": "该结果不满足正确关系或条件：运动数据和动力学方程对应同一对象、时段和方向"
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
        "计算结果：用速度方向判断超失重",
        "模型判断：认为失重时重力消失",
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
        "object": "超重失重与测力实验",
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
        "unique": "只有选项“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：用速度方向判断超失重",
            "wrongObjectOrForces": "仍取超重失重与测力实验，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：用速度方向判断超失重”",
            "wrongResult": "计算结果：用速度方向判断超失重",
            "conflict": "该结果不满足正确关系或条件：地面惯性系、人与秤共同加速并保持接触，g=10 m/s²"
          },
          {
            "option": "模型判断：认为失重时重力消失",
            "wrongObjectOrForces": "仍取超重失重与测力实验，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为失重时重力消失”",
            "wrongResult": "模型判断：认为失重时重力消失",
            "conflict": "该结果不满足正确关系或条件：地面惯性系、人与秤共同加速并保持接触，g=10 m/s²"
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
        "object": "冰壶",
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
        "unique": "只有选项“仍以撤力瞬间的速度做匀速直线运动”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "立即停下",
            "wrongObjectOrForces": "研究对象仍为冰壶，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“立即停下”，而正确关系为“ΣFx=0，所以a=0；速度保持不变”",
            "wrongSubstitution": "按错误符号或单位代入后得到“立即停下”",
            "wrongResult": "立即停下",
            "conflict": "不满足牛顿第一定律只要求合外力为零，不要求没有力"
          },
          {
            "option": "速度越来越大",
            "wrongObjectOrForces": "研究对象仍为冰壶，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“速度越来越大”，而正确关系为“ΣFx=0，所以a=0；速度保持不变”",
            "wrongSubstitution": "按错误符号或单位代入后得到“速度越来越大”",
            "wrongResult": "速度越来越大",
            "conflict": "不满足牛顿第一定律只要求合外力为零，不要求没有力"
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
          "resistance"
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
        "object": "小车",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "ΣFx<0=ma，所以a向左",
        "substitution": "ΣFx<0=ma，所以a向左",
        "candidate": "向左，与合力同向",
        "constraint": "加速度由同一时刻同一对象的合力决定",
        "final": "向左，与合力同向",
        "answerIndex": 2,
        "unique": "只有选项“向左，与合力同向”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "向右，与速度同向",
            "wrongObjectOrForces": "研究对象仍为小车，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“向右，与速度同向”，而正确关系为“ΣFx<0=ma，所以a向左”",
            "wrongSubstitution": "按错误符号或单位代入后得到“向右，与速度同向”",
            "wrongResult": "向右，与速度同向",
            "conflict": "不满足加速度由同一时刻同一对象的合力决定"
          },
          {
            "option": "为零",
            "wrongObjectOrForces": "研究对象仍为小车，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“为零”，而正确关系为“ΣFx<0=ma，所以a向左”",
            "wrongSubstitution": "按错误符号或单位代入后得到“为零”",
            "wrongResult": "为零",
            "conflict": "不满足加速度由同一时刻同一对象的合力决定"
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
        "把质量写成500 N"
      ],
      "answer": 0,
      "skill": "国际单位制与量纲",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "实验小车",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "2.0 N=0.500 kg·a，得a=4.0 m/s²",
        "substitution": "2.0 N=0.500 kg·a，得a=4.0 m/s²",
        "candidate": "先换成0.500 kg，写2.0=0.500a",
        "constraint": "N是力单位，kg是质量单位",
        "final": "先换成0.500 kg，写2.0=0.500a",
        "answerIndex": 0,
        "unique": "只有选项“先换成0.500 kg，写2.0=0.500a”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "直接写2.0=500a",
            "wrongObjectOrForces": "研究对象仍为实验小车，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“直接写2.0=500a”，而正确关系为“2.0 N=0.500 kg·a，得a=4.0 m/s²”",
            "wrongSubstitution": "按错误符号或单位代入后得到“直接写2.0=500a”",
            "wrongResult": "直接写2.0=500a",
            "conflict": "不满足N是力单位，kg是质量单位"
          },
          {
            "option": "把质量写成500 N",
            "wrongObjectOrForces": "研究对象仍为实验小车，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“把质量写成500 N”，而正确关系为“2.0 N=0.500 kg·a，得a=4.0 m/s²”",
            "wrongSubstitution": "按错误符号或单位代入后得到“把质量写成500 N”",
            "wrongResult": "把质量写成500 N",
            "conflict": "不满足N是力单位，kg是质量单位"
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
          "applied",
          "resistance"
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
        "object": "木箱",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "ΣFx=8-3=5 N，a与合力同向",
        "substitution": "ΣFx=8-3=5 N，a与合力同向",
        "candidate": "合力5 N向右，加速度向右",
        "constraint": "两水平力必须按方向作代数和",
        "final": "合力5 N向右，加速度向右",
        "answerIndex": 1,
        "unique": "只有选项“合力5 N向右，加速度向右”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "合力11 N向右，加速度向右",
            "wrongObjectOrForces": "研究对象仍为木箱，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“合力11 N向右，加速度向右”，而正确关系为“ΣFx=8-3=5 N，a与合力同向”",
            "wrongSubstitution": "按错误符号或单位代入后得到“合力11 N向右，加速度向右”",
            "wrongResult": "合力11 N向右，加速度向右",
            "conflict": "不满足两水平力必须按方向作代数和"
          },
          {
            "option": "合力5 N向左，加速度向左",
            "wrongObjectOrForces": "研究对象仍为木箱，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“合力5 N向左，加速度向左”，而正确关系为“ΣFx=8-3=5 N，a与合力同向”",
            "wrongSubstitution": "按错误符号或单位代入后得到“合力5 N向左，加速度向左”",
            "wrongResult": "合力5 N向左，加速度向左",
            "conflict": "不满足两水平力必须按方向作代数和"
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
          "applied",
          "resistance"
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
        "object": "小车",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右",
        "substitution": "a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右",
        "candidate": "4.0 N向右",
        "constraint": "运动学斜率给加速度，再反求合力",
        "final": "4.0 N向右",
        "answerIndex": 2,
        "unique": "只有选项“4.0 N向右”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "12 N向右",
            "wrongObjectOrForces": "研究对象仍为小车，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“12 N向右”，而正确关系为“a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右”",
            "wrongSubstitution": "按错误符号或单位代入后得到“12 N向右”",
            "wrongResult": "12 N向右",
            "conflict": "不满足运动学斜率给加速度，再反求合力"
          },
          {
            "option": "16 N向右",
            "wrongObjectOrForces": "研究对象仍为小车，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“16 N向右”，而正确关系为“a=(7-1)/3=2.0 m/s²，ΣF=2.0×2.0=4.0 N向右”",
            "wrongSubstitution": "按错误符号或单位代入后得到“16 N向右”",
            "wrongResult": "16 N向右",
            "conflict": "不满足运动学斜率给加速度，再反求合力"
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
        "object": "电梯中的乘客",
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
        "unique": "只有选项“小于重力”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "大于重力",
            "wrongObjectOrForces": "研究对象仍为电梯中的乘客，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“大于重力”，而正确关系为“向上为正，a<0，N-mg=ma，故N<mg”",
            "wrongSubstitution": "按错误符号或单位代入后得到“大于重力”",
            "wrongResult": "大于重力",
            "conflict": "不满足超失重由加速度方向决定而非速度方向"
          },
          {
            "option": "等于重力",
            "wrongObjectOrForces": "研究对象仍为电梯中的乘客，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“等于重力”，而正确关系为“向上为正，a<0，N-mg=ma，故N<mg”",
            "wrongSubstitution": "按错误符号或单位代入后得到“等于重力”",
            "wrongResult": "等于重力",
            "conflict": "不满足超失重由加速度方向决定而非速度方向"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 80 })
});
