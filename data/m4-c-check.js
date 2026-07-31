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
            "wrongObjectOrForces": "误以“在地面系添加惯性力”对应的量为受力结论，因而没有在“车厢向右加速2 m/s²”上同时核对静摩擦力、重力、支持力。",
            "wrongResult": "在地面系添加惯性力",
            "conflict": "正确对象“车厢向右加速2 m/s²”在随装置加速的非惯性参考系（惯性力仅作工具项）中应列车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右；代入为车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右，所以车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右；这与“在地面系添加惯性力”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“在地面系添加惯性力”的表面状态判定，没有检验必须声明非惯性参考系，只处理平动随动系下的按题干所述运动方向取正与车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右。"
          },
          {
            "option": "给惯性力找施力者",
            "wrongObjectOrForces": "研究对象虽写成“车厢向右加速2 m/s²”，但由“给惯性力找施力者”反推时改变了静摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "给惯性力找施力者",
            "conflict": "用必须声明非惯性参考系，只处理平动随动系检验：正确对象“车厢向右加速2 m/s²”在随装置加速的非惯性参考系（惯性力仅作工具项）中应列车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右；代入为车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右，所以车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右；因此不能得到“给惯性力找施力者”。",
            "wrongCriterion": "错误地认为“给惯性力找施力者”可直接成立，未比较静摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“所有实数参数均可行”对应的量为受力结论，因而没有在“以m=2.0 kg、恒阻力f=3.0 N为例”上同时核对外加力、重力、支持力。",
            "wrongResult": "所有实数参数均可行",
            "conflict": "正确对象“以m=2.0 kg、恒阻力f=3.0 N为例”在地面近似惯性参考系中应列以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界；代入为以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界，所以P=f为临界；这与“所有实数参数均可行”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“所有实数参数均可行”的表面状态判定，没有检验质量为正且所有单侧约束成立下的按题干所述运动方向取正与以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界。"
          },
          {
            "option": "两物体仍接触且支持力为2 N",
            "wrongObjectOrForces": "研究对象虽写成“以m=2.0 kg、恒阻力f=3.0 N为例”，但由“两物体仍接触且支持力为2 N”反推时改变了外加力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "两物体仍接触且支持力为2 N",
            "conflict": "用质量为正且所有单侧约束成立检验：正确对象“以m=2.0 kg、恒阻力f=3.0 N为例”在地面近似惯性参考系中应列以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界；代入为以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界，所以P=f为临界；因此不能得到“两物体仍接触且支持力为2 N”。",
            "wrongEquation": "错误物理关系写成：两物体仍接触且支持力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=两物体仍接触且支持力为2÷1 N"
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
            "wrongObjectOrForces": "误以“阻力大小与速度无关”对应的量为受力结论，因而没有在“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s”上同时核对重力、速度相关阻力。",
            "wrongResult": "阻力大小与速度无关",
            "conflict": "正确对象“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s”在地面近似惯性参考系中应列m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²；代入为m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²，所以m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²；这与“阻力大小与速度无关”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“阻力大小与速度无关”的表面状态判定，没有检验下落取正，k恒定且模型只在给定速度范围内下的按题干所述运动方向取正与m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²。"
          },
          {
            "option": "终端速度时重力消失",
            "wrongObjectOrForces": "研究对象虽写成“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s”，但由“终端速度时重力消失”反推时改变了重力、速度相关阻力中的力的方向、归属或有效状态。",
            "wrongResult": "终端速度时重力消失",
            "conflict": "用下落取正，k恒定且模型只在给定速度范围内检验：正确对象“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s”在地面近似惯性参考系中应列m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²；代入为m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²，所以m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²；因此不能得到“终端速度时重力消失”。",
            "wrongCriterion": "错误地认为“终端速度时重力消失”可直接成立，未比较重力、速度相关阻力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“推力项为0”对应的量为受力结论，因而没有在“火箭向后喷气u=20 m/s”上同时核对推力、重力。",
            "wrongResult": "推力项为0",
            "conflict": "正确对象“火箭向后喷气u=20 m/s”在地面近似惯性参考系中应列火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前；代入为火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前，所以推力u(-dm/dt)=10 N向前；这与“推力项为0”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“推力项为0”的表面状态判定，没有检验声明控制体、相对喷射速度和质量变化率符号下的按题干所述运动方向取正与火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前。"
          },
          {
            "option": "质量流率为零时仍有动量流力",
            "wrongObjectOrForces": "研究对象虽写成“火箭向后喷气u=20 m/s”，但由“质量流率为零时仍有动量流力”反推时改变了推力、重力中的力的方向、归属或有效状态。",
            "wrongResult": "质量流率为零时仍有动量流力",
            "conflict": "用声明控制体、相对喷射速度和质量变化率符号检验：正确对象“火箭向后喷气u=20 m/s”在地面近似惯性参考系中应列火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前；代入为火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前，所以推力u(-dm/dt)=10 N向前；因此不能得到“质量流率为零时仍有动量流力”。",
            "wrongCriterion": "错误地认为“质量流率为零时仍有动量流力”可直接成立，未比较推力、重力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“速度恒等于加速度”对应的量为受力结论，因而没有在“dv/dt=4-2v且v0=0时初始a=4 m/s²”上同时核对驱动力、速度相关阻力、重力、支持力。",
            "wrongResult": "速度恒等于加速度",
            "conflict": "正确对象“dv/dt=4-2v且v0=0时初始a=4 m/s²”在地面近似惯性参考系中应列dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小；代入为dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小，所以斜率逐渐减小；这与“速度恒等于加速度”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“速度恒等于加速度”的表面状态判定，没有检验质量恒定、惯性系、给定力模型区间与初值下的按题干所述运动方向取正与dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小。"
          },
          {
            "option": "非齐次驱动力为0",
            "wrongObjectOrForces": "研究对象虽写成“dv/dt=4-2v且v0=0时初始a=4 m/s²”，但由“非齐次驱动力为0”反推时改变了驱动力、速度相关阻力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "非齐次驱动力为0",
            "conflict": "用质量恒定、惯性系、给定力模型区间与初值检验：正确对象“dv/dt=4-2v且v0=0时初始a=4 m/s²”在地面近似惯性参考系中应列dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小；代入为dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小，所以斜率逐渐减小；因此不能得到“非齐次驱动力为0”。",
            "wrongCriterion": "错误地认为“非齐次驱动力为0”可直接成立，未比较驱动力、速度相关阻力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“v(n+1)=v(n)+a(vn)”对应的量为受力结论，因而没有在“dv/dt=4-2v、v0=0、Δt=0.10 s”上同时核对重力、速度相关阻力。",
            "wrongResult": "v(n+1)=v(n)+a(vn)",
            "conflict": "正确对象“dv/dt=4-2v、v0=0、Δt=0.10 s”在地面近似惯性参考系中应列dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s；代入为dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s，所以v2=0.72 m/s；这与“v(n+1)=v(n)+a(vn)”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：v(n+1)=v(n)+a(vn)",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=v(n+1)=v(n)+a(vn)"
          },
          {
            "option": "用一次大步宣称模型正确",
            "wrongObjectOrForces": "研究对象虽写成“dv/dt=4-2v、v0=0、Δt=0.10 s”，但由“用一次大步宣称模型正确”反推时改变了重力、速度相关阻力中的力的方向、归属或有效状态。",
            "wrongResult": "用一次大步宣称模型正确",
            "conflict": "用每步用当前状态算力，Δt单位为s且足够小检验：正确对象“dv/dt=4-2v、v0=0、Δt=0.10 s”在地面近似惯性参考系中应列dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s；代入为dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s，所以v2=0.72 m/s；因此不能得到“用一次大步宣称模型正确”。",
            "wrongCriterion": "错误地认为“用一次大步宣称模型正确”可直接成立，未比较重力、速度相关阻力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    }
  ]
});
