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
        "内力列入整体式",
        "求内力时不隔离"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "应用",
      "constraint": "物体保持共同加速度；整体只列外力",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
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
        "object": "先取1 kg+3 kg整体",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
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
        "unique": "由本题关系“先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立”只能得到“隔离3 kg得N=3a=9 N，N≥0故接触成立”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "内力列入整体式",
            "wrongObjectOrForces": "研究对象仍为先取1 kg+3 kg整体；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "内力列入整体式",
            "conflict": "“内力列入整体式”与本题正确关系“先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立”冲突；满足题设的结果是“隔离3 kg得N=3a=9 N，N≥0故接触成立”。",
            "wrongCriterion": "采用判据“内力列入整体式”而非本题判据“隔离3 kg得N=3a=9 N，N≥0故接触成立”"
          },
          {
            "option": "求内力时不隔离",
            "wrongObjectOrForces": "研究对象仍为先取1 kg+3 kg整体；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "求内力时不隔离",
            "conflict": "“求内力时不隔离”与本题正确关系“先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立”冲突；满足题设的结果是“隔离3 kg得N=3a=9 N，N≥0故接触成立”。",
            "wrongCriterion": "采用判据“求内力时不隔离”而非本题判据“隔离3 kg得N=3a=9 N，N≥0故接触成立”"
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
        "保留负张力",
        "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "弹簧两端加速度必须相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "应用",
      "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "spring",
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
        "object": "0.50 kg滑块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "弹簧弹力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "substitution": "对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "candidate": "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
        "final": "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "answerIndex": 1,
        "unique": "由本题关系“对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”只能得到“-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "保留负张力",
            "wrongObjectOrForces": "研究对象仍为0.50 kg滑块；真实力应为弹簧弹力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "保留负张力",
            "conflict": "“保留负张力”与本题正确关系“对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”冲突；满足题设的结果是“-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”。",
            "wrongCriterion": "采用判据“保留负张力”而非本题判据“-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”"
          },
          {
            "option": "弹簧两端加速度必须相同",
            "wrongObjectOrForces": "研究对象仍为0.50 kg滑块；真实力应为弹簧弹力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "弹簧两端加速度必须相同",
            "conflict": "“弹簧两端加速度必须相同”与本题正确关系“对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”冲突；满足题设的结果是“-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”。",
            "wrongCriterion": "采用判据“弹簧两端加速度必须相同”而非本题判据“-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内”"
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
        "保留负支持力",
        "N=0时重力消失",
        "切换后N=0，物块a=-10 m/s²"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "应用",
      "constraint": "接触面只推不拉，候选N<0必须舍弃",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
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
        "object": "2.0 kg物块",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²",
        "substitution": "对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²",
        "candidate": "切换后N=0，物块a=-10 m/s²",
        "constraint": "接触面只推不拉，候选N<0必须舍弃",
        "final": "切换后N=0，物块a=-10 m/s²",
        "answerIndex": 2,
        "unique": "由本题关系“对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²”只能得到“切换后N=0，物块a=-10 m/s²”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "保留负支持力",
            "wrongObjectOrForces": "研究对象仍为2.0 kg物块；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "保留负支持力",
            "conflict": "“保留负支持力”与本题正确关系“对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²”冲突；满足题设的结果是“切换后N=0，物块a=-10 m/s²”。",
            "wrongCriterion": "采用判据“保留负支持力”而非本题判据“切换后N=0，物块a=-10 m/s²”"
          },
          {
            "option": "N=0时重力消失",
            "wrongObjectOrForces": "研究对象仍为2.0 kg物块；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "N=0时重力消失",
            "conflict": "“N=0时重力消失”与本题正确关系“对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²”冲突；满足题设的结果是“切换后N=0，物块a=-10 m/s²”。",
            "wrongEquation": "按选项建立关系“N=0时重力消失”；该式取代了本题关系“对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²”",
            "wrongSubstitution": "在“对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s² 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“N=0时重力消失”"
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
        "未达上限就写f=μsN",
        "滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "应用",
      "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "friction",
          "gravity",
          "normal"
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
        "object": "1.0 kg箱",
        "frame": "地面近似惯性参考系",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "substitution": "对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "candidate": "车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
        "final": "车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "answerIndex": 0,
        "unique": "由本题关系“对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”只能得到“车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "未达上限就写f=μsN",
            "wrongObjectOrForces": "研究对象仍为1.0 kg箱；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "未达上限就写f=μsN",
            "conflict": "“未达上限就写f=μsN”与本题正确关系“对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”冲突；满足题设的结果是“车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”。",
            "wrongEquation": "按选项建立关系“未达上限就写f=μsN”；该式取代了本题关系“对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”",
            "wrongSubstitution": "在“对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动 该模型的最终结论是什么？”给定条件下，将本题给定量代入该关系后得到“未达上限就写f=μsN”"
          },
          {
            "option": "滑后仍用静摩擦",
            "wrongObjectOrForces": "研究对象仍为1.0 kg箱；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "滑后仍用静摩擦",
            "conflict": "“滑后仍用静摩擦”与本题正确关系“对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”冲突；满足题设的结果是“车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”。",
            "wrongCriterion": "采用判据“滑后仍用静摩擦”而非本题判据“车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动”"
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
        "只看对地速度定摩擦",
        "2 s后同速并切换为f=0",
        "忽略达到带速后的切换"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "应用",
      "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "friction",
          "gravity",
          "normal"
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
        "object": "2.0 kg包裹",
        "frame": "地面近似惯性参考系",
        "forces": [
          "滑动摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0",
        "substitution": "对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0",
        "candidate": "2 s后同速并切换为f=0",
        "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
        "final": "2 s后同速并切换为f=0",
        "answerIndex": 1,
        "unique": "由本题关系“对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0”只能得到“2 s后同速并切换为f=0”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "只看对地速度定摩擦",
            "wrongObjectOrForces": "研究对象仍为2.0 kg包裹；真实力应为滑动摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "只看对地速度定摩擦",
            "conflict": "“只看对地速度定摩擦”与本题正确关系“对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0”冲突；满足题设的结果是“2 s后同速并切换为f=0”。",
            "wrongCriterion": "采用判据“只看对地速度定摩擦”而非本题判据“2 s后同速并切换为f=0”"
          },
          {
            "option": "忽略达到带速后的切换",
            "wrongObjectOrForces": "研究对象仍为2.0 kg包裹，但方程中漏去达到带速后的切换",
            "wrongResult": "忽略达到带速后的切换",
            "conflict": "“忽略达到带速后的切换”与本题正确关系“对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0”冲突；满足题设的结果是“2 s后同速并切换为f=0”。",
            "wrongCriterion": "采用判据“忽略达到带速后的切换”而非本题判据“2 s后同速并切换为f=0”"
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
        "平衡摩擦时消除摩擦",
        "截距均为随机误差",
        "F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "应用",
      "constraint": "控制质量或合力，拟合数据对应同一系统边界",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "tension",
          "friction",
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
        "object": "小车与砝码整体",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
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
        "unique": "由本题关系“对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”只能得到“F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "平衡摩擦时消除摩擦",
            "wrongObjectOrForces": "研究对象仍为小车与砝码整体；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "平衡摩擦时消除摩擦",
            "conflict": "“平衡摩擦时消除摩擦”与本题正确关系“对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”冲突；满足题设的结果是“F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”。",
            "wrongCriterion": "采用判据“平衡摩擦时消除摩擦”而非本题判据“F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”"
          },
          {
            "option": "截距均为随机误差",
            "wrongObjectOrForces": "研究对象仍为小车与砝码整体；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "截距均为随机误差",
            "conflict": "“截距均为随机误差”与本题正确关系“对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”冲突；满足题设的结果是“F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”。",
            "wrongCriterion": "采用判据“截距均为随机误差”而非本题判据“F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点”"
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
        "两箱作为整体",
        "接触力作为研究对象"
      ],
      "answer": 1,
      "skill": "整体法与隔离法",
      "level": "基础判别",
      "constraint": "物体保持共同加速度；整体只列外力",
      "structure": {
        "objectType": "multi-body",
        "bodyCount": 2,
        "forceTypes": [
          "applied",
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
        "object": "两箱在水平面上接触并共同加速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "对整体列ΣF外=(m1+m2)a，接触内力抵消",
        "substitution": "对整体列ΣF外=(m1+m2)a，接触内力抵消",
        "candidate": "两箱作为整体",
        "constraint": "整体法求共同加速度时内力不进入外力和",
        "final": "两箱作为整体",
        "answerIndex": 1,
        "unique": "由本题关系“对整体列ΣF外=(m1+m2)a，接触内力抵消”只能得到“两箱作为整体”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "只隔离后箱",
            "wrongObjectOrForces": "研究对象仍为两箱在水平面上接触并共同加速；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "只隔离后箱",
            "conflict": "“只隔离后箱”与本题正确关系“对整体列ΣF外=(m1+m2)a，接触内力抵消”冲突；满足题设的结果是“两箱作为整体”。",
            "wrongCriterion": "采用判据“只隔离后箱”而非本题判据“两箱作为整体”"
          },
          {
            "option": "接触力作为研究对象",
            "wrongObjectOrForces": "研究对象仍为两箱在水平面上接触并共同加速；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "接触力作为研究对象",
            "conflict": "“接触力作为研究对象”与本题正确关系“对整体列ΣF外=(m1+m2)a，接触内力抵消”冲突；满足题设的结果是“两箱作为整体”。",
            "wrongCriterion": "采用判据“接触力作为研究对象”而非本题判据“两箱作为整体”"
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
          "tension",
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
        "object": "两物块由绷紧轻绳连接且绳长不变",
        "frame": "地面近似惯性参考系",
        "forces": [
          "张力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "绳长二阶导数为零，故两端沿绳加速度分量相等",
        "substitution": "本题为判别题，不作数值代入；使用判据“两端加速度分量相等”",
        "candidate": "两端加速度分量相等",
        "constraint": "轻绳约束运动学关系，不保证合力相等",
        "final": "两端加速度分量相等",
        "answerIndex": 2,
        "unique": "由本题关系“绳长二阶导数为零，故两端沿绳加速度分量相等”只能得到“两端加速度分量相等”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "张力必等于两物块重力",
            "wrongObjectOrForces": "研究对象仍为两物块由绷紧轻绳连接且绳长不变；真实力应为张力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "张力必等于两物块重力",
            "conflict": "“张力必等于两物块重力”与本题正确关系“绳长二阶导数为零，故两端沿绳加速度分量相等”冲突；满足题设的结果是“两端加速度分量相等”。",
            "wrongEquation": "按选项建立关系“张力必等于两物块重力”；该式取代了本题关系“绳长二阶导数为零，故两端沿绳加速度分量相等”",
            "wrongSubstitution": "在“两物块由绷紧轻绳连接且绳长不变，在绳方向上的约束是？”给定条件下，将本题给定量代入该关系后得到“张力必等于两物块重力”"
          },
          {
            "option": "两物块所受合力相等",
            "wrongObjectOrForces": "研究对象仍为两物块由绷紧轻绳连接且绳长不变；真实力应为张力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "两物块所受合力相等",
            "conflict": "“两物块所受合力相等”与本题正确关系“绳长二阶导数为零，故两端沿绳加速度分量相等”冲突；满足题设的结果是“两端加速度分量相等”。",
            "wrongCriterion": "采用判据“两物块所受合力相等”而非本题判据“两端加速度分量相等”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
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
        "object": "上方小球与加速平台保持接触的临界条件是",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "接触只能推不能拉；临界分离时N=0",
        "substitution": "接触只能推不能拉；临界分离时N=0",
        "candidate": "支持力N=0",
        "constraint": "重力仍存在，负支持力候选必须舍弃",
        "final": "支持力N=0",
        "answerIndex": 0,
        "unique": "由本题关系“接触只能推不能拉；临界分离时N=0”只能得到“支持力N=0”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "支持力达到最大",
            "wrongObjectOrForces": "研究对象仍为上方小球与加速平台保持接触的临界条件是；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "支持力达到最大",
            "conflict": "“支持力达到最大”与本题正确关系“接触只能推不能拉；临界分离时N=0”冲突；满足题设的结果是“支持力N=0”。",
            "wrongCriterion": "采用判据“支持力达到最大”而非本题判据“支持力N=0”"
          },
          {
            "option": "重力mg=0",
            "wrongObjectOrForces": "研究对象仍为上方小球与加速平台保持接触的临界条件是；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "重力mg=0",
            "conflict": "“重力mg=0”与本题正确关系“接触只能推不能拉；临界分离时N=0”冲突；满足题设的结果是“支持力N=0”。",
            "wrongEquation": "按选项建立关系“重力mg=0”；该式取代了本题关系“接触只能推不能拉；临界分离时N=0”",
            "wrongSubstitution": "在“上方小球与加速平台保持接触的临界条件是？”给定条件下，将本题给定量代入该关系后得到“重力mg=0”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "friction",
          "gravity",
          "normal"
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
        "object": "上层木块随下层板共同加速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "共同运动要求f需=ma，且|f需|≤μsN",
        "substitution": "本题为判别题，不作数值代入；使用判据“所需静摩擦与μsN”",
        "candidate": "所需静摩擦与μsN",
        "constraint": "边界由静摩擦能力而非速度给出",
        "final": "所需静摩擦与μsN",
        "answerIndex": 1,
        "unique": "由本题关系“共同运动要求f需=ma，且|f需|≤μsN”只能得到“所需静摩擦与μsN”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "速度与重力",
            "wrongObjectOrForces": "研究对象仍为上层木块随下层板共同加速；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "速度与重力",
            "conflict": "“速度与重力”与本题正确关系“共同运动要求f需=ma，且|f需|≤μsN”冲突；满足题设的结果是“所需静摩擦与μsN”。",
            "wrongCriterion": "采用判据“速度与重力”而非本题判据“所需静摩擦与μsN”"
          },
          {
            "option": "拉力与总质量",
            "wrongObjectOrForces": "研究对象仍为上层木块随下层板共同加速；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "拉力与总质量",
            "conflict": "“拉力与总质量”与本题正确关系“共同运动要求f需=ma，且|f需|≤μsN”冲突；满足题设的结果是“所需静摩擦与μsN”。",
            "wrongCriterion": "采用判据“拉力与总质量”而非本题判据“所需静摩擦与μsN”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "friction",
          "gravity",
          "normal"
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
        "object": "物块进入匀速传送带后先相对滑动再共速",
        "frame": "地面近似惯性参考系",
        "forces": [
          "滑动摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动或装置加速度方向取正",
        "equation": "相对速度v物-v带=0时滑动阶段结束",
        "substitution": "相对速度v物-v带=0时滑动阶段结束",
        "candidate": "物块速度等于带速",
        "constraint": "共速是运动状态切换条件",
        "final": "物块速度等于带速",
        "answerIndex": 2,
        "unique": "由本题关系“相对速度v物-v带=0时滑动阶段结束”只能得到“物块速度等于带速”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "物块位移为零",
            "wrongObjectOrForces": "研究对象仍为物块进入匀速传送带后先相对滑动再共速；真实力应为滑动摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "物块位移为零",
            "conflict": "“物块位移为零”与本题正确关系“相对速度v物-v带=0时滑动阶段结束”冲突；满足题设的结果是“物块速度等于带速”。",
            "wrongEquation": "按选项建立关系“物块位移为零”；该式取代了本题关系“相对速度v物-v带=0时滑动阶段结束”",
            "wrongSubstitution": "在“物块进入匀速传送带后先相对滑动再共速。切换判据是？”给定条件下，将本题给定量代入该关系后得到“物块位移为零”"
          },
          {
            "option": "摩擦力等于重力",
            "wrongObjectOrForces": "研究对象仍为物块进入匀速传送带后先相对滑动再共速；真实力应为滑动摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "摩擦力等于重力",
            "conflict": "“摩擦力等于重力”与本题正确关系“相对速度v物-v带=0时滑动阶段结束”冲突；满足题设的结果是“物块速度等于带速”。",
            "wrongEquation": "按选项建立关系“摩擦力等于重力”；该式取代了本题关系“相对速度v物-v带=0时滑动阶段结束”",
            "wrongSubstitution": "在“物块进入匀速传送带后先相对滑动再共速。切换判据是？”给定条件下，将本题给定量代入该关系后得到“摩擦力等于重力”"
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
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "tension",
          "friction",
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
        "object": "a与F关系的实验中",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
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
        "unique": "由本题关系“ma=F-f，故a=(F-f)/m；a=0时F=f>0”只能得到“在F轴有正截距”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "仍严格过原点",
            "wrongObjectOrForces": "研究对象仍为a与F关系的实验中；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "仍严格过原点",
            "conflict": "“仍严格过原点”与本题正确关系“ma=F-f，故a=(F-f)/m；a=0时F=f>0”冲突；满足题设的结果是“在F轴有正截距”。",
            "wrongCriterion": "采用判据“仍严格过原点”而非本题判据“在F轴有正截距”"
          },
          {
            "option": "斜率必为零",
            "wrongObjectOrForces": "研究对象仍为a与F关系的实验中；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "斜率必为零",
            "conflict": "“斜率必为零”与本题正确关系“ma=F-f，故a=(F-f)/m；a=0时F=f>0”冲突；满足题设的结果是“在F轴有正截距”。",
            "wrongEquation": "按选项建立关系“斜率必为零”；该式取代了本题关系“ma=F-f，故a=(F-f)/m；a=0时F=f>0”",
            "wrongSubstitution": "在“验证a与F关系的实验中，未平衡摩擦，a-F图像最可能怎样？”给定条件下，将本题给定量代入该关系后得到“斜率必为零”"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 75 })
});
