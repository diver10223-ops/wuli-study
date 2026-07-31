window.M4BCheck=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-check-v1",
  "durationSeconds": 1800,
  "reviewDays": 7,
  "passTitle": "B轨check通过",
  "failTitle": "B轨check未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-b-learning-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 75,
  "questions": [
    {
      "id": "M4BC01",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "核心边界",
      "novel": false,
      "text": "1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N 由这组数据可得哪项结论？",
      "options": [
        "整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "模型判断：把内力列入整体式",
        "模型判断：求内力时不隔离"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "substitution": "1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "candidate": "整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "constraint": "物体保持共同加速度；整体只列外力",
        "final": "整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
        "answerIndex": 0,
        "unique": "只有选项“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：把内力列入整体式",
            "wrongObjectOrForces": "仍取整体法与隔离法，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把内力列入整体式”",
            "wrongResult": "模型判断：把内力列入整体式",
            "conflict": "该结果不满足正确关系或条件：物体保持共同加速度；整体只列外力"
          },
          {
            "option": "模型判断：求内力时不隔离",
            "wrongObjectOrForces": "仍取整体法与隔离法，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：求内力时不隔离”",
            "wrongResult": "模型判断：求内力时不隔离",
            "conflict": "该结果不满足正确关系或条件：物体保持共同加速度；整体只列外力"
          }
        ]
      }
    },
    {
      "id": "M4BC02",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": false,
      "text": "2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0 由这组数据可得哪项结论？",
      "options": [
        "计算结果：保留负张力",
        "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "模型判断：把弹簧两端加速度强制相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "substitution": "2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "candidate": "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
        "final": "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "answerIndex": 1,
        "unique": "只有选项“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：保留负张力",
            "wrongObjectOrForces": "仍取轻绳轻杆弹簧约束，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：保留负张力”",
            "wrongResult": "计算结果：保留负张力",
            "conflict": "该结果不满足正确关系或条件：绳张紧、杆不伸长、弹簧在弹性限度内"
          },
          {
            "option": "模型判断：把弹簧两端加速度强制相同",
            "wrongObjectOrForces": "仍取轻绳轻杆弹簧约束，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把弹簧两端加速度强制相同”",
            "wrongResult": "模型判断：把弹簧两端加速度强制相同",
            "conflict": "该结果不满足正确关系或条件：绳张紧、杆不伸长、弹簧在弹性限度内"
          }
        ]
      }
    },
    {
      "id": "M4BC03",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": false,
      "text": "电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离 由这组数据可得哪项结论？",
      "options": [
        "计算结果：保留负支持力",
        "模型判断：认为N=0时重力消失",
        "继续要求更大加速度则分离"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离",
        "substitution": "电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离",
        "candidate": "继续要求更大加速度则分离",
        "constraint": "接触面只推不拉，候选N<0必须舍弃",
        "final": "继续要求更大加速度则分离",
        "answerIndex": 2,
        "unique": "只有选项“继续要求更大加速度则分离”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：保留负支持力",
            "wrongObjectOrForces": "仍取临界分离与接触切换，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：保留负支持力”",
            "wrongResult": "计算结果：保留负支持力",
            "conflict": "该结果不满足正确关系或条件：接触面只推不拉，候选N<0必须舍弃"
          },
          {
            "option": "模型判断：认为N=0时重力消失",
            "wrongObjectOrForces": "仍取临界分离与接触切换，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：认为N=0时重力消失”",
            "wrongResult": "模型判断：认为N=0时重力消失",
            "conflict": "该结果不满足正确关系或条件：接触面只推不拉，候选N<0必须舍弃"
          }
        ]
      }
    },
    {
      "id": "M4BC04",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": false,
      "text": "2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s² 由这组数据可得哪项结论？",
      "options": [
        "故共同加速度上限3.0 m/s²",
        "模型判断：未达上限就写f=μsN",
        "模型判断：滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²",
        "substitution": "2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²",
        "candidate": "故共同加速度上限3.0 m/s²",
        "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
        "final": "故共同加速度上限3.0 m/s²",
        "answerIndex": 0,
        "unique": "只有选项“故共同加速度上限3.0 m/s²”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "模型判断：未达上限就写f=μsN",
            "wrongObjectOrForces": "仍取临界滑动与静摩擦需求，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：未达上限就写f=μsN”",
            "wrongResult": "模型判断：未达上限就写f=μsN",
            "conflict": "该结果不满足正确关系或条件：未滑时|f需求|≤μsN，滑动后用μkN"
          },
          {
            "option": "模型判断：滑后仍用静摩擦",
            "wrongObjectOrForces": "仍取临界滑动与静摩擦需求，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：滑后仍用静摩擦”",
            "wrongResult": "模型判断：滑后仍用静摩擦",
            "conflict": "该结果不满足正确关系或条件：未滑时|f需求|≤μsN，滑动后用μkN"
          }
        ]
      }
    },
    {
      "id": "M4BC05",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": false,
      "text": "静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速 由这组数据可得哪项结论？",
      "options": [
        "计算结果：只看对地速度定摩擦",
        "2 s达到带速后改为匀速",
        "模型判断：忽略达到带速后的切换"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速",
        "substitution": "静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速",
        "candidate": "2 s达到带速后改为匀速",
        "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
        "final": "2 s达到带速后改为匀速",
        "answerIndex": 1,
        "unique": "只有选项“2 s达到带速后改为匀速”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：只看对地速度定摩擦",
            "wrongObjectOrForces": "仍取传送带板块分段动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：只看对地速度定摩擦”",
            "wrongResult": "计算结果：只看对地速度定摩擦",
            "conflict": "该结果不满足正确关系或条件：每段相对速度符号固定，切换时刻由速度相等或越界确定"
          },
          {
            "option": "模型判断：忽略达到带速后的切换",
            "wrongObjectOrForces": "仍取传送带板块分段动力学，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”改成与选项3相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：忽略达到带速后的切换”",
            "wrongResult": "模型判断：忽略达到带速后的切换",
            "conflict": "该结果不满足正确关系或条件：每段相对速度符号固定，切换时刻由速度相等或越界确定"
          }
        ]
      }
    },
    {
      "id": "M4BC06",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": false,
      "text": "0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力 由这组数据可得哪项结论？",
      "options": [
        "计算结果：把平衡摩擦说成消除摩擦",
        "模型判断：把截距都当随机误差",
        "F轴截距0.20 N提示残余阻力"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力",
        "substitution": "0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力",
        "candidate": "F轴截距0.20 N提示残余阻力",
        "constraint": "控制质量或合力，拟合数据对应同一系统边界",
        "final": "F轴截距0.20 N提示残余阻力",
        "answerIndex": 2,
        "unique": "只有选项“F轴截距0.20 N提示残余阻力”同时满足方程与约束；其余选项分别来自下列错误链。",
        "distractors": [
          {
            "option": "计算结果：把平衡摩擦说成消除摩擦",
            "wrongObjectOrForces": "仍取动力学实验图像与误差，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”改成与选项1相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“计算结果：把平衡摩擦说成消除摩擦”",
            "wrongResult": "计算结果：把平衡摩擦说成消除摩擦",
            "conflict": "该结果不满足正确关系或条件：控制质量或合力，拟合数据对应同一系统边界"
          },
          {
            "option": "模型判断：把截距都当随机误差",
            "wrongObjectOrForces": "仍取动力学实验图像与误差，但遗漏方向、力项或模型边界",
            "wrongEquation": "把正确关系“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”改成与选项2相符的错误关系",
            "wrongSubstitution": "将题干量按错误符号或错误单位代入，导向“模型判断：把截距都当随机误差”",
            "wrongResult": "模型判断：把截距都当随机误差",
            "conflict": "该结果不满足正确关系或条件：控制质量或合力，拟合数据对应同一系统边界"
          }
        ]
      }
    }
  ]
});
