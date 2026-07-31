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
            "wrongObjectOrForces": "研究对象仍为什么参考系中可引入-mA以保持牛顿方程形式；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "在地面系添加惯性力",
            "conflict": "“在地面系添加惯性力”与本题正确关系“什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系””冲突；满足题设的结果是“相对惯性系有平动加速度的随动系”。",
            "wrongCriterion": "采用判据“在地面系添加惯性力”而非本题判据“相对惯性系有平动加速度的随动系”"
          },
          {
            "option": "给惯性力找施力者",
            "wrongObjectOrForces": "研究对象仍为什么参考系中可引入-mA以保持牛顿方程形式；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "给惯性力找施力者",
            "conflict": "“给惯性力找施力者”与本题正确关系“什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系””冲突；满足题设的结果是“相对惯性系有平动加速度的随动系”。",
            "wrongCriterion": "采用判据“给惯性力找施力者”而非本题判据“相对惯性系有平动加速度的随动系”"
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
        "只给代数解不写区间",
        "m>0且N≥0",
        "保留负接触力"
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
            "option": "只给代数解不写区间",
            "wrongObjectOrForces": "研究对象仍为参数解N=m(g+a)还必须满足什么条件；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "只给代数解不写区间",
            "conflict": "“只给代数解不写区间”与本题正确关系“参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0””冲突；满足题设的结果是“m>0且N≥0”。",
            "wrongCriterion": "采用判据“只给代数解不写区间”而非本题判据“m>0且N≥0”"
          },
          {
            "option": "保留负接触力",
            "wrongObjectOrForces": "研究对象仍为参数解N=m(g+a)还必须满足什么条件；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "保留负接触力",
            "conflict": "“保留负接触力”与本题正确关系“参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0””冲突；满足题设的结果是“m>0且N≥0”。",
            "wrongCriterion": "采用判据“保留负接触力”而非本题判据“m>0且N≥0”"
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
        "阻力当恒力",
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
            "option": "阻力当恒力",
            "wrongObjectOrForces": "研究对象仍为线性阻力下速度增大时加速度为何减小；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "阻力当恒力",
            "conflict": "“阻力当恒力”与本题正确关系“线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小””冲突；满足题设的结果是“kv增大使mg-kv减小”。",
            "wrongCriterion": "采用判据“阻力当恒力”而非本题判据“kv增大使mg-kv减小”"
          },
          {
            "option": "终端速度时重力消失",
            "wrongObjectOrForces": "研究对象仍为线性阻力下速度增大时加速度为何减小；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "终端速度时重力消失",
            "conflict": "“终端速度时重力消失”与本题正确关系“线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小””冲突；满足题设的结果是“kv增大使mg-kv减小”。",
            "wrongCriterion": "采用判据“终端速度时重力消失”而非本题判据“kv增大使mg-kv减小”"
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
        "质量变化本身当外力"
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
            "wrongObjectOrForces": "研究对象仍为喷气火箭建模为何先声明系统边界，但方程中漏去推力项",
            "wrongResult": "推力项为0",
            "conflict": "“推力项为0”与本题正确关系“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””冲突；满足题设的结果是“跨边界质量携带动量”。",
            "wrongEquation": "按选项建立关系“推力项为0”；该式取代了本题关系“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””",
            "wrongSubstitution": "在“喷气火箭建模为何先声明系统边界？”给定条件下，将本题给定量代入该关系后得到“推力项为0”"
          },
          {
            "option": "质量变化本身当外力",
            "wrongObjectOrForces": "研究对象仍为喷气火箭建模为何先声明系统边界；真实力应为推力、重力，该选项改变了其中的合力或状态判断",
            "wrongResult": "质量变化本身当外力",
            "conflict": "“质量变化本身当外力”与本题正确关系“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””冲突；满足题设的结果是“跨边界质量携带动量”。",
            "wrongCriterion": "采用判据“质量变化本身当外力”而非本题判据“跨边界质量携带动量”"
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
        "dv/dt当速度",
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
            "option": "dv/dt当速度",
            "wrongObjectOrForces": "研究对象仍为dv/dt=4-2v左边表示什么物理量；真实力应为驱动力、速度相关阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "dv/dt当速度",
            "conflict": "“dv/dt当速度”与本题正确关系“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””冲突；满足题设的结果是“速度对时间的瞬时变化率”。",
            "wrongCriterion": "采用判据“dv/dt当速度”而非本题判据“速度对时间的瞬时变化率”"
          },
          {
            "option": "非齐次驱动力为0",
            "wrongObjectOrForces": "研究对象仍为dv/dt=4-2v左边表示什么物理量，但方程中漏去非齐次驱动力",
            "wrongResult": "非齐次驱动力为0",
            "conflict": "“非齐次驱动力为0”与本题正确关系“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””冲突；满足题设的结果是“速度对时间的瞬时变化率”。",
            "wrongEquation": "按选项建立关系“非齐次驱动力为0”；该式取代了本题关系“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””",
            "wrongSubstitution": "在“dv/dt=4-2v左边表示什么物理量？”给定条件下，将本题给定量代入该关系后得到“非齐次驱动力为0”"
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
        "更新漏乘Δt",
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
            "option": "更新漏乘Δt",
            "wrongObjectOrForces": "研究对象仍为欧拉更新式为什么不能未计入Δt，但方程中漏去乘Δt",
            "wrongResult": "更新漏乘Δt",
            "conflict": "“更新漏乘Δt”与本题正确关系“欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量””冲突；满足题设的结果是“aΔt才是速度增量”。",
            "wrongCriterion": "采用判据“更新漏乘Δt”而非本题判据“aΔt才是速度增量”"
          },
          {
            "option": "用一次大步宣称模型正确",
            "wrongObjectOrForces": "研究对象仍为欧拉更新式为什么不能未计入Δt；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "用一次大步宣称模型正确",
            "conflict": "“用一次大步宣称模型正确”与本题正确关系“欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量””冲突；满足题设的结果是“aΔt才是速度增量”。",
            "wrongCriterion": "采用判据“用一次大步宣称模型正确”而非本题判据“aΔt才是速度增量”"
          }
        ]
      }
    }
  ]
});
