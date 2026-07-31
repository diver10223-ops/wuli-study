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
        "模型判断：在地面系添加惯性力",
        "模型判断：给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "应用",
      "constraint": "必须声明非惯性参考系，只处理平动随动系",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
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
        "object": "非惯性系与惯性力边界",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
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
        "unique": "只有选项“惯性力仅是随动系工具”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：在地面系添加惯性力",
            "wrongObjectOrForces": "仍取非惯性系与惯性力边界，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：在地面系添加惯性力”",
            "wrongResult": "模型判断：在地面系添加惯性力",
            "conflict": "该结果不满足正确关系或条件：必须声明非惯性参考系，只处理平动随动系"
          },
          {
            "option": "模型判断：给惯性力找施力者",
            "wrongObjectOrForces": "仍取非惯性系与惯性力边界，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：给惯性力找施力者”",
            "wrongResult": "模型判断：给惯性力找施力者",
            "conflict": "该结果不满足正确关系或条件：必须声明非惯性参考系，只处理平动随动系"
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
        "计算结果：只给代数解不写区间",
        "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "模型判断：保留负接触力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "应用",
      "constraint": "质量为正且所有单侧约束成立",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
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
        "object": "参数动力学与存在区间",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "substitution": "对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "candidate": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "constraint": "质量为正且所有单侧约束成立",
        "final": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "answerIndex": 1,
        "unique": "只有选项“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：只给代数解不写区间",
            "wrongObjectOrForces": "仍取参数动力学与存在区间，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：只给代数解不写区间”",
            "wrongResult": "计算结果：只给代数解不写区间",
            "conflict": "该结果不满足正确关系或条件：质量为正且所有单侧约束成立"
          },
          {
            "option": "模型判断：保留负接触力",
            "wrongObjectOrForces": "仍取参数动力学与存在区间，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：保留负接触力”",
            "wrongResult": "模型判断：保留负接触力",
            "conflict": "该结果不满足正确关系或条件：质量为正且所有单侧约束成立"
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
        "计算结果：把阻力当恒力",
        "模型判断：认为终端速度时重力消失",
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
          "applied",
          "resistance"
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
        "object": "速度阻力与终端速度",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "substitution": "对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "candidate": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "constraint": "下落取正，k恒定且模型只在给定速度范围内",
        "final": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "answerIndex": 2,
        "unique": "只有选项“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把阻力当恒力",
            "wrongObjectOrForces": "仍取速度阻力与终端速度，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把阻力当恒力”",
            "wrongResult": "计算结果：把阻力当恒力",
            "conflict": "该结果不满足正确关系或条件：下落取正，k恒定且模型只在给定速度范围内"
          },
          {
            "option": "模型判断：认为终端速度时重力消失",
            "wrongObjectOrForces": "仍取速度阻力与终端速度，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为终端速度时重力消失”",
            "wrongResult": "模型判断：认为终端速度时重力消失",
            "conflict": "该结果不满足正确关系或条件：下落取正，k恒定且模型只在给定速度范围内"
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
        "模型判断：未计入推力项",
        "模型判断：把质量变化本身当外力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "应用",
      "constraint": "声明控制体、相对喷射速度和质量变化率符号",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
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
        "object": "变质量系统与动量流",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "substitution": "对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "candidate": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "constraint": "声明控制体、相对喷射速度和质量变化率符号",
        "final": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "answerIndex": 0,
        "unique": "只有选项“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：未计入推力项",
            "wrongObjectOrForces": "仍取变质量系统与动量流，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未计入推力项”",
            "wrongResult": "模型判断：未计入推力项",
            "conflict": "该结果不满足正确关系或条件：声明控制体、相对喷射速度和质量变化率符号"
          },
          {
            "option": "模型判断：把质量变化本身当外力",
            "wrongObjectOrForces": "仍取变质量系统与动量流，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把质量变化本身当外力”",
            "wrongResult": "模型判断：把质量变化本身当外力",
            "conflict": "该结果不满足正确关系或条件：声明控制体、相对喷射速度和质量变化率符号"
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
        "计算结果：把dv/dt当速度",
        "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "模型判断：未计入非齐次驱动力"
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
          "resistance"
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
        "object": "一阶动力学微分方程",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "substitution": "对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "candidate": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "constraint": "质量恒定、惯性系、给定力模型区间与初值",
        "final": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "answerIndex": 1,
        "unique": "只有选项“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把dv/dt当速度",
            "wrongObjectOrForces": "仍取一阶动力学微分方程，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把dv/dt当速度”",
            "wrongResult": "计算结果：把dv/dt当速度",
            "conflict": "该结果不满足正确关系或条件：质量恒定、惯性系、给定力模型区间与初值"
          },
          {
            "option": "模型判断：未计入非齐次驱动力",
            "wrongObjectOrForces": "仍取一阶动力学微分方程，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未计入非齐次驱动力”",
            "wrongResult": "模型判断：未计入非齐次驱动力",
            "conflict": "该结果不满足正确关系或条件：质量恒定、惯性系、给定力模型区间与初值"
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
        "计算结果：更新漏乘Δt",
        "模型判断：用一次大步宣称模型正确",
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
        "object": "欧拉法数值动力学",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差",
        "substitution": "对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差",
        "candidate": "用0.10 s两步比较步长误差",
        "constraint": "每步用当前状态算力，Δt单位为s且足够小",
        "final": "用0.10 s两步比较步长误差",
        "answerIndex": 2,
        "unique": "只有选项“用0.10 s两步比较步长误差”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：更新漏乘Δt",
            "wrongObjectOrForces": "仍取欧拉法数值动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：更新漏乘Δt”",
            "wrongResult": "计算结果：更新漏乘Δt",
            "conflict": "该结果不满足正确关系或条件：每步用当前状态算力，Δt单位为s且足够小"
          },
          {
            "option": "模型判断：用一次大步宣称模型正确",
            "wrongObjectOrForces": "仍取欧拉法数值动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：用一次大步宣称模型正确”",
            "wrongResult": "模型判断：用一次大步宣称模型正确",
            "conflict": "该结果不满足正确关系或条件：每步用当前状态算力，Δt单位为s且足够小"
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
        "object": "加速车厢内的小球",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "车厢系中加入F惯=-ma车，方向向左",
        "substitution": "车厢系中加入F惯=-ma车，方向向左",
        "candidate": "向左，与车厢加速度反向",
        "constraint": "惯性力是非惯性系工具项，不是真实相互作用",
        "final": "向左，与车厢加速度反向",
        "answerIndex": 1,
        "unique": "只有选项“向左，与车厢加速度反向”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "向右，与车厢加速度同向",
            "wrongObjectOrForces": "研究对象仍为加速车厢内的小球，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“向右，与车厢加速度同向”，而正确关系为“车厢系中加入F惯=-ma车，方向向左”",
            "wrongSubstitution": "按错误符号或单位代入后得到“向右，与车厢加速度同向”",
            "wrongResult": "向右，与车厢加速度同向",
            "conflict": "不满足惯性力是非惯性系工具项，不是真实相互作用"
          },
          {
            "option": "竖直向上",
            "wrongObjectOrForces": "研究对象仍为加速车厢内的小球，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“竖直向上”，而正确关系为“车厢系中加入F惯=-ma车，方向向左”",
            "wrongSubstitution": "按错误符号或单位代入后得到“竖直向上”",
            "wrongResult": "竖直向上",
            "conflict": "不满足惯性力是非惯性系工具项，不是真实相互作用"
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
          "resistance"
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
        "object": "受竖直拉力的地面物块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "单侧接触要求N=mg-F≥0，故F≤mg",
        "substitution": "单侧接触要求N=mg-F≥0，故F≤mg",
        "candidate": "F≤mg",
        "constraint": "若F>mg应切换为离地模型",
        "final": "F≤mg",
        "answerIndex": 2,
        "unique": "只有选项“F≤mg”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "F≥mg",
            "wrongObjectOrForces": "研究对象仍为受竖直拉力的地面物块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“F≥mg”，而正确关系为“单侧接触要求N=mg-F≥0，故F≤mg”",
            "wrongSubstitution": "按错误符号或单位代入后得到“F≥mg”",
            "wrongResult": "F≥mg",
            "conflict": "不满足若F>mg应切换为离地模型"
          },
          {
            "option": "任意F均可",
            "wrongObjectOrForces": "研究对象仍为受竖直拉力的地面物块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“任意F均可”，而正确关系为“单侧接触要求N=mg-F≥0，故F≤mg”",
            "wrongSubstitution": "按错误符号或单位代入后得到“任意F均可”",
            "wrongResult": "任意F均可",
            "conflict": "不满足若F>mg应切换为离地模型"
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
          "applied",
          "resistance"
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
        "object": "竖直下落物体",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k",
        "substitution": "向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k",
        "candidate": "mg-kv=0",
        "constraint": "终端速度是合力为零，不是阻力模型失效",
        "final": "mg-kv=0",
        "answerIndex": 0,
        "unique": "只有选项“mg-kv=0”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "mg+kv=0且v=0",
            "wrongObjectOrForces": "研究对象仍为竖直下落物体，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“mg+kv=0且v=0”，而正确关系为“向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k”",
            "wrongSubstitution": "按错误符号或单位代入后得到“mg+kv=0且v=0”",
            "wrongResult": "mg+kv=0且v=0",
            "conflict": "不满足终端速度是合力为零，不是阻力模型失效"
          },
          {
            "option": "kv=ma且重力消失",
            "wrongObjectOrForces": "研究对象仍为竖直下落物体，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“kv=ma且重力消失”，而正确关系为“向下正：m dv/dt=mg-kv；终端时dv/dt=0，v_t=mg/k”",
            "wrongSubstitution": "按错误符号或单位代入后得到“kv=ma且重力消失”",
            "wrongResult": "kv=ma且重力消失",
            "conflict": "不满足终端速度是合力为零，不是阻力模型失效"
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
        "把流出沙仍算作内部质量",
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
          "applied",
          "resistance"
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
        "object": "漏沙小车及车内剩余沙",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "开系统动量变化除外力冲量外还含质量流携带的动量",
        "substitution": "开系统动量变化除外力冲量外还含质量流携带的动量",
        "candidate": "动量流过系统边界的信息",
        "constraint": "变质量边界必须说明流入流出速度",
        "final": "动量流过系统边界的信息",
        "answerIndex": 1,
        "unique": "只有选项“动量流过系统边界的信息”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "把流出沙仍算作内部质量",
            "wrongObjectOrForces": "研究对象仍为漏沙小车及车内剩余沙，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“把流出沙仍算作内部质量”，而正确关系为“开系统动量变化除外力冲量外还含质量流携带的动量”",
            "wrongSubstitution": "按错误符号或单位代入后得到“把流出沙仍算作内部质量”",
            "wrongResult": "把流出沙仍算作内部质量",
            "conflict": "不满足变质量边界必须说明流入流出速度"
          },
          {
            "option": "假设质量恒定",
            "wrongObjectOrForces": "研究对象仍为漏沙小车及车内剩余沙，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“假设质量恒定”，而正确关系为“开系统动量变化除外力冲量外还含质量流携带的动量”",
            "wrongSubstitution": "按错误符号或单位代入后得到“假设质量恒定”",
            "wrongResult": "假设质量恒定",
            "conflict": "不满足变质量边界必须说明流入流出速度"
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
          "resistance"
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
        "object": "受恒力与线性阻力的物体",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "dv/dt=(F-kv)/m>0",
        "substitution": "dv/dt=(F-kv)/m>0",
        "candidate": "dv/dt>0，速度增大",
        "constraint": "导数符号决定瞬时演化方向",
        "final": "dv/dt>0，速度增大",
        "answerIndex": 2,
        "unique": "只有选项“dv/dt>0，速度增大”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "dv/dt<0，速度减小",
            "wrongObjectOrForces": "研究对象仍为受恒力与线性阻力的物体，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“dv/dt<0，速度减小”，而正确关系为“dv/dt=(F-kv)/m>0”",
            "wrongSubstitution": "按错误符号或单位代入后得到“dv/dt<0，速度减小”",
            "wrongResult": "dv/dt<0，速度减小",
            "conflict": "不满足导数符号决定瞬时演化方向"
          },
          {
            "option": "dv/dt=0",
            "wrongObjectOrForces": "研究对象仍为受恒力与线性阻力的物体，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“dv/dt=0”，而正确关系为“dv/dt=(F-kv)/m>0”",
            "wrongSubstitution": "按错误符号或单位代入后得到“dv/dt=0”",
            "wrongResult": "dv/dt=0",
            "conflict": "不满足导数符号决定瞬时演化方向"
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
        "object": "数值积分中的质点",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt",
        "substitution": "在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt",
        "candidate": "v_{n+1}=v_n+a(v_n)Δt",
        "constraint": "加速度乘时间才具有速度量纲",
        "final": "v_{n+1}=v_n+a(v_n)Δt",
        "answerIndex": 0,
        "unique": "只有选项“v_{n+1}=v_n+a(v_n)Δt”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "v_{n+1}=a(v_{n+1})/Δt",
            "wrongObjectOrForces": "研究对象仍为数值积分中的质点，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“v_{n+1}=a(v_{n+1})/Δt”，而正确关系为“在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt”",
            "wrongSubstitution": "按错误符号或单位代入后得到“v_{n+1}=a(v_{n+1})/Δt”",
            "wrongResult": "v_{n+1}=a(v_{n+1})/Δt",
            "conflict": "不满足加速度乘时间才具有速度量纲"
          },
          {
            "option": "v_{n+1}=v_n+a(v_n)/Δt",
            "wrongObjectOrForces": "研究对象仍为数值积分中的质点，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“v_{n+1}=v_n+a(v_n)/Δt”，而正确关系为“在步首评价斜率：v_{n+1}=v_n+a(v_n)Δt”",
            "wrongSubstitution": "按错误符号或单位代入后得到“v_{n+1}=v_n+a(v_n)/Δt”",
            "wrongResult": "v_{n+1}=v_n+a(v_n)/Δt",
            "conflict": "不满足加速度乘时间才具有速度量纲"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 70 })
});
