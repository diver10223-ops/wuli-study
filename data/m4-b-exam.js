window.M4BExam=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-exam-v1",
  "durationSeconds": 3600,
  "reviewDays": 7,
  "passTitle": "B轨exam通过",
  "failTitle": "B轨exam未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-b-check-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 75,
  "questions": [
    {
      "id": "M4BE01",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "核心边界",
      "novel": true,
      "text": "先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立 该模型的最终结论是什么？",
      "options": [
        "隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "模型判断：把内力列入整体式",
        "模型判断：求内力时不隔离"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "应用",
      "constraint": "物体保持共同加速度；整体只列外力",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "整体法与隔离法",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "substitution": "先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "candidate": "隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "constraint": "物体保持共同加速度；整体只列外力",
        "final": "隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "answerIndex": 0,
        "unique": "只有选项“隔离3 kg得N=3a=9 N，N≥0故接触成立”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：把内力列入整体式",
            "wrongObjectOrForces": "仍取整体法与隔离法，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把内力列入整体式”",
            "wrongResult": "模型判断：把内力列入整体式",
            "conflict": "该结果不满足正确关系或条件：物体保持共同加速度；整体只列外力"
          },
          {
            "option": "模型判断：求内力时不隔离",
            "wrongObjectOrForces": "仍取整体法与隔离法，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：求内力时不隔离”",
            "wrongResult": "模型判断：求内力时不隔离",
            "conflict": "该结果不满足正确关系或条件：物体保持共同加速度；整体只列外力"
          }
        ]
      }
    },
    {
      "id": "M4BE02",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": true,
      "text": "对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内 该模型的最终结论是什么？",
      "options": [
        "计算结果：保留负张力",
        "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "模型判断：把弹簧两端加速度强制相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "应用",
      "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "轻绳轻杆弹簧约束",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "substitution": "对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "candidate": "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
        "final": "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "answerIndex": 1,
        "unique": "只有选项“-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：保留负张力",
            "wrongObjectOrForces": "仍取轻绳轻杆弹簧约束，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：保留负张力”",
            "wrongResult": "计算结果：保留负张力",
            "conflict": "该结果不满足正确关系或条件：绳张紧、杆不伸长、弹簧在弹性限度内"
          },
          {
            "option": "模型判断：把弹簧两端加速度强制相同",
            "wrongObjectOrForces": "仍取轻绳轻杆弹簧约束，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把弹簧两端加速度强制相同”",
            "wrongResult": "模型判断：把弹簧两端加速度强制相同",
            "conflict": "该结果不满足正确关系或条件：绳张紧、杆不伸长、弹簧在弹性限度内"
          }
        ]
      }
    },
    {
      "id": "M4BE03",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": true,
      "text": "对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s² 该模型的最终结论是什么？",
      "options": [
        "计算结果：保留负支持力",
        "模型判断：认为N=0时重力消失",
        "切换后N=0，物块a=-10 m/s²"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "应用",
      "constraint": "接触面只推不拉，候选N<0必须舍弃",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "临界分离与接触切换",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²",
        "substitution": "对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²",
        "candidate": "切换后N=0，物块a=-10 m/s²",
        "constraint": "接触面只推不拉，候选N<0必须舍弃",
        "final": "切换后N=0，物块a=-10 m/s²",
        "answerIndex": 2,
        "unique": "只有选项“切换后N=0，物块a=-10 m/s²”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：保留负支持力",
            "wrongObjectOrForces": "仍取临界分离与接触切换，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：保留负支持力”",
            "wrongResult": "计算结果：保留负支持力",
            "conflict": "该结果不满足正确关系或条件：接触面只推不拉，候选N<0必须舍弃"
          },
          {
            "option": "模型判断：认为N=0时重力消失",
            "wrongObjectOrForces": "仍取临界分离与接触切换，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为N=0时重力消失”",
            "wrongResult": "模型判断：认为N=0时重力消失",
            "conflict": "该结果不满足正确关系或条件：接触面只推不拉，候选N<0必须舍弃"
          }
        ]
      }
    },
    {
      "id": "M4BE04",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": true,
      "text": "对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动 该模型的最终结论是什么？",
      "options": [
        "车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "模型判断：未达上限就写f=μsN",
        "模型判断：滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "应用",
      "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "临界滑动与静摩擦需求",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "substitution": "对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "candidate": "车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
        "final": "车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "answerIndex": 0,
        "unique": "只有选项“车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：未达上限就写f=μsN",
            "wrongObjectOrForces": "仍取临界滑动与静摩擦需求，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未达上限就写f=μsN”",
            "wrongResult": "模型判断：未达上限就写f=μsN",
            "conflict": "该结果不满足正确关系或条件：未滑时|f需求|≤μsN，滑动后用μkN"
          },
          {
            "option": "模型判断：滑后仍用静摩擦",
            "wrongObjectOrForces": "仍取临界滑动与静摩擦需求，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：滑后仍用静摩擦”",
            "wrongResult": "模型判断：滑后仍用静摩擦",
            "conflict": "该结果不满足正确关系或条件：未滑时|f需求|≤μsN，滑动后用μkN"
          }
        ]
      }
    },
    {
      "id": "M4BE05",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": true,
      "text": "对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0 该模型的最终结论是什么？",
      "options": [
        "计算结果：只看对地速度定摩擦",
        "2 s后同速并切换为f=0",
        "模型判断：忽略达到带速后的切换"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "应用",
      "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "传送带板块分段动力学",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0",
        "substitution": "对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0",
        "candidate": "2 s后同速并切换为f=0",
        "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
        "final": "2 s后同速并切换为f=0",
        "answerIndex": 1,
        "unique": "只有选项“2 s后同速并切换为f=0”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：只看对地速度定摩擦",
            "wrongObjectOrForces": "仍取传送带板块分段动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：只看对地速度定摩擦”",
            "wrongResult": "计算结果：只看对地速度定摩擦",
            "conflict": "该结果不满足正确关系或条件：每段相对速度符号固定，切换时刻由速度相等或越界确定"
          },
          {
            "option": "模型判断：忽略达到带速后的切换",
            "wrongObjectOrForces": "仍取传送带板块分段动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：忽略达到带速后的切换”",
            "wrongResult": "模型判断：忽略达到带速后的切换",
            "conflict": "该结果不满足正确关系或条件：每段相对速度符号固定，切换时刻由速度相等或越界确定"
          }
        ]
      }
    },
    {
      "id": "M4BE06",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": true,
      "text": "对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点 该模型的最终结论是什么？",
      "options": [
        "计算结果：把平衡摩擦说成消除摩擦",
        "模型判断：把截距都当随机误差",
        "F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "应用",
      "constraint": "控制质量或合力，拟合数据对应同一系统边界",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "动力学实验图像与误差",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "substitution": "对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "candidate": "F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "constraint": "控制质量或合力，拟合数据对应同一系统边界",
        "final": "F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "answerIndex": 2,
        "unique": "只有选项“F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把平衡摩擦说成消除摩擦",
            "wrongObjectOrForces": "仍取动力学实验图像与误差，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把平衡摩擦说成消除摩擦”",
            "wrongResult": "计算结果：把平衡摩擦说成消除摩擦",
            "conflict": "该结果不满足正确关系或条件：控制质量或合力，拟合数据对应同一系统边界"
          },
          {
            "option": "模型判断：把截距都当随机误差",
            "wrongObjectOrForces": "仍取动力学实验图像与误差，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把截距都当随机误差”",
            "wrongResult": "模型判断：把截距都当随机误差",
            "conflict": "该结果不满足正确关系或条件：控制质量或合力，拟合数据对应同一系统边界"
          }
        ]
      }
    },
    {
      "id": "M4BE07",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "基础边界",
      "novel": true,
      "text": "两箱在水平面上接触并共同加速。求系统加速度时，最简研究对象是？",
      "options": [
        "只隔离后箱",
        "把两箱作为整体",
        "把接触力作为研究对象"
      ],
      "answer": 1,
      "skill": "整体法与隔离法",
      "level": "基础判别",
      "constraint": "物体保持共同加速度；整体只列外力",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "相互接触的两箱整体",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "对整体列ΣF外=(m1+m2)a，接触内力抵消",
        "substitution": "对整体列ΣF外=(m1+m2)a，接触内力抵消",
        "candidate": "把两箱作为整体",
        "constraint": "整体法求共同加速度时内力不进入外力和",
        "final": "把两箱作为整体",
        "answerIndex": 1,
        "unique": "只有选项“把两箱作为整体”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "只隔离后箱",
            "wrongObjectOrForces": "研究对象仍为相互接触的两箱整体，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“只隔离后箱”，而正确关系为“对整体列ΣF外=(m1+m2)a，接触内力抵消”",
            "wrongSubstitution": "按错误符号或单位代入后得到“只隔离后箱”",
            "wrongResult": "只隔离后箱",
            "conflict": "不满足整体法求共同加速度时内力不进入外力和"
          },
          {
            "option": "把接触力作为研究对象",
            "wrongObjectOrForces": "研究对象仍为相互接触的两箱整体，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“把接触力作为研究对象”，而正确关系为“对整体列ΣF外=(m1+m2)a，接触内力抵消”",
            "wrongSubstitution": "按错误符号或单位代入后得到“把接触力作为研究对象”",
            "wrongResult": "把接触力作为研究对象",
            "conflict": "不满足整体法求共同加速度时内力不进入外力和"
          }
        ]
      }
    },
    {
      "id": "M4BE08",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": true,
      "text": "两物块由绷紧轻绳连接且绳长不变，在绳方向上的约束是？",
      "options": [
        "张力必等于两物块重力",
        "两物块所受合力相等",
        "两端加速度分量相等"
      ],
      "answer": 2,
      "skill": "轻绳轻杆弹簧约束",
      "level": "基础判别",
      "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "轻绳连接的两物块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "绳长二阶导数为零，故两端沿绳加速度分量相等",
        "substitution": "绳长二阶导数为零，故两端沿绳加速度分量相等",
        "candidate": "两端加速度分量相等",
        "constraint": "轻绳约束运动学关系，不保证合力相等",
        "final": "两端加速度分量相等",
        "answerIndex": 2,
        "unique": "只有选项“两端加速度分量相等”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "张力必等于两物块重力",
            "wrongObjectOrForces": "研究对象仍为轻绳连接的两物块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“张力必等于两物块重力”，而正确关系为“绳长二阶导数为零，故两端沿绳加速度分量相等”",
            "wrongSubstitution": "按错误符号或单位代入后得到“张力必等于两物块重力”",
            "wrongResult": "张力必等于两物块重力",
            "conflict": "不满足轻绳约束运动学关系，不保证合力相等"
          },
          {
            "option": "两物块所受合力相等",
            "wrongObjectOrForces": "研究对象仍为轻绳连接的两物块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“两物块所受合力相等”，而正确关系为“绳长二阶导数为零，故两端沿绳加速度分量相等”",
            "wrongSubstitution": "按错误符号或单位代入后得到“两物块所受合力相等”",
            "wrongResult": "两物块所受合力相等",
            "conflict": "不满足轻绳约束运动学关系，不保证合力相等"
          }
        ]
      }
    },
    {
      "id": "M4BE09",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": true,
      "text": "上方小球与加速平台保持接触的临界条件是？",
      "options": [
        "支持力N=0",
        "支持力达到最大",
        "重力mg=0"
      ],
      "answer": 0,
      "skill": "临界分离与接触切换",
      "level": "基础判别",
      "constraint": "接触面只推不拉，候选N<0必须舍弃",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "平台上的小球",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "接触只能推不能拉；临界分离时N=0",
        "substitution": "接触只能推不能拉；临界分离时N=0",
        "candidate": "支持力N=0",
        "constraint": "重力仍存在，负支持力候选必须舍弃",
        "final": "支持力N=0",
        "answerIndex": 0,
        "unique": "只有选项“支持力N=0”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "支持力达到最大",
            "wrongObjectOrForces": "研究对象仍为平台上的小球，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“支持力达到最大”，而正确关系为“接触只能推不能拉；临界分离时N=0”",
            "wrongSubstitution": "按错误符号或单位代入后得到“支持力达到最大”",
            "wrongResult": "支持力达到最大",
            "conflict": "不满足重力仍存在，负支持力候选必须舍弃"
          },
          {
            "option": "重力mg=0",
            "wrongObjectOrForces": "研究对象仍为平台上的小球，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“重力mg=0”，而正确关系为“接触只能推不能拉；临界分离时N=0”",
            "wrongSubstitution": "按错误符号或单位代入后得到“重力mg=0”",
            "wrongResult": "重力mg=0",
            "conflict": "不满足重力仍存在，负支持力候选必须舍弃"
          }
        ]
      }
    },
    {
      "id": "M4BE10",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": true,
      "text": "上层木块随下层板共同加速，判断是否滑动应比较什么？",
      "options": [
        "速度与重力",
        "所需静摩擦与μsN",
        "拉力与总质量"
      ],
      "answer": 1,
      "skill": "临界滑动与静摩擦需求",
      "level": "基础判别",
      "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "叠放木块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "共同运动要求f需=ma，且|f需|≤μsN",
        "substitution": "共同运动要求f需=ma，且|f需|≤μsN",
        "candidate": "所需静摩擦与μsN",
        "constraint": "边界由静摩擦能力而非速度给出",
        "final": "所需静摩擦与μsN",
        "answerIndex": 1,
        "unique": "只有选项“所需静摩擦与μsN”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "速度与重力",
            "wrongObjectOrForces": "研究对象仍为叠放木块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“速度与重力”，而正确关系为“共同运动要求f需=ma，且|f需|≤μsN”",
            "wrongSubstitution": "按错误符号或单位代入后得到“速度与重力”",
            "wrongResult": "速度与重力",
            "conflict": "不满足边界由静摩擦能力而非速度给出"
          },
          {
            "option": "拉力与总质量",
            "wrongObjectOrForces": "研究对象仍为叠放木块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“拉力与总质量”，而正确关系为“共同运动要求f需=ma，且|f需|≤μsN”",
            "wrongSubstitution": "按错误符号或单位代入后得到“拉力与总质量”",
            "wrongResult": "拉力与总质量",
            "conflict": "不满足边界由静摩擦能力而非速度给出"
          }
        ]
      }
    },
    {
      "id": "M4BE11",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": true,
      "text": "物块进入匀速传送带后先相对滑动再共速。切换判据是？",
      "options": [
        "物块位移为零",
        "摩擦力等于重力",
        "物块速度等于带速"
      ],
      "answer": 2,
      "skill": "传送带板块分段动力学",
      "level": "基础判别",
      "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "传送带上的物块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "阻力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "相对速度v物-v带=0时滑动阶段结束",
        "substitution": "相对速度v物-v带=0时滑动阶段结束",
        "candidate": "物块速度等于带速",
        "constraint": "共速是运动状态切换条件",
        "final": "物块速度等于带速",
        "answerIndex": 2,
        "unique": "只有选项“物块速度等于带速”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "物块位移为零",
            "wrongObjectOrForces": "研究对象仍为传送带上的物块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“物块位移为零”，而正确关系为“相对速度v物-v带=0时滑动阶段结束”",
            "wrongSubstitution": "按错误符号或单位代入后得到“物块位移为零”",
            "wrongResult": "物块位移为零",
            "conflict": "不满足共速是运动状态切换条件"
          },
          {
            "option": "摩擦力等于重力",
            "wrongObjectOrForces": "研究对象仍为传送带上的物块，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“摩擦力等于重力”，而正确关系为“相对速度v物-v带=0时滑动阶段结束”",
            "wrongSubstitution": "按错误符号或单位代入后得到“摩擦力等于重力”",
            "wrongResult": "摩擦力等于重力",
            "conflict": "不满足共速是运动状态切换条件"
          }
        ]
      }
    },
    {
      "id": "M4BE12",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": true,
      "text": "验证a与F关系的实验中，未平衡摩擦，a-F图像最可能怎样？",
      "options": [
        "在F轴有正截距",
        "仍严格过原点",
        "斜率必为零"
      ],
      "answer": 0,
      "skill": "动力学实验图像与误差",
      "level": "基础判别",
      "constraint": "控制质量或合力，拟合数据对应同一系统边界",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 2
      },
      "review": {
        "object": "小车与砝码实验系统",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "ma=F-f，故a=(F-f)/m；a=0时F=f>0",
        "substitution": "ma=F-f，故a=(F-f)/m；a=0时F=f>0",
        "candidate": "在F轴有正截距",
        "constraint": "未平衡的近恒定摩擦造成正的力轴截距",
        "final": "在F轴有正截距",
        "answerIndex": 0,
        "unique": "只有选项“在F轴有正截距”满足方程和题设边界；另两项与review.distractors记录的错误链对应。",
        "distractors": [
          {
            "option": "仍严格过原点",
            "wrongObjectOrForces": "研究对象仍为小车与砝码实验系统，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“仍严格过原点”，而正确关系为“ma=F-f，故a=(F-f)/m；a=0时F=f>0”",
            "wrongSubstitution": "按错误符号或单位代入后得到“仍严格过原点”",
            "wrongResult": "仍严格过原点",
            "conflict": "不满足未平衡的近恒定摩擦造成正的力轴截距"
          },
          {
            "option": "斜率必为零",
            "wrongObjectOrForces": "研究对象仍为小车与砝码实验系统，但误判合力方向、约束或模型边界",
            "wrongEquation": "错误关系导向“斜率必为零”，而正确关系为“ma=F-f，故a=(F-f)/m；a=0时F=f>0”",
            "wrongSubstitution": "按错误符号或单位代入后得到“斜率必为零”",
            "wrongResult": "斜率必为零",
            "conflict": "不满足未平衡的近恒定摩擦造成正的力轴截距"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 75 })
});
