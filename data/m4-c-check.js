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
            "wrongObjectOrForces": "研究对象仍为车厢向右加速2 m/s²；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "在地面系添加惯性力",
            "conflict": "“在地面系添加惯性力”与本题正确关系“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”冲突；满足题设的结果是“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”。",
            "wrongCriterion": "采用判据“在地面系添加惯性力”而非本题判据“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”"
          },
          {
            "option": "给惯性力找施力者",
            "wrongObjectOrForces": "研究对象仍为车厢向右加速2 m/s²；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "给惯性力找施力者",
            "conflict": "“给惯性力找施力者”与本题正确关系“车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”冲突；满足题设的结果是“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”。",
            "wrongCriterion": "采用判据“给惯性力找施力者”而非本题判据“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”"
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
        "只给代数解不写区间",
        "P=f为临界",
        "保留负接触力"
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
            "option": "只给代数解不写区间",
            "wrongObjectOrForces": "研究对象仍为以m=2.0 kg、恒阻力f=3.0 N为例；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "只给代数解不写区间",
            "conflict": "“只给代数解不写区间”与本题正确关系“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”冲突；满足题设的结果是“P=f为临界”。",
            "wrongCriterion": "采用判据“只给代数解不写区间”而非本题判据“P=f为临界”"
          },
          {
            "option": "保留负接触力",
            "wrongObjectOrForces": "研究对象仍为以m=2.0 kg、恒阻力f=3.0 N为例；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "保留负接触力",
            "conflict": "“保留负接触力”与本题正确关系“以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界”冲突；满足题设的结果是“P=f为临界”。",
            "wrongCriterion": "采用判据“保留负接触力”而非本题判据“P=f为临界”"
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
        "阻力当恒力",
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
            "option": "阻力当恒力",
            "wrongObjectOrForces": "研究对象仍为m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "阻力当恒力",
            "conflict": "“阻力当恒力”与本题正确关系“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”冲突；满足题设的结果是“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”。",
            "wrongCriterion": "采用判据“阻力当恒力”而非本题判据“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”"
          },
          {
            "option": "终端速度时重力消失",
            "wrongObjectOrForces": "研究对象仍为m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "终端速度时重力消失",
            "conflict": "“终端速度时重力消失”与本题正确关系“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”冲突；满足题设的结果是“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”。",
            "wrongCriterion": "采用判据“终端速度时重力消失”而非本题判据“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”"
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
        "质量变化本身当外力"
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
            "wrongObjectOrForces": "研究对象仍为火箭向后喷气u=20 m/s，但方程中漏去推力项",
            "wrongResult": "推力项为0",
            "conflict": "“推力项为0”与本题正确关系“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”冲突；满足题设的结果是“推力u(-dm/dt)=10 N向前”。",
            "wrongEquation": "按选项建立关系“推力项为0”；该式取代了本题关系“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”",
            "wrongSubstitution": "在“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“推力项为0”"
          },
          {
            "option": "质量变化本身当外力",
            "wrongObjectOrForces": "研究对象仍为火箭向后喷气u=20 m/s；真实力应为推力、重力，该选项改变了其中的合力或状态判断",
            "wrongResult": "质量变化本身当外力",
            "conflict": "“质量变化本身当外力”与本题正确关系“火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前”冲突；满足题设的结果是“推力u(-dm/dt)=10 N向前”。",
            "wrongCriterion": "采用判据“质量变化本身当外力”而非本题判据“推力u(-dm/dt)=10 N向前”"
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
        "dv/dt当速度",
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
            "option": "dv/dt当速度",
            "wrongObjectOrForces": "研究对象仍为dv/dt=4-2v且v0=0时初始a=4 m/s²；真实力应为驱动力、速度相关阻力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "dv/dt当速度",
            "conflict": "“dv/dt当速度”与本题正确关系“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”冲突；满足题设的结果是“斜率逐渐减小”。",
            "wrongCriterion": "采用判据“dv/dt当速度”而非本题判据“斜率逐渐减小”"
          },
          {
            "option": "非齐次驱动力为0",
            "wrongObjectOrForces": "研究对象仍为dv/dt=4-2v且v0=0时初始a=4 m/s²，但方程中漏去非齐次驱动力",
            "wrongResult": "非齐次驱动力为0",
            "conflict": "“非齐次驱动力为0”与本题正确关系“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”冲突；满足题设的结果是“斜率逐渐减小”。",
            "wrongEquation": "按选项建立关系“非齐次驱动力为0”；该式取代了本题关系“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小”",
            "wrongSubstitution": "在“dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“非齐次驱动力为0”"
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
        "更新漏乘Δt",
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
            "option": "更新漏乘Δt",
            "wrongObjectOrForces": "研究对象仍为dv/dt=4-2v、v0=0、Δt=0.10 s，但方程中漏去乘Δt",
            "wrongResult": "更新漏乘Δt",
            "conflict": "“更新漏乘Δt”与本题正确关系“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”冲突；满足题设的结果是“v2=0.72 m/s”。",
            "wrongCriterion": "采用判据“更新漏乘Δt”而非本题判据“v2=0.72 m/s”"
          },
          {
            "option": "用一次大步宣称模型正确",
            "wrongObjectOrForces": "研究对象仍为dv/dt=4-2v、v0=0、Δt=0.10 s；真实力应为重力、速度相关阻力，该选项改变了其中的合力或状态判断",
            "wrongResult": "用一次大步宣称模型正确",
            "conflict": "“用一次大步宣称模型正确”与本题正确关系“dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s”冲突；满足题设的结果是“v2=0.72 m/s”。",
            "wrongCriterion": "采用判据“用一次大步宣称模型正确”而非本题判据“v2=0.72 m/s”"
          }
        ]
      }
    }
  ]
});
