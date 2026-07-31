window.M4CRetest=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-retest-v1",
  "durationSeconds": 1800,
  "reviewDays": 14,
  "passTitle": "C轨retest通过",
  "failTitle": "C轨retest未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-c-exam-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 100,
  "questions": [
    {
      "id": "M4CR01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": true,
      "text": "在向左加速的车厢系中，质量m物体的平动惯性力方向和大小是？",
      "options": [
        "向右，大小mA",
        "向左，大小mA且有车厢施力",
        "地面系中也必须额外加入mA"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "迁移",
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
        "target": "transfer",
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
      "id": "M4CR02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": true,
      "text": "候选支持力N=m(g-a)，参数a的接触解存在区间是什么？",
      "options": [
        "a>g且保留N<0",
        "a≤g，a=g为N=0边界",
        "任意a都由支持面提供拉力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "迁移",
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
        "target": "transfer",
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
      "id": "M4CR03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": true,
      "text": "线性阻力下小球速度等于vt/2时，加速度与g的关系是？",
      "options": [
        "a=0",
        "a=2g",
        "a=g/2"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "迁移",
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
        "target": "transfer",
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
      "id": "M4CR04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": true,
      "text": "同一火箭问题若系统改选为火箭加全部已喷气体，原先的动量流项怎样处理？",
      "options": [
        "边界改变，须重新列外力与系统总动量，不能照搬原式",
        "动量流项不随系统选择改变",
        "可直接写瞬时火箭质量乘全系统加速度"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "迁移",
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
        "target": "transfer",
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
      "id": "M4CR05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": true,
      "text": "方程dv/dt=6-v在v=8 m/s时预示速度怎样变化？",
      "options": [
        "dv/dt=14 m/s²，速度上升",
        "dv/dt=-2 m/s²，速度下降",
        "速度恒为8 m/s因为方程是一阶"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "迁移",
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
        "target": "transfer",
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
      "id": "M4CR06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": true,
      "text": "欧拉法把步长从0.20 s减到0.10 s，两次结果趋近说明什么？",
      "options": [
        "模型已被真实实验完全证明",
        "更新式可省略加速度乘步长",
        "离散误差在减小，是数值收敛证据之一"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "迁移",
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
        "target": "transfer",
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
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
