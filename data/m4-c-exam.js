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
        "错误路径：在地面系添加惯性力",
        "错误路径：给惯性力找施力者"
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
        "object": "非惯性系与惯性力边界题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具",
        "substitution": "对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具",
        "candidate": "惯性力仅是随动系工具",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "惯性力仅是随动系工具",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：在地面系添加惯性力",
          "错误路径：给惯性力找施力者"
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
        "错误路径：只给代数解不写区间",
        "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "错误路径：保留负接触力"
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
        "object": "参数动力学与存在区间题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "substitution": "对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "candidate": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：只给代数解不写区间",
          "错误路径：保留负接触力"
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
        "错误路径：把阻力当恒力",
        "错误路径：认为终端速度时重力消失",
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
        "object": "速度阻力与终端速度题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "substitution": "对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "candidate": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把阻力当恒力",
          "错误路径：认为终端速度时重力消失"
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
        "错误路径：漏掉推力项",
        "错误路径：把质量变化本身当外力"
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
        "object": "变质量系统与动量流题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "substitution": "对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "candidate": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：漏掉推力项",
          "错误路径：把质量变化本身当外力"
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
        "错误路径：把dv/dt当速度",
        "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "错误路径：漏掉非齐次驱动力"
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
        "object": "一阶动力学微分方程题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "substitution": "对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "candidate": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把dv/dt当速度",
          "错误路径：漏掉非齐次驱动力"
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
        "错误路径：更新漏乘Δt",
        "错误路径：用一次大步宣称模型正确",
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
        "object": "欧拉法数值动力学题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差",
        "substitution": "对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差",
        "candidate": "用0.10 s两步比较步长误差",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "用0.10 s两步比较步长误差",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：更新漏乘Δt",
          "错误路径：用一次大步宣称模型正确"
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 70 })
});
