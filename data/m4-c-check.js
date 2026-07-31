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
        "在地面系添加惯性力",
        "给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "车厢向右加速2 m/s²",
        "frame": "随装置加速的非惯性参考系（惯性力仅作工具项）",
        "forces": [
          "静摩擦力",
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
        "unique": "由本题关系“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”只能得到“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "在地面系添加惯性力",
            "wrongObjectOrForces": "以车厢向右加速2 m/s²为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "在地面系添加惯性力",
            "conflict": "题干应使用“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”，由此得到“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”；错误结果“在地面系添加惯性力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“在地面系添加惯性力”所表达的状态作为判定结果，而未检验必须声明非惯性参考系，只处理平动随动系及方程“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”。"
          },
          {
            "option": "给惯性力找施力者",
            "wrongObjectOrForces": "以车厢向右加速2 m/s²为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "给惯性力找施力者",
            "conflict": "题干应使用“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”，由此得到“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”；错误结果“给惯性力找施力者”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“给惯性力找施力者”所表达的状态作为判定结果，而未检验必须声明非惯性参考系，只处理平动随动系及方程“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”。"
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
        "所有实数参数均可行",
        "P=f为临界",
        "两物体仍接触且支持力为2 N"
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
          "gravity",
          "normal"
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
        "object": "以m=2.0 kg、恒阻力f=3.0 N为例",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界",
        "substitution": "以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界",
        "candidate": "P=f为临界",
        "constraint": "质量为正且所有单侧约束成立",
        "final": "P=f为临界",
        "answerIndex": 1,
        "unique": "由本题关系“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”只能得到“P=f为临界”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "所有实数参数均可行",
            "wrongObjectOrForces": "以以m=2.0 kg、恒阻力f=3.0 N为例为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "所有实数参数均可行",
            "conflict": "题干应使用“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”，由此得到“P=f为临界”；错误结果“所有实数参数均可行”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“所有实数参数均可行”所表达的状态作为判定结果，而未检验质量为正且所有单侧约束成立及方程“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”。"
          },
          {
            "option": "两物体仍接触且支持力为2 N",
            "wrongObjectOrForces": "以以m=2.0 kg、恒阻力f=3.0 N为例为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "两物体仍接触且支持力为2 N",
            "conflict": "题干应使用“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”，由此得到“P=f为临界”；错误结果“两物体仍接触且支持力为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=两物体仍接触且支持力为2 N",
            "wrongSubstitution": "把本题数值2.0、3.0、-3.0、2.0、3.0、3.0按该错误关系计算：X=两物体仍接触且支持力为2 N"
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
        "阻力大小与速度无关",
        "终端速度时重力消失",
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
          "gravity",
          "drag"
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
        "object": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "substitution": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "candidate": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "constraint": "下落取正，k恒定且模型只在给定速度范围内",
        "final": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "answerIndex": 2,
        "unique": "由本题关系“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”只能得到“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "阻力大小与速度无关",
            "wrongObjectOrForces": "以m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "阻力大小与速度无关",
            "conflict": "题干应使用“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”，由此得到“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”；错误结果“阻力大小与速度无关”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“阻力大小与速度无关”所表达的状态作为判定结果，而未检验下落取正，k恒定且模型只在给定速度范围内及方程“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”。"
          },
          {
            "option": "终端速度时重力消失",
            "wrongObjectOrForces": "以m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "终端速度时重力消失",
            "conflict": "题干应使用“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”，由此得到“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”；错误结果“终端速度时重力消失”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“终端速度时重力消失”所表达的状态作为判定结果，而未检验下落取正，k恒定且模型只在给定速度范围内及方程“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”。"
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
        "推力项为0",
        "质量流率为零时仍有动量流力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "火箭向后喷气u=20 m/s",
        "frame": "地面近似惯性参考系",
        "forces": [
          "推力",
          "重力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前",
        "substitution": "火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前",
        "candidate": "推力u(-dm/dt)=10 N向前",
        "constraint": "声明控制体、相对喷射速度和质量变化率符号",
        "final": "推力u(-dm/dt)=10 N向前",
        "answerIndex": 0,
        "unique": "由本题关系“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”只能得到“推力u(-dm/dt)=10 N向前”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "推力项为0",
            "wrongObjectOrForces": "以火箭向后喷气u=20 m/s为研究对象，但错误模型未按推力、重力的实际方向或作用对象组成合力。",
            "wrongResult": "推力项为0",
            "conflict": "题干应使用“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”，由此得到“推力u(-dm/dt)=10 N向前”；错误结果“推力项为0”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“推力项为0”所表达的状态作为判定结果，而未检验声明控制体、相对喷射速度和质量变化率符号及方程“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”。"
          },
          {
            "option": "质量流率为零时仍有动量流力",
            "wrongObjectOrForces": "以火箭向后喷气u=20 m/s为研究对象，但错误模型未按推力、重力的实际方向或作用对象组成合力。",
            "wrongResult": "质量流率为零时仍有动量流力",
            "conflict": "题干应使用“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”，由此得到“推力u(-dm/dt)=10 N向前”；错误结果“质量流率为零时仍有动量流力”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“质量流率为零时仍有动量流力”所表达的状态作为判定结果，而未检验声明控制体、相对喷射速度和质量变化率符号及方程“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”。"
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
        "速度恒等于加速度",
        "斜率逐渐减小",
        "非齐次驱动力为0"
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
          "drag",
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
        "object": "dv/dt=4-2v且v0=0时初始a=4 m/s²",
        "frame": "地面近似惯性参考系",
        "forces": [
          "驱动力",
          "速度相关阻力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小",
        "substitution": "dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小",
        "candidate": "斜率逐渐减小",
        "constraint": "质量恒定、惯性系、给定力模型区间与初值",
        "final": "斜率逐渐减小",
        "answerIndex": 1,
        "unique": "由本题关系“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”只能得到“斜率逐渐减小”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "速度恒等于加速度",
            "wrongObjectOrForces": "以dv/dt=4-2v且v0=0时初始a=4 m/s²为研究对象，但错误模型未按驱动力、速度相关阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "速度恒等于加速度",
            "conflict": "题干应使用“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”，由此得到“斜率逐渐减小”；错误结果“速度恒等于加速度”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“速度恒等于加速度”所表达的状态作为判定结果，而未检验质量恒定、惯性系、给定力模型区间与初值及方程“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”。"
          },
          {
            "option": "非齐次驱动力为0",
            "wrongObjectOrForces": "以dv/dt=4-2v且v0=0时初始a=4 m/s²为研究对象，但错误模型未按驱动力、速度相关阻力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "非齐次驱动力为0",
            "conflict": "题干应使用“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”，由此得到“斜率逐渐减小”；错误结果“非齐次驱动力为0”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“非齐次驱动力为0”所表达的状态作为判定结果，而未检验质量恒定、惯性系、给定力模型区间与初值及方程“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”。"
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
        "v(n+1)=v(n)+a(vn)",
        "用一次大步宣称模型正确",
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
          "drag"
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
        "object": "dv/dt=4-2v、v0=0、Δt=0.10 s",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "速度相关阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s",
        "substitution": "dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s",
        "candidate": "v2=0.72 m/s",
        "constraint": "每步用当前状态算力，Δt单位为s且足够小",
        "final": "v2=0.72 m/s",
        "answerIndex": 2,
        "unique": "由本题关系“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”只能得到“v2=0.72 m/s”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "v(n+1)=v(n)+a(vn)",
            "wrongObjectOrForces": "以dv/dt=4-2v、v0=0、Δt=0.10 s为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "v(n+1)=v(n)+a(vn)",
            "conflict": "题干应使用“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”，由此得到“v2=0.72 m/s”；错误结果“v(n+1)=v(n)+a(vn)”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=v(n+1)=v(n)+a(vn)",
            "wrongSubstitution": "把本题数值-2、0、0、0.10、1、0.40按该错误关系计算：X=v(n+1)=v(n)+a(vn)"
          },
          {
            "option": "用一次大步宣称模型正确",
            "wrongObjectOrForces": "以dv/dt=4-2v、v0=0、Δt=0.10 s为研究对象，但错误模型未按重力、速度相关阻力的实际方向或作用对象组成合力。",
            "wrongResult": "用一次大步宣称模型正确",
            "conflict": "题干应使用“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”，由此得到“v2=0.72 m/s”；错误结果“用一次大步宣称模型正确”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“用一次大步宣称模型正确”所表达的状态作为判定结果，而未检验每步用当前状态算力，Δt单位为s且足够小及方程“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”。"
          }
        ]
      }
    }
  ]
});
