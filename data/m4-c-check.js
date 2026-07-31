window.M4CCheck=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-check-v1",
  "durationSeconds": 1800,
  "reviewDays": 7,
  "passTitle": "C轨check通过",
  "failTitle": "C轨check未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-c-learning-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 70,
  "questions": [
    {
      "id": "M4CC01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": false,
      "text": "车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右 由这组数据可得哪项结论？",
      "options": [
        "车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "模型判断：在地面系添加惯性力",
        "模型判断：给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "substitution": "车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "candidate": "车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "constraint": "必须声明非惯性参考系，只处理平动随动系",
        "final": "车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "answerIndex": 0,
        "unique": "只有选项“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：在地面系添加惯性力",
            "wrongObjectOrForces": "仍取非惯性系与惯性力边界，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：在地面系添加惯性力”",
            "wrongResult": "模型判断：在地面系添加惯性力",
            "conflict": "该结果不满足正确关系或条件：必须声明非惯性参考系，只处理平动随动系"
          },
          {
            "option": "模型判断：给惯性力找施力者",
            "wrongObjectOrForces": "仍取非惯性系与惯性力边界，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：给惯性力找施力者”",
            "wrongResult": "模型判断：给惯性力找施力者",
            "conflict": "该结果不满足正确关系或条件：必须声明非惯性参考系，只处理平动随动系"
          }
        ]
      }
    },
    {
      "id": "M4CC02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": false,
      "text": "以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界 由这组数据可得哪项结论？",
      "options": [
        "计算结果：只给代数解不写区间",
        "P=f为临界",
        "模型判断：保留负接触力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界",
        "substitution": "以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界",
        "candidate": "P=f为临界",
        "constraint": "质量为正且所有单侧约束成立",
        "final": "P=f为临界",
        "answerIndex": 1,
        "unique": "只有选项“P=f为临界”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：只给代数解不写区间",
            "wrongObjectOrForces": "仍取参数动力学与存在区间，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：只给代数解不写区间”",
            "wrongResult": "计算结果：只给代数解不写区间",
            "conflict": "该结果不满足正确关系或条件：质量为正且所有单侧约束成立"
          },
          {
            "option": "模型判断：保留负接触力",
            "wrongObjectOrForces": "仍取参数动力学与存在区间，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：保留负接触力”",
            "wrongResult": "模型判断：保留负接触力",
            "conflict": "该结果不满足正确关系或条件：质量为正且所有单侧约束成立"
          }
        ]
      }
    },
    {
      "id": "M4CC03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": false,
      "text": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s² 由这组数据可得哪项结论？",
      "options": [
        "计算结果：把阻力当恒力",
        "模型判断：认为终端速度时重力消失",
        "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "substitution": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "candidate": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "constraint": "下落取正，k恒定且模型只在给定速度范围内",
        "final": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "answerIndex": 2,
        "unique": "只有选项“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把阻力当恒力",
            "wrongObjectOrForces": "仍取速度阻力与终端速度，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把阻力当恒力”",
            "wrongResult": "计算结果：把阻力当恒力",
            "conflict": "该结果不满足正确关系或条件：下落取正，k恒定且模型只在给定速度范围内"
          },
          {
            "option": "模型判断：认为终端速度时重力消失",
            "wrongObjectOrForces": "仍取速度阻力与终端速度，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为终端速度时重力消失”",
            "wrongResult": "模型判断：认为终端速度时重力消失",
            "conflict": "该结果不满足正确关系或条件：下落取正，k恒定且模型只在给定速度范围内"
          }
        ]
      }
    },
    {
      "id": "M4CC04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": false,
      "text": "火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前 由这组数据可得哪项结论？",
      "options": [
        "推力u(-dm/dt)=10 N向前",
        "模型判断：未计入推力项",
        "模型判断：把质量变化本身当外力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前",
        "substitution": "火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前",
        "candidate": "推力u(-dm/dt)=10 N向前",
        "constraint": "声明控制体、相对喷射速度和质量变化率符号",
        "final": "推力u(-dm/dt)=10 N向前",
        "answerIndex": 0,
        "unique": "只有选项“推力u(-dm/dt)=10 N向前”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：未计入推力项",
            "wrongObjectOrForces": "仍取变质量系统与动量流，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未计入推力项”",
            "wrongResult": "模型判断：未计入推力项",
            "conflict": "该结果不满足正确关系或条件：声明控制体、相对喷射速度和质量变化率符号"
          },
          {
            "option": "模型判断：把质量变化本身当外力",
            "wrongObjectOrForces": "仍取变质量系统与动量流，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把质量变化本身当外力”",
            "wrongResult": "模型判断：把质量变化本身当外力",
            "conflict": "该结果不满足正确关系或条件：声明控制体、相对喷射速度和质量变化率符号"
          }
        ]
      }
    },
    {
      "id": "M4CC05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": false,
      "text": "dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小 由这组数据可得哪项结论？",
      "options": [
        "计算结果：把dv/dt当速度",
        "斜率逐渐减小",
        "模型判断：未计入非齐次驱动力"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小",
        "substitution": "dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小",
        "candidate": "斜率逐渐减小",
        "constraint": "质量恒定、惯性系、给定力模型区间与初值",
        "final": "斜率逐渐减小",
        "answerIndex": 1,
        "unique": "只有选项“斜率逐渐减小”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把dv/dt当速度",
            "wrongObjectOrForces": "仍取一阶动力学微分方程，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把dv/dt当速度”",
            "wrongResult": "计算结果：把dv/dt当速度",
            "conflict": "该结果不满足正确关系或条件：质量恒定、惯性系、给定力模型区间与初值"
          },
          {
            "option": "模型判断：未计入非齐次驱动力",
            "wrongObjectOrForces": "仍取一阶动力学微分方程，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未计入非齐次驱动力”",
            "wrongResult": "模型判断：未计入非齐次驱动力",
            "conflict": "该结果不满足正确关系或条件：质量恒定、惯性系、给定力模型区间与初值"
          }
        ]
      }
    },
    {
      "id": "M4CC06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": false,
      "text": "dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s 由这组数据可得哪项结论？",
      "options": [
        "计算结果：更新漏乘Δt",
        "模型判断：用一次大步宣称模型正确",
        "v2=0.72 m/s"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s",
        "substitution": "dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s",
        "candidate": "v2=0.72 m/s",
        "constraint": "每步用当前状态算力，Δt单位为s且足够小",
        "final": "v2=0.72 m/s",
        "answerIndex": 2,
        "unique": "只有选项“v2=0.72 m/s”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：更新漏乘Δt",
            "wrongObjectOrForces": "仍取欧拉法数值动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：更新漏乘Δt”",
            "wrongResult": "计算结果：更新漏乘Δt",
            "conflict": "该结果不满足正确关系或条件：每步用当前状态算力，Δt单位为s且足够小"
          },
          {
            "option": "模型判断：用一次大步宣称模型正确",
            "wrongObjectOrForces": "仍取欧拉法数值动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：用一次大步宣称模型正确”",
            "wrongResult": "模型判断：用一次大步宣称模型正确",
            "conflict": "该结果不满足正确关系或条件：每步用当前状态算力，Δt单位为s且足够小"
          }
        ]
      }
    }
  ]
});
