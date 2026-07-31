window.M4BCheck=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-check-v1",
  "durationSeconds": 1800,
  "reviewDays": 7,
  "passTitle": "B轨check通过",
  "failTitle": "B轨check未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-b-learning-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 75,
  "questions": [
    {
      "id": "M4BC01",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "核心边界",
      "novel": false,
      "text": "整体法与隔离法即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "把内力列入整体式",
        "求内力时不隔离"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "理解",
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
        "target": "independent-execution",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
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
        "substitution": "按题中数据代入F=(m1+m2)a；N12=m2a，候选结果为“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”",
        "candidate": "整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "constraint": "共同加速且内力不列入整体式",
        "final": "整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "answerIndex": 0,
        "unique": "正确项“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”同时满足F=(m1+m2)a；N12=m2a与共同加速且内力不列入整体式；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把内力列入整体式",
            "errorModel": "选择“把内力列入整体式”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；N12=m2a",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；N12=m2a",
            "errorResult": "把内力列入整体式",
            "conflict": "与约束“共同加速且内力不列入整体式”或正确结果“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”冲突"
          },
          {
            "option": "求内力时不隔离",
            "errorModel": "选择“求内力时不隔离”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；N12=m2a",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；N12=m2a",
            "errorResult": "求内力时不隔离",
            "conflict": "与约束“共同加速且内力不列入整体式”或正确结果“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BC02",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": false,
      "text": "轻绳轻杆弹簧约束即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "保留负张力",
        "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "把弹簧两端加速度强制相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "理解",
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
        "target": "independent-execution",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
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
        "substitution": "按题中数据代入F=(m1+m2)a；T=ma或kx=ma，候选结果为“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”",
        "candidate": "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "constraint": "T≥0且弹簧在弹性限度内",
        "final": "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "answerIndex": 1,
        "unique": "正确项“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”同时满足F=(m1+m2)a；T=ma或kx=ma与T≥0且弹簧在弹性限度内；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "保留负张力",
            "errorModel": "选择“保留负张力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；T=ma或kx=ma",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；T=ma或kx=ma",
            "errorResult": "保留负张力",
            "conflict": "与约束“T≥0且弹簧在弹性限度内”或正确结果“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”冲突"
          },
          {
            "option": "把弹簧两端加速度强制相同",
            "errorModel": "选择“把弹簧两端加速度强制相同”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；T=ma或kx=ma",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；T=ma或kx=ma",
            "errorResult": "把弹簧两端加速度强制相同",
            "conflict": "与约束“T≥0且弹簧在弹性限度内”或正确结果“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BC03",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": false,
      "text": "临界分离与接触切换即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "保留负支持力",
        "认为N=0时重力消失",
        "继续要求更大加速度则分离"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "理解",
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
        "target": "independent-execution",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 3
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
        "substitution": "按题中数据代入N-mg=ma且N≥0，候选结果为“继续要求更大加速度则分离”",
        "candidate": "继续要求更大加速度则分离",
        "constraint": "N≥0，N=0切换",
        "final": "继续要求更大加速度则分离",
        "answerIndex": 2,
        "unique": "正确项“继续要求更大加速度则分离”同时满足N-mg=ma且N≥0与N≥0，N=0切换；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "保留负支持力",
            "errorModel": "选择“保留负支持力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "保留负支持力",
            "conflict": "与约束“N≥0，N=0切换”或正确结果“继续要求更大加速度则分离”冲突"
          },
          {
            "option": "认为N=0时重力消失",
            "errorModel": "选择“认为N=0时重力消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "认为N=0时重力消失",
            "conflict": "与约束“N≥0，N=0切换”或正确结果“继续要求更大加速度则分离”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BC04",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": false,
      "text": "临界滑动与静摩擦需求即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "故共同加速度上限3.0 m/s²",
        "未达上限就写f=μsN",
        "滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "理解",
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
        "target": "independent-execution",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 3
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
        "substitution": "按题中数据代入fs=ma且|fs|≤μsN，候选结果为“故共同加速度上限3.0 m/s²”",
        "candidate": "故共同加速度上限3.0 m/s²",
        "constraint": "需求静摩擦不超过上限",
        "final": "故共同加速度上限3.0 m/s²",
        "answerIndex": 0,
        "unique": "正确项“故共同加速度上限3.0 m/s²”同时满足fs=ma且|fs|≤μsN与需求静摩擦不超过上限；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "未达上限就写f=μsN",
            "errorModel": "选择“未达上限就写f=μsN”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足fs=ma且|fs|≤μsN",
            "errorSubstitution": "应使用题中数据代入fs=ma且|fs|≤μsN",
            "errorResult": "未达上限就写f=μsN",
            "conflict": "与约束“需求静摩擦不超过上限”或正确结果“故共同加速度上限3.0 m/s²”冲突"
          },
          {
            "option": "滑后仍用静摩擦",
            "errorModel": "选择“滑后仍用静摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足fs=ma且|fs|≤μsN",
            "errorSubstitution": "应使用题中数据代入fs=ma且|fs|≤μsN",
            "errorResult": "滑后仍用静摩擦",
            "conflict": "与约束“需求静摩擦不超过上限”或正确结果“故共同加速度上限3.0 m/s²”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BC05",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": false,
      "text": "传送带板块分段动力学即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "只看对地速度定摩擦",
        "2 s达到带速后改为匀速",
        "忽略达到带速后的切换"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "理解",
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
        "target": "independent-execution",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 3
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
        "substitution": "按题中数据代入f=ma；v=v0+at并在同速时切换，候选结果为“2 s达到带速后改为匀速”",
        "candidate": "2 s达到带速后改为匀速",
        "constraint": "相对速度为零时重建状态",
        "final": "2 s达到带速后改为匀速",
        "answerIndex": 1,
        "unique": "正确项“2 s达到带速后改为匀速”同时满足f=ma；v=v0+at并在同速时切换与相对速度为零时重建状态；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "只看对地速度定摩擦",
            "errorModel": "选择“只看对地速度定摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足f=ma；v=v0+at并在同速时切换",
            "errorSubstitution": "应使用题中数据代入f=ma；v=v0+at并在同速时切换",
            "errorResult": "只看对地速度定摩擦",
            "conflict": "与约束“相对速度为零时重建状态”或正确结果“2 s达到带速后改为匀速”冲突"
          },
          {
            "option": "忽略达到带速后的切换",
            "errorModel": "选择“忽略达到带速后的切换”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足f=ma；v=v0+at并在同速时切换",
            "errorSubstitution": "应使用题中数据代入f=ma；v=v0+at并在同速时切换",
            "errorResult": "忽略达到带速后的切换",
            "conflict": "与约束“相对速度为零时重建状态”或正确结果“2 s达到带速后改为匀速”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BC06",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": false,
      "text": "动力学实验图像与误差即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "把平衡摩擦说成消除摩擦",
        "把截距都当随机误差",
        "F轴截距0.20 N提示残余阻力"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "理解",
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
        "target": "independent-execution",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 3
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
        "substitution": "按题中数据代入F-f=ma，斜率=1/m，候选结果为“F轴截距0.20 N提示残余阻力”",
        "candidate": "F轴截距0.20 N提示残余阻力",
        "constraint": "拟合对应同一系统质量",
        "final": "F轴截距0.20 N提示残余阻力",
        "answerIndex": 2,
        "unique": "正确项“F轴截距0.20 N提示残余阻力”同时满足F-f=ma，斜率=1/m与拟合对应同一系统质量；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把平衡摩擦说成消除摩擦",
            "errorModel": "选择“把平衡摩擦说成消除摩擦”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma，斜率=1/m",
            "errorSubstitution": "应使用题中数据代入F-f=ma，斜率=1/m",
            "errorResult": "把平衡摩擦说成消除摩擦",
            "conflict": "与约束“拟合对应同一系统质量”或正确结果“F轴截距0.20 N提示残余阻力”冲突"
          },
          {
            "option": "把截距都当随机误差",
            "errorModel": "选择“把截距都当随机误差”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma，斜率=1/m",
            "errorSubstitution": "应使用题中数据代入F-f=ma，斜率=1/m",
            "errorResult": "把截距都当随机误差",
            "conflict": "与约束“拟合对应同一系统质量”或正确结果“F轴截距0.20 N提示残余阻力”冲突"
          }
        ]
      }
    }
  ]
});
