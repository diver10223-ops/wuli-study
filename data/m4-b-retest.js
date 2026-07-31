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
        "两物块加速度可以不同"
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
            "wrongObjectOrForces": "以1 kg与2 kg物块由轻绳连接为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "张力应在整体方程中计算两次",
            "conflict": "题干应使用“1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出””，由此得到“整体方程中张力是内力，不能由整体式单独求出”；错误结果“张力应在整体方程中计算两次”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“张力应在整体方程中计算两次”所表达的状态作为判定结果，而未检验物体保持共同加速度；整体只列外力及方程“1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出””。"
          },
          {
            "option": "两物块加速度可以不同",
            "wrongObjectOrForces": "以1 kg与2 kg物块由轻绳连接为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "两物块加速度可以不同",
            "conflict": "题干应使用“1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出””，由此得到“整体方程中张力是内力，不能由整体式单独求出”；错误结果“两物块加速度可以不同”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“两物块加速度可以不同”所表达的状态作为判定结果，而未检验物体保持共同加速度；整体只列外力及方程“1 kg与2 kg物块由轻绳连接，整体受12 N外力；求绳张力为何必须再隔离；正确判据为“整体方程中张力是内力，不能由整体式单独求出””。"
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
            "wrongObjectOrForces": "以轻绳候选张力恰为0 N且两端将相互靠近为研究对象，但错误模型未按张力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "绳以负张力维持长度",
            "conflict": "题干应使用“轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程””，由此得到“绳松弛，分别建立运动方程”；错误结果“绳以负张力维持长度”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“绳以负张力维持长度”所表达的状态作为判定结果，而未检验绳张紧、杆不伸长、弹簧在弹性限度内及方程“轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程””。"
          },
          {
            "option": "轻绳改作可推的轻杆",
            "wrongObjectOrForces": "以轻绳候选张力恰为0 N且两端将相互靠近为研究对象，但错误模型未按张力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "轻绳改作可推的轻杆",
            "conflict": "题干应使用“轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程””，由此得到“绳松弛，分别建立运动方程”；错误结果“轻绳改作可推的轻杆”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“轻绳改作可推的轻杆”所表达的状态作为判定结果，而未检验绳张紧、杆不伸长、弹簧在弹性限度内及方程“轻绳候选张力恰为0 N且两端将相互靠近，应采用哪种状态；正确判据为“绳松弛，分别建立运动方程””。"
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
            "wrongObjectOrForces": "以物块随平台向下加速度从9增到11 m/s²为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "N随加速度一直为正",
            "conflict": "题干应使用“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台””，由此得到“在10 m/s²处N=0，之后物块离开平台”；错误结果“N随加速度一直为正”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“N随加速度一直为正”所表达的状态作为判定结果，而未检验接触面只推不拉，候选N<0必须舍弃及方程“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台””。"
          },
          {
            "option": "超过10 m/s²后平台对物块产生拉力",
            "wrongObjectOrForces": "以物块随平台向下加速度从9增到11 m/s²为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "超过10 m/s²后平台对物块产生拉力",
            "conflict": "题干应使用“物块随平台向下加速度从9增到11 m/s²，接触状态怎样变化；正确判据为“在10 m/s²处N=0，之后物块离开平台””，由此得到“在10 m/s²处N=0，之后物块离开平台”；错误结果“超过10 m/s²后平台对物块产生拉力”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=超过10 m/s²后平台对物块产生拉力",
            "wrongSubstitution": "把本题数值9、11、9、11、10、0按该错误关系计算：X=超过10 m/s²后平台对物块产生拉力"
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
        "阻力恒为0.3 N"
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
            "wrongObjectOrForces": "以1 kg箱随车以2 m/s²加速为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "3 N，静摩擦恒等于最大值",
            "conflict": "题干应使用“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限””，由此得到“2 N，未达到3 N上限”；错误结果“3 N，静摩擦恒等于最大值”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=3 N，静摩擦恒等于最大值",
            "wrongSubstitution": "把本题数值1、2、0.30、10、1、2按该错误关系计算：X=3 N，静摩擦恒等于最大值"
          },
          {
            "option": "阻力恒为0.3 N",
            "wrongObjectOrForces": "以1 kg箱随车以2 m/s²加速为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "阻力恒为0.3 N",
            "conflict": "题干应使用“1 kg箱随车以2 m/s²加速，μs=0.30且g=10 m/s²，静摩擦多大；正确判据为“2 N，未达到3 N上限””，由此得到“2 N，未达到3 N上限”；错误结果“阻力恒为0.3 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=阻力恒为0.3 N",
            "wrongSubstitution": "把本题数值1、2、0.30、10、1、2按该错误关系计算：X=阻力恒为0.3 N"
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
            "wrongObjectOrForces": "以包裹先比传送带慢、后来达到带速为研究对象，但错误模型未按滑动摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "全过程恒为μkmg且方向不变",
            "conflict": "题干应使用“包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0””，由此得到“滑动阶段指向带运动方向，同速后可变为0”；错误结果“全过程恒为μkmg且方向不变”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“全过程恒为μkmg且方向不变”所表达的状态作为判定结果，而未检验每段相对速度符号固定，切换时刻由速度相等或越界确定及方程“包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0””。"
          },
          {
            "option": "摩擦始终与包裹对地速度反向",
            "wrongObjectOrForces": "以包裹先比传送带慢、后来达到带速为研究对象，但错误模型未按滑动摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "摩擦始终与包裹对地速度反向",
            "conflict": "题干应使用“包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0””，由此得到“滑动阶段指向带运动方向，同速后可变为0”；错误结果“摩擦始终与包裹对地速度反向”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“摩擦始终与包裹对地速度反向”所表达的状态作为判定结果，而未检验每段相对速度符号固定，切换时刻由速度相等或越界确定及方程“包裹先比传送带慢、后来达到带速，无其他水平力，摩擦如何分段；正确判据为“滑动阶段指向带运动方向，同速后可变为0””。"
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
            "wrongObjectOrForces": "以a-F拟合直线有负纵截距为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "质量越大惯性越小",
            "conflict": "题干应使用“a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力””，由此得到“未平衡的恒定阻力”；错误结果“质量越大惯性越小”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“质量越大惯性越小”所表达的状态作为判定结果，而未检验控制质量或合力，拟合数据对应同一系统边界及方程“a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力””。"
          },
          {
            "option": "随机点全部删去",
            "wrongObjectOrForces": "以a-F拟合直线有负纵截距为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "随机点全部删去",
            "conflict": "题干应使用“a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力””，由此得到“未平衡的恒定阻力”；错误结果“随机点全部删去”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“随机点全部删去”所表达的状态作为判定结果，而未检验控制质量或合力，拟合数据对应同一系统边界及方程“a-F拟合直线有负纵截距，增加小车质量后截距近似不变，优先检查什么；正确判据为“未平衡的恒定阻力””。"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
