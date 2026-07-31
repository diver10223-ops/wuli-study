window.M4CExam=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-exam-v1",
  "durationSeconds": 3600,
  "reviewDays": 7,
  "passTitle": "C轨exam通过",
  "failTitle": "C轨exam未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-c-check-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 70,
  "questions": [
    {
      "id": "M4CE01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": true,
      "text": "对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具 该模型的最终结论是什么？",
      "options": [
        "惯性力仅是随动系工具",
        "在地面系添加惯性力",
        "给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2.0 kg箱",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具",
        "substitution": "对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具",
        "candidate": "惯性力仅是随动系工具",
        "constraint": "必须声明非惯性参考系，只处理平动随动系",
        "final": "惯性力仅是随动系工具",
        "answerIndex": 0,
        "unique": "由本题关系“对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具”只能得到“惯性力仅是随动系工具”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "在地面系添加惯性力",
            "wrongObjectOrForces": "研究对象仍为2.0 kg箱；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "在地面系添加惯性力",
            "conflict": "“在地面系添加惯性力”与本题正确关系“对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具”冲突；满足题设的结果是“惯性力仅是随动系工具”。",
            "wrongCriterion": "采用判据“在地面系添加惯性力”而非本题判据“惯性力仅是随动系工具”"
          },
          {
            "option": "给惯性力找施力者",
            "wrongObjectOrForces": "研究对象仍为2.0 kg箱；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "给惯性力找施力者",
            "conflict": "“给惯性力找施力者”与本题正确关系“对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具”冲突；满足题设的结果是“惯性力仅是随动系工具”。",
            "wrongCriterion": "采用判据“给惯性力找施力者”而非本题判据“惯性力仅是随动系工具”"
          }
        ]
      }
    },
    {
      "id": "M4CE02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": true,
      "text": "对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界 该模型的最终结论是什么？",
      "options": [
        "只给代数解不写区间",
        "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "保留负接触力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "m>0乘客",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "substitution": "对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "candidate": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "constraint": "质量为正且所有单侧约束成立",
        "final": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "answerIndex": 1,
        "unique": "由本题关系“对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”只能得到“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "只给代数解不写区间",
            "wrongObjectOrForces": "研究对象仍为m>0乘客；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "只给代数解不写区间",
            "conflict": "“只给代数解不写区间”与本题正确关系“对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”冲突；满足题设的结果是“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”。",
            "wrongCriterion": "采用判据“只给代数解不写区间”而非本题判据“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”"
          },
          {
            "option": "保留负接触力",
            "wrongObjectOrForces": "研究对象仍为m>0乘客；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "保留负接触力",
            "conflict": "“保留负接触力”与本题正确关系“对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”冲突；满足题设的结果是“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”。",
            "wrongCriterion": "采用判据“保留负接触力”而非本题判据“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”"
          }
        ]
      }
    },
    {
      "id": "M4CE03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": true,
      "text": "对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区 该模型的最终结论是什么？",
      "options": [
        "阻力当恒力",
        "终端速度时重力消失",
        "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "0.10 kg小球",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "substitution": "对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "candidate": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "constraint": "下落取正，k恒定且模型只在给定速度范围内",
        "final": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "answerIndex": 2,
        "unique": "由本题关系“对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”只能得到“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "阻力当恒力",
            "wrongObjectOrForces": "研究对象仍为0.10 kg小球；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "阻力当恒力",
            "conflict": "“阻力当恒力”与本题正确关系“对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”冲突；满足题设的结果是“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”。",
            "wrongCriterion": "采用判据“阻力当恒力”而非本题判据“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”"
          },
          {
            "option": "终端速度时重力消失",
            "wrongObjectOrForces": "研究对象仍为0.10 kg小球；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "终端速度时重力消失",
            "conflict": "“终端速度时重力消失”与本题正确关系“对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”冲突；满足题设的结果是“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”。",
            "wrongCriterion": "采用判据“终端速度时重力消失”而非本题判据“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”"
          }
        ]
      }
    },
    {
      "id": "M4CE04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": true,
      "text": "对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s² 该模型的最终结论是什么？",
      "options": [
        "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "推力项为0",
        "质量变化本身当外力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "火箭本体开放系统",
        "frame": "地面近似惯性参考系",
        "forces": [
          "推力",
          "重力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "substitution": "对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "candidate": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "constraint": "声明控制体、相对喷射速度和质量变化率符号",
        "final": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "answerIndex": 0,
        "unique": "由本题关系“对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”只能得到“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "推力项为0",
            "wrongObjectOrForces": "研究对象仍为火箭本体开放系统，但方程中漏去推力项",
            "wrongResult": "推力项为0",
            "conflict": "“推力项为0”与本题正确关系“对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”冲突；满足题设的结果是“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”。",
            "wrongEquation": "按选项建立关系“推力项为0”；该式取代了本题关系“对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”",
            "wrongSubstitution": "在“对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s² 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“推力项为0”"
          },
          {
            "option": "质量变化本身当外力",
            "wrongObjectOrForces": "研究对象仍为火箭本体开放系统；真实力应为推力、重力，该选项改变了其中的合力或状态判断",
            "wrongResult": "质量变化本身当外力",
            "conflict": "“质量变化本身当外力”与本题正确关系“对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”冲突；满足题设的结果是“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”。",
            "wrongCriterion": "采用判据“质量变化本身当外力”而非本题判据“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”"
          }
        ]
      }
    },
    {
      "id": "M4CE05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": true,
      "text": "对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速 该模型的最终结论是什么？",
      "options": [
        "dv/dt当速度",
        "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "非齐次驱动力为0"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2.0 kg滑块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "驱动力",
          "速度相关阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "substitution": "对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "candidate": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "constraint": "质量恒定、惯性系、给定力模型区间与初值",
        "final": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "answerIndex": 1,
        "unique": "由本题关系“对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”只能得到“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "dv/dt当速度",
            "wrongObjectOrForces": "研究对象仍为2.0 kg滑块；真实力应为驱动力、速度相关阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "dv/dt当速度",
            "conflict": "“dv/dt当速度”与本题正确关系“对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”冲突；满足题设的结果是“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”。",
            "wrongCriterion": "采用判据“dv/dt当速度”而非本题判据“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”"
          },
          {
            "option": "非齐次驱动力为0",
            "wrongObjectOrForces": "研究对象仍为2.0 kg滑块，但方程中漏去非齐次驱动力",
            "wrongResult": "非齐次驱动力为0",
            "conflict": "“非齐次驱动力为0”与本题正确关系“对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”冲突；满足题设的结果是“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”。",
            "wrongEquation": "按选项建立关系“非齐次驱动力为0”；该式取代了本题关系“对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”",
            "wrongSubstitution": "在“对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“非齐次驱动力为0”"
          }
        ]
      }
    },
    {
      "id": "M4CE06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": true,
      "text": "对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差 该模型的最终结论是什么？",
      "options": [
        "更新漏乘Δt",
        "用一次大步宣称模型正确",
        "用0.10 s两步比较步长误差"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "应用",
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
        "target": "model-result",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "1.0 kg小球",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差",
        "substitution": "对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差",
        "candidate": "用0.10 s两步比较步长误差",
        "constraint": "每步用当前状态算力，Δt单位为s且足够小",
        "final": "用0.10 s两步比较步长误差",
        "answerIndex": 2,
        "unique": "由本题关系“对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差”只能得到“用0.10 s两步比较步长误差”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "更新漏乘Δt",
            "wrongObjectOrForces": "研究对象仍为1.0 kg小球，但方程中漏去乘Δt",
            "wrongResult": "更新漏乘Δt",
            "conflict": "“更新漏乘Δt”与本题正确关系“对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差”冲突；满足题设的结果是“用0.10 s两步比较步长误差”。",
            "wrongCriterion": "采用判据“更新漏乘Δt”而非本题判据“用0.10 s两步比较步长误差”"
          },
          {
            "option": "用一次大步宣称模型正确",
            "wrongObjectOrForces": "研究对象仍为1.0 kg小球；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "用一次大步宣称模型正确",
            "conflict": "“用一次大步宣称模型正确”与本题正确关系“对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差”冲突；满足题设的结果是“用0.10 s两步比较步长误差”。",
            "wrongCriterion": "采用判据“用一次大步宣称模型正确”而非本题判据“用0.10 s两步比较步长误差”"
          }
        ]
      }
    },
    {
      "id": "M4CE07",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "基础边界",
      "novel": true,
      "text": "在向右加速的车厢系研究静止小球，惯性力工具项方向应为？",
      "options": [
        "向右，与车厢加速度同向",
        "向左，与车厢加速度反向",
        "竖直向上"
      ],
      "answer": 1,
      "skill": "非惯性系与惯性力边界",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "在向右加速的车厢系研究静止小球",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "车厢系中加入F惯=-ma车，方向向左",
        "substitution": "本题为判别题，不作数值代入；使用判据“向左，与车厢加速度反向”",
        "candidate": "向左，与车厢加速度反向",
        "constraint": "惯性力是非惯性系工具项，不是真实相互作用",
        "final": "向左，与车厢加速度反向",
        "answerIndex": 1,
        "unique": "由本题关系“车厢系中加入F惯=-ma车，方向向左”只能得到“向左，与车厢加速度反向”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "向右，与车厢加速度同向",
            "wrongObjectOrForces": "研究对象仍为在向右加速的车厢系研究静止小球；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "向右，与车厢加速度同向",
            "conflict": "“向右，与车厢加速度同向”与本题正确关系“车厢系中加入F惯=-ma车，方向向左”冲突；满足题设的结果是“向左，与车厢加速度反向”。",
            "wrongEquation": "按选项建立关系“向右，与车厢加速度同向”；该式取代了本题关系“车厢系中加入F惯=-ma车，方向向左”",
            "wrongSubstitution": "在“在向右加速的车厢系研究静止小球，惯性力工具项方向应为？”给定条件下，将本题给定量代入该关系后得到“向右，与车厢加速度同向”"
          },
          {
            "option": "竖直向上",
            "wrongObjectOrForces": "研究对象仍为在向右加速的车厢系研究静止小球；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "竖直向上",
            "conflict": "“竖直向上”与本题正确关系“车厢系中加入F惯=-ma车，方向向左”冲突；满足题设的结果是“向左，与车厢加速度反向”。",
            "wrongEquation": "按选项建立关系“竖直向上”；该式取代了本题关系“车厢系中加入F惯=-ma车，方向向左”",
            "wrongSubstitution": "在“在向右加速的车厢系研究静止小球，惯性力工具项方向应为？”给定条件下，将本题给定量代入该关系后得到“竖直向上”"
          }
        ]
      }
    },
    {
      "id": "M4CE08",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": true,
      "text": "参数解算得支持力N=mg-F。该接触模型存在的条件是？",
      "options": [
        "F≥mg",
        "任意F均可",
        "F≤mg"
      ],
      "answer": 2,
      "skill": "参数动力学与存在区间",
      "level": "基础判别",
      "constraint": "质量为正且所有单侧约束成立",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "参数解算得支持力N=mg-F",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "单侧接触要求N=mg-F≥0，故F≤mg",
        "substitution": "单侧接触要求N=mg-F≥0，故F≤mg",
        "candidate": "F≤mg",
        "constraint": "若F>mg应切换为离地模型",
        "final": "F≤mg",
        "answerIndex": 2,
        "unique": "由本题关系“单侧接触要求N=mg-F≥0，故F≤mg”只能得到“F≤mg”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "F≥mg",
            "wrongObjectOrForces": "研究对象仍为参数解算得支持力N=mg-F；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "F≥mg",
            "conflict": "“F≥mg”与本题正确关系“单侧接触要求N=mg-F≥0，故F≤mg”冲突；满足题设的结果是“F≤mg”。",
            "wrongEquation": "按选项建立关系“F≥mg”；该式取代了本题关系“单侧接触要求N=mg-F≥0，故F≤mg”",
            "wrongSubstitution": "在“参数解算得支持力N=mg-F。该接触模型存在的条件是？”给定条件下，将本题给定量代入该关系后得到“F≥mg”"
          },
          {
            "option": "任意F均可",
            "wrongObjectOrForces": "研究对象仍为参数解算得支持力N=mg-F；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "任意F均可",
            "conflict": "“任意F均可”与本题正确关系“单侧接触要求N=mg-F≥0，故F≤mg”冲突；满足题设的结果是“F≤mg”。",
            "wrongCriterion": "采用判据“任意F均可”而非本题判据“F≤mg”"
          }
        ]
      }
    },
    {
      "id": "M4CE09",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": true,
      "text": "物体受线性阻力kv下落，达到终端速度时满足？",
      "options": [
        "mg-kv=0",
        "mg+kv=0且v=0",
        "kv=ma且重力消失"
      ],
      "answer": 0,
      "skill": "速度阻力与终端速度",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "物体受线性阻力kv下落",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k",
        "substitution": "向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k",
        "candidate": "mg-kv=0",
        "constraint": "终端速度是合力为零，不是阻力模型失效",
        "final": "mg-kv=0",
        "answerIndex": 0,
        "unique": "由本题关系“向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k”只能得到“mg-kv=0”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "mg+kv=0且v=0",
            "wrongObjectOrForces": "研究对象仍为物体受线性阻力kv下落；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "mg+kv=0且v=0",
            "conflict": "“mg+kv=0且v=0”与本题正确关系“向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k”冲突；满足题设的结果是“mg-kv=0”。",
            "wrongEquation": "按选项建立关系“mg+kv=0且v=0”；该式取代了本题关系“向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k”",
            "wrongSubstitution": "在“物体受线性阻力kv下落，达到终端速度时满足？”给定条件下，将本题给定量代入该关系后得到“mg+kv=0且v=0”"
          },
          {
            "option": "kv=ma且重力消失",
            "wrongObjectOrForces": "研究对象仍为物体受线性阻力kv下落；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "kv=ma且重力消失",
            "conflict": "“kv=ma且重力消失”与本题正确关系“向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k”冲突；满足题设的结果是“mg-kv=0”。",
            "wrongEquation": "按选项建立关系“kv=ma且重力消失”；该式取代了本题关系“向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k”",
            "wrongSubstitution": "在“物体受线性阻力kv下落，达到终端速度时满足？”给定条件下，将本题给定量代入该关系后得到“kv=ma且重力消失”"
          }
        ]
      }
    },
    {
      "id": "M4CE10",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": true,
      "text": "分析漏沙小车时，若研究对象只取“车内剩余沙和车”，首先必须补充什么？",
      "options": [
        "流出沙仍算作内部质量",
        "动量流过系统边界的信息",
        "假设质量恒定"
      ],
      "answer": 1,
      "skill": "变质量系统与动量流",
      "level": "基础判别",
      "constraint": "声明控制体、相对喷射速度和质量变化率符号",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "漏沙小车时",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "开系统动量变化除外力冲量外还含质量流携带的动量",
        "substitution": "本题为判别题，不作数值代入；使用判据“动量流过系统边界的信息”",
        "candidate": "动量流过系统边界的信息",
        "constraint": "变质量边界必须说明流入流出速度",
        "final": "动量流过系统边界的信息",
        "answerIndex": 1,
        "unique": "由本题关系“开系统动量变化除外力冲量外还含质量流携带的动量”只能得到“动量流过系统边界的信息”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "流出沙仍算作内部质量",
            "wrongObjectOrForces": "研究对象仍为漏沙小车时；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "流出沙仍算作内部质量",
            "conflict": "“流出沙仍算作内部质量”与本题正确关系“开系统动量变化除外力冲量外还含质量流携带的动量”冲突；满足题设的结果是“动量流过系统边界的信息”。",
            "wrongCriterion": "采用判据“流出沙仍算作内部质量”而非本题判据“动量流过系统边界的信息”"
          },
          {
            "option": "假设质量恒定",
            "wrongObjectOrForces": "研究对象仍为漏沙小车时；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "假设质量恒定",
            "conflict": "“假设质量恒定”与本题正确关系“开系统动量变化除外力冲量外还含质量流携带的动量”冲突；满足题设的结果是“动量流过系统边界的信息”。",
            "wrongCriterion": "采用判据“假设质量恒定”而非本题判据“动量流过系统边界的信息”"
          }
        ]
      }
    },
    {
      "id": "M4CE11",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": true,
      "text": "方程m dv/dt=F-kv中，若v<F/k，则速度如何变化？",
      "options": [
        "dv/dt<0，速度减小",
        "dv/dt=0",
        "dv/dt>0，速度增大"
      ],
      "answer": 2,
      "skill": "一阶动力学微分方程",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "方程m dv/dt=F-kv中",
        "frame": "地面近似惯性参考系",
        "forces": [
          "驱动力",
          "速度相关阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "dv/dt=(F-kv)/m>0",
        "substitution": "dv/dt=(F-kv)/m>0",
        "candidate": "dv/dt>0，速度增大",
        "constraint": "导数符号决定瞬时演化方向",
        "final": "dv/dt>0，速度增大",
        "answerIndex": 2,
        "unique": "由本题关系“dv/dt=(F-kv)/m>0”只能得到“dv/dt>0，速度增大”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "dv/dt<0，速度减小",
            "wrongObjectOrForces": "研究对象仍为方程m dv/dt=F-kv中；真实力应为驱动力、速度相关阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "dv/dt<0，速度减小",
            "conflict": "“dv/dt<0，速度减小”与本题正确关系“dv/dt=(F-kv)/m>0”冲突；满足题设的结果是“dv/dt>0，速度增大”。",
            "wrongEquation": "按选项建立关系“dv/dt<0，速度减小”；该式取代了本题关系“dv/dt=(F-kv)/m>0”",
            "wrongSubstitution": "在“方程m dv/dt=F-kv中，若v<F/k，则速度如何变化？”给定条件下，将本题给定量代入该关系后得到“dv/dt<0，速度减小”"
          },
          {
            "option": "dv/dt=0",
            "wrongObjectOrForces": "研究对象仍为方程m dv/dt=F-kv中；真实力应为驱动力、速度相关阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "dv/dt=0",
            "conflict": "“dv/dt=0”与本题正确关系“dv/dt=(F-kv)/m>0”冲突；满足题设的结果是“dv/dt>0，速度增大”。",
            "wrongEquation": "按选项建立关系“dv/dt=0”；该式取代了本题关系“dv/dt=(F-kv)/m>0”",
            "wrongSubstitution": "在“方程m dv/dt=F-kv中，若v<F/k，则速度如何变化？”给定条件下，将本题给定量代入该关系后得到“dv/dt=0”"
          }
        ]
      }
    },
    {
      "id": "M4CE12",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": true,
      "text": "用显式欧拉法更新dv/dt=a(v)，正确的一步是？",
      "options": [
        "v_{n+1}=v_n+a(v_n)Δt",
        "v_{n+1}=a(v_{n+1})/Δt",
        "v_{n+1}=v_n+a(v_n)/Δt"
      ],
      "answer": 0,
      "skill": "欧拉法数值动力学",
      "level": "基础判别",
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
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "用显式欧拉法更新dv/dt=a(v)",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt",
        "substitution": "在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt",
        "candidate": "v_{n+1}=v_n+a(v_n)Δt",
        "constraint": "加速度乘时间才具有速度量纲",
        "final": "v_{n+1}=v_n+a(v_n)Δt",
        "answerIndex": 0,
        "unique": "由本题关系“在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt”只能得到“v_{n+1}=v_n+a(v_n)Δt”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "v_{n+1}=a(v_{n+1})/Δt",
            "wrongObjectOrForces": "研究对象仍为用显式欧拉法更新dv/dt=a(v)；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "v_{n+1}=a(v_{n+1})/Δt",
            "conflict": "“v_{n+1}=a(v_{n+1})/Δt”与本题正确关系“在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt”冲突；满足题设的结果是“v_{n+1}=v_n+a(v_n)Δt”。",
            "wrongEquation": "按选项建立关系“v_{n+1}=a(v_{n+1})/Δt”；该式取代了本题关系“在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt”",
            "wrongSubstitution": "在“用显式欧拉法更新dv/dt=a(v)，正确的一步是？”给定条件下，将本题给定量代入该关系后得到“v_{n+1}=a(v_{n+1})/Δt”"
          },
          {
            "option": "v_{n+1}=v_n+a(v_n)/Δt",
            "wrongObjectOrForces": "研究对象仍为用显式欧拉法更新dv/dt=a(v)；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "v_{n+1}=v_n+a(v_n)/Δt",
            "conflict": "“v_{n+1}=v_n+a(v_n)/Δt”与本题正确关系“在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt”冲突；满足题设的结果是“v_{n+1}=v_n+a(v_n)Δt”。",
            "wrongEquation": "按选项建立关系“v_{n+1}=v_n+a(v_n)/Δt”；该式取代了本题关系“在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt”",
            "wrongSubstitution": "在“用显式欧拉法更新dv/dt=a(v)，正确的一步是？”给定条件下，将本题给定量代入该关系后得到“v_{n+1}=v_n+a(v_n)/Δt”"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 70 })
});
