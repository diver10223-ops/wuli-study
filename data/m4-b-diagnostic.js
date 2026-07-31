window.M4BDiagnostic=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-diagnostic-v1",
  "passCorrect": 5,
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-exam-v1",
      "label": "前轨正式卷未通过"
    }
  ],
  "passTitle": "B轨诊断通过",
  "failTitle": "需回补前置",
  "initialPlan": "提交后生成节点路线。",
  "passPlan": "进入知识学习。",
  "failPlan": "返回失败节点。",
  "questions": [
    {
      "id": "M4BD01",
      "section": "整体法与隔离法",
      "task": "K01",
      "node": "M4-BK01",
      "gate": "核心边界",
      "novel": false,
      "text": "求两物块共同加速度，先选什么研究对象可消去内力？",
      "options": [
        "两物块整体",
        "只取前方物块",
        "只取两物块整体"
      ],
      "answer": 0,
      "skill": "整体法与隔离法",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "可消去内力？",
        "frame": "地面近似惯性参考系",
        "forces": [
          "外加力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体”",
        "substitution": "本题为判别题，不作数值代入；使用判据“两物块整体”",
        "candidate": "两物块整体",
        "constraint": "物体保持共同加速度；整体只列外力",
        "final": "两物块整体",
        "answerIndex": 0,
        "unique": "由本题关系“求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体””只能得到“两物块整体”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "只取前方物块",
            "wrongObjectOrForces": "以可消去内力？为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "只取前方物块",
            "conflict": "题干应使用“求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体””，由此得到“两物块整体”；错误结果“只取前方物块”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“只取前方物块”所表达的状态作为判定结果，而未检验物体保持共同加速度；整体只列外力及方程“求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体””。"
          },
          {
            "option": "只取两物块整体",
            "wrongObjectOrForces": "以可消去内力？为研究对象，但错误模型未按外加力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "只取两物块整体",
            "conflict": "题干应使用“求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体””，由此得到“两物块整体”；错误结果“只取两物块整体”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“只取两物块整体”所表达的状态作为判定结果，而未检验物体保持共同加速度；整体只列外力及方程“求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体””。"
          }
        ]
      }
    },
    {
      "id": "M4BD02",
      "section": "轻绳轻杆弹簧约束",
      "task": "K02",
      "node": "M4-BK02",
      "gate": "",
      "novel": false,
      "text": "轻绳模型算得T=-2 N应怎样处理？",
      "options": [
        "轻绳仍绷紧且张力为2 N",
        "判绳松弛并切换模型",
        "弹簧两端加速度必须相同"
      ],
      "answer": 1,
      "skill": "轻绳轻杆弹簧约束",
      "level": "先备",
      "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "tension",
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "轻绳模型算得T=-2 N应怎样处理",
        "frame": "地面近似惯性参考系",
        "forces": [
          "张力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型”",
        "substitution": "轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型”",
        "candidate": "判绳松弛并切换模型",
        "constraint": "绳张紧、杆不伸长、弹簧在弹性限度内",
        "final": "判绳松弛并切换模型",
        "answerIndex": 1,
        "unique": "由本题关系“轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型””只能得到“判绳松弛并切换模型”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "轻绳仍绷紧且张力为2 N",
            "wrongObjectOrForces": "以轻绳模型算得T=-2 N应怎样处理为研究对象，但错误模型未按张力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "轻绳仍绷紧且张力为2 N",
            "conflict": "题干应使用“轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型””，由此得到“判绳松弛并切换模型”；错误结果“轻绳仍绷紧且张力为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=轻绳仍绷紧且张力为2 N",
            "wrongSubstitution": "把本题数值-2、-2按该错误关系计算：X=轻绳仍绷紧且张力为2 N"
          },
          {
            "option": "弹簧两端加速度必须相同",
            "wrongObjectOrForces": "以轻绳模型算得T=-2 N应怎样处理为研究对象，但错误模型未按张力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "弹簧两端加速度必须相同",
            "conflict": "题干应使用“轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型””，由此得到“判绳松弛并切换模型”；错误结果“弹簧两端加速度必须相同”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“弹簧两端加速度必须相同”所表达的状态作为判定结果，而未检验绳张紧、杆不伸长、弹簧在弹性限度内及方程“轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型””。"
          }
        ]
      }
    },
    {
      "id": "M4BD03",
      "section": "临界分离与接触切换",
      "task": "K03",
      "node": "M4-BK03",
      "gate": "",
      "novel": false,
      "text": "单侧接触算得N<0应怎样处理？",
      "options": [
        "物体仍接触且支持力为2 N",
        "N=0时重力消失",
        "舍弃候选并切换为分离模型"
      ],
      "answer": 2,
      "skill": "临界分离与接触切换",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "单侧接触算得N<0应怎样处理",
        "frame": "地面近似惯性参考系",
        "forces": [
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型”",
        "substitution": "单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型”",
        "candidate": "舍弃候选并切换为分离模型",
        "constraint": "接触面只推不拉，候选N<0必须舍弃",
        "final": "舍弃候选并切换为分离模型",
        "answerIndex": 2,
        "unique": "由本题关系“单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型””只能得到“舍弃候选并切换为分离模型”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "物体仍接触且支持力为2 N",
            "wrongObjectOrForces": "以单侧接触算得N<0应怎样处理为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "物体仍接触且支持力为2 N",
            "conflict": "题干应使用“单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型””，由此得到“舍弃候选并切换为分离模型”；错误结果“物体仍接触且支持力为2 N”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=物体仍接触且支持力为2 N",
            "wrongSubstitution": "把本题数值0、0按该错误关系计算：X=物体仍接触且支持力为2 N"
          },
          {
            "option": "N=0时重力消失",
            "wrongObjectOrForces": "以单侧接触算得N<0应怎样处理为研究对象，但错误模型未按重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "N=0时重力消失",
            "conflict": "题干应使用“单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型””，由此得到“舍弃候选并切换为分离模型”；错误结果“N=0时重力消失”不满足该对象的受力方程、方向或约束条件。",
            "wrongEquation": "令所求量X满足错误关系X=N=0时重力消失",
            "wrongSubstitution": "把本题数值0、0按该错误关系计算：X=N=0时重力消失"
          }
        ]
      }
    },
    {
      "id": "M4BD04",
      "section": "临界滑动与静摩擦需求",
      "task": "K04",
      "node": "M4-BK04",
      "gate": "",
      "novel": false,
      "text": "判定箱子能否随车共同运动要比较哪两个量？",
      "options": [
        "所需静摩擦与最大静摩擦",
        "未达上限就写f=μsN",
        "滑后仍用静摩擦"
      ],
      "answer": 0,
      "skill": "临界滑动与静摩擦需求",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": true,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "判定箱子能否随车共同运动要比较哪两个量",
        "frame": "地面近似惯性参考系",
        "forces": [
          "静摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦”",
        "substitution": "本题为判别题，不作数值代入；使用判据“所需静摩擦与最大静摩擦”",
        "candidate": "所需静摩擦与最大静摩擦",
        "constraint": "未滑时|f需求|≤μsN，滑动后用μkN",
        "final": "所需静摩擦与最大静摩擦",
        "answerIndex": 0,
        "unique": "由本题关系“判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦””只能得到“所需静摩擦与最大静摩擦”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "未达上限就写f=μsN",
            "wrongObjectOrForces": "以判定箱子能否随车共同运动要比较哪两个量为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "未达上限就写f=μsN",
            "conflict": "题干应使用“判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦””，由此得到“所需静摩擦与最大静摩擦”；错误结果“未达上限就写f=μsN”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“未达上限就写f=μsN”所表达的状态作为判定结果，而未检验未滑时|f需求|≤μsN，滑动后用μkN及方程“判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦””。"
          },
          {
            "option": "滑后仍用静摩擦",
            "wrongObjectOrForces": "以判定箱子能否随车共同运动要比较哪两个量为研究对象，但错误模型未按静摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "滑后仍用静摩擦",
            "conflict": "题干应使用“判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦””，由此得到“所需静摩擦与最大静摩擦”；错误结果“滑后仍用静摩擦”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“滑后仍用静摩擦”所表达的状态作为判定结果，而未检验未滑时|f需求|≤μsN，滑动后用μkN及方程“判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦””。"
          }
        ]
      }
    },
    {
      "id": "M4BD05",
      "section": "传送带板块分段动力学",
      "task": "K05",
      "node": "M4-BK05",
      "gate": "",
      "novel": false,
      "text": "包裹比传送带慢时摩擦方向依据什么？",
      "options": [
        "摩擦方向与物体对地速度相反",
        "相对运动或趋势",
        "达到带速后仍受同向滑动摩擦"
      ],
      "answer": 1,
      "skill": "传送带板块分段动力学",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": true,
        "hasExperimentError": false,
        "steps": 2
      },
      "review": {
        "object": "包裹比传送带慢时摩擦方向依据什么",
        "frame": "地面近似惯性参考系",
        "forces": [
          "滑动摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势”",
        "substitution": "本题为判别题，不作数值代入；使用判据“相对运动或趋势”",
        "candidate": "相对运动或趋势",
        "constraint": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
        "final": "相对运动或趋势",
        "answerIndex": 1,
        "unique": "由本题关系“包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势””只能得到“相对运动或趋势”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "摩擦方向与物体对地速度相反",
            "wrongObjectOrForces": "以包裹比传送带慢时摩擦方向依据什么为研究对象，但错误模型未按滑动摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "摩擦方向与物体对地速度相反",
            "conflict": "题干应使用“包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势””，由此得到“相对运动或趋势”；错误结果“摩擦方向与物体对地速度相反”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“摩擦方向与物体对地速度相反”所表达的状态作为判定结果，而未检验每段相对速度符号固定，切换时刻由速度相等或越界确定及方程“包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势””。"
          },
          {
            "option": "达到带速后仍受同向滑动摩擦",
            "wrongObjectOrForces": "以包裹比传送带慢时摩擦方向依据什么为研究对象，但错误模型未按滑动摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "达到带速后仍受同向滑动摩擦",
            "conflict": "题干应使用“包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势””，由此得到“相对运动或趋势”；错误结果“达到带速后仍受同向滑动摩擦”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“达到带速后仍受同向滑动摩擦”所表达的状态作为判定结果，而未检验每段相对速度符号固定，切换时刻由速度相等或越界确定及方程“包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势””。"
          }
        ]
      }
    },
    {
      "id": "M4BD06",
      "section": "动力学实验图像与误差",
      "task": "K06",
      "node": "M4-BK06",
      "gate": "",
      "novel": false,
      "text": "a-F图不过原点，哪项系统误差可以被检验？",
      "options": [
        "平衡摩擦时消除摩擦",
        "图线应通过原点且截距无需修正",
        "残余摩擦或未计系统质量"
      ],
      "answer": 2,
      "skill": "动力学实验图像与误差",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 2
      },
      "review": {
        "object": "a-F图不过原点",
        "frame": "地面近似惯性参考系",
        "forces": [
          "拉力",
          "摩擦力",
          "重力",
          "支持力"
        ],
        "axis": "按题干所述运动方向取正",
        "equation": "a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量”",
        "substitution": "本题为判别题，不作数值代入；使用判据“残余摩擦或未计系统质量”",
        "candidate": "残余摩擦或未计系统质量",
        "constraint": "控制质量或合力，拟合数据对应同一系统边界",
        "final": "残余摩擦或未计系统质量",
        "answerIndex": 2,
        "unique": "由本题关系“a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量””只能得到“残余摩擦或未计系统质量”；其余选项与该关系或适用条件冲突。",
        "distractors": [
          {
            "option": "平衡摩擦时消除摩擦",
            "wrongObjectOrForces": "以a-F图不过原点为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "平衡摩擦时消除摩擦",
            "conflict": "题干应使用“a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量””，由此得到“残余摩擦或未计系统质量”；错误结果“平衡摩擦时消除摩擦”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“平衡摩擦时消除摩擦”所表达的状态作为判定结果，而未检验控制质量或合力，拟合数据对应同一系统边界及方程“a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量””。"
          },
          {
            "option": "图线应通过原点且截距无需修正",
            "wrongObjectOrForces": "以a-F图不过原点为研究对象，但错误模型未按拉力、摩擦力、重力、支持力的实际方向或作用对象组成合力。",
            "wrongResult": "图线应通过原点且截距无需修正",
            "conflict": "题干应使用“a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量””，由此得到“残余摩擦或未计系统质量”；错误结果“图线应通过原点且截距无需修正”不满足该对象的受力方程、方向或约束条件。",
            "wrongCriterion": "错误地以“图线应通过原点且截距无需修正”所表达的状态作为判定结果，而未检验控制质量或合力，拟合数据对应同一系统边界及方程“a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量””。"
          }
        ]
      }
    }
  ]
});
