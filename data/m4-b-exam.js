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
        "错误路径：把内力列入整体式",
        "错误路径：求内力时不隔离"
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
        "object": "整体法与隔离法题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "substitution": "先取1 kg+3 kg整体；地面系向右正；外力12 N，12=4a得a=3 m/s²；隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "candidate": "隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "隔离3 kg得N=3a=9 N，N≥0故接触成立",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把内力列入整体式",
          "错误路径：求内力时不隔离"
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
        "错误路径：保留负张力",
        "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "错误路径：把弹簧两端加速度强制相同"
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
        "object": "轻绳轻杆弹簧约束题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "substitution": "对象为0.50 kg滑块；地面系向右正；弹簧k=40 N/m伸长0.10 m，真实弹力4.0 N向左；-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "candidate": "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "-4.0=0.50a，候选a=-8.0 m/s²，形变量在弹性限度内",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：保留负张力",
          "错误路径：把弹簧两端加速度强制相同"
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
        "错误路径：保留负支持力",
        "错误路径：认为N=0时重力消失",
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
        "object": "临界分离与接触切换题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²",
        "substitution": "对象为2.0 kg物块；地面系向上正；N-20=2a，候选a=-12 m/s²给N=-4 N不可实现；切换后N=0，物块a=-10 m/s²",
        "candidate": "切换后N=0，物块a=-10 m/s²",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "切换后N=0，物块a=-10 m/s²",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：保留负支持力",
          "错误路径：认为N=0时重力消失"
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
        "错误路径：未达上限就写f=μsN",
        "错误路径：滑后仍用静摩擦"
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
        "object": "临界滑动与静摩擦需求题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "substitution": "对象为1.0 kg箱；地面系向右正；车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "candidate": "车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "车加速度4.0 m/s²需f=4.0 N，但μsN=0.25×10=2.5 N，候选不相容，须切换为滑动",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：未达上限就写f=μsN",
          "错误路径：滑后仍用静摩擦"
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
        "错误路径：只看对地速度定摩擦",
        "2 s后同速并切换为f=0",
        "错误路径：忽略达到带速后的切换"
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
        "object": "传送带板块分段动力学题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0",
        "substitution": "对象为2.0 kg包裹；地面系向右正；带速6 m/s、包裹2 m/s，摩擦4 N向右，4=2a得a=2 m/s²；2 s后同速并切换为f=0",
        "candidate": "2 s后同速并切换为f=0",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "2 s后同速并切换为f=0",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：只看对地速度定摩擦",
          "错误路径：忽略达到带速后的切换"
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
        "错误路径：把平衡摩擦说成消除摩擦",
        "错误路径：把截距都当随机误差",
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
        "object": "动力学实验图像与误差题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "substitution": "对象为小车与砝码整体；地面系沿轨道正；F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "candidate": "F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "F=1.0 N时a=1.6 m/s²、总质量0.50 kg，F-f=ma得f=0.20 N，应修正残余阻力而非强迫过原点",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把平衡摩擦说成消除摩擦",
          "错误路径：把截距都当随机误差"
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 75 })
});
