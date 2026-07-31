window.M4CRetest=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-retest-v1",
  "durationSeconds": 1800,
  "reviewDays": 14,
  "passTitle": "C轨retest通过",
  "failTitle": "C轨retest未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-c-exam-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 100,
  "questions": [
    {
      "id": "M4CR01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": true,
      "text": "在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是？",
      "options": [
        "向右，大小mA",
        "向左，大小mA且有车厢施力",
        "地面系中也必须额外加入mA"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "迁移",
      "constraint": "必须声明非惯性参考系，只处理平动随动系",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "friction",
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "non-inertial",
        "target": "transfer",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "在向左加速的车厢系中",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA”",
        "substitution": "本题为判别题，不作数值代入；使用判据“向右，大小mA”",
        "candidate": "向右，大小mA",
        "constraint": "必须声明非惯性参考系，只处理平动随动系",
        "final": "向右，大小mA",
        "answerIndex": 0,
        "unique": "由本题关系“在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA””只能得到“向右，大小mA”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "向左，大小mA且有车厢施力",
            "wrongObjectOrForces": "以在向左加速的车厢系中为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "向左，大小mA且有车厢施力",
            "conflict": "题干应使用“在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA””，由此得到“向右，大小mA”；错误结果“向左，大小mA且有车厢施力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“向左，大小mA且有车厢施力”所表达的状态作为判定结果，而未检验必须声明非惯性参考系，只处理平动随动系及方程“在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA””。"
          },
          {
            "option": "地面系中也必须额外加入mA",
            "wrongObjectOrForces": "以在向左加速的车厢系中为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "地面系中也必须额外加入mA",
            "conflict": "题干应使用“在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA””，由此得到“向右，大小mA”；错误结果“地面系中也必须额外加入mA”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“地面系中也必须额外加入mA”所表达的状态作为判定结果，而未检验必须声明非惯性参考系，只处理平动随动系及方程“在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA””。"
          }
        ]
      }
    },
    {
      "id": "M4CR02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": true,
      "text": "候选支持力N=m(g-a)，参数a的接触解存在区间是什么？",
      "options": [
        "物体仍接触且N<0",
        "a≤g，a=g为N=0边界",
        "任意a都由支持面提供拉力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "迁移",
      "constraint": "质量为正且所有单侧约束成立",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "候选支持力N=m(g-a)",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界”",
        "substitution": "候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界”",
        "candidate": "a≤g，a=g为N=0边界",
        "constraint": "质量为正且所有单侧约束成立",
        "final": "a≤g，a=g为N=0边界",
        "answerIndex": 1,
        "unique": "由本题关系“候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界””只能得到“a≤g，a=g为N=0边界”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "物体仍接触且N<0",
            "wrongObjectOrForces": "以候选支持力N=m(g-a)为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "物体仍接触且N<0",
            "conflict": "题干应使用“候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界””，由此得到“a≤g，a=g为N=0边界”；错误结果“物体仍接触且N<0”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=物体仍接触且N<0",
            "wrongSubstitution": "把本题数值0按该错误关系计算：X=物体仍接触且N<0"
          },
          {
            "option": "任意a都由支持面提供拉力",
            "wrongObjectOrForces": "以候选支持力N=m(g-a)为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "任意a都由支持面提供拉力",
            "conflict": "题干应使用“候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界””，由此得到“a≤g，a=g为N=0边界”；错误结果“任意a都由支持面提供拉力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“任意a都由支持面提供拉力”所表达的状态作为判定结果，而未检验质量为正且所有单侧约束成立及方程“候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界””。"
          }
        ]
      }
    },
    {
      "id": "M4CR03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": true,
      "text": "线性阻力下小球速度等于vt/2时，加速度与g的关系是？",
      "options": [
        "a=0",
        "a=2g",
        "a=g/2"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "迁移",
      "constraint": "下落取正，k恒定且模型只在给定速度范围内",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "drag"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "线性阻力下小球速度等于vt/2时",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2”",
        "substitution": "线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2”",
        "candidate": "a=g/2",
        "constraint": "下落取正，k恒定且模型只在给定速度范围内",
        "final": "a=g/2",
        "answerIndex": 2,
        "unique": "由本题关系“线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2””只能得到“a=g/2”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "a=0",
            "wrongObjectOrForces": "以线性阻力下小球速度等于vt/2时为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "a=0",
            "conflict": "题干应使用“线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2””，由此得到“a=g/2”；错误结果“a=0”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=a=0",
            "wrongSubstitution": "把本题数值2、2、2按该错误关系计算：X=a=0"
          },
          {
            "option": "a=2g",
            "wrongObjectOrForces": "以线性阻力下小球速度等于vt/2时为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "a=2g",
            "conflict": "题干应使用“线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2””，由此得到“a=g/2”；错误结果“a=2g”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=a=2g",
            "wrongSubstitution": "把本题数值2、2、2按该错误关系计算：X=a=2g"
          }
        ]
      }
    },
    {
      "id": "M4CR04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": true,
      "text": "同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理？",
      "options": [
        "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "动量流项不随系统选择改变",
        "喷出物与火箭始终具有相同速度"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "迁移",
      "constraint": "声明控制体、相对喷射速度和质量变化率符号",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "thrust",
          "gravity"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "同一火箭问题若系统改选为火箭加全部已喷气体",
        "frame": "地面近似惯性参考系",
        "forces": [
          "推力",
          "重力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式”",
        "substitution": "本题为判别题，不作数值代入；使用判据“边界改变，须重新列外力与系统总动量，不能照搬原式”",
        "candidate": "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "constraint": "声明控制体、相对喷射速度和质量变化率符号",
        "final": "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "answerIndex": 0,
        "unique": "由本题关系“同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式””只能得到“边界改变，须重新列外力与系统总动量，不能照搬原式”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "动量流项不随系统选择改变",
            "wrongObjectOrForces": "以同一火箭问题若系统改选为火箭加全部已喷气体为研究对象，但错误模型未按推力、重力的实际方向或作用对象组成合力。",
            "wrongResult": "动量流项不随系统选择改变",
            "conflict": "题干应使用“同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式””，由此得到“边界改变，须重新列外力与系统总动量，不能照搬原式”；错误结果“动量流项不随系统选择改变”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“动量流项不随系统选择改变”所表达的状态作为判定结果，而未检验声明控制体、相对喷射速度和质量变化率符号及方程“同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式””。"
          },
          {
            "option": "喷出物与火箭始终具有相同速度",
            "wrongObjectOrForces": "以同一火箭问题若系统改选为火箭加全部已喷气体为研究对象，但错误模型未按推力、重力的实际方向或作用对象组成合力。",
            "wrongResult": "喷出物与火箭始终具有相同速度",
            "conflict": "题干应使用“同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式””，由此得到“边界改变，须重新列外力与系统总动量，不能照搬原式”；错误结果“喷出物与火箭始终具有相同速度”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“喷出物与火箭始终具有相同速度”所表达的状态作为判定结果，而未检验声明控制体、相对喷射速度和质量变化率符号及方程“同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式””。"
          }
        ]
      }
    },
    {
      "id": "M4CR05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": true,
      "text": "方程dv/dt=6-v在v=8 m/s时预示速度怎样变化？",
      "options": [
        "dv/dt=14 m/s²，速度上升",
        "dv/dt=-2 m/s²，速度下降",
        "速度恒为8 m/s因为方程是一阶"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "迁移",
      "constraint": "质量恒定、惯性系、给定力模型区间与初值",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "drag",
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "方程dv/dt=6-v在v=8 m/s时预示速度怎样变化",
        "frame": "地面近似惯性参考系",
        "forces": [
          "驱动力",
          "速度相关阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降”",
        "substitution": "方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降”",
        "candidate": "dv/dt=-2 m/s²，速度下降",
        "constraint": "质量恒定、惯性系、给定力模型区间与初值",
        "final": "dv/dt=-2 m/s²，速度下降",
        "answerIndex": 1,
        "unique": "由本题关系“方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降””只能得到“dv/dt=-2 m/s²，速度下降”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "dv/dt=14 m/s²，速度上升",
            "wrongObjectOrForces": "以方程dv/dt=6-v在v=8 m/s时预示速度怎样变化为研究对象，但错误模型未按驱动力、速度相关阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "dv/dt=14 m/s²，速度上升",
            "conflict": "题干应使用“方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降””，由此得到“dv/dt=-2 m/s²，速度下降”；错误结果“dv/dt=14 m/s²，速度上升”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=dv/dt=14 m/s²，速度上升",
            "wrongSubstitution": "把本题数值6、8、6、8、-2按该错误关系计算：X=dv/dt=14 m/s²，速度上升"
          },
          {
            "option": "速度恒为8 m/s因为方程是一阶",
            "wrongObjectOrForces": "以方程dv/dt=6-v在v=8 m/s时预示速度怎样变化为研究对象，但错误模型未按驱动力、速度相关阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "速度恒为8 m/s因为方程是一阶",
            "conflict": "题干应使用“方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降””，由此得到“dv/dt=-2 m/s²，速度下降”；错误结果“速度恒为8 m/s因为方程是一阶”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=速度恒为8 m/s因为方程是一阶",
            "wrongSubstitution": "把本题数值6、8、6、8、-2按该错误关系计算：X=速度恒为8 m/s因为方程是一阶"
          }
        ]
      }
    },
    {
      "id": "M4CR06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": true,
      "text": "欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么？",
      "options": [
        "模型已被真实实验完全证明",
        "更新式可省略加速度乘步长",
        "离散误差在减小，是数值收敛证据之一"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "迁移",
      "constraint": "每步用当前状态算力，Δt单位为s且足够小",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "drag"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "transfer",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "欧拉法把步长从0.20 s减到0.10 s",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一”",
        "substitution": "欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一”",
        "candidate": "离散误差在减小，是数值收敛证据之一",
        "constraint": "每步用当前状态算力，Δt单位为s且足够小",
        "final": "离散误差在减小，是数值收敛证据之一",
        "answerIndex": 2,
        "unique": "由本题关系“欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一””只能得到“离散误差在减小，是数值收敛证据之一”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "模型已被真实实验完全证明",
            "wrongObjectOrForces": "以欧拉法把步长从0.20 s减到0.10 s为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "模型已被真实实验完全证明",
            "conflict": "题干应使用“欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一””，由此得到“离散误差在减小，是数值收敛证据之一”；错误结果“模型已被真实实验完全证明”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“模型已被真实实验完全证明”所表达的状态作为判定结果，而未检验每步用当前状态算力，Δt单位为s且足够小及方程“欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一””。"
          },
          {
            "option": "更新式可省略加速度乘步长",
            "wrongObjectOrForces": "以欧拉法把步长从0.20 s减到0.10 s为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "更新式可省略加速度乘步长",
            "conflict": "题干应使用“欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一””，由此得到“离散误差在减小，是数值收敛证据之一”；错误结果“更新式可省略加速度乘步长”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“更新式可省略加速度乘步长”所表达的状态作为判定结果，而未检验每步用当前状态算力，Δt单位为s且足够小及方程“欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一””。"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
