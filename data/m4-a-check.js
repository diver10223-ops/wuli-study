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
      "text": "牛顿第一定律、惯性与惯性系即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "故保持匀速",
        "把匀速说成不受力",
        "把速度当作惯性大小"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入ΣFx=0=ma，候选结果为“故保持匀速”",
        "candidate": "故保持匀速",
        "constraint": "质量决定惯性且参考系为惯性系",
        "final": "故保持匀速",
        "answerIndex": 0,
        "unique": "正确项“故保持匀速”同时满足ΣFx=0=ma与质量决定惯性且参考系为惯性系；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把匀速说成不受力",
            "errorModel": "选择“把匀速说成不受力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣFx=0=ma",
            "errorSubstitution": "应使用题中数据代入ΣFx=0=ma",
            "errorResult": "把匀速说成不受力",
            "conflict": "与约束“质量决定惯性且参考系为惯性系”或正确结果“故保持匀速”冲突"
          },
          {
            "option": "把速度当作惯性大小",
            "errorModel": "选择“把速度当作惯性大小”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣFx=0=ma",
            "errorSubstitution": "应使用题中数据代入ΣFx=0=ma",
            "errorResult": "把速度当作惯性大小",
            "conflict": "与约束“质量决定惯性且参考系为惯性系”或正确结果“故保持匀速”冲突"
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
      "text": "牛顿第二定律三性即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "把某个拉力直接当合力",
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
          "重力mg",
          "支持力N",
          "拉力F",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "independent-execution",
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
        "substitution": "按题中数据代入F-f=ma；N-mg=0，候选结果为“得a=3.0 m/s²向右”",
        "candidate": "得a=3.0 m/s²向右",
        "constraint": "所有力属于同一对象",
        "final": "得a=3.0 m/s²向右",
        "answerIndex": 1,
        "unique": "正确项“得a=3.0 m/s²向右”同时满足F-f=ma；N-mg=0与所有力属于同一对象；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把某个拉力直接当合力",
            "errorModel": "选择“把某个拉力直接当合力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；N-mg=0",
            "errorSubstitution": "应使用题中数据代入F-f=ma；N-mg=0",
            "errorResult": "把某个拉力直接当合力",
            "conflict": "与约束“所有力属于同一对象”或正确结果“得a=3.0 m/s²向右”冲突"
          },
          {
            "option": "由速度方向决定加速度方向",
            "errorModel": "选择“由速度方向决定加速度方向”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；N-mg=0",
            "errorSubstitution": "应使用题中数据代入F-f=ma；N-mg=0",
            "errorResult": "由速度方向决定加速度方向",
            "conflict": "与约束“所有力属于同一对象”或正确结果“得a=3.0 m/s²向右”冲突"
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
      "text": "国际单位制与量纲即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "把2 kg写成2 N",
        "把克直接代入F=ma",
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
          "合外力F"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "independent-execution",
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
        "substitution": "按题中数据代入F=ma；1 N=1 kg·m/s²，候选结果为“合力1.5 N时a=1.5/0.500=3.0 m/s²”",
        "candidate": "合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "constraint": "质量用kg且量纲一致",
        "final": "合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "answerIndex": 2,
        "unique": "正确项“合力1.5 N时a=1.5/0.500=3.0 m/s²”同时满足F=ma；1 N=1 kg·m/s²与质量用kg且量纲一致；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把2 kg写成2 N",
            "errorModel": "选择“把2 kg写成2 N”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=ma；1 N=1 kg·m/s²",
            "errorSubstitution": "应使用题中数据代入F=ma；1 N=1 kg·m/s²",
            "errorResult": "把2 kg写成2 N",
            "conflict": "与约束“质量用kg且量纲一致”或正确结果“合力1.5 N时a=1.5/0.500=3.0 m/s²”冲突"
          },
          {
            "option": "把克直接代入F=ma",
            "errorModel": "选择“把克直接代入F=ma”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=ma；1 N=1 kg·m/s²",
            "errorSubstitution": "应使用题中数据代入F=ma；1 N=1 kg·m/s²",
            "errorResult": "把克直接代入F=ma",
            "conflict": "与约束“质量用kg且量纲一致”或正确结果“合力1.5 N时a=1.5/0.500=3.0 m/s²”冲突"
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
      "text": "已知受力求运动即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "漏摩擦",
        "把拉力直接当合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入F-f=ma；v=v0+at，候选结果为“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”",
        "candidate": "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "constraint": "分段内受力恒定",
        "final": "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "answerIndex": 0,
        "unique": "正确项“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”同时满足F-f=ma；v=v0+at与分段内受力恒定；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "漏摩擦",
            "errorModel": "选择“漏摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；v=v0+at",
            "errorSubstitution": "应使用题中数据代入F-f=ma；v=v0+at",
            "errorResult": "漏摩擦",
            "conflict": "与约束“分段内受力恒定”或正确结果“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”冲突"
          },
          {
            "option": "把拉力直接当合力",
            "errorModel": "选择“把拉力直接当合力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma；v=v0+at",
            "errorSubstitution": "应使用题中数据代入F-f=ma；v=v0+at",
            "errorResult": "把拉力直接当合力",
            "conflict": "与约束“分段内受力恒定”或正确结果“8-2=2a得a=3 m/s²；静止2 s后v=6 m/s”冲突"
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
      "text": "已知运动反推受力即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "把速度当加速度",
        "得T=3 N",
        "把合力误当未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入a=Δv/Δt；T-f=ma，候选结果为“得T=3 N”",
        "candidate": "得T=3 N",
        "constraint": "图像与受力对应同一时段",
        "final": "得T=3 N",
        "answerIndex": 1,
        "unique": "正确项“得T=3 N”同时满足a=Δv/Δt；T-f=ma与图像与受力对应同一时段；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把速度当加速度",
            "errorModel": "选择“把速度当加速度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a=Δv/Δt；T-f=ma",
            "errorSubstitution": "应使用题中数据代入a=Δv/Δt；T-f=ma",
            "errorResult": "把速度当加速度",
            "conflict": "与约束“图像与受力对应同一时段”或正确结果“得T=3 N”冲突"
          },
          {
            "option": "把合力误当未知拉力",
            "errorModel": "选择“把合力误当未知拉力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a=Δv/Δt；T-f=ma",
            "errorSubstitution": "应使用题中数据代入a=Δv/Δt；T-f=ma",
            "errorResult": "把合力误当未知拉力",
            "conflict": "与约束“图像与受力对应同一时段”或正确结果“得T=3 N”冲突"
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
      "text": "超重失重与测力实验即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "用速度方向判断超失重",
        "认为失重时重力消失",
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
          "重力mg",
          "秤的支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "independent-execution",
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
        "substitution": "按题中数据代入N-mg=ma，候选结果为“得N=720 N而重力仍600 N”",
        "candidate": "得N=720 N而重力仍600 N",
        "constraint": "N≥0且重力不变",
        "final": "得N=720 N而重力仍600 N",
        "answerIndex": 2,
        "unique": "正确项“得N=720 N而重力仍600 N”同时满足N-mg=ma与N≥0且重力不变；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "用速度方向判断超失重",
            "errorModel": "选择“用速度方向判断超失重”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma",
            "errorSubstitution": "应使用题中数据代入N-mg=ma",
            "errorResult": "用速度方向判断超失重",
            "conflict": "与约束“N≥0且重力不变”或正确结果“得N=720 N而重力仍600 N”冲突"
          },
          {
            "option": "认为失重时重力消失",
            "errorModel": "选择“认为失重时重力消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma",
            "errorSubstitution": "应使用题中数据代入N-mg=ma",
            "errorResult": "认为失重时重力消失",
            "conflict": "与约束“N≥0且重力不变”或正确结果“得N=720 N而重力仍600 N”冲突"
          }
        ]
      }
    }
  ]
});
