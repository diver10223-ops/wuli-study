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
          "重力mg",
          "支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
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
          "重力mg",
          "支持力N",
          "拉力F",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
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
          "合外力F"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
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
          "重力mg",
          "支持力N",
          "拉力F",
          "摩擦力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
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
          "重力mg",
          "支持力N",
          "牵引力T",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
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
          "重力mg",
          "秤的支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
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
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
