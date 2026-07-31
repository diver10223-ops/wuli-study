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
        "只取前方物块",
        "只取两物块整体"
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
            "option": "只取前方物块",
            "wrongObjectOrForces": "误以“只取前方物块”对应的量为受力结论，因而没有在“先取1 kg+3 kg整体”上同时核对外加力、重力、支持力。",
            "wrongResult": "只取前方物块",
            "conflict": "正确对象“先取1 kg+3 kg整体”在地面近似惯性参考系中应列先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立；代入为先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立，所以隔离3 kg得N=3a=9 N，N≥0故接触成立；这与“只取前方物块”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“只取前方物块”的表面状态判定，没有检验物体保持共同加速度；整体只列外力下的按题干所述运动方向取正与先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立。"
          },
          {
            "option": "只取两物块整体",
            "wrongObjectOrForces": "研究对象虽写成“先取1 kg+3 kg整体”，但由“只取两物块整体”反推时改变了外加力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "只取两物块整体",
            "conflict": "用物体保持共同加速度；整体只列外力检验：正确对象“先取1 kg+3 kg整体”在地面近似惯性参考系中应列先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立；代入为先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立，所以隔离3 kg得N=3a=9 N，N≥0故接触成立；因此不能得到“只取两物块整体”。",
            "wrongCriterion": "错误地认为“只取两物块整体”可直接成立，未比较外加力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "轻绳仍绷紧且张力为2 N",
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
            "option": "轻绳仍绷紧且张力为2 N",
            "wrongObjectOrForces": "误以“轻绳仍绷紧且张力为2 N”对应的量为受力结论，因而没有在“0.50 kg滑块”上同时核对弹簧弹力、重力、支持力。",
            "wrongResult": "轻绳仍绷紧且张力为2 N",
            "conflict": "正确对象“0.50 kg滑块”在地面近似惯性参考系中应列对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内；代入为对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内，所以-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内；这与“轻绳仍绷紧且张力为2 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：轻绳仍绷紧且张力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=轻绳仍绷紧且张力为2÷1 N"
          },
          {
            "option": "弹簧两端加速度必须相同",
            "wrongObjectOrForces": "研究对象虽写成“0.50 kg滑块”，但由“弹簧两端加速度必须相同”反推时改变了弹簧弹力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "弹簧两端加速度必须相同",
            "conflict": "用绳张紧、杆不伸长、弹簧在弹性限度内检验：正确对象“0.50 kg滑块”在地面近似惯性参考系中应列对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内；代入为对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内，所以-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内；因此不能得到“弹簧两端加速度必须相同”。",
            "wrongCriterion": "错误地认为“弹簧两端加速度必须相同”可直接成立，未比较弹簧弹力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "物体仍接触且支持力为2 N",
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
            "option": "物体仍接触且支持力为2 N",
            "wrongObjectOrForces": "误以“物体仍接触且支持力为2 N”对应的量为受力结论，因而没有在“2.0 kg物块”上同时核对重力、支持力。",
            "wrongResult": "物体仍接触且支持力为2 N",
            "conflict": "正确对象“2.0 kg物块”在地面近似惯性参考系中应列对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²；代入为对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²，所以切换后N=0，物块a=-10 m/s²；这与“物体仍接触且支持力为2 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：物体仍接触且支持力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=物体仍接触且支持力为2÷1 N"
          },
          {
            "option": "N=0时重力消失",
            "wrongObjectOrForces": "研究对象虽写成“2.0 kg物块”，但由“N=0时重力消失”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "N=0时重力消失",
            "conflict": "用接触面只推不拉，候选N<0必须舍弃检验：正确对象“2.0 kg物块”在地面近似惯性参考系中应列对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²；代入为对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²，所以切换后N=0，物块a=-10 m/s²；因此不能得到“N=0时重力消失”。",
            "wrongEquation": "错误物理关系写成：N=0时重力消失",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=N=0÷1时重力消失"
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
            "wrongObjectOrForces": "误以“未达上限就写f=μsN”对应的量为受力结论，因而没有在“1.0 kg箱”上同时核对静摩擦力、重力、支持力。",
            "wrongResult": "未达上限就写f=μsN",
            "conflict": "正确对象“1.0 kg箱”在地面近似惯性参考系中应列对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动；代入为对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动，所以车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动；这与“未达上限就写f=μsN”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“未达上限就写f=μsN”的表面状态判定，没有检验未滑时|f需求|≤μsN，滑动后用μkN下的按题干所述运动方向取正与对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动。"
          },
          {
            "option": "滑后仍用静摩擦",
            "wrongObjectOrForces": "箱已滑动后，错误模型仍给它配置静摩擦力；这与接触面的相对滑动状态不符，竖直方向的重力和支持力则仍平衡。",
            "wrongResult": "滑后仍用静摩擦",
            "conflict": "用未滑时|f需求|≤μsN，滑动后用μkN检验：正确对象“1.0 kg箱”在地面近似惯性参考系中应列对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动；代入为对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动，所以车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动；因此不能得到“滑后仍用静摩擦”。",
            "wrongCriterion": "错误地认为“滑后仍用静摩擦”可直接成立，未比较静摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "摩擦方向与物体对地速度相反",
        "2 s后同速并切换为f=0",
        "达到带速后仍受同向滑动摩擦"
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
            "option": "摩擦方向与物体对地速度相反",
            "wrongObjectOrForces": "误以“摩擦方向与物体对地速度相反”对应的量为受力结论，因而没有在“2.0 kg包裹”上同时核对滑动摩擦力、重力、支持力。",
            "wrongResult": "摩擦方向与物体对地速度相反",
            "conflict": "正确对象“2.0 kg包裹”在地面近似惯性参考系中应列对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0；代入为对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0，所以2 s后同速并切换为f=0；这与“摩擦方向与物体对地速度相反”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“摩擦方向与物体对地速度相反”的表面状态判定，没有检验每段相对速度符号固定，切换时刻由速度相等或越界确定下的按题干所述运动方向取正与对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0。"
          },
          {
            "option": "达到带速后仍受同向滑动摩擦",
            "wrongObjectOrForces": "研究对象虽写成“2.0 kg包裹”，但由“达到带速后仍受同向滑动摩擦”反推时改变了滑动摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "达到带速后仍受同向滑动摩擦",
            "conflict": "用每段相对速度符号固定，切换时刻由速度相等或越界确定检验：正确对象“2.0 kg包裹”在地面近似惯性参考系中应列对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0；代入为对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0，所以2 s后同速并切换为f=0；因此不能得到“达到带速后仍受同向滑动摩擦”。",
            "wrongCriterion": "错误地认为“达到带速后仍受同向滑动摩擦”可直接成立，未比较滑动摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "图线应通过原点且截距无需修正",
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
            "wrongObjectOrForces": "误以“平衡摩擦时消除摩擦”对应的量为受力结论，因而没有在“小车与砝码整体”上同时核对拉力、摩擦力、重力、支持力。",
            "wrongResult": "平衡摩擦时消除摩擦",
            "conflict": "正确对象“小车与砝码整体”在地面近似惯性参考系中应列对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点；代入为对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点，所以F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点；这与“平衡摩擦时消除摩擦”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“平衡摩擦时消除摩擦”的表面状态判定，没有检验控制质量或合力，拟合数据对应同一系统边界下的按题干所述运动方向取正与对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点。"
          },
          {
            "option": "图线应通过原点且截距无需修正",
            "wrongObjectOrForces": "研究对象虽写成“小车与砝码整体”，但由“图线应通过原点且截距无需修正”反推时改变了拉力、摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "图线应通过原点且截距无需修正",
            "conflict": "用控制质量或合力，拟合数据对应同一系统边界检验：正确对象“小车与砝码整体”在地面近似惯性参考系中应列对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点；代入为对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点，所以F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点；因此不能得到“图线应通过原点且截距无需修正”。",
            "wrongCriterion": "错误地认为“图线应通过原点且截距无需修正”可直接成立，未比较拉力、摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“只隔离后箱”对应的量为受力结论，因而没有在“两箱在水平面上接触并共同加速”上同时核对外加力、重力、支持力。",
            "wrongResult": "只隔离后箱",
            "conflict": "正确对象“两箱在水平面上接触并共同加速”在地面近似惯性参考系中应列对整体列ΣF外=(m1+m2)a，接触内力抵消；代入为对整体列ΣF外=(m1+m2)a，接触内力抵消，所以两箱作为整体；这与“只隔离后箱”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“只隔离后箱”的表面状态判定，没有检验整体法求共同加速度时内力不进入外力和下的按题干所述运动或装置加速度方向取正与对整体列ΣF外=(m1+m2)a，接触内力抵消。"
          },
          {
            "option": "接触力作为研究对象",
            "wrongObjectOrForces": "研究对象虽写成“两箱在水平面上接触并共同加速”，但由“接触力作为研究对象”反推时改变了外加力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "接触力作为研究对象",
            "conflict": "用整体法求共同加速度时内力不进入外力和检验：正确对象“两箱在水平面上接触并共同加速”在地面近似惯性参考系中应列对整体列ΣF外=(m1+m2)a，接触内力抵消；代入为对整体列ΣF外=(m1+m2)a，接触内力抵消，所以两箱作为整体；因此不能得到“接触力作为研究对象”。",
            "wrongCriterion": "错误地认为“接触力作为研究对象”可直接成立，未比较外加力、重力、支持力在按题干所述运动或装置加速度方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“张力必等于两物块重力”对应的量为受力结论，因而没有在“两物块由绷紧轻绳连接且绳长不变”上同时核对张力、重力、支持力。",
            "wrongResult": "张力必等于两物块重力",
            "conflict": "正确对象“两物块由绷紧轻绳连接且绳长不变”在地面近似惯性参考系中应列绳长二阶导数为零，故两端沿绳加速度分量相等；代入为本题为判别题，不作数值代入；使用判据“两端加速度分量相等”，所以两端加速度分量相等；这与“张力必等于两物块重力”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“张力必等于两物块重力”的表面状态判定，没有检验轻绳约束运动学关系，不保证合力相等下的按题干所述运动或装置加速度方向取正与绳长二阶导数为零，故两端沿绳加速度分量相等。"
          },
          {
            "option": "两物块所受合力相等",
            "wrongObjectOrForces": "研究对象虽写成“两物块由绷紧轻绳连接且绳长不变”，但由“两物块所受合力相等”反推时改变了张力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "两物块所受合力相等",
            "conflict": "用轻绳约束运动学关系，不保证合力相等检验：正确对象“两物块由绷紧轻绳连接且绳长不变”在地面近似惯性参考系中应列绳长二阶导数为零，故两端沿绳加速度分量相等；代入为本题为判别题，不作数值代入；使用判据“两端加速度分量相等”，所以两端加速度分量相等；因此不能得到“两物块所受合力相等”。",
            "wrongCriterion": "错误地认为“两物块所受合力相等”可直接成立，未比较张力、重力、支持力在按题干所述运动或装置加速度方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“支持力达到最大”对应的量为受力结论，因而没有在“上方小球与加速平台保持接触的临界条件是”上同时核对重力、支持力。",
            "wrongResult": "支持力达到最大",
            "conflict": "正确对象“上方小球与加速平台保持接触的临界条件是”在地面近似惯性参考系中应列接触只能推不能拉；临界分离时N=0；代入为接触只能推不能拉；临界分离时N=0，所以支持力N=0；这与“支持力达到最大”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“支持力达到最大”的表面状态判定，没有检验重力仍存在，负支持力候选必须舍弃下的按题干所述运动或装置加速度方向取正与接触只能推不能拉；临界分离时N=0。"
          },
          {
            "option": "重力mg=0",
            "wrongObjectOrForces": "研究对象虽写成“上方小球与加速平台保持接触的临界条件是”，但由“重力mg=0”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "重力mg=0",
            "conflict": "用重力仍存在，负支持力候选必须舍弃检验：正确对象“上方小球与加速平台保持接触的临界条件是”在地面近似惯性参考系中应列接触只能推不能拉；临界分离时N=0；代入为接触只能推不能拉；临界分离时N=0，所以支持力N=0；因此不能得到“重力mg=0”。",
            "wrongEquation": "错误物理关系写成：重力mg=0",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=重力mg=0÷1"
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
            "wrongObjectOrForces": "误以“速度与重力”对应的量为受力结论，因而没有在“上层木块随下层板共同加速”上同时核对静摩擦力、重力、支持力。",
            "wrongResult": "速度与重力",
            "conflict": "正确对象“上层木块随下层板共同加速”在地面近似惯性参考系中应列共同运动要求f需=ma，且|f需|≤μsN；代入为本题为判别题，不作数值代入；使用判据“所需静摩擦与μsN”，所以所需静摩擦与μsN；这与“速度与重力”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“速度与重力”的表面状态判定，没有检验边界由静摩擦能力而非速度给出下的按题干所述运动或装置加速度方向取正与共同运动要求f需=ma，且|f需|≤μsN。"
          },
          {
            "option": "拉力与总质量",
            "wrongObjectOrForces": "研究对象虽写成“上层木块随下层板共同加速”，但由“拉力与总质量”反推时改变了静摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "拉力与总质量",
            "conflict": "用边界由静摩擦能力而非速度给出检验：正确对象“上层木块随下层板共同加速”在地面近似惯性参考系中应列共同运动要求f需=ma，且|f需|≤μsN；代入为本题为判别题，不作数值代入；使用判据“所需静摩擦与μsN”，所以所需静摩擦与μsN；因此不能得到“拉力与总质量”。",
            "wrongCriterion": "错误地认为“拉力与总质量”可直接成立，未比较静摩擦力、重力、支持力在按题干所述运动或装置加速度方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“物块位移为零”对应的量为受力结论，因而没有在“物块进入匀速传送带后先相对滑动再共速”上同时核对滑动摩擦力、重力、支持力。",
            "wrongResult": "物块位移为零",
            "conflict": "正确对象“物块进入匀速传送带后先相对滑动再共速”在地面近似惯性参考系中应列相对速度v物-v带=0时滑动阶段结束；代入为相对速度v物-v带=0时滑动阶段结束，所以物块速度等于带速；这与“物块位移为零”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“物块位移为零”的表面状态判定，没有检验共速是运动状态切换条件下的按题干所述运动或装置加速度方向取正与相对速度v物-v带=0时滑动阶段结束。"
          },
          {
            "option": "摩擦力等于重力",
            "wrongObjectOrForces": "研究对象虽写成“物块进入匀速传送带后先相对滑动再共速”，但由“摩擦力等于重力”反推时改变了滑动摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "摩擦力等于重力",
            "conflict": "用共速是运动状态切换条件检验：正确对象“物块进入匀速传送带后先相对滑动再共速”在地面近似惯性参考系中应列相对速度v物-v带=0时滑动阶段结束；代入为相对速度v物-v带=0时滑动阶段结束，所以物块速度等于带速；因此不能得到“摩擦力等于重力”。",
            "wrongCriterion": "错误地认为“摩擦力等于重力”可直接成立，未比较滑动摩擦力、重力、支持力在按题干所述运动或装置加速度方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“仍严格过原点”对应的量为受力结论，因而没有在“a与F关系的实验中”上同时核对拉力、摩擦力、重力、支持力。",
            "wrongResult": "仍严格过原点",
            "conflict": "正确对象“a与F关系的实验中”在地面近似惯性参考系中应列ma=F-f，故a=(F-f)/m；a=0时F=f>0；代入为ma=F-f，故a=(F-f)/m；a=0时F=f>0，所以在F轴有正截距；这与“仍严格过原点”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“仍严格过原点”的表面状态判定，没有检验未平衡的近恒定摩擦造成正的力轴截距下的按题干所述运动或装置加速度方向取正与ma=F-f，故a=(F-f)/m；a=0时F=f>0。"
          },
          {
            "option": "斜率必为零",
            "wrongObjectOrForces": "研究对象虽写成“a与F关系的实验中”，但由“斜率必为零”反推时改变了拉力、摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "斜率必为零",
            "conflict": "用未平衡的近恒定摩擦造成正的力轴截距检验：正确对象“a与F关系的实验中”在地面近似惯性参考系中应列ma=F-f，故a=(F-f)/m；a=0时F=f>0；代入为ma=F-f，故a=(F-f)/m；a=0时F=f>0，所以在F轴有正截距；因此不能得到“斜率必为零”。",
            "wrongCriterion": "错误地认为“斜率必为零”可直接成立，未比较拉力、摩擦力、重力、支持力在按题干所述运动或装置加速度方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 80 })
});
