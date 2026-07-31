window.M4CExam=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-exam-v1",
  "durationSeconds": 3600,
  "reviewDays": 7,
  "passTitle": "C轨exam通过",
  "failTitle": "C轨exam未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-c-check-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 70,
  "questions": [
    {
      "id": "M4CE01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是？",
      "options": [
        "向右，大小mA",
        "向左，大小mA且有车厢施力",
        "地面系中也必须额外加入mA"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "基础判别",
      "constraint": "必须声明非惯性参考系，只处理平动随动系",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "静摩擦fs"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "non-inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "加速车厢内物块",
        "frame": "随加速车厢平动的非惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "静摩擦fs"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "ΣF真实-mA=ma相对",
        "substitution": "按题中数据代入ΣF真实-mA=ma相对，候选结果为“向右，大小mA”",
        "candidate": "向右，大小mA",
        "constraint": "惯性力无施力物体且仅属随动系",
        "final": "向右，大小mA",
        "answerIndex": 0,
        "unique": "正确项“向右，大小mA”同时满足ΣF真实-mA=ma相对与惯性力无施力物体且仅属随动系；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "向左，大小mA且有车厢施力",
            "errorModel": "选择“向左，大小mA且有车厢施力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "向左，大小mA且有车厢施力",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“向右，大小mA”冲突"
          },
          {
            "option": "地面系中也必须额外加入mA",
            "errorModel": "选择“地面系中也必须额外加入mA”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "地面系中也必须额外加入mA",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“向右，大小mA”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE02",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为2.0 kg箱；向右加速3.0 m/s²的车厢系、向右正；真实静摩擦6.0 N向右，加惯性力-6.0 N，ΣF*=0；惯性力仅是随动系工具 该模型的最终结论是什么？",
      "options": [
        "在地面系添加惯性力",
        "惯性力仅是随动系工具",
        "给惯性力找施力者"
      ],
      "answer": 1,
      "skill": "非惯性系与惯性力边界",
      "level": "综合建模",
      "constraint": "必须声明非惯性参考系，只处理平动随动系",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N",
          "静摩擦fs"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "non-inertial",
        "target": "comprehensive-model",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "加速车厢内物块",
        "frame": "随加速车厢平动的非惯性系",
        "forces": [
          "重力mg",
          "支持力N",
          "静摩擦fs"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "ΣF真实-mA=ma相对",
        "substitution": "按题中数据代入ΣF真实-mA=ma相对，候选结果为“惯性力仅是随动系工具”",
        "candidate": "惯性力仅是随动系工具",
        "constraint": "惯性力无施力物体且仅属随动系",
        "final": "惯性力仅是随动系工具",
        "answerIndex": 1,
        "unique": "正确项“惯性力仅是随动系工具”同时满足ΣF真实-mA=ma相对与惯性力无施力物体且仅属随动系；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "在地面系添加惯性力",
            "errorModel": "选择“在地面系添加惯性力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "在地面系添加惯性力",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“惯性力仅是随动系工具”冲突"
          },
          {
            "option": "惯性力仅是随动系工具",
            "errorModel": "选择“给惯性力找施力者”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "给惯性力找施力者",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“惯性力仅是随动系工具”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE03",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。候选支持力N=m(g-a)，参数a的接触解存在区间是什么？",
      "options": [
        "a>g且保留N<0",
        "a≤g，a=g为N=0边界",
        "任意a都由支持面提供拉力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "基础判别",
      "constraint": "质量为正且所有单侧约束成立",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "含参数接触系统",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "N-mg=ma且N≥0",
        "substitution": "按题中数据代入N-mg=ma且N≥0，候选结果为“a≤g，a=g为N=0边界”",
        "candidate": "a≤g，a=g为N=0边界",
        "constraint": "m>0并满足N或T非负",
        "final": "a≤g，a=g为N=0边界",
        "answerIndex": 1,
        "unique": "正确项“a≤g，a=g为N=0边界”同时满足N-mg=ma且N≥0与m>0并满足N或T非负；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "a>g且保留N<0",
            "errorModel": "选择“a>g且保留N<0”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "a>g且保留N<0",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“a≤g，a=g为N=0边界”冲突"
          },
          {
            "option": "任意a都由支持面提供拉力",
            "errorModel": "选择“任意a都由支持面提供拉力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "任意a都由支持面提供拉力",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“a≤g，a=g为N=0边界”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE04",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为m>0乘客；地面系向上正；N-mg=ma得N=m(g+a)；接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界 该模型的最终结论是什么？",
      "options": [
        "只给代数解不写区间",
        "保留负接触力",
        "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界"
      ],
      "answer": 2,
      "skill": "参数动力学与存在区间",
      "level": "综合建模",
      "constraint": "质量为正且所有单侧约束成立",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "支持力N"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "含参数接触系统",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "支持力N"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "N-mg=ma且N≥0",
        "substitution": "按题中数据代入N-mg=ma且N≥0，候选结果为“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”",
        "candidate": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "constraint": "m>0并满足N或T非负",
        "final": "接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界",
        "answerIndex": 2,
        "unique": "正确项“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”同时满足N-mg=ma且N≥0与m>0并满足N或T非负；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "只给代数解不写区间",
            "errorModel": "选择“只给代数解不写区间”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "只给代数解不写区间",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”冲突"
          },
          {
            "option": "保留负接触力",
            "errorModel": "选择“保留负接触力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "保留负接触力",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“接触要求N≥0，故候选仅在a≥-g存在，a=-g为边界”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE05",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。线性阻力下小球速度等于vt/2时，加速度与g的关系是？",
      "options": [
        "a=0",
        "a=2g",
        "a=g/2"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "基础判别",
      "constraint": "下落取正，k恒定且模型只在给定速度范围内",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "线性阻力kv"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "流体中下落小球",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "线性阻力kv"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "m dv/dt=mg-kv；vt=mg/k",
        "substitution": "按题中数据代入m dv/dt=mg-kv；vt=mg/k，候选结果为“a=g/2”",
        "candidate": "a=g/2",
        "constraint": "k>0且线性模型范围有效",
        "final": "a=g/2",
        "answerIndex": 2,
        "unique": "正确项“a=g/2”同时满足m dv/dt=mg-kv；vt=mg/k与k>0且线性模型范围有效；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "a=0",
            "errorModel": "选择“a=0”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "a=0",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“a=g/2”冲突"
          },
          {
            "option": "a=2g",
            "errorModel": "选择“a=2g”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "a=2g",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“a=g/2”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE06",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为0.10 kg小球；地面系向下正；真实力mg与-kv；0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区 该模型的最终结论是什么？",
      "options": [
        "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "把阻力当恒力",
        "认为终端速度时重力消失"
      ],
      "answer": 0,
      "skill": "速度阻力与终端速度",
      "level": "综合建模",
      "constraint": "下落取正，k恒定且模型只在给定速度范围内",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "线性阻力kv"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "流体中下落小球",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "线性阻力kv"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "m dv/dt=mg-kv；vt=mg/k",
        "substitution": "按题中数据代入m dv/dt=mg-kv；vt=mg/k，候选结果为“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”",
        "candidate": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "constraint": "k>0且线性模型范围有效",
        "final": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
        "answerIndex": 0,
        "unique": "正确项“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”同时满足m dv/dt=mg-kv；vt=mg/k与k>0且线性模型范围有效；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区",
            "errorModel": "选择“把阻力当恒力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "把阻力当恒力",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”冲突"
          },
          {
            "option": "把阻力当恒力",
            "errorModel": "选择“认为终端速度时重力消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "认为终端速度时重力消失",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“0.10dv/dt=1.0-0.25v，候选vt=4.0 m/s使合力0，单位核对通过且不外推到高速区”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE07",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理？",
      "options": [
        "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "动量流项不随系统选择改变",
        "可直接写瞬时火箭质量乘全系统加速度"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "基础判别",
      "constraint": "声明控制体、相对喷射速度和质量变化率符号",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "外力Fext",
          "动量流推力u(-dm/dt)"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "喷气火箭开放系统",
        "frame": "地面惯性系",
        "forces": [
          "外力Fext",
          "动量流推力u(-dm/dt)"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "ma=Fext+u(-dm/dt)",
        "substitution": "按题中数据代入ma=Fext+u(-dm/dt)，候选结果为“边界改变，须重新列外力与系统总动量，不能照搬原式”",
        "candidate": "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "constraint": "系统边界与喷气速度定义固定",
        "final": "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "answerIndex": 0,
        "unique": "正确项“边界改变，须重新列外力与系统总动量，不能照搬原式”同时满足ma=Fext+u(-dm/dt)与系统边界与喷气速度定义固定；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "动量流项不随系统选择改变",
            "errorModel": "选择“动量流项不随系统选择改变”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "动量流项不随系统选择改变",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“边界改变，须重新列外力与系统总动量，不能照搬原式”冲突"
          },
          {
            "option": "可直接写瞬时火箭质量乘全系统加速度",
            "errorModel": "选择“可直接写瞬时火箭质量乘全系统加速度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "可直接写瞬时火箭质量乘全系统加速度",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“边界改变，须重新列外力与系统总动量，不能照搬原式”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE08",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象取火箭本体开放系统；地面系向前正；m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s² 该模型的最终结论是什么？",
      "options": [
        "写成F外=m(t)a而不计动量流",
        "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "把质量变化本身当外力"
      ],
      "answer": 1,
      "skill": "变质量系统与动量流",
      "level": "综合建模",
      "constraint": "声明控制体、相对喷射速度和质量变化率符号",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "外力Fext",
          "动量流推力u(-dm/dt)"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "喷气火箭开放系统",
        "frame": "地面惯性系",
        "forces": [
          "外力Fext",
          "动量流推力u(-dm/dt)"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "ma=Fext+u(-dm/dt)",
        "substitution": "按题中数据代入ma=Fext+u(-dm/dt)，候选结果为“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”",
        "candidate": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "constraint": "系统边界与喷气速度定义固定",
        "final": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
        "answerIndex": 1,
        "unique": "正确项“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”同时满足ma=Fext+u(-dm/dt)与系统边界与喷气速度定义固定；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "写成F外=m(t)a而不计动量流",
            "errorModel": "选择“写成F外=m(t)a而不计动量流”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "写成F外=m(t)a而不计动量流",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”冲突"
          },
          {
            "option": "m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²",
            "errorModel": "选择“把质量变化本身当外力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "把质量变化本身当外力",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“m=5.0 kg、u=30 m/s、dm/dt=-0.20 kg/s，ma=u(-dm/dt)=6.0 N，候选a=1.2 m/s²”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE09",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。方程dv/dt=6-v在v=8 m/s时预示速度怎样变化？",
      "options": [
        "dv/dt=14 m/s²，速度上升",
        "dv/dt=-2 m/s²，速度下降",
        "速度恒为8 m/s因为方程是一阶"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "基础判别",
      "constraint": "质量恒定、惯性系、给定力模型区间与初值",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "驱动力F0",
          "线性阻力kv"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "受速度阻力的滑块",
        "frame": "地面惯性系",
        "forces": [
          "驱动力F0",
          "线性阻力kv"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "m dv/dt=F0-kv",
        "substitution": "按题中数据代入m dv/dt=F0-kv，候选结果为“dv/dt=-2 m/s²，速度下降”",
        "candidate": "dv/dt=-2 m/s²，速度下降",
        "constraint": "给定初值和模型区间",
        "final": "dv/dt=-2 m/s²，速度下降",
        "answerIndex": 1,
        "unique": "正确项“dv/dt=-2 m/s²，速度下降”同时满足m dv/dt=F0-kv与给定初值和模型区间；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "dv/dt=14 m/s²，速度上升",
            "errorModel": "选择“dv/dt=14 m/s²，速度上升”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "dv/dt=14 m/s²，速度上升",
            "conflict": "与约束“给定初值和模型区间”或正确结果“dv/dt=-2 m/s²，速度下降”冲突"
          },
          {
            "option": "速度恒为8 m/s因为方程是一阶",
            "errorModel": "选择“速度恒为8 m/s因为方程是一阶”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "速度恒为8 m/s因为方程是一阶",
            "conflict": "与约束“给定初值和模型区间”或正确结果“dv/dt=-2 m/s²，速度下降”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE10",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为2.0 kg滑块；地面系向右正；真实驱动力6.0 N、阻力v N；2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速 该模型的最终结论是什么？",
      "options": [
        "把dv/dt当速度",
        "只保留dv/dt=-kv/m",
        "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速"
      ],
      "answer": 2,
      "skill": "一阶动力学微分方程",
      "level": "综合建模",
      "constraint": "质量恒定、惯性系、给定力模型区间与初值",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "驱动力F0",
          "线性阻力kv"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "受速度阻力的滑块",
        "frame": "地面惯性系",
        "forces": [
          "驱动力F0",
          "线性阻力kv"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "m dv/dt=F0-kv",
        "substitution": "按题中数据代入m dv/dt=F0-kv，候选结果为“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”",
        "candidate": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "constraint": "给定初值和模型区间",
        "final": "2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速",
        "answerIndex": 2,
        "unique": "正确项“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”同时满足m dv/dt=F0-kv与给定初值和模型区间；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把dv/dt当速度",
            "errorModel": "选择“把dv/dt当速度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "把dv/dt当速度",
            "conflict": "与约束“给定初值和模型区间”或正确结果“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”冲突"
          },
          {
            "option": "只保留dv/dt=-kv/m",
            "errorModel": "选择“只保留dv/dt=-kv/m”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "只保留dv/dt=-kv/m",
            "conflict": "与约束“给定初值和模型区间”或正确结果“2dv/dt=6-v，候选稳态v=6 m/s，代回斜率0且v<6时加速”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE11",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": false,
      "text": "边界任务：先判断适用条件，再回答。欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么？",
      "options": [
        "模型已被真实实验完全证明",
        "更新式可省略加速度乘步长",
        "离散误差在减小，是数值收敛证据之一"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "基础判别",
      "constraint": "每步用当前状态算力，Δt单位为s且足够小",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "线性阻力kv"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "boundary-judgment",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 3
      },
      "review": {
        "object": "欧拉法离散的下落小球",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "线性阻力kv"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
        "substitution": "按题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt，候选结果为“离散误差在减小，是数值收敛证据之一”",
        "candidate": "离散误差在减小，是数值收敛证据之一",
        "constraint": "Δt>0并比较减半步长",
        "final": "离散误差在减小，是数值收敛证据之一",
        "answerIndex": 2,
        "unique": "正确项“离散误差在减小，是数值收敛证据之一”同时满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt与Δt>0并比较减半步长；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "模型已被真实实验完全证明",
            "errorModel": "选择“模型已被真实实验完全证明”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "模型已被真实实验完全证明",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“离散误差在减小，是数值收敛证据之一”冲突"
          },
          {
            "option": "更新式可省略加速度乘步长",
            "errorModel": "选择“更新式可省略加速度乘步长”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "更新式可省略加速度乘步长",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“离散误差在减小，是数值收敛证据之一”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CE12",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": true,
      "text": "综合任务：更换为同规律的新情境，独立完成计算与约束判断。对象为1.0 kg小球；地面系向下正；a=10-2v，由v0=1.0 m/s、Δt=0.20 s得v1=1.0+8.0×0.20=2.6 m/s；用0.10 s两步比较步长误差 该模型的最终结论是什么？",
      "options": [
        "用0.10 s两步比较步长误差",
        "更新漏乘Δt",
        "用一次大步宣称模型正确"
      ],
      "answer": 0,
      "skill": "欧拉法数值动力学",
      "level": "综合建模",
      "constraint": "每步用当前状态算力，Δt单位为s且足够小",
      "structure": {
        "objectType": "parameter-system",
        "bodyCount": 1,
        "forceTypes": [
          "重力mg",
          "线性阻力kv"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "comprehensive-model",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 5
      },
      "review": {
        "object": "欧拉法离散的下落小球",
        "frame": "地面惯性系",
        "forces": [
          "重力mg",
          "线性阻力kv"
        ],
        "axis": "题目所声明的单轴正方向",
        "equation": "a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
        "substitution": "按题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt，候选结果为“用0.10 s两步比较步长误差”",
        "candidate": "用0.10 s两步比较步长误差",
        "constraint": "Δt>0并比较减半步长",
        "final": "用0.10 s两步比较步长误差",
        "answerIndex": 0,
        "unique": "正确项“用0.10 s两步比较步长误差”同时满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt与Δt>0并比较减半步长；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "用0.10 s两步比较步长误差",
            "errorModel": "选择“更新漏乘Δt”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "更新漏乘Δt",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“用0.10 s两步比较步长误差”冲突"
          },
          {
            "option": "更新漏乘Δt",
            "errorModel": "选择“用一次大步宣称模型正确”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "用一次大步宣称模型正确",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“用0.10 s两步比较步长误差”冲突"
          }
        ]
      }
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 70 })
});
