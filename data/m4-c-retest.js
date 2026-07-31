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
            "wrongObjectOrForces": "误以“向左，大小mA且有车厢施力”对应的量为受力结论，因而没有在“在向左加速的车厢系中”上同时核对静摩擦力、重力、支持力。",
            "wrongResult": "向左，大小mA且有车厢施力",
            "conflict": "正确对象“在向左加速的车厢系中”在随装置加速的非惯性参考系（惯性力仅作工具项）中应列在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA”；代入为本题为判别题，不作数值代入；使用判据“向右，大小mA”，所以向右，大小mA；这与“向左，大小mA且有车厢施力”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“向左，大小mA且有车厢施力”的表面状态判定，没有检验必须声明非惯性参考系，只处理平动随动系下的按题干所述运动方向取正与在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA”。"
          },
          {
            "option": "地面系中也必须额外加入mA",
            "wrongObjectOrForces": "研究对象虽写成“在向左加速的车厢系中”，但由“地面系中也必须额外加入mA”反推时改变了静摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "地面系中也必须额外加入mA",
            "conflict": "用必须声明非惯性参考系，只处理平动随动系检验：正确对象“在向左加速的车厢系中”在随装置加速的非惯性参考系（惯性力仅作工具项）中应列在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是；正确判据为“向右，大小mA”；代入为本题为判别题，不作数值代入；使用判据“向右，大小mA”，所以向右，大小mA；因此不能得到“地面系中也必须额外加入mA”。",
            "wrongCriterion": "错误地认为“地面系中也必须额外加入mA”可直接成立，未比较静摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“物体仍接触且N<0”对应的量为受力结论，因而没有在“候选支持力N=m(g-a)”上同时核对重力、支持力。",
            "wrongResult": "物体仍接触且N<0",
            "conflict": "正确对象“候选支持力N=m(g-a)”在地面近似惯性参考系中应列候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界”；代入为候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界”，所以a≤g，a=g为N=0边界；这与“物体仍接触且N<0”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：物体仍接触且N<0",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=物体仍接触且N<0÷1"
          },
          {
            "option": "任意a都由支持面提供拉力",
            "wrongObjectOrForces": "研究对象虽写成“候选支持力N=m(g-a)”，但由“任意a都由支持面提供拉力”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "任意a都由支持面提供拉力",
            "conflict": "用质量为正且所有单侧约束成立检验：正确对象“候选支持力N=m(g-a)”在地面近似惯性参考系中应列候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界”；代入为候选支持力N=m(g-a)，参数a的接触解存在区间是什么；正确判据为“a≤g，a=g为N=0边界”，所以a≤g，a=g为N=0边界；因此不能得到“任意a都由支持面提供拉力”。",
            "wrongCriterion": "错误地认为“任意a都由支持面提供拉力”可直接成立，未比较重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“a=0”对应的量为受力结论，因而没有在“线性阻力下小球速度等于vt/2时”上同时核对重力、速度相关阻力。",
            "wrongResult": "a=0",
            "conflict": "正确对象“线性阻力下小球速度等于vt/2时”在地面近似惯性参考系中应列线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2”；代入为线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2”，所以a=g/2；这与“a=0”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：a=0",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=a=0÷1"
          },
          {
            "option": "a=2g",
            "wrongObjectOrForces": "研究对象虽写成“线性阻力下小球速度等于vt/2时”，但由“a=2g”反推时改变了重力、速度相关阻力中的力的方向、归属或有效状态。",
            "wrongResult": "a=2g",
            "conflict": "用下落取正，k恒定且模型只在给定速度范围内检验：正确对象“线性阻力下小球速度等于vt/2时”在地面近似惯性参考系中应列线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2”；代入为线性阻力下小球速度等于vt/2时，加速度与g的关系是；正确判据为“a=g/2”，所以a=g/2；因此不能得到“a=2g”。",
            "wrongEquation": "错误物理关系写成：a=2g",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=a=2÷1g"
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
            "wrongObjectOrForces": "误以“动量流项不随系统选择改变”对应的量为受力结论，因而没有在“同一火箭问题若系统改选为火箭加全部已喷气体”上同时核对推力、重力。",
            "wrongResult": "动量流项不随系统选择改变",
            "conflict": "正确对象“同一火箭问题若系统改选为火箭加全部已喷气体”在地面近似惯性参考系中应列同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式”；代入为本题为判别题，不作数值代入；使用判据“边界改变，须重新列外力与系统总动量，不能照搬原式”，所以边界改变，须重新列外力与系统总动量，不能照搬原式；这与“动量流项不随系统选择改变”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“动量流项不随系统选择改变”的表面状态判定，没有检验声明控制体、相对喷射速度和质量变化率符号下的按题干所述运动方向取正与同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式”。"
          },
          {
            "option": "喷出物与火箭始终具有相同速度",
            "wrongObjectOrForces": "研究对象虽写成“同一火箭问题若系统改选为火箭加全部已喷气体”，但由“喷出物与火箭始终具有相同速度”反推时改变了推力、重力中的力的方向、归属或有效状态。",
            "wrongResult": "喷出物与火箭始终具有相同速度",
            "conflict": "用声明控制体、相对喷射速度和质量变化率符号检验：正确对象“同一火箭问题若系统改选为火箭加全部已喷气体”在地面近似惯性参考系中应列同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理；正确判据为“边界改变，须重新列外力与系统总动量，不能照搬原式”；代入为本题为判别题，不作数值代入；使用判据“边界改变，须重新列外力与系统总动量，不能照搬原式”，所以边界改变，须重新列外力与系统总动量，不能照搬原式；因此不能得到“喷出物与火箭始终具有相同速度”。",
            "wrongCriterion": "错误地认为“喷出物与火箭始终具有相同速度”可直接成立，未比较推力、重力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“dv/dt=14 m/s²，速度上升”对应的量为受力结论，因而没有在“方程dv/dt=6-v在v=8 m/s时预示速度怎样变化”上同时核对驱动力、速度相关阻力、重力、支持力。",
            "wrongResult": "dv/dt=14 m/s²，速度上升",
            "conflict": "正确对象“方程dv/dt=6-v在v=8 m/s时预示速度怎样变化”在地面近似惯性参考系中应列方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降”；代入为方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降”，所以dv/dt=-2 m/s²，速度下降；这与“dv/dt=14 m/s²，速度上升”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：dv/dt=14 m/s²，速度上升",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=dv/dt=14 m/s²，速度上升"
          },
          {
            "option": "速度恒为8 m/s因为方程是一阶",
            "wrongObjectOrForces": "研究对象虽写成“方程dv/dt=6-v在v=8 m/s时预示速度怎样变化”，但由“速度恒为8 m/s因为方程是一阶”反推时改变了驱动力、速度相关阻力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "速度恒为8 m/s因为方程是一阶",
            "conflict": "用质量恒定、惯性系、给定力模型区间与初值检验：正确对象“方程dv/dt=6-v在v=8 m/s时预示速度怎样变化”在地面近似惯性参考系中应列方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降”；代入为方程dv/dt=6-v在v=8 m/s时预示速度怎样变化；正确判据为“dv/dt=-2 m/s²，速度下降”，所以dv/dt=-2 m/s²，速度下降；因此不能得到“速度恒为8 m/s因为方程是一阶”。",
            "wrongEquation": "错误物理关系写成：速度恒为8 m/s因为方程是一阶",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=速度恒为8 m/s因为方程是一阶"
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
            "wrongObjectOrForces": "误以“模型已被真实实验完全证明”对应的量为受力结论，因而没有在“欧拉法把步长从0.20 s减到0.10 s”上同时核对重力、速度相关阻力。",
            "wrongResult": "模型已被真实实验完全证明",
            "conflict": "正确对象“欧拉法把步长从0.20 s减到0.10 s”在地面近似惯性参考系中应列欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一”；代入为欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一”，所以离散误差在减小，是数值收敛证据之一；这与“模型已被真实实验完全证明”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“模型已被真实实验完全证明”的表面状态判定，没有检验每步用当前状态算力，Δt单位为s且足够小下的按题干所述运动方向取正与欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一”。"
          },
          {
            "option": "更新式可省略加速度乘步长",
            "wrongObjectOrForces": "研究对象虽写成“欧拉法把步长从0.20 s减到0.10 s”，但由“更新式可省略加速度乘步长”反推时改变了重力、速度相关阻力中的力的方向、归属或有效状态。",
            "wrongResult": "更新式可省略加速度乘步长",
            "conflict": "用每步用当前状态算力，Δt单位为s且足够小检验：正确对象“欧拉法把步长从0.20 s减到0.10 s”在地面近似惯性参考系中应列欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一”；代入为欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么；正确判据为“离散误差在减小，是数值收敛证据之一”，所以离散误差在减小，是数值收敛证据之一；因此不能得到“更新式可省略加速度乘步长”。",
            "wrongCriterion": "错误地认为“更新式可省略加速度乘步长”可直接成立，未比较重力、速度相关阻力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 80 })
});
