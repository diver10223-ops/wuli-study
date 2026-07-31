window.M4BRetest=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-retest-v1",
  "durationSeconds": 1800,
  "reviewDays": 14,
  "passTitle": "B轨retest通过",
  "failTitle": "B轨retest未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-b-exam-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 100,
  "questions": [
    {
      "id": "M4BR01",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "核心边界",
      "novel": true,
      "text": "1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离？",
      "options": [
        "整体方程中张力是内力，不能由整体式单独求出",
        "张力应在整体方程中计算两次",
        "共同加速度与张力无关所以无需方程"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "迁移",
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
        "target": "transfer",
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
        "substitution": "按题中数据代入F=(m1+m2)a；N12=m2a，候选结果为“整体方程中张力是内力，不能由整体式单独求出”",
        "candidate": "整体方程中张力是内力，不能由整体式单独求出",
        "constraint": "共同加速且内力不列入整体式",
        "final": "整体方程中张力是内力，不能由整体式单独求出",
        "answerIndex": 0,
        "unique": "正确项“整体方程中张力是内力，不能由整体式单独求出”同时满足F=(m1+m2)a；N12=m2a与共同加速且内力不列入整体式；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "张力应在整体方程中计算两次",
            "errorModel": "选择“张力应在整体方程中计算两次”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；N12=m2a",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；N12=m2a",
            "errorResult": "张力应在整体方程中计算两次",
            "conflict": "与约束“共同加速且内力不列入整体式”或正确结果“整体方程中张力是内力，不能由整体式单独求出”冲突"
          },
          {
            "option": "共同加速度与张力无关所以无需方程",
            "errorModel": "选择“共同加速度与张力无关所以无需方程”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；N12=m2a",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；N12=m2a",
            "errorResult": "共同加速度与张力无关所以无需方程",
            "conflict": "与约束“共同加速且内力不列入整体式”或正确结果“整体方程中张力是内力，不能由整体式单独求出”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BR02",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": true,
      "text": "轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态？",
      "options": [
        "绳以负张力维持长度",
        "绳松弛，分别建立运动方程",
        "轻绳改作可推的轻杆"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "迁移",
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
        "target": "transfer",
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
        "substitution": "按题中数据代入F=(m1+m2)a；T=ma或kx=ma，候选结果为“绳松弛，分别建立运动方程”",
        "candidate": "绳松弛，分别建立运动方程",
        "constraint": "T≥0且弹簧在弹性限度内",
        "final": "绳松弛，分别建立运动方程",
        "answerIndex": 1,
        "unique": "正确项“绳松弛，分别建立运动方程”同时满足F=(m1+m2)a；T=ma或kx=ma与T≥0且弹簧在弹性限度内；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "绳以负张力维持长度",
            "errorModel": "选择“绳以负张力维持长度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；T=ma或kx=ma",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；T=ma或kx=ma",
            "errorResult": "绳以负张力维持长度",
            "conflict": "与约束“T≥0且弹簧在弹性限度内”或正确结果“绳松弛，分别建立运动方程”冲突"
          },
          {
            "option": "轻绳改作可推的轻杆",
            "errorModel": "选择“轻绳改作可推的轻杆”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F=(m1+m2)a；T=ma或kx=ma",
            "errorSubstitution": "应使用题中数据代入F=(m1+m2)a；T=ma或kx=ma",
            "errorResult": "轻绳改作可推的轻杆",
            "conflict": "与约束“T≥0且弹簧在弹性限度内”或正确结果“绳松弛，分别建立运动方程”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BR03",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": true,
      "text": "物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化？",
      "options": [
        "N随加速度一直为正",
        "超过10 m/s²后平台对物块产生拉力",
        "在10 m/s²处N=0，之后物块离开平台"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "迁移",
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
        "target": "transfer",
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
        "substitution": "按题中数据代入N-mg=ma且N≥0，候选结果为“在10 m/s²处N=0，之后物块离开平台”",
        "candidate": "在10 m/s²处N=0，之后物块离开平台",
        "constraint": "N≥0，N=0切换",
        "final": "在10 m/s²处N=0，之后物块离开平台",
        "answerIndex": 2,
        "unique": "正确项“在10 m/s²处N=0，之后物块离开平台”同时满足N-mg=ma且N≥0与N≥0，N=0切换；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "N随加速度一直为正",
            "errorModel": "选择“N随加速度一直为正”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "N随加速度一直为正",
            "conflict": "与约束“N≥0，N=0切换”或正确结果“在10 m/s²处N=0，之后物块离开平台”冲突"
          },
          {
            "option": "超过10 m/s²后平台对物块产生拉力",
            "errorModel": "选择“超过10 m/s²后平台对物块产生拉力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "超过10 m/s²后平台对物块产生拉力",
            "conflict": "与约束“N≥0，N=0切换”或正确结果“在10 m/s²处N=0，之后物块离开平台”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BR04",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": true,
      "text": "1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大？",
      "options": [
        "2 N，未达到3 N上限",
        "3 N，静摩擦恒等于最大值",
        "0.3 N，把系数直接当力"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "迁移",
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
        "target": "transfer",
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
        "substitution": "按题中数据代入fs=ma且|fs|≤μsN，候选结果为“2 N，未达到3 N上限”",
        "candidate": "2 N，未达到3 N上限",
        "constraint": "需求静摩擦不超过上限",
        "final": "2 N，未达到3 N上限",
        "answerIndex": 0,
        "unique": "正确项“2 N，未达到3 N上限”同时满足fs=ma且|fs|≤μsN与需求静摩擦不超过上限；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "3 N，静摩擦恒等于最大值",
            "errorModel": "选择“3 N，静摩擦恒等于最大值”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足fs=ma且|fs|≤μsN",
            "errorSubstitution": "应使用题中数据代入fs=ma且|fs|≤μsN",
            "errorResult": "3 N，静摩擦恒等于最大值",
            "conflict": "与约束“需求静摩擦不超过上限”或正确结果“2 N，未达到3 N上限”冲突"
          },
          {
            "option": "0.3 N，把系数直接当力",
            "errorModel": "选择“0.3 N，把系数直接当力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足fs=ma且|fs|≤μsN",
            "errorSubstitution": "应使用题中数据代入fs=ma且|fs|≤μsN",
            "errorResult": "0.3 N，把系数直接当力",
            "conflict": "与约束“需求静摩擦不超过上限”或正确结果“2 N，未达到3 N上限”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BR05",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": true,
      "text": "包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段？",
      "options": [
        "全过程恒为μkmg且方向不变",
        "滑动阶段指向带运动方向，同速后可变为0",
        "摩擦始终与包裹对地速度反向"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "迁移",
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
        "target": "transfer",
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
        "substitution": "按题中数据代入f=ma；v=v0+at并在同速时切换，候选结果为“滑动阶段指向带运动方向，同速后可变为0”",
        "candidate": "滑动阶段指向带运动方向，同速后可变为0",
        "constraint": "相对速度为零时重建状态",
        "final": "滑动阶段指向带运动方向，同速后可变为0",
        "answerIndex": 1,
        "unique": "正确项“滑动阶段指向带运动方向，同速后可变为0”同时满足f=ma；v=v0+at并在同速时切换与相对速度为零时重建状态；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "全过程恒为μkmg且方向不变",
            "errorModel": "选择“全过程恒为μkmg且方向不变”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足f=ma；v=v0+at并在同速时切换",
            "errorSubstitution": "应使用题中数据代入f=ma；v=v0+at并在同速时切换",
            "errorResult": "全过程恒为μkmg且方向不变",
            "conflict": "与约束“相对速度为零时重建状态”或正确结果“滑动阶段指向带运动方向，同速后可变为0”冲突"
          },
          {
            "option": "摩擦始终与包裹对地速度反向",
            "errorModel": "选择“摩擦始终与包裹对地速度反向”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足f=ma；v=v0+at并在同速时切换",
            "errorSubstitution": "应使用题中数据代入f=ma；v=v0+at并在同速时切换",
            "errorResult": "摩擦始终与包裹对地速度反向",
            "conflict": "与约束“相对速度为零时重建状态”或正确结果“滑动阶段指向带运动方向，同速后可变为0”冲突"
          }
        ]
      }
    },
    {
      "id": "M4BR06",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": true,
      "text": "a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么？",
      "options": [
        "质量越大惯性越小",
        "把随机点全部删去",
        "未平衡的恒定阻力"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "迁移",
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
        "target": "transfer",
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
        "substitution": "按题中数据代入F-f=ma，斜率=1/m，候选结果为“未平衡的恒定阻力”",
        "candidate": "未平衡的恒定阻力",
        "constraint": "拟合对应同一系统质量",
        "final": "未平衡的恒定阻力",
        "answerIndex": 2,
        "unique": "正确项“未平衡的恒定阻力”同时满足F-f=ma，斜率=1/m与拟合对应同一系统质量；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "质量越大惯性越小",
            "errorModel": "选择“质量越大惯性越小”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma，斜率=1/m",
            "errorSubstitution": "应使用题中数据代入F-f=ma，斜率=1/m",
            "errorResult": "质量越大惯性越小",
            "conflict": "与约束“拟合对应同一系统质量”或正确结果“未平衡的恒定阻力”冲突"
          },
          {
            "option": "把随机点全部删去",
            "errorModel": "选择“把随机点全部删去”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足F-f=ma，斜率=1/m",
            "errorSubstitution": "应使用题中数据代入F-f=ma，斜率=1/m",
            "errorResult": "把随机点全部删去",
            "conflict": "与约束“拟合对应同一系统质量”或正确结果“未平衡的恒定阻力”冲突"
          }
        ]
      }
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
