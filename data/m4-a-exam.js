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
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确？",
      "options": [
        "工具箱仍有惯性，惯性由质量决定",
        "相对舱静止所以惯性为零",
        "失重使质量和惯性同时消失"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "基础判别",
      "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "冰壶或车辆",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "ΣFx=0=ma",
        "substitution": "按题中数据代入ΣFx=0=ma，候选结果为“工具箱仍有惯性，惯性由质量决定”",
        "candidate": "工具箱仍有惯性，惯性由质量决定",
        "constraint": "质量决定惯性且参考系为惯性系",
        "final": "工具箱仍有惯性，惯性由质量决定",
        "answerIndex": 0,
        "unique": "正确项“工具箱仍有惯性，惯性由质量决定”同时满足ΣFx=0=ma与质量决定惯性且参考系为惯性系；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "相对舱静止所以惯性为零",
            "errorModel": "选择“相对舱静止所以惯性为零”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣFx=0=ma",
            "errorSubstitution": "应使用题中数据代入ΣFx=0=ma",
            "errorResult": "相对舱静止所以惯性为零",
            "conflict": "与约束“质量决定惯性且参考系为惯性系”或正确结果“工具箱仍有惯性，惯性由质量决定”冲突"
          },
          {
            "option": "失重使质量和惯性同时消失",
            "errorModel": "选择“失重使质量和惯性同时消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣFx=0=ma",
            "errorSubstitution": "应使用题中数据代入ΣFx=0=ma",
            "errorResult": "失重使质量和惯性同时消失",
            "conflict": "与约束“质量决定惯性且参考系为惯性系”或正确结果“工具箱仍有惯性，惯性由质量决定”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE02",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s 该模型的最终结论是什么？",
      "options": [
        "把匀速说成不受力",
        "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "把速度当作惯性大小"
      ],
      "answer": 1,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "综合建模",
      "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "冰壶或车辆",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "ΣFx=0=ma",
        "substitution": "按题中数据代入ΣFx=0=ma，候选结果为“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”",
        "candidate": "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "constraint": "质量决定惯性且参考系为惯性系",
        "final": "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "answerIndex": 1,
        "unique": "正确项“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”同时满足ΣFx=0=ma与质量决定惯性且参考系为惯性系；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把匀速说成不受力",
            "errorModel": "选择“把匀速说成不受力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣFx=0=ma",
            "errorSubstitution": "应使用题中数据代入ΣFx=0=ma",
            "errorResult": "把匀速说成不受力",
            "conflict": "与约束“质量决定惯性且参考系为惯性系”或正确结果“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”冲突"
          },
          {
            "option": "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
            "errorModel": "选择“把速度当作惯性大小”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣFx=0=ma",
            "errorSubstitution": "应使用题中数据代入ΣFx=0=ma",
            "errorResult": "把速度当作惯性大小",
            "conflict": "与约束“质量决定惯性且参考系为惯性系”或正确结果“候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE03",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。向右运动的球受恒定向左合力，瞬时加速度怎样？",
      "options": [
        "必须等球停下后才有向左加速度",
        "加速度立即向左，速度可暂时仍向右",
        "加速度因速度向右而向右"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "基础判别",
      "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "拉力F",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "水平小车",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "拉力F",
          "阻力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F-f=ma；N-mg=0",
        "substitution": "按题中数据代入F-f=ma；N-mg=0，候选结果为“加速度立即向左，速度可暂时仍向右”",
        "candidate": "加速度立即向左，速度可暂时仍向右",
        "constraint": "所有力属于同一对象",
        "final": "加速度立即向左，速度可暂时仍向右",
        "answerIndex": 1,
        "unique": "正确项“加速度立即向左，速度可暂时仍向右”同时满足F-f=ma；N-mg=0与所有力属于同一对象；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "必须等球停下后才有向左加速度",
            "errorModel": "选择“必须等球停下后才有向左加速度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；N-mg=0",
            "errorSubstitution": "应使用题中数据代入F-f=ma；N-mg=0",
            "errorResult": "必须等球停下后才有向左加速度",
            "conflict": "与约束“所有力属于同一对象”或正确结果“加速度立即向左，速度可暂时仍向右”冲突"
          },
          {
            "option": "加速度因速度向右而向右",
            "errorModel": "选择“加速度因速度向右而向右”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；N-mg=0",
            "errorSubstitution": "应使用题中数据代入F-f=ma；N-mg=0",
            "errorResult": "加速度因速度向右而向右",
            "conflict": "与约束“所有力属于同一对象”或正确结果“加速度立即向左，速度可暂时仍向右”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE04",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0 该模型的最终结论是什么？",
      "options": [
        "把某个拉力直接当合力",
        "由速度方向决定加速度方向",
        "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0"
      ],
      "answer": 2,
      "skill": "牛顿第二定律三性",
      "level": "综合建模",
      "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "拉力F",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "水平小车",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "拉力F",
          "阻力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F-f=ma；N-mg=0",
        "substitution": "按题中数据代入F-f=ma；N-mg=0，候选结果为“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”",
        "candidate": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "constraint": "所有力属于同一对象",
        "final": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "answerIndex": 2,
        "unique": "正确项“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”同时满足F-f=ma；N-mg=0与所有力属于同一对象；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把某个拉力直接当合力",
            "errorModel": "选择“把某个拉力直接当合力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；N-mg=0",
            "errorSubstitution": "应使用题中数据代入F-f=ma；N-mg=0",
            "errorResult": "把某个拉力直接当合力",
            "conflict": "与约束“所有力属于同一对象”或正确结果“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”冲突"
          },
          {
            "option": "由速度方向决定加速度方向",
            "errorModel": "选择“由速度方向决定加速度方向”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；N-mg=0",
            "errorSubstitution": "应使用题中数据代入F-f=ma；N-mg=0",
            "errorResult": "由速度方向决定加速度方向",
            "conflict": "与约束“所有力属于同一对象”或正确结果“12-3=3.0a，得a=3.0 m/s²，N=30 N≥0”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE05",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。一力使250 g物体产生4.0 m/s²加速度，该力应为多少？",
      "options": [
        "1000 N",
        "0.0625 N",
        "1.0 N"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "基础判别",
      "constraint": "代入前统一国际单位，等式两边量纲一致",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "合外力F"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "单位换算后的物体",
        "frame": "地面惯性系",
        "forces": [
          "合外力F"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F=ma；1 N=1 kg·m/s²",
        "substitution": "按题中数据代入F=ma；1 N=1 kg·m/s²，候选结果为“1.0 N”",
        "candidate": "1.0 N",
        "constraint": "质量用kg且量纲一致",
        "final": "1.0 N",
        "answerIndex": 2,
        "unique": "正确项“1.0 N”同时满足F=ma；1 N=1 kg·m/s²与质量用kg且量纲一致；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "1000 N",
            "errorModel": "选择“1000 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=ma；1 N=1 kg·m/s²",
            "errorSubstitution": "应使用题中数据代入F=ma；1 N=1 kg·m/s²",
            "errorResult": "1000 N",
            "conflict": "与约束“质量用kg且量纲一致”或正确结果“1.0 N”冲突"
          },
          {
            "option": "0.0625 N",
            "errorModel": "选择“0.0625 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=ma；1 N=1 kg·m/s²",
            "errorSubstitution": "应使用题中数据代入F=ma；1 N=1 kg·m/s²",
            "errorResult": "0.0625 N",
            "conflict": "与约束“质量用kg且量纲一致”或正确结果“1.0 N”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE06",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立 该模型的最终结论是什么？",
      "options": [
        "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "把2 kg写成2 N",
        "把克直接代入F=ma"
      ],
      "answer": 0,
      "skill": "国际单位制与量纲",
      "level": "综合建模",
      "constraint": "代入前统一国际单位，等式两边量纲一致",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "合外力F"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "单位换算后的物体",
        "frame": "地面惯性系",
        "forces": [
          "合外力F"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F=ma；1 N=1 kg·m/s²",
        "substitution": "按题中数据代入F=ma；1 N=1 kg·m/s²，候选结果为“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”",
        "candidate": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "constraint": "质量用kg且量纲一致",
        "final": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "answerIndex": 0,
        "unique": "正确项“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”同时满足F=ma；1 N=1 kg·m/s²与质量用kg且量纲一致；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
            "errorModel": "选择“把2 kg写成2 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=ma；1 N=1 kg·m/s²",
            "errorSubstitution": "应使用题中数据代入F=ma；1 N=1 kg·m/s²",
            "errorResult": "把2 kg写成2 N",
            "conflict": "与约束“质量用kg且量纲一致”或正确结果“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”冲突"
          },
          {
            "option": "把2 kg写成2 N",
            "errorModel": "选择“把克直接代入F=ma”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=ma；1 N=1 kg·m/s²",
            "errorSubstitution": "应使用题中数据代入F=ma；1 N=1 kg·m/s²",
            "errorResult": "把克直接代入F=ma",
            "conflict": "与约束“质量用kg且量纲一致”或正确结果“0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE07",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少？",
      "options": [
        "3.0 m/s",
        "5.0 m/s",
        "7.0 m/s"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "基础判别",
      "constraint": "单对象、分段内合力恒定、地面惯性系",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "拉力F",
          "摩擦力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "水平木箱",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "拉力F",
          "摩擦力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F-f=ma；v=v0+at",
        "substitution": "按题中数据代入F-f=ma；v=v0+at，候选结果为“3.0 m/s”",
        "candidate": "3.0 m/s",
        "constraint": "分段内受力恒定",
        "final": "3.0 m/s",
        "answerIndex": 0,
        "unique": "正确项“3.0 m/s”同时满足F-f=ma；v=v0+at与分段内受力恒定；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "5.0 m/s",
            "errorModel": "选择“5.0 m/s”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；v=v0+at",
            "errorSubstitution": "应使用题中数据代入F-f=ma；v=v0+at",
            "errorResult": "5.0 m/s",
            "conflict": "与约束“分段内受力恒定”或正确结果“3.0 m/s”冲突"
          },
          {
            "option": "7.0 m/s",
            "errorModel": "选择“7.0 m/s”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；v=v0+at",
            "errorSubstitution": "应使用题中数据代入F-f=ma；v=v0+at",
            "errorResult": "7.0 m/s",
            "conflict": "与约束“分段内受力恒定”或正确结果“3.0 m/s”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE08",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负 该模型的最终结论是什么？",
      "options": [
        "漏摩擦",
        "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "把拉力直接当合力"
      ],
      "answer": 1,
      "skill": "已知受力求运动",
      "level": "综合建模",
      "constraint": "单对象、分段内合力恒定、地面惯性系",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "拉力F",
          "摩擦力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "水平木箱",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "拉力F",
          "摩擦力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F-f=ma；v=v0+at",
        "substitution": "按题中数据代入F-f=ma；v=v0+at，候选结果为“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”",
        "candidate": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "constraint": "分段内受力恒定",
        "final": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "answerIndex": 1,
        "unique": "正确项“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”同时满足F-f=ma；v=v0+at与分段内受力恒定；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "漏摩擦",
            "errorModel": "选择“漏摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；v=v0+at",
            "errorSubstitution": "应使用题中数据代入F-f=ma；v=v0+at",
            "errorResult": "漏摩擦",
            "conflict": "与约束“分段内受力恒定”或正确结果“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”冲突"
          },
          {
            "option": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
            "errorModel": "选择“把拉力直接当合力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；v=v0+at",
            "errorSubstitution": "应使用题中数据代入F-f=ma；v=v0+at",
            "errorResult": "把拉力直接当合力",
            "conflict": "与约束“分段内受力恒定”或正确结果“20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE09",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大？",
      "options": [
        "3.0 N",
        "4.0 N",
        "2.0 N"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "基础判别",
      "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "牵引力T",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "由运动图像描述的小车",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "牵引力T",
          "阻力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "a=Δv/Δt；T-f=ma",
        "substitution": "按题中数据代入a=Δv/Δt；T-f=ma，候选结果为“4.0 N”",
        "candidate": "4.0 N",
        "constraint": "图像与受力对应同一时段",
        "final": "4.0 N",
        "answerIndex": 1,
        "unique": "正确项“4.0 N”同时满足a=Δv/Δt；T-f=ma与图像与受力对应同一时段；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "3.0 N",
            "errorModel": "选择“3.0 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a=Δv/Δt；T-f=ma",
            "errorSubstitution": "应使用题中数据代入a=Δv/Δt；T-f=ma",
            "errorResult": "3.0 N",
            "conflict": "与约束“图像与受力对应同一时段”或正确结果“4.0 N”冲突"
          },
          {
            "option": "2.0 N",
            "errorModel": "选择“2.0 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a=Δv/Δt；T-f=ma",
            "errorSubstitution": "应使用题中数据代入a=Δv/Δt；T-f=ma",
            "errorResult": "2.0 N",
            "conflict": "与约束“图像与受力对应同一时段”或正确结果“4.0 N”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE10",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N 该模型的最终结论是什么？",
      "options": [
        "把速度当加速度",
        "把合力误当未知拉力",
        "T-2.0=2.0×2.0，候选T=6.0 N"
      ],
      "answer": 2,
      "skill": "已知运动反推受力",
      "level": "综合建模",
      "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "牵引力T",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "由运动图像描述的小车",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "牵引力T",
          "阻力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "a=Δv/Δt；T-f=ma",
        "substitution": "按题中数据代入a=Δv/Δt；T-f=ma，候选结果为“T-2.0=2.0×2.0，候选T=6.0 N”",
        "candidate": "T-2.0=2.0×2.0，候选T=6.0 N",
        "constraint": "图像与受力对应同一时段",
        "final": "T-2.0=2.0×2.0，候选T=6.0 N",
        "answerIndex": 2,
        "unique": "正确项“T-2.0=2.0×2.0，候选T=6.0 N”同时满足a=Δv/Δt；T-f=ma与图像与受力对应同一时段；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把速度当加速度",
            "errorModel": "选择“把速度当加速度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a=Δv/Δt；T-f=ma",
            "errorSubstitution": "应使用题中数据代入a=Δv/Δt；T-f=ma",
            "errorResult": "把速度当加速度",
            "conflict": "与约束“图像与受力对应同一时段”或正确结果“T-2.0=2.0×2.0，候选T=6.0 N”冲突"
          },
          {
            "option": "把合力误当未知拉力",
            "errorModel": "选择“把合力误当未知拉力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a=Δv/Δt；T-f=ma",
            "errorSubstitution": "应使用题中数据代入a=Δv/Δt；T-f=ma",
            "errorResult": "把合力误当未知拉力",
            "conflict": "与约束“图像与受力对应同一时段”或正确结果“T-2.0=2.0×2.0，候选T=6.0 N”冲突"
          }
        ]
      }
    },
    {
      "id": "M4AE11",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少？",
      "options": [
        "450 N",
        "500 N",
        "550 N"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "基础判别",
      "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "秤的支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "电梯内乘客",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "秤的支持力N"
        ],
        "axis": "竖直向上为正",
        "equation": "N-mg=ma",
        "substitution": "按题中数据代入N-mg=ma，候选结果为“550 N”",
        "candidate": "550 N",
        "constraint": "N≥0且重力不变",
        "final": "550 N",
        "answerIndex": 2,
        "unique": "正确项“550 N”同时满足N-mg=ma与N≥0且重力不变；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "450 N",
            "errorModel": "选择“450 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma",
            "errorSubstitution": "应使用题中数据代入N-mg=ma",
            "errorResult": "450 N",
            "conflict": "与约束“N≥0且重力不变”或正确结果“550 N”冲突"
          },
          {
            "option": "500 N",
            "errorModel": "选择“500 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma",
            "errorSubstitution": "应使用题中数据代入N-mg=ma",
            "errorResult": "500 N",
            "conflict": "与约束“N≥0且重力不变”或正确结果“550 N”冲突"
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
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N 该模型的最终结论是什么？",
      "options": [
        "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "用速度方向判断超失重",
        "认为失重时重力消失"
      ],
      "answer": 0,
      "skill": "超重失重与测力实验",
      "level": "综合建模",
      "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "秤的支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "电梯内乘客",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "秤的支持力N"
        ],
        "axis": "竖直向上为正",
        "equation": "N-mg=ma",
        "substitution": "按题中数据代入N-mg=ma，候选结果为“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”",
        "candidate": "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "constraint": "N≥0且重力不变",
        "final": "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "answerIndex": 0,
        "unique": "正确项“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”同时满足N-mg=ma与N≥0且重力不变；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
            "errorModel": "选择“用速度方向判断超失重”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma",
            "errorSubstitution": "应使用题中数据代入N-mg=ma",
            "errorResult": "用速度方向判断超失重",
            "conflict": "与约束“N≥0且重力不变”或正确结果“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”冲突"
          },
          {
            "option": "用速度方向判断超失重",
            "errorModel": "选择“认为失重时重力消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma",
            "errorSubstitution": "应使用题中数据代入N-mg=ma",
            "errorResult": "认为失重时重力消失",
            "conflict": "与约束“N≥0且重力不变”或正确结果“向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N”冲突"
          }
        ]
      }
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 80 })
});
