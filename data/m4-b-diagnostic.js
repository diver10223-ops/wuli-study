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
            "wrongObjectOrForces": "误以“只取前方物块”对应的量为受力结论，因而没有在“可消去内力？”上同时核对外加力、重力、支持力。",
            "wrongResult": "只取前方物块",
            "conflict": "正确对象“可消去内力？”在地面近似惯性参考系中应列求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体”；代入为本题为判别题，不作数值代入；使用判据“两物块整体”，所以两物块整体；这与“只取前方物块”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“只取前方物块”的表面状态判定，没有检验物体保持共同加速度；整体只列外力下的按题干所述运动方向取正与求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体”。"
          },
          {
            "option": "只取两物块整体",
            "wrongObjectOrForces": "研究对象虽写成“可消去内力？”，但由“只取两物块整体”反推时改变了外加力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "只取两物块整体",
            "conflict": "用物体保持共同加速度；整体只列外力检验：正确对象“可消去内力？”在地面近似惯性参考系中应列求两物块共同加速度，先选什么研究对象可消去内力；正确判据为“两物块整体”；代入为本题为判别题，不作数值代入；使用判据“两物块整体”，所以两物块整体；因此不能得到“只取两物块整体”。",
            "wrongCriterion": "错误地认为“只取两物块整体”可直接成立，未比较外加力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“轻绳仍绷紧且张力为2 N”对应的量为受力结论，因而没有在“轻绳模型算得T=-2 N应怎样处理”上同时核对张力、重力、支持力。",
            "wrongResult": "轻绳仍绷紧且张力为2 N",
            "conflict": "正确对象“轻绳模型算得T=-2 N应怎样处理”在地面近似惯性参考系中应列轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型”；代入为轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型”，所以判绳松弛并切换模型；这与“轻绳仍绷紧且张力为2 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：轻绳仍绷紧且张力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=轻绳仍绷紧且张力为2÷1 N"
          },
          {
            "option": "弹簧两端加速度必须相同",
            "wrongObjectOrForces": "研究对象虽写成“轻绳模型算得T=-2 N应怎样处理”，但由“弹簧两端加速度必须相同”反推时改变了张力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "弹簧两端加速度必须相同",
            "conflict": "用绳张紧、杆不伸长、弹簧在弹性限度内检验：正确对象“轻绳模型算得T=-2 N应怎样处理”在地面近似惯性参考系中应列轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型”；代入为轻绳模型算得T=-2 N应怎样处理；正确判据为“判绳松弛并切换模型”，所以判绳松弛并切换模型；因此不能得到“弹簧两端加速度必须相同”。",
            "wrongCriterion": "错误地认为“弹簧两端加速度必须相同”可直接成立，未比较张力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“物体仍接触且支持力为2 N”对应的量为受力结论，因而没有在“单侧接触算得N<0应怎样处理”上同时核对重力、支持力。",
            "wrongResult": "物体仍接触且支持力为2 N",
            "conflict": "正确对象“单侧接触算得N<0应怎样处理”在地面近似惯性参考系中应列单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型”；代入为单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型”，所以舍弃候选并切换为分离模型；这与“物体仍接触且支持力为2 N”在对象、方向或量纲上冲突。",
            "wrongEquation": "错误物理关系写成：物体仍接触且支持力为2 N",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=物体仍接触且支持力为2÷1 N"
          },
          {
            "option": "N=0时重力消失",
            "wrongObjectOrForces": "研究对象虽写成“单侧接触算得N<0应怎样处理”，但由“N=0时重力消失”反推时改变了重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "N=0时重力消失",
            "conflict": "用接触面只推不拉，候选N<0必须舍弃检验：正确对象“单侧接触算得N<0应怎样处理”在地面近似惯性参考系中应列单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型”；代入为单侧接触算得N<0应怎样处理；正确判据为“舍弃候选并切换为分离模型”，所以舍弃候选并切换为分离模型；因此不能得到“N=0时重力消失”。",
            "wrongEquation": "错误物理关系写成：N=0时重力消失",
            "wrongSubstitution": "依照上述错误式代入题设量：Q错=N=0÷1时重力消失"
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
            "wrongObjectOrForces": "误以“未达上限就写f=μsN”对应的量为受力结论，因而没有在“判定箱子能否随车共同运动要比较哪两个量”上同时核对静摩擦力、重力、支持力。",
            "wrongResult": "未达上限就写f=μsN",
            "conflict": "正确对象“判定箱子能否随车共同运动要比较哪两个量”在地面近似惯性参考系中应列判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦”；代入为本题为判别题，不作数值代入；使用判据“所需静摩擦与最大静摩擦”，所以所需静摩擦与最大静摩擦；这与“未达上限就写f=μsN”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“未达上限就写f=μsN”的表面状态判定，没有检验未滑时|f需求|≤μsN，滑动后用μkN下的按题干所述运动方向取正与判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦”。"
          },
          {
            "option": "滑后仍用静摩擦",
            "wrongObjectOrForces": "研究对象虽写成“判定箱子能否随车共同运动要比较哪两个量”，但由“滑后仍用静摩擦”反推时改变了静摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "滑后仍用静摩擦",
            "conflict": "用未滑时|f需求|≤μsN，滑动后用μkN检验：正确对象“判定箱子能否随车共同运动要比较哪两个量”在地面近似惯性参考系中应列判定箱子能否随车共同运动要比较哪两个量；正确判据为“所需静摩擦与最大静摩擦”；代入为本题为判别题，不作数值代入；使用判据“所需静摩擦与最大静摩擦”，所以所需静摩擦与最大静摩擦；因此不能得到“滑后仍用静摩擦”。",
            "wrongCriterion": "错误地认为“滑后仍用静摩擦”可直接成立，未比较静摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“摩擦方向与物体对地速度相反”对应的量为受力结论，因而没有在“包裹比传送带慢时摩擦方向依据什么”上同时核对滑动摩擦力、重力、支持力。",
            "wrongResult": "摩擦方向与物体对地速度相反",
            "conflict": "正确对象“包裹比传送带慢时摩擦方向依据什么”在地面近似惯性参考系中应列包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势”；代入为本题为判别题，不作数值代入；使用判据“相对运动或趋势”，所以相对运动或趋势；这与“摩擦方向与物体对地速度相反”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“摩擦方向与物体对地速度相反”的表面状态判定，没有检验每段相对速度符号固定，切换时刻由速度相等或越界确定下的按题干所述运动方向取正与包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势”。"
          },
          {
            "option": "达到带速后仍受同向滑动摩擦",
            "wrongObjectOrForces": "研究对象虽写成“包裹比传送带慢时摩擦方向依据什么”，但由“达到带速后仍受同向滑动摩擦”反推时改变了滑动摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "达到带速后仍受同向滑动摩擦",
            "conflict": "用每段相对速度符号固定，切换时刻由速度相等或越界确定检验：正确对象“包裹比传送带慢时摩擦方向依据什么”在地面近似惯性参考系中应列包裹比传送带慢时摩擦方向依据什么；正确判据为“相对运动或趋势”；代入为本题为判别题，不作数值代入；使用判据“相对运动或趋势”，所以相对运动或趋势；因此不能得到“达到带速后仍受同向滑动摩擦”。",
            "wrongCriterion": "错误地认为“达到带速后仍受同向滑动摩擦”可直接成立，未比较滑动摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
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
            "wrongObjectOrForces": "误以“平衡摩擦时消除摩擦”对应的量为受力结论，因而没有在“a-F图不过原点”上同时核对拉力、摩擦力、重力、支持力。",
            "wrongResult": "平衡摩擦时消除摩擦",
            "conflict": "正确对象“a-F图不过原点”在地面近似惯性参考系中应列a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量”；代入为本题为判别题，不作数值代入；使用判据“残余摩擦或未计系统质量”，所以残余摩擦或未计系统质量；这与“平衡摩擦时消除摩擦”在对象、方向或量纲上冲突。",
            "wrongCriterion": "错误地只依据“平衡摩擦时消除摩擦”的表面状态判定，没有检验控制质量或合力，拟合数据对应同一系统边界下的按题干所述运动方向取正与a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量”。"
          },
          {
            "option": "图线应通过原点且截距无需修正",
            "wrongObjectOrForces": "研究对象虽写成“a-F图不过原点”，但由“图线应通过原点且截距无需修正”反推时改变了拉力、摩擦力、重力、支持力中的力的方向、归属或有效状态。",
            "wrongResult": "图线应通过原点且截距无需修正",
            "conflict": "用控制质量或合力，拟合数据对应同一系统边界检验：正确对象“a-F图不过原点”在地面近似惯性参考系中应列a-F图不过原点，哪项系统误差可以被检验；正确判据为“残余摩擦或未计系统质量”；代入为本题为判别题，不作数值代入；使用判据“残余摩擦或未计系统质量”，所以残余摩擦或未计系统质量；因此不能得到“图线应通过原点且截距无需修正”。",
            "wrongCriterion": "错误地认为“图线应通过原点且截距无需修正”可直接成立，未比较拉力、摩擦力、重力、支持力在按题干所述运动方向取正上的合力、约束边界或量纲。"
          }
        ]
      }
    }
  ]
});
