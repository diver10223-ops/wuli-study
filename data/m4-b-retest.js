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
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "整体法与隔离法题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离？",
        "candidate": "整体方程中张力是内力，不能由整体式单独求出",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "整体方程中张力是内力，不能由整体式单独求出",
        "answerIndex": 0,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：张力应在整体方程中计算两次",
          "错误路径：共同加速度与张力无关所以无需方程"
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
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "轻绳轻杆弹簧约束题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态？",
        "candidate": "绳松弛，分别建立运动方程",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "绳松弛，分别建立运动方程",
        "answerIndex": 1,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：绳以负张力维持长度",
          "错误路径：轻绳改作可推的轻杆"
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
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "临界分离与接触切换题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化？",
        "candidate": "在10 m/s²处N=0，之后物块离开平台",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "在10 m/s²处N=0，之后物块离开平台",
        "answerIndex": 2,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：N随加速度一直为正",
          "错误路径：超过10 m/s²后平台对物块产生拉力"
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
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "临界滑动与静摩擦需求题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大？",
        "candidate": "2 N，未达到3 N上限",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "2 N，未达到3 N上限",
        "answerIndex": 0,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：3 N，静摩擦恒等于最大值",
          "错误路径：0.3 N，把系数直接当力"
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
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "传送带板块分段动力学题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段？",
        "candidate": "滑动阶段指向带运动方向，同速后可变为0",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "滑动阶段指向带运动方向，同速后可变为0",
        "answerIndex": 1,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：全过程恒为μkmg且方向不变",
          "错误路径：摩擦始终与包裹对地速度反向"
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
        "objectType": "multi-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "动力学实验图像与误差题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么？",
        "candidate": "未平衡的恒定阻力",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "未平衡的恒定阻力",
        "answerIndex": 2,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：质量越大惯性越小",
          "错误路径：把随机点全部删去"
        ]
      }
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
