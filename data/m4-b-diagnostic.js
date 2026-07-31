window.M4BDiagnostic=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-diagnostic-v1",
  "passCorrect": 5,
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-exam-v1",
      "label": "前轨正式卷未通过"
    }
  ],
  "passTitle": "B轨诊断通过",
  "failTitle": "需回补前置",
  "initialPlan": "提交后生成节点路线。",
  "passPlan": "进入知识学习。",
  "failPlan": "返回失败节点。",
  "questions": [
    {
      "id": "M4BD01",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "核心边界",
      "novel": false,
      "text": "求两物块共同加速度，先选什么研究对象可消去内力？",
      "options": [
        "两物块整体",
        "把内力列入整体式",
        "求内力时不隔离"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "先备",
      "constraint": "物体保持共同加速度；整体只列外力",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "重力",
          "支持力",
          "外力F",
          "内力N12"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "相接的两物块",
        "frame": "地面惯性系",
        "forces": [
          "重力",
          "支持力",
          "外力F",
          "内力N12"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F=(m1+m2)a；N12=m2a",
        "substitution": "按题中数据代入F=(m1+m2)a；N12=m2a，候选结果为“两物块整体”",
        "candidate": "两物块整体",
        "constraint": "共同加速且内力不列入整体式",
        "final": "两物块整体",
        "answerIndex": 0,
        "unique": "正确项“两物块整体”同时满足F=(m1+m2)a；N12=m2a与共同加速且内力不列入整体式；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把内力列入整体式",
            "errorModel": "选择“把内力列入整体式”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；N12=m2a",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；N12=m2a",
            "errorResult": "把内力列入整体式",
            "conflict": "与约束“共同加速且内力不列入整体式”或正确结果“两物块整体”冲突"
          },
          {
            "option": "求内力时不隔离",
            "errorModel": "选择“求内力时不隔离”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；N12=m2a",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；N12=m2a",
            "errorResult": "求内力时不隔离",
            "conflict": "与约束“共同加速且内力不列入整体式”或正确结果“两物块整体”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BD02",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": false,
      "text": "轻绳模型算得T=-2 N应怎样处理？",
      "options": [
        "保留负张力",
        "判绳松弛并切换模型",
        "把弹簧两端加速度强制相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "先备",
      "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "重力",
          "支持力",
          "外力F",
          "张力T或弹簧力kx"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "轻绳、轻杆或弹簧连接体",
        "frame": "地面惯性系",
        "forces": [
          "重力",
          "支持力",
          "外力F",
          "张力T或弹簧力kx"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F=(m1+m2)a；T=ma或kx=ma",
        "substitution": "按题中数据代入F=(m1+m2)a；T=ma或kx=ma，候选结果为“判绳松弛并切换模型”",
        "candidate": "判绳松弛并切换模型",
        "constraint": "T≥0且弹簧在弹性限度内",
        "final": "判绳松弛并切换模型",
        "answerIndex": 1,
        "unique": "正确项“判绳松弛并切换模型”同时满足F=(m1+m2)a；T=ma或kx=ma与T≥0且弹簧在弹性限度内；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "保留负张力",
            "errorModel": "选择“保留负张力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；T=ma或kx=ma",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；T=ma或kx=ma",
            "errorResult": "保留负张力",
            "conflict": "与约束“T≥0且弹簧在弹性限度内”或正确结果“判绳松弛并切换模型”冲突"
          },
          {
            "option": "把弹簧两端加速度强制相同",
            "errorModel": "选择“把弹簧两端加速度强制相同”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；T=ma或kx=ma",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；T=ma或kx=ma",
            "errorResult": "把弹簧两端加速度强制相同",
            "conflict": "与约束“T≥0且弹簧在弹性限度内”或正确结果“判绳松弛并切换模型”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BD03",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": false,
      "text": "单侧接触算得N<0应怎样处理？",
      "options": [
        "保留负支持力",
        "认为N=0时重力消失",
        "舍弃候选并切换为分离模型"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "先备",
      "constraint": "接触面只推不拉，候选N<0必须舍弃",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "平台上的物块",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "N-mg=ma且N≥0",
        "substitution": "按题中数据代入N-mg=ma且N≥0，候选结果为“舍弃候选并切换为分离模型”",
        "candidate": "舍弃候选并切换为分离模型",
        "constraint": "N≥0，N=0切换",
        "final": "舍弃候选并切换为分离模型",
        "answerIndex": 2,
        "unique": "正确项“舍弃候选并切换为分离模型”同时满足N-mg=ma且N≥0与N≥0，N=0切换；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "保留负支持力",
            "errorModel": "选择“保留负支持力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "保留负支持力",
            "conflict": "与约束“N≥0，N=0切换”或正确结果“舍弃候选并切换为分离模型”冲突"
          },
          {
            "option": "认为N=0时重力消失",
            "errorModel": "选择“认为N=0时重力消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "认为N=0时重力消失",
            "conflict": "与约束“N≥0，N=0切换”或正确结果“舍弃候选并切换为分离模型”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BD04",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": false,
      "text": "判定箱子能否随车共同运动要比较哪两个量？",
      "options": [
        "所需静摩擦与最大静摩擦",
        "未达上限就写f=μsN",
        "滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "先备",
      "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "静摩擦fs"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "加速车厢内木箱",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "静摩擦fs"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "fs=ma且|fs|≤μsN",
        "substitution": "按题中数据代入fs=ma且|fs|≤μsN，候选结果为“所需静摩擦与最大静摩擦”",
        "candidate": "所需静摩擦与最大静摩擦",
        "constraint": "需求静摩擦不超过上限",
        "final": "所需静摩擦与最大静摩擦",
        "answerIndex": 0,
        "unique": "正确项“所需静摩擦与最大静摩擦”同时满足fs=ma且|fs|≤μsN与需求静摩擦不超过上限；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "未达上限就写f=μsN",
            "errorModel": "选择“未达上限就写f=μsN”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足fs=ma且|fs|≤μsN",
            "errorSubstitution": "应使用题中数据代入fs=ma且|fs|≤μsN",
            "errorResult": "未达上限就写f=μsN",
            "conflict": "与约束“需求静摩擦不超过上限”或正确结果“所需静摩擦与最大静摩擦”冲突"
          },
          {
            "option": "滑后仍用静摩擦",
            "errorModel": "选择“滑后仍用静摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足fs=ma且|fs|≤μsN",
            "errorSubstitution": "应使用题中数据代入fs=ma且|fs|≤μsN",
            "errorResult": "滑后仍用静摩擦",
            "conflict": "与约束“需求静摩擦不超过上限”或正确结果“所需静摩擦与最大静摩擦”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BD05",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": false,
      "text": "包裹比传送带慢时摩擦方向依据什么？",
      "options": [
        "只看对地速度定摩擦",
        "相对运动或趋势",
        "忽略达到带速后的切换"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "先备",
      "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "摩擦力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "传送带或板块上的物块",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "摩擦力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "f=ma；v=v0+at并在同速时切换",
        "substitution": "按题中数据代入f=ma；v=v0+at并在同速时切换，候选结果为“相对运动或趋势”",
        "candidate": "相对运动或趋势",
        "constraint": "相对速度为零时重建状态",
        "final": "相对运动或趋势",
        "answerIndex": 1,
        "unique": "正确项“相对运动或趋势”同时满足f=ma；v=v0+at并在同速时切换与相对速度为零时重建状态；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "只看对地速度定摩擦",
            "errorModel": "选择“只看对地速度定摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足f=ma；v=v0+at并在同速时切换",
            "errorSubstitution": "应使用题中数据代入f=ma；v=v0+at并在同速时切换",
            "errorResult": "只看对地速度定摩擦",
            "conflict": "与约束“相对速度为零时重建状态”或正确结果“相对运动或趋势”冲突"
          },
          {
            "option": "忽略达到带速后的切换",
            "errorModel": "选择“忽略达到带速后的切换”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足f=ma；v=v0+at并在同速时切换",
            "errorSubstitution": "应使用题中数据代入f=ma；v=v0+at并在同速时切换",
            "errorResult": "忽略达到带速后的切换",
            "conflict": "与约束“相对速度为零时重建状态”或正确结果“相对运动或趋势”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BD06",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": false,
      "text": "a-F图不过原点，哪项系统误差可以被检验？",
      "options": [
        "把平衡摩擦说成消除摩擦",
        "把截距都当随机误差",
        "残余摩擦或未计系统质量"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "先备",
      "constraint": "控制质量或合力，拟合数据对应同一系统边界",
      "structure": {
        "objectType": "experiment-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力",
          "支持力",
          "牵引力F",
          "阻力f"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 2
      },
      "review": {
        "object": "小车—砝码实验系统",
        "frame": "地面惯性系",
        "forces": [
          "重力",
          "支持力",
          "牵引力F",
          "阻力f"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "F-f=ma，斜率=1/m",
        "substitution": "按题中数据代入F-f=ma，斜率=1/m，候选结果为“残余摩擦或未计系统质量”",
        "candidate": "残余摩擦或未计系统质量",
        "constraint": "拟合对应同一系统质量",
        "final": "残余摩擦或未计系统质量",
        "answerIndex": 2,
        "unique": "正确项“残余摩擦或未计系统质量”同时满足F-f=ma，斜率=1/m与拟合对应同一系统质量；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把平衡摩擦说成消除摩擦",
            "errorModel": "选择“把平衡摩擦说成消除摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma，斜率=1/m",
            "errorSubstitution": "应使用题中数据代入F-f=ma，斜率=1/m",
            "errorResult": "把平衡摩擦说成消除摩擦",
            "conflict": "与约束“拟合对应同一系统质量”或正确结果“残余摩擦或未计系统质量”冲突"
          },
          {
            "option": "把截距都当随机误差",
            "errorModel": "选择“把截距都当随机误差”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma，斜率=1/m",
            "errorSubstitution": "应使用题中数据代入F-f=ma，斜率=1/m",
            "errorResult": "把截距都当随机误差",
            "conflict": "与约束“拟合对应同一系统质量”或正确结果“残余摩擦或未计系统质量”冲突"
          }
        ]
      }
    }
  ]
});
