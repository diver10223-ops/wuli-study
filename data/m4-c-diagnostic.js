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
            "wrongObjectOrForces": "以什么参考系中可引入-mA以保持牛顿方程形式为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "在地面系添加惯性力",
            "conflict": "题干应使用“什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系””，由此得到“相对惯性系有平动加速度的随动系”；错误结果“在地面系添加惯性力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“在地面系添加惯性力”所表达的状态作为判定结果，而未检验必须声明非惯性参考系，只处理平动随动系及方程“什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系””。"
          },
          {
            "option": "给惯性力找施力者",
            "wrongObjectOrForces": "以什么参考系中可引入-mA以保持牛顿方程形式为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "给惯性力找施力者",
            "conflict": "题干应使用“什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系””，由此得到“相对惯性系有平动加速度的随动系”；错误结果“给惯性力找施力者”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“给惯性力找施力者”所表达的状态作为判定结果，而未检验必须声明非惯性参考系，只处理平动随动系及方程“什么参考系中可引入-mA以保持牛顿方程形式；正确判据为“相对惯性系有平动加速度的随动系””。"
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
            "wrongObjectOrForces": "以参数解N=m(g+a)还必须满足什么条件为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "所有实数参数均可行",
            "conflict": "题干应使用“参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0””，由此得到“m>0且N≥0”；错误结果“所有实数参数均可行”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“所有实数参数均可行”所表达的状态作为判定结果，而未检验质量为正且所有单侧约束成立及方程“参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0””。"
          },
          {
            "option": "两物体仍接触且支持力为2 N",
            "wrongObjectOrForces": "以参数解N=m(g+a)还必须满足什么条件为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "两物体仍接触且支持力为2 N",
            "conflict": "题干应使用“参数解N=m(g+a)还必须满足什么条件；正确判据为“m>0且N≥0””，由此得到“m>0且N≥0”；错误结果“两物体仍接触且支持力为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=两物体仍接触且支持力为2 N",
            "wrongSubstitution": "把本题数值0、0按该错误关系计算：X=两物体仍接触且支持力为2 N"
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
            "wrongObjectOrForces": "以线性阻力下速度增大时加速度为何减小为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "阻力大小与速度无关",
            "conflict": "题干应使用“线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小””，由此得到“kv增大使mg-kv减小”；错误结果“阻力大小与速度无关”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“阻力大小与速度无关”所表达的状态作为判定结果，而未检验下落取正，k恒定且模型只在给定速度范围内及方程“线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小””。"
          },
          {
            "option": "终端速度时重力消失",
            "wrongObjectOrForces": "以线性阻力下速度增大时加速度为何减小为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "终端速度时重力消失",
            "conflict": "题干应使用“线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小””，由此得到“kv增大使mg-kv减小”；错误结果“终端速度时重力消失”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“终端速度时重力消失”所表达的状态作为判定结果，而未检验下落取正，k恒定且模型只在给定速度范围内及方程“线性阻力下速度增大时加速度为何减小；正确判据为“kv增大使mg-kv减小””。"
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
            "wrongObjectOrForces": "以喷气火箭建模为何先声明系统边界为研究对象，但错误模型未按推力、重力的实际方向或作用对象组成合力。",
            "wrongResult": "推力项为0",
            "conflict": "题干应使用“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””，由此得到“跨边界质量携带动量”；错误结果“推力项为0”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“推力项为0”所表达的状态作为判定结果，而未检验声明控制体、相对喷射速度和质量变化率符号及方程“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””。"
          },
          {
            "option": "质量流率为零时仍有动量流力",
            "wrongObjectOrForces": "以喷气火箭建模为何先声明系统边界为研究对象，但错误模型未按推力、重力的实际方向或作用对象组成合力。",
            "wrongResult": "质量流率为零时仍有动量流力",
            "conflict": "题干应使用“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””，由此得到“跨边界质量携带动量”；错误结果“质量流率为零时仍有动量流力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“质量流率为零时仍有动量流力”所表达的状态作为判定结果，而未检验声明控制体、相对喷射速度和质量变化率符号及方程“喷气火箭建模为何先声明系统边界；正确判据为“跨边界质量携带动量””。"
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
            "wrongObjectOrForces": "以dv/dt=4-2v左边表示什么物理量为研究对象，但错误模型未按驱动力、速度相关阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "速度恒等于加速度",
            "conflict": "题干应使用“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””，由此得到“速度对时间的瞬时变化率”；错误结果“速度恒等于加速度”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“速度恒等于加速度”所表达的状态作为判定结果，而未检验质量恒定、惯性系、给定力模型区间与初值及方程“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””。"
          },
          {
            "option": "非齐次驱动力为0",
            "wrongObjectOrForces": "以dv/dt=4-2v左边表示什么物理量为研究对象，但错误模型未按驱动力、速度相关阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "非齐次驱动力为0",
            "conflict": "题干应使用“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””，由此得到“速度对时间的瞬时变化率”；错误结果“非齐次驱动力为0”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“非齐次驱动力为0”所表达的状态作为判定结果，而未检验质量恒定、惯性系、给定力模型区间与初值及方程“dv/dt=4-2v左边表示什么物理量；正确判据为“速度对时间的瞬时变化率””。"
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
            "wrongObjectOrForces": "以欧拉更新式为什么不能未计入Δt为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "v(n+1)=v(n)+a(vn)",
            "conflict": "题干应使用“欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量””，由此得到“aΔt才是速度增量”；错误结果“v(n+1)=v(n)+a(vn)”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=v(n+1)=v(n)+a(vn)",
            "wrongSubstitution": "把本题数值0按该错误关系计算：X=v(n+1)=v(n)+a(vn)"
          },
          {
            "option": "用一次大步宣称模型正确",
            "wrongObjectOrForces": "以欧拉更新式为什么不能未计入Δt为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "用一次大步宣称模型正确",
            "conflict": "题干应使用“欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量””，由此得到“aΔt才是速度增量”；错误结果“用一次大步宣称模型正确”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“用一次大步宣称模型正确”所表达的状态作为判定结果，而未检验每步用当前状态算力，Δt单位为s且足够小及方程“欧拉更新式为什么不能未计入Δt；正确判据为“aΔt才是速度增量””。"
          }
        ]
      }
    }
  ]
});
