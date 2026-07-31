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
        "只取前方物块",
        "只取两物块整体"
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
            "option": "只取前方物块",
            "wrongObjectOrForces": "误以“只取前方物块”对应的量为受力结论，因而没有在“1 kg与2 kg相接受9 N推力”上同时核对外加力、重力、支持力。",
            "wrongResult": "只取前方物块",
            "conflict": "正确对象“1 kg与2 kg相接受9 N推力”在地面近似惯性参考系中应列1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N；代入为1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N，所以整体9=3a得a=3 m/s²；隔离2 kg得N=6 N；这与“只取前方物块”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“只取前方物块”的表面状态判定，没有检验物体保持共同加速度；整体只列外力下的按题干所述运动方向取正与1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N。"
          },
          {
            "option": "只取两物块整体",
            "wrongObjectOrForces": "研究对象虽写成“1 kg与2 kg相接受9 N推力”，但由“只取两物块整体”反推时改变了外加力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "只取两物块整体",
            "conflict": "用物体保持共同加速度；整体只列外力检验：正确对象“1 kg与2 kg相接受9 N推力”在地面近似惯性参考系中应列1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N；代入为1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N，所以整体9=3a得a=3 m/s²；隔离2 kg得N=6 N；因此不能得到“只取两物块整体”。",
            "wrongCriterion": "错误地认为“只取两物块整体”可直接成立，未比较外加力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "轻绳仍绷紧且张力为2 N",
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
            "option": "轻绳仍绷紧且张力为2 N",
            "wrongObjectOrForces": "误以“轻绳仍绷紧且张力为2 N”对应的量为受力结论，因而没有在“2 kg与1 kg由轻绳相连受6 N拉力”上同时核对张力、重力、支持力。",
            "wrongResult": "轻绳仍绷紧且张力为2 N",
            "conflict": "正确对象“2 kg与1 kg由轻绳相连受6 N拉力”在地面近似惯性参考系中应列2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0；代入为2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0，所以6=3a得a=2 m/s²；隔离1 kg得T=2 N>0；这与“轻绳仍绷紧且张力为2 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：轻绳仍绷紧且张力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=轻绳仍绷紧且张力为2÷1 N"
          },
          {
            "option": "弹簧两端加速度必须相同",
            "wrongObjectOrForces": "研究对象虽写成“2 kg与1 kg由轻绳相连受6 N拉力”，但由“弹簧两端加速度必须相同”反推时改变了张力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "弹簧两端加速度必须相同",
            "conflict": "用绳张紧、杆不伸长、弹簧在弹性限度内检验：正确对象“2 kg与1 kg由轻绳相连受6 N拉力”在地面近似惯性参考系中应列2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0；代入为2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0，所以6=3a得a=2 m/s²；隔离1 kg得T=2 N>0；因此不能得到“弹簧两端加速度必须相同”。",
            "wrongCriterion": "错误地认为“弹簧两端加速度必须相同”可直接成立，未比较张力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "物体仍接触且支持力为2 N",
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
            "option": "物体仍接触且支持力为2 N",
            "wrongObjectOrForces": "误以“物体仍接触且支持力为2 N”对应的量为受力结论，因而没有在“电梯地板上物块N=m(g-a)”上同时核对重力、支持力。",
            "wrongResult": "物体仍接触且支持力为2 N",
            "conflict": "正确对象“电梯地板上物块N=m(g-a)”在地面近似惯性参考系中应列电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离；代入为电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离，所以继续要求更大加速度则分离；这与“物体仍接触且支持力为2 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：物体仍接触且支持力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=物体仍接触且支持力为2÷1 N"
          },
          {
            "option": "N=0时重力消失",
            "wrongObjectOrForces": "研究对象虽写成“电梯地板上物块N=m(g-a)”，但由“N=0时重力消失”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "N=0时重力消失",
            "conflict": "用接触面只推不拉，候选N<0必须舍弃检验：正确对象“电梯地板上物块N=m(g-a)”在地面近似惯性参考系中应列电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离；代入为电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离，所以继续要求更大加速度则分离；因此不能得到“N=0时重力消失”。",
            "wrongEquation": "错误物理关系写成：N=0时重力消失",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=N=0÷1时重力消失"
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
            "wrongObjectOrForces": "误以“未达上限就写f=μsN”对应的量为受力结论，因而没有在“2 kg箱在车上μs=0.30”上同时核对静摩擦力、重力、支持力。",
            "wrongResult": "未达上限就写f=μsN",
            "conflict": "正确对象“2 kg箱在车上μs=0.30”在地面近似惯性参考系中应列2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²；代入为2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²，所以故共同加速度上限3.0 m/s²；这与“未达上限就写f=μsN”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“未达上限就写f=μsN”的表面状态判定，没有检验未滑时|f需求|≤μsN，滑动后用μkN下的按题干所述运动方向取正与2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²。"
          },
          {
            "option": "滑后仍用静摩擦",
            "wrongObjectOrForces": "研究对象虽写成“2 kg箱在车上μs=0.30”，但由“滑后仍用静摩擦”反推时改变了静摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "滑后仍用静摩擦",
            "conflict": "用未滑时|f需求|≤μsN，滑动后用μkN检验：正确对象“2 kg箱在车上μs=0.30”在地面近似惯性参考系中应列2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²；代入为2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²，所以故共同加速度上限3.0 m/s²；因此不能得到“滑后仍用静摩擦”。",
            "wrongCriterion": "错误地认为“滑后仍用静摩擦”可直接成立，未比较静摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "摩擦方向与物体对地速度相反",
        "2 s达到带速后改为匀速",
        "达到带速后仍受同向滑动摩擦"
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
            "option": "摩擦方向与物体对地速度相反",
            "wrongObjectOrForces": "误以“摩擦方向与物体对地速度相反”对应的量为受力结论，因而没有在“静止1 kg物块放上4 m/s传送带”上同时核对滑动摩擦力、重力、支持力。",
            "wrongResult": "摩擦方向与物体对地速度相反",
            "conflict": "正确对象“静止1 kg物块放上4 m/s传送带”在地面近似惯性参考系中应列静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速；代入为静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速，所以2 s达到带速后改为匀速；这与“摩擦方向与物体对地速度相反”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“摩擦方向与物体对地速度相反”的表面状态判定，没有检验每段相对速度符号固定，切换时刻由速度相等或越界确定下的按题干所述运动方向取正与静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速。"
          },
          {
            "option": "达到带速后仍受同向滑动摩擦",
            "wrongObjectOrForces": "研究对象虽写成“静止1 kg物块放上4 m/s传送带”，但由“达到带速后仍受同向滑动摩擦”反推时改变了滑动摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "达到带速后仍受同向滑动摩擦",
            "conflict": "用每段相对速度符号固定，切换时刻由速度相等或越界确定检验：正确对象“静止1 kg物块放上4 m/s传送带”在地面近似惯性参考系中应列静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速；代入为静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速，所以2 s达到带速后改为匀速；因此不能得到“达到带速后仍受同向滑动摩擦”。",
            "wrongCriterion": "错误地认为“达到带速后仍受同向滑动摩擦”可直接成立，未比较滑动摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
        "图线应通过原点且截距无需修正",
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
            "wrongObjectOrForces": "误以“平衡摩擦时消除摩擦”对应的量为受力结论，因而没有在“0.50 kg小车拟合a=1.8F-0.36”上同时核对拉力、摩擦力、重力、支持力。",
            "wrongResult": "平衡摩擦时消除摩擦",
            "conflict": "正确对象“0.50 kg小车拟合a=1.8F-0.36”在地面近似惯性参考系中应列0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力；代入为0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力，所以F轴截距0.20 N提示残余阻力；这与“平衡摩擦时消除摩擦”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“平衡摩擦时消除摩擦”的表面状态判定，没有检验控制质量或合力，拟合数据对应同一系统边界下的按题干所述运动方向取正与0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力。"
          },
          {
            "option": "图线应通过原点且截距无需修正",
            "wrongObjectOrForces": "研究对象虽写成“0.50 kg小车拟合a=1.8F-0.36”，但由“图线应通过原点且截距无需修正”反推时改变了拉力、摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "图线应通过原点且截距无需修正",
            "conflict": "用控制质量或合力，拟合数据对应同一系统边界检验：正确对象“0.50 kg小车拟合a=1.8F-0.36”在地面近似惯性参考系中应列0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力；代入为0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力，所以F轴截距0.20 N提示残余阻力；因此不能得到“图线应通过原点且截距无需修正”。",
            "wrongCriterion": "错误地认为“图线应通过原点且截距无需修正”可直接成立，未比较拉力、摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    }
  ]
});
