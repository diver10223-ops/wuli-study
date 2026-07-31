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
          "applied",
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
        "object": "1 kg与2 kg物块由轻绳连接",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出”",
        "substitution": "1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出”",
        "candidate": "整体方程中张力是内力，不能由整体式单独求出",
        "constraint": "物体保持共同加速度；整体只列外力",
        "final": "整体方程中张力是内力，不能由整体式单独求出",
        "answerIndex": 0,
        "unique": "由本题关系“1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出””只能得到“整体方程中张力是内力，不能由整体式单独求出”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "张力应在整体方程中计算两次",
            "wrongObjectOrForces": "研究对象仍为1 kg与2 kg物块由轻绳连接；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "张力应在整体方程中计算两次",
            "conflict": "“张力应在整体方程中计算两次”与本题正确关系“1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出””冲突；满足题设的结果是“整体方程中张力是内力，不能由整体式单独求出”。",
            "wrongCriterion": "采用判据“张力应在整体方程中计算两次”而非本题判据“整体方程中张力是内力，不能由整体式单独求出”"
          },
          {
            "option": "共同加速度与张力无关所以无需方程",
            "wrongObjectOrForces": "研究对象仍为1 kg与2 kg物块由轻绳连接；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "共同加速度与张力无关所以无需方程",
            "conflict": "“共同加速度与张力无关所以无需方程”与本题正确关系“1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出””冲突；满足题设的结果是“整体方程中张力是内力，不能由整体式单独求出”。",
            "wrongCriterion": "采用判据“共同加速度与张力无关所以无需方程”而非本题判据“整体方程中张力是内力，不能由整体式单独求出”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "tension",
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
        "object": "轻绳候选张力恰为0 N且两端将相互靠近",
        "frame": "地面近似惯性参考系",
        "forces": [
          "张力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程”",
        "substitution": "轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程”",
        "candidate": "绳松弛，分别建立运动方程",
        "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
        "final": "绳松弛，分别建立运动方程",
        "answerIndex": 1,
        "unique": "由本题关系“轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程””只能得到“绳松弛，分别建立运动方程”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "绳以负张力维持长度",
            "wrongObjectOrForces": "研究对象仍为轻绳候选张力恰为0 N且两端将相互靠近；真实力应为张力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "绳以负张力维持长度",
            "conflict": "“绳以负张力维持长度”与本题正确关系“轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程””冲突；满足题设的结果是“绳松弛，分别建立运动方程”。",
            "wrongCriterion": "采用判据“绳以负张力维持长度”而非本题判据“绳松弛，分别建立运动方程”"
          },
          {
            "option": "轻绳改作可推的轻杆",
            "wrongObjectOrForces": "研究对象仍为轻绳候选张力恰为0 N且两端将相互靠近；真实力应为张力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "轻绳改作可推的轻杆",
            "conflict": "“轻绳改作可推的轻杆”与本题正确关系“轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程””冲突；满足题设的结果是“绳松弛，分别建立运动方程”。",
            "wrongCriterion": "采用判据“轻绳改作可推的轻杆”而非本题判据“绳松弛，分别建立运动方程”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
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
        "object": "物块随平台向下加速度从9增到11 m/s²",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台”",
        "substitution": "物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台”",
        "candidate": "在10 m/s²处N=0，之后物块离开平台",
        "constraint": "接触面只推不拉，候选N<0必须舍弃",
        "final": "在10 m/s²处N=0，之后物块离开平台",
        "answerIndex": 2,
        "unique": "由本题关系“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台””只能得到“在10 m/s²处N=0，之后物块离开平台”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "N随加速度一直为正",
            "wrongObjectOrForces": "研究对象仍为物块随平台向下加速度从9增到11 m/s²；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "N随加速度一直为正",
            "conflict": "“N随加速度一直为正”与本题正确关系“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台””冲突；满足题设的结果是“在10 m/s²处N=0，之后物块离开平台”。",
            "wrongCriterion": "采用判据“N随加速度一直为正”而非本题判据“在10 m/s²处N=0，之后物块离开平台”"
          },
          {
            "option": "超过10 m/s²后平台对物块产生拉力",
            "wrongObjectOrForces": "研究对象仍为物块随平台向下加速度从9增到11 m/s²；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "超过10 m/s²后平台对物块产生拉力",
            "conflict": "“超过10 m/s²后平台对物块产生拉力”与本题正确关系“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台””冲突；满足题设的结果是“在10 m/s²处N=0，之后物块离开平台”。",
            "wrongEquation": "按选项建立关系“超过10 m/s²后平台对物块产生拉力”；该式取代了本题关系“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台””",
            "wrongSubstitution": "在“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化？”给定条件下，将本题给定量代入该关系后得到“超过10 m/s²后平台对物块产生拉力”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "friction",
          "gravity",
          "normal"
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
        "object": "1 kg箱随车以2 m/s²加速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限”",
        "substitution": "1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限”",
        "candidate": "2 N，未达到3 N上限",
        "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
        "final": "2 N，未达到3 N上限",
        "answerIndex": 0,
        "unique": "由本题关系“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限””只能得到“2 N，未达到3 N上限”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "3 N，静摩擦恒等于最大值",
            "wrongObjectOrForces": "研究对象仍为1 kg箱随车以2 m/s²加速；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "3 N，静摩擦恒等于最大值",
            "conflict": "“3 N，静摩擦恒等于最大值”与本题正确关系“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限””冲突；满足题设的结果是“2 N，未达到3 N上限”。",
            "wrongEquation": "按选项建立关系“3 N，静摩擦恒等于最大值”；该式取代了本题关系“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限””",
            "wrongSubstitution": "在“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大？”给定条件下，将本题给定量代入该关系后得到“3 N，静摩擦恒等于最大值”"
          },
          {
            "option": "0.3 N，把系数直接当力",
            "wrongObjectOrForces": "研究对象仍为1 kg箱随车以2 m/s²加速；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "0.3 N，把系数直接当力",
            "conflict": "“0.3 N，把系数直接当力”与本题正确关系“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限””冲突；满足题设的结果是“2 N，未达到3 N上限”。",
            "wrongEquation": "按选项建立关系“0.3 N，把系数直接当力”；该式取代了本题关系“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限””",
            "wrongSubstitution": "在“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大？”给定条件下，将本题给定量代入该关系后得到“0.3 N，把系数直接当力”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "friction",
          "gravity",
          "normal"
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
        "object": "包裹先比传送带慢、后来达到带速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "滑动摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0”",
        "substitution": "包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0”",
        "candidate": "滑动阶段指向带运动方向，同速后可变为0",
        "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
        "final": "滑动阶段指向带运动方向，同速后可变为0",
        "answerIndex": 1,
        "unique": "由本题关系“包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0””只能得到“滑动阶段指向带运动方向，同速后可变为0”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "全过程恒为μkmg且方向不变",
            "wrongObjectOrForces": "研究对象仍为包裹先比传送带慢、后来达到带速；真实力应为滑动摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "全过程恒为μkmg且方向不变",
            "conflict": "“全过程恒为μkmg且方向不变”与本题正确关系“包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0””冲突；满足题设的结果是“滑动阶段指向带运动方向，同速后可变为0”。",
            "wrongCriterion": "采用判据“全过程恒为μkmg且方向不变”而非本题判据“滑动阶段指向带运动方向，同速后可变为0”"
          },
          {
            "option": "摩擦始终与包裹对地速度反向",
            "wrongObjectOrForces": "研究对象仍为包裹先比传送带慢、后来达到带速；真实力应为滑动摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "摩擦始终与包裹对地速度反向",
            "conflict": "“摩擦始终与包裹对地速度反向”与本题正确关系“包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0””冲突；满足题设的结果是“滑动阶段指向带运动方向，同速后可变为0”。",
            "wrongCriterion": "采用判据“摩擦始终与包裹对地速度反向”而非本题判据“滑动阶段指向带运动方向，同速后可变为0”"
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
        "随机点全部删去",
        "未平衡的恒定阻力"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "迁移",
      "constraint": "控制质量或合力，拟合数据对应同一系统边界",
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
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "a-F拟合直线有负纵截距",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力”",
        "substitution": "本题为判别题，不作数值代入；使用判据“未平衡的恒定阻力”",
        "candidate": "未平衡的恒定阻力",
        "constraint": "控制质量或合力，拟合数据对应同一系统边界",
        "final": "未平衡的恒定阻力",
        "answerIndex": 2,
        "unique": "由本题关系“a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力””只能得到“未平衡的恒定阻力”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "质量越大惯性越小",
            "wrongObjectOrForces": "研究对象仍为a-F拟合直线有负纵截距；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "质量越大惯性越小",
            "conflict": "“质量越大惯性越小”与本题正确关系“a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力””冲突；满足题设的结果是“未平衡的恒定阻力”。",
            "wrongCriterion": "采用判据“质量越大惯性越小”而非本题判据“未平衡的恒定阻力”"
          },
          {
            "option": "随机点全部删去",
            "wrongObjectOrForces": "研究对象仍为a-F拟合直线有负纵截距；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "随机点全部删去",
            "conflict": "“随机点全部删去”与本题正确关系“a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力””冲突；满足题设的结果是“未平衡的恒定阻力”。",
            "wrongCriterion": "采用判据“随机点全部删去”而非本题判据“未平衡的恒定阻力”"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
