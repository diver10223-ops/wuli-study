window.M4CDiagnostic=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-diagnostic-v1",
  "passCorrect": 5,
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-b-exam-v1",
      "label": "前轨正式卷未通过"
    }
  ],
  "passTitle": "C轨诊断通过",
  "failTitle": "需回补前置",
  "initialPlan": "提交后生成节点路线。",
  "passPlan": "进入知识学习。",
  "failPlan": "返回失败节点。",
  "questions": [
    {
      "id": "M4CD01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": false,
      "text": "什么参考系中可引入-mA以保持牛顿方程形式？",
      "options": [
        "相对惯性系有平动加速度的随动系",
        "在地面系添加惯性力",
        "给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "什么参考系中可引入-mA以保持牛顿方程形式",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系”",
        "substitution": "本题为判别题，不作数值代入；使用判据“相对惯性系有平动加速度的随动系”",
        "candidate": "相对惯性系有平动加速度的随动系",
        "constraint": "必须声明非惯性参考系，只处理平动随动系",
        "final": "相对惯性系有平动加速度的随动系",
        "answerIndex": 0,
        "unique": "由本题关系“什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系””只能得到“相对惯性系有平动加速度的随动系”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "在地面系添加惯性力",
            "wrongObjectOrForces": "误以“在地面系添加惯性力”对应的量为受力结论，因而没有在“什么参考系中可引入-mA以保持牛顿方程形式”上同时核对静摩擦力、重力、支持力。",
            "wrongResult": "在地面系添加惯性力",
            "conflict": "正确对象“什么参考系中可引入-mA以保持牛顿方程形式”在随装置加速的非惯性参考系（惯性力仅作工具项）中应列什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系”；代入为本题为判别题，不作数值代入；使用判据“相对惯性系有平动加速度的随动系”，所以相对惯性系有平动加速度的随动系；这与“在地面系添加惯性力”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“在地面系添加惯性力”的表面状态判定，没有检验必须声明非惯性参考系，只处理平动随动系下的按题干所述运动方向取正与什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系”。"
          },
          {
            "option": "给惯性力找施力者",
            "wrongObjectOrForces": "研究对象虽写成“什么参考系中可引入-mA以保持牛顿方程形式”，但由“给惯性力找施力者”反推时改变了静摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "给惯性力找施力者",
            "conflict": "用必须声明非惯性参考系，只处理平动随动系检验：正确对象“什么参考系中可引入-mA以保持牛顿方程形式”在随装置加速的非惯性参考系（惯性力仅作工具项）中应列什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系”；代入为本题为判别题，不作数值代入；使用判据“相对惯性系有平动加速度的随动系”，所以相对惯性系有平动加速度的随动系；因此不能得到“给惯性力找施力者”。",
            "wrongCriterion": "错误地认为“给惯性力找施力者”可直接成立，未比较静摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    },
    {
      "id": "M4CD02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": false,
      "text": "参数解N=m(g+a)还必须满足什么条件？",
      "options": [
        "所有实数参数均可行",
        "m>0且N≥0",
        "两物体仍接触且支持力为2 N"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "参数解N=m(g+a)还必须满足什么条件",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0”",
        "substitution": "参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0”",
        "candidate": "m>0且N≥0",
        "constraint": "质量为正且所有单侧约束成立",
        "final": "m>0且N≥0",
        "answerIndex": 1,
        "unique": "由本题关系“参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0””只能得到“m>0且N≥0”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "所有实数参数均可行",
            "wrongObjectOrForces": "误以“所有实数参数均可行”对应的量为受力结论，因而没有在“参数解N=m(g+a)还必须满足什么条件”上同时核对重力、支持力。",
            "wrongResult": "所有实数参数均可行",
            "conflict": "正确对象“参数解N=m(g+a)还必须满足什么条件”在地面近似惯性参考系中应列参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0”；代入为参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0”，所以m>0且N≥0；这与“所有实数参数均可行”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“所有实数参数均可行”的表面状态判定，没有检验质量为正且所有单侧约束成立下的按题干所述运动方向取正与参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0”。"
          },
          {
            "option": "两物体仍接触且支持力为2 N",
            "wrongObjectOrForces": "研究对象虽写成“参数解N=m(g+a)还必须满足什么条件”，但由“两物体仍接触且支持力为2 N”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "两物体仍接触且支持力为2 N",
            "conflict": "用质量为正且所有单侧约束成立检验：正确对象“参数解N=m(g+a)还必须满足什么条件”在地面近似惯性参考系中应列参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0”；代入为参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0”，所以m>0且N≥0；因此不能得到“两物体仍接触且支持力为2 N”。",
            "wrongEquation": "错误物理关系写成：两物体仍接触且支持力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=两物体仍接触且支持力为2÷1 N"
          }
        ]
      }
    },
    {
      "id": "M4CD03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": false,
      "text": "线性阻力下速度增大时加速度为何减小？",
      "options": [
        "阻力大小与速度无关",
        "终端速度时重力消失",
        "kv增大使mg-kv减小"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "线性阻力下速度增大时加速度为何减小",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小”",
        "substitution": "本题为判别题，不作数值代入；使用判据“kv增大使mg-kv减小”",
        "candidate": "kv增大使mg-kv减小",
        "constraint": "下落取正，k恒定且模型只在给定速度范围内",
        "final": "kv增大使mg-kv减小",
        "answerIndex": 2,
        "unique": "由本题关系“线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小””只能得到“kv增大使mg-kv减小”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "阻力大小与速度无关",
            "wrongObjectOrForces": "误以“阻力大小与速度无关”对应的量为受力结论，因而没有在“线性阻力下速度增大时加速度为何减小”上同时核对重力、速度相关阻力。",
            "wrongResult": "阻力大小与速度无关",
            "conflict": "正确对象“线性阻力下速度增大时加速度为何减小”在地面近似惯性参考系中应列线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小”；代入为本题为判别题，不作数值代入；使用判据“kv增大使mg-kv减小”，所以kv增大使mg-kv减小；这与“阻力大小与速度无关”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“阻力大小与速度无关”的表面状态判定，没有检验下落取正，k恒定且模型只在给定速度范围内下的按题干所述运动方向取正与线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小”。"
          },
          {
            "option": "终端速度时重力消失",
            "wrongObjectOrForces": "研究对象虽写成“线性阻力下速度增大时加速度为何减小”，但由“终端速度时重力消失”反推时改变了重力、速度相关阻力中的力的方向、归属或有效状态。",
            "wrongResult": "终端速度时重力消失",
            "conflict": "用下落取正，k恒定且模型只在给定速度范围内检验：正确对象“线性阻力下速度增大时加速度为何减小”在地面近似惯性参考系中应列线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小”；代入为本题为判别题，不作数值代入；使用判据“kv增大使mg-kv减小”，所以kv增大使mg-kv减小；因此不能得到“终端速度时重力消失”。",
            "wrongCriterion": "错误地认为“终端速度时重力消失”可直接成立，未比较重力、速度相关阻力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    },
    {
      "id": "M4CD04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": false,
      "text": "喷气火箭建模为何先声明系统边界？",
      "options": [
        "跨边界质量携带动量",
        "推力项为0",
        "质量流率为零时仍有动量流力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "喷气火箭建模为何先声明系统边界",
        "frame": "地面近似惯性参考系",
        "forces": [
          "推力",
          "重力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量”",
        "substitution": "本题为判别题，不作数值代入；使用判据“跨边界质量携带动量”",
        "candidate": "跨边界质量携带动量",
        "constraint": "声明控制体、相对喷射速度和质量变化率符号",
        "final": "跨边界质量携带动量",
        "answerIndex": 0,
        "unique": "由本题关系“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””只能得到“跨边界质量携带动量”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "推力项为0",
            "wrongObjectOrForces": "误以“推力项为0”对应的量为受力结论，因而没有在“喷气火箭建模为何先声明系统边界”上同时核对推力、重力。",
            "wrongResult": "推力项为0",
            "conflict": "正确对象“喷气火箭建模为何先声明系统边界”在地面近似惯性参考系中应列喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量”；代入为本题为判别题，不作数值代入；使用判据“跨边界质量携带动量”，所以跨边界质量携带动量；这与“推力项为0”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“推力项为0”的表面状态判定，没有检验声明控制体、相对喷射速度和质量变化率符号下的按题干所述运动方向取正与喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量”。"
          },
          {
            "option": "质量流率为零时仍有动量流力",
            "wrongObjectOrForces": "研究对象虽写成“喷气火箭建模为何先声明系统边界”，但由“质量流率为零时仍有动量流力”反推时改变了推力、重力中的力的方向、归属或有效状态。",
            "wrongResult": "质量流率为零时仍有动量流力",
            "conflict": "用声明控制体、相对喷射速度和质量变化率符号检验：正确对象“喷气火箭建模为何先声明系统边界”在地面近似惯性参考系中应列喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量”；代入为本题为判别题，不作数值代入；使用判据“跨边界质量携带动量”，所以跨边界质量携带动量；因此不能得到“质量流率为零时仍有动量流力”。",
            "wrongCriterion": "错误地认为“质量流率为零时仍有动量流力”可直接成立，未比较推力、重力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    },
    {
      "id": "M4CD05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": false,
      "text": "dv/dt=4-2v左边表示什么物理量？",
      "options": [
        "速度恒等于加速度",
        "速度对时间的瞬时变化率",
        "非齐次驱动力为0"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "dv/dt=4-2v左边表示什么物理量",
        "frame": "地面近似惯性参考系",
        "forces": [
          "驱动力",
          "速度相关阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率”",
        "substitution": "dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率”",
        "candidate": "速度对时间的瞬时变化率",
        "constraint": "质量恒定、惯性系、给定力模型区间与初值",
        "final": "速度对时间的瞬时变化率",
        "answerIndex": 1,
        "unique": "由本题关系“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””只能得到“速度对时间的瞬时变化率”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "速度恒等于加速度",
            "wrongObjectOrForces": "误以“速度恒等于加速度”对应的量为受力结论，因而没有在“dv/dt=4-2v左边表示什么物理量”上同时核对驱动力、速度相关阻力、重力、支持力。",
            "wrongResult": "速度恒等于加速度",
            "conflict": "正确对象“dv/dt=4-2v左边表示什么物理量”在地面近似惯性参考系中应列dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率”；代入为dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率”，所以速度对时间的瞬时变化率；这与“速度恒等于加速度”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“速度恒等于加速度”的表面状态判定，没有检验质量恒定、惯性系、给定力模型区间与初值下的按题干所述运动方向取正与dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率”。"
          },
          {
            "option": "非齐次驱动力为0",
            "wrongObjectOrForces": "研究对象虽写成“dv/dt=4-2v左边表示什么物理量”，但由“非齐次驱动力为0”反推时改变了驱动力、速度相关阻力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "非齐次驱动力为0",
            "conflict": "用质量恒定、惯性系、给定力模型区间与初值检验：正确对象“dv/dt=4-2v左边表示什么物理量”在地面近似惯性参考系中应列dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率”；代入为dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率”，所以速度对时间的瞬时变化率；因此不能得到“非齐次驱动力为0”。",
            "wrongCriterion": "错误地认为“非齐次驱动力为0”可直接成立，未比较驱动力、速度相关阻力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    },
    {
      "id": "M4CD06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": false,
      "text": "欧拉更新式为什么不能未计入Δt？",
      "options": [
        "v(n+1)=v(n)+a(vn)",
        "用一次大步宣称模型正确",
        "aΔt才是速度增量"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "欧拉更新式为什么不能未计入Δt",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量”",
        "substitution": "本题为判别题，不作数值代入；使用判据“aΔt才是速度增量”",
        "candidate": "aΔt才是速度增量",
        "constraint": "每步用当前状态算力，Δt单位为s且足够小",
        "final": "aΔt才是速度增量",
        "answerIndex": 2,
        "unique": "由本题关系“欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量””只能得到“aΔt才是速度增量”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "v(n+1)=v(n)+a(vn)",
            "wrongObjectOrForces": "误以“v(n+1)=v(n)+a(vn)”对应的量为受力结论，因而没有在“欧拉更新式为什么不能未计入Δt”上同时核对重力、速度相关阻力。",
            "wrongResult": "v(n+1)=v(n)+a(vn)",
            "conflict": "正确对象“欧拉更新式为什么不能未计入Δt”在地面近似惯性参考系中应列欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量”；代入为本题为判别题，不作数值代入；使用判据“aΔt才是速度增量”，所以aΔt才是速度增量；这与“v(n+1)=v(n)+a(vn)”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：v(n+1)=v(n)+a(vn)",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=v(n+1)=v(n)+a(vn)"
          },
          {
            "option": "用一次大步宣称模型正确",
            "wrongObjectOrForces": "研究对象虽写成“欧拉更新式为什么不能未计入Δt”，但由“用一次大步宣称模型正确”反推时改变了重力、速度相关阻力中的力的方向、归属或有效状态。",
            "wrongResult": "用一次大步宣称模型正确",
            "conflict": "用每步用当前状态算力，Δt单位为s且足够小检验：正确对象“欧拉更新式为什么不能未计入Δt”在地面近似惯性参考系中应列欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量”；代入为本题为判别题，不作数值代入；使用判据“aΔt才是速度增量”，所以aΔt才是速度增量；因此不能得到“用一次大步宣称模型正确”。",
            "wrongCriterion": "错误地认为“用一次大步宣称模型正确”可直接成立，未比较重力、速度相关阻力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    }
  ]
});
