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
            "wrongObjectOrForces": "以1 kg与2 kg相接受9 N推力为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "只取前方物块",
            "conflict": "题干应使用“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”，由此得到“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”；错误结果“只取前方物块”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“只取前方物块”所表达的状态作为判定结果，而未检验物体保持共同加速度；整体只列外力及方程“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”。"
          },
          {
            "option": "只取两物块整体",
            "wrongObjectOrForces": "以1 kg与2 kg相接受9 N推力为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "只取两物块整体",
            "conflict": "题干应使用“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”，由此得到“整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”；错误结果“只取两物块整体”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“只取两物块整体”所表达的状态作为判定结果，而未检验物体保持共同加速度；整体只列外力及方程“1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N”。"
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
            "wrongObjectOrForces": "以2 kg与1 kg由轻绳相连受6 N拉力为研究对象，但错误模型未按张力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "轻绳仍绷紧且张力为2 N",
            "conflict": "题干应使用“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”，由此得到“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”；错误结果“轻绳仍绷紧且张力为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=轻绳仍绷紧且张力为2 N",
            "wrongSubstitution": "把本题数值2、1、6、6、3、2按该错误关系计算：X=轻绳仍绷紧且张力为2 N"
          },
          {
            "option": "弹簧两端加速度必须相同",
            "wrongObjectOrForces": "以2 kg与1 kg由轻绳相连受6 N拉力为研究对象，但错误模型未按张力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "弹簧两端加速度必须相同",
            "conflict": "题干应使用“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”，由此得到“6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”；错误结果“弹簧两端加速度必须相同”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“弹簧两端加速度必须相同”所表达的状态作为判定结果，而未检验绳张紧、杆不伸长、弹簧在弹性限度内及方程“2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0”。"
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
            "wrongObjectOrForces": "以电梯地板上物块N=m(g-a)为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "物体仍接触且支持力为2 N",
            "conflict": "题干应使用“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”，由此得到“继续要求更大加速度则分离”；错误结果“物体仍接触且支持力为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=物体仍接触且支持力为2 N",
            "wrongSubstitution": "把本题数值10、0、10、0按该错误关系计算：X=物体仍接触且支持力为2 N"
          },
          {
            "option": "N=0时重力消失",
            "wrongObjectOrForces": "以电梯地板上物块N=m(g-a)为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "N=0时重力消失",
            "conflict": "题干应使用“电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离”，由此得到“继续要求更大加速度则分离”；错误结果“N=0时重力消失”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=N=0时重力消失",
            "wrongSubstitution": "把本题数值10、0、10、0按该错误关系计算：X=N=0时重力消失"
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
            "wrongObjectOrForces": "以2 kg箱在车上μs=0.30为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "未达上限就写f=μsN",
            "conflict": "题干应使用“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”，由此得到“故共同加速度上限3.0 m/s²”；错误结果“未达上限就写f=μsN”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“未达上限就写f=μsN”所表达的状态作为判定结果，而未检验未滑时|f需求|≤μsN，滑动后用μkN及方程“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”。"
          },
          {
            "option": "滑后仍用静摩擦",
            "wrongObjectOrForces": "以2 kg箱在车上μs=0.30为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "滑后仍用静摩擦",
            "conflict": "题干应使用“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”，由此得到“故共同加速度上限3.0 m/s²”；错误结果“滑后仍用静摩擦”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“滑后仍用静摩擦”所表达的状态作为判定结果，而未检验未滑时|f需求|≤μsN，滑动后用μkN及方程“2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²”。"
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
            "wrongObjectOrForces": "以静止1 kg物块放上4 m/s传送带为研究对象，但错误模型未按滑动摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "摩擦方向与物体对地速度相反",
            "conflict": "题干应使用“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”，由此得到“2 s达到带速后改为匀速”；错误结果“摩擦方向与物体对地速度相反”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“摩擦方向与物体对地速度相反”所表达的状态作为判定结果，而未检验每段相对速度符号固定，切换时刻由速度相等或越界确定及方程“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”。"
          },
          {
            "option": "达到带速后仍受同向滑动摩擦",
            "wrongObjectOrForces": "以静止1 kg物块放上4 m/s传送带为研究对象，但错误模型未按滑动摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "达到带速后仍受同向滑动摩擦",
            "conflict": "题干应使用“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”，由此得到“2 s达到带速后改为匀速”；错误结果“达到带速后仍受同向滑动摩擦”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“达到带速后仍受同向滑动摩擦”所表达的状态作为判定结果，而未检验每段相对速度符号固定，切换时刻由速度相等或越界确定及方程“静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速”。"
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
            "wrongObjectOrForces": "以0.50 kg小车拟合a=1.8F-0.36为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "平衡摩擦时消除摩擦",
            "conflict": "题干应使用“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”，由此得到“F轴截距0.20 N提示残余阻力”；错误结果“平衡摩擦时消除摩擦”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“平衡摩擦时消除摩擦”所表达的状态作为判定结果，而未检验控制质量或合力，拟合数据对应同一系统边界及方程“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”。"
          },
          {
            "option": "图线应通过原点且截距无需修正",
            "wrongObjectOrForces": "以0.50 kg小车拟合a=1.8F-0.36为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "图线应通过原点且截距无需修正",
            "conflict": "题干应使用“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”，由此得到“F轴截距0.20 N提示残余阻力”；错误结果“图线应通过原点且截距无需修正”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“图线应通过原点且截距无需修正”所表达的状态作为判定结果，而未检验控制质量或合力，拟合数据对应同一系统边界及方程“0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力”。"
          }
        ]
      }
    }
  ]
});
