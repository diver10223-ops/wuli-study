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
        "内力列入整体式",
        "求内力时不隔离"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "1 kg与2 kg相接受9 N推力",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
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
        "unique": "由本题关系“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”只能得到“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "内力列入整体式",
            "wrongObjectOrForces": "研究对象仍为1 kg与2 kg相接受9 N推力；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "内力列入整体式",
            "conflict": "“内力列入整体式”与本题正确关系“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”冲突；满足题设的结果是“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”。",
            "wrongCriterion": "采用判据“内力列入整体式”而非本题判据“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”"
          },
          {
            "option": "求内力时不隔离",
            "wrongObjectOrForces": "研究对象仍为1 kg与2 kg相接受9 N推力；真实力应为外加力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "求内力时不隔离",
            "conflict": "“求内力时不隔离”与本题正确关系“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”冲突；满足题设的结果是“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”。",
            "wrongCriterion": "采用判据“求内力时不隔离”而非本题判据“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”"
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
        "保留负张力",
        "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "弹簧两端加速度必须相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2 kg与1 kg由轻绳相连受6 N拉力",
        "frame": "地面近似惯性参考系",
        "forces": [
          "张力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "substitution": "2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "candidate": "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
        "final": "6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
        "answerIndex": 1,
        "unique": "由本题关系“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”只能得到“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "保留负张力",
            "wrongObjectOrForces": "研究对象仍为2 kg与1 kg由轻绳相连受6 N拉力；真实力应为张力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "保留负张力",
            "conflict": "“保留负张力”与本题正确关系“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”冲突；满足题设的结果是“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”。",
            "wrongCriterion": "采用判据“保留负张力”而非本题判据“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”"
          },
          {
            "option": "弹簧两端加速度必须相同",
            "wrongObjectOrForces": "研究对象仍为2 kg与1 kg由轻绳相连受6 N拉力；真实力应为张力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "弹簧两端加速度必须相同",
            "conflict": "“弹簧两端加速度必须相同”与本题正确关系“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”冲突；满足题设的结果是“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”。",
            "wrongCriterion": "采用判据“弹簧两端加速度必须相同”而非本题判据“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”"
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
        "保留负支持力",
        "N=0时重力消失",
        "继续要求更大加速度则分离"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "电梯地板上物块N=m(g-a)",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离",
        "substitution": "电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离",
        "candidate": "继续要求更大加速度则分离",
        "constraint": "接触面只推不拉，候选N<0必须舍弃",
        "final": "继续要求更大加速度则分离",
        "answerIndex": 2,
        "unique": "由本题关系“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”只能得到“继续要求更大加速度则分离”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "保留负支持力",
            "wrongObjectOrForces": "研究对象仍为电梯地板上物块N=m(g-a)；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "保留负支持力",
            "conflict": "“保留负支持力”与本题正确关系“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”冲突；满足题设的结果是“继续要求更大加速度则分离”。",
            "wrongCriterion": "采用判据“保留负支持力”而非本题判据“继续要求更大加速度则分离”"
          },
          {
            "option": "N=0时重力消失",
            "wrongObjectOrForces": "研究对象仍为电梯地板上物块N=m(g-a)；真实力应为重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "N=0时重力消失",
            "conflict": "“N=0时重力消失”与本题正确关系“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”冲突；满足题设的结果是“继续要求更大加速度则分离”。",
            "wrongEquation": "按选项建立关系“N=0时重力消失”；该式取代了本题关系“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”",
            "wrongSubstitution": "在“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“N=0时重力消失”"
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
        "未达上限就写f=μsN",
        "滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "2 kg箱在车上μs=0.30",
        "frame": "地面近似惯性参考系",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²",
        "substitution": "2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²",
        "candidate": "故共同加速度上限3.0 m/s²",
        "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
        "final": "故共同加速度上限3.0 m/s²",
        "answerIndex": 0,
        "unique": "由本题关系“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”只能得到“故共同加速度上限3.0 m/s²”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "未达上限就写f=μsN",
            "wrongObjectOrForces": "研究对象仍为2 kg箱在车上μs=0.30；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "未达上限就写f=μsN",
            "conflict": "“未达上限就写f=μsN”与本题正确关系“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”冲突；满足题设的结果是“故共同加速度上限3.0 m/s²”。",
            "wrongEquation": "按选项建立关系“未达上限就写f=μsN”；该式取代了本题关系“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”",
            "wrongSubstitution": "在“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s² 由这组数据可得哪项结论？”给定条件下，将本题给定量代入该关系后得到“未达上限就写f=μsN”"
          },
          {
            "option": "滑后仍用静摩擦",
            "wrongObjectOrForces": "研究对象仍为2 kg箱在车上μs=0.30；真实力应为静摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "滑后仍用静摩擦",
            "conflict": "“滑后仍用静摩擦”与本题正确关系“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”冲突；满足题设的结果是“故共同加速度上限3.0 m/s²”。",
            "wrongCriterion": "采用判据“滑后仍用静摩擦”而非本题判据“故共同加速度上限3.0 m/s²”"
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
        "只看对地速度定摩擦",
        "2 s达到带速后改为匀速",
        "忽略达到带速后的切换"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "静止1 kg物块放上4 m/s传送带",
        "frame": "地面近似惯性参考系",
        "forces": [
          "滑动摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速",
        "substitution": "静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速",
        "candidate": "2 s达到带速后改为匀速",
        "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
        "final": "2 s达到带速后改为匀速",
        "answerIndex": 1,
        "unique": "由本题关系“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”只能得到“2 s达到带速后改为匀速”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "只看对地速度定摩擦",
            "wrongObjectOrForces": "研究对象仍为静止1 kg物块放上4 m/s传送带；真实力应为滑动摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "只看对地速度定摩擦",
            "conflict": "“只看对地速度定摩擦”与本题正确关系“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”冲突；满足题设的结果是“2 s达到带速后改为匀速”。",
            "wrongCriterion": "采用判据“只看对地速度定摩擦”而非本题判据“2 s达到带速后改为匀速”"
          },
          {
            "option": "忽略达到带速后的切换",
            "wrongObjectOrForces": "研究对象仍为静止1 kg物块放上4 m/s传送带，但方程中漏去达到带速后的切换",
            "wrongResult": "忽略达到带速后的切换",
            "conflict": "“忽略达到带速后的切换”与本题正确关系“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”冲突；满足题设的结果是“2 s达到带速后改为匀速”。",
            "wrongCriterion": "采用判据“忽略达到带速后的切换”而非本题判据“2 s达到带速后改为匀速”"
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
        "平衡摩擦时消除摩擦",
        "截距均为随机误差",
        "F轴截距0.20 N提示残余阻力"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "理解",
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
        "target": "calculation",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "0.50 kg小车拟合a=1.8F-0.36",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
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
        "unique": "由本题关系“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”只能得到“F轴截距0.20 N提示残余阻力”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "平衡摩擦时消除摩擦",
            "wrongObjectOrForces": "研究对象仍为0.50 kg小车拟合a=1.8F-0.36；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "平衡摩擦时消除摩擦",
            "conflict": "“平衡摩擦时消除摩擦”与本题正确关系“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”冲突；满足题设的结果是“F轴截距0.20 N提示残余阻力”。",
            "wrongCriterion": "采用判据“平衡摩擦时消除摩擦”而非本题判据“F轴截距0.20 N提示残余阻力”"
          },
          {
            "option": "截距均为随机误差",
            "wrongObjectOrForces": "研究对象仍为0.50 kg小车拟合a=1.8F-0.36；真实力应为拉力、摩擦力、重力、支持力，该选项改变了其中的合力或状态判断",
            "wrongResult": "截距均为随机误差",
            "conflict": "“截距均为随机误差”与本题正确关系“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”冲突；满足题设的结果是“F轴截距0.20 N提示残余阻力”。",
            "wrongCriterion": "采用判据“截距均为随机误差”而非本题判据“F轴截距0.20 N提示残余阻力”"
          }
        ]
      }
    }
  ]
});
