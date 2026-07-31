window.M4CDiagnostic=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-diagnostic-v1",
  "passCorrect": 5,
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-b-exam-v1",
      "label": "前轨正式卷未通过"
    }
  ],
  "passTitle": "C轨诊断通过",
  "failTitle": "需回补前置",
  "initialPlan": "提交后生成节点路线。",
  "passPlan": "进入知识学习。",
  "failPlan": "返回失败节点。",
  "questions": [
    {
      "id": "M4CD01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": false,
      "text": "什么参考系中可引入-mA以保持牛顿方程形式？",
      "options": [
        "相对惯性系有平动加速度的随动系",
        "在地面系添加惯性力",
        "给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
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
        "substitution": "按题中数据代入ΣF真实-mA=ma相对，候选结果为“相对惯性系有平动加速度的随动系”",
        "candidate": "相对惯性系有平动加速度的随动系",
        "constraint": "惯性力无施力物体且仅属随动系",
        "final": "相对惯性系有平动加速度的随动系",
        "answerIndex": 0,
        "unique": "正确项“相对惯性系有平动加速度的随动系”同时满足ΣF真实-mA=ma相对与惯性力无施力物体且仅属随动系；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "在地面系添加惯性力",
            "errorModel": "选择“在地面系添加惯性力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "在地面系添加惯性力",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“相对惯性系有平动加速度的随动系”冲突"
          },
          {
            "option": "给惯性力找施力者",
            "errorModel": "选择“给惯性力找施力者”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "给惯性力找施力者",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“相对惯性系有平动加速度的随动系”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CD02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": false,
      "text": "参数解N=m(g+a)还必须满足什么条件？",
      "options": [
        "只给代数解不写区间",
        "m>0且N≥0",
        "保留负接触力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": true,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
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
        "substitution": "按题中数据代入N-mg=ma且N≥0，候选结果为“m>0且N≥0”",
        "candidate": "m>0且N≥0",
        "constraint": "m>0并满足N或T非负",
        "final": "m>0且N≥0",
        "answerIndex": 1,
        "unique": "正确项“m>0且N≥0”同时满足N-mg=ma且N≥0与m>0并满足N或T非负；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "只给代数解不写区间",
            "errorModel": "选择“只给代数解不写区间”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "只给代数解不写区间",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“m>0且N≥0”冲突"
          },
          {
            "option": "保留负接触力",
            "errorModel": "选择“保留负接触力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "保留负接触力",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“m>0且N≥0”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CD03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": false,
      "text": "线性阻力下速度增大时加速度为何减小？",
      "options": [
        "把阻力当恒力",
        "认为终端速度时重力消失",
        "kv增大使mg-kv减小"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
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
        "substitution": "按题中数据代入m dv/dt=mg-kv；vt=mg/k，候选结果为“kv增大使mg-kv减小”",
        "candidate": "kv增大使mg-kv减小",
        "constraint": "k>0且线性模型范围有效",
        "final": "kv增大使mg-kv减小",
        "answerIndex": 2,
        "unique": "正确项“kv增大使mg-kv减小”同时满足m dv/dt=mg-kv；vt=mg/k与k>0且线性模型范围有效；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把阻力当恒力",
            "errorModel": "选择“把阻力当恒力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "把阻力当恒力",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“kv增大使mg-kv减小”冲突"
          },
          {
            "option": "认为终端速度时重力消失",
            "errorModel": "选择“认为终端速度时重力消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "认为终端速度时重力消失",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“kv增大使mg-kv减小”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CD04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": false,
      "text": "喷气火箭建模为何先声明系统边界？",
      "options": [
        "跨边界质量携带动量",
        "写成F外=m(t)a而不计动量流",
        "把质量变化本身当外力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
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
        "substitution": "按题中数据代入ma=Fext+u(-dm/dt)，候选结果为“跨边界质量携带动量”",
        "candidate": "跨边界质量携带动量",
        "constraint": "系统边界与喷气速度定义固定",
        "final": "跨边界质量携带动量",
        "answerIndex": 0,
        "unique": "正确项“跨边界质量携带动量”同时满足ma=Fext+u(-dm/dt)与系统边界与喷气速度定义固定；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "写成F外=m(t)a而不计动量流",
            "errorModel": "选择“写成F外=m(t)a而不计动量流”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "写成F外=m(t)a而不计动量流",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“跨边界质量携带动量”冲突"
          },
          {
            "option": "把质量变化本身当外力",
            "errorModel": "选择“把质量变化本身当外力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "把质量变化本身当外力",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“跨边界质量携带动量”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CD05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": false,
      "text": "dv/dt=4-2v左边表示什么物理量？",
      "options": [
        "把dv/dt当速度",
        "速度对时间的瞬时变化率",
        "只保留dv/dt=-kv/m"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
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
        "substitution": "按题中数据代入m dv/dt=F0-kv，候选结果为“速度对时间的瞬时变化率”",
        "candidate": "速度对时间的瞬时变化率",
        "constraint": "给定初值和模型区间",
        "final": "速度对时间的瞬时变化率",
        "answerIndex": 1,
        "unique": "正确项“速度对时间的瞬时变化率”同时满足m dv/dt=F0-kv与给定初值和模型区间；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把dv/dt当速度",
            "errorModel": "选择“把dv/dt当速度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "把dv/dt当速度",
            "conflict": "与约束“给定初值和模型区间”或正确结果“速度对时间的瞬时变化率”冲突"
          },
          {
            "option": "只保留dv/dt=-kv/m",
            "errorModel": "选择“只保留dv/dt=-kv/m”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "只保留dv/dt=-kv/m",
            "conflict": "与约束“给定初值和模型区间”或正确结果“速度对时间的瞬时变化率”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CD06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": false,
      "text": "欧拉更新式为什么不能漏掉Δt？",
      "options": [
        "更新漏乘Δt",
        "用一次大步宣称模型正确",
        "aΔt才是速度增量"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "先备",
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
        "target": "prerequisite",
        "hasParameter": true,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 2
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
        "substitution": "按题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt，候选结果为“aΔt才是速度增量”",
        "candidate": "aΔt才是速度增量",
        "constraint": "Δt>0并比较减半步长",
        "final": "aΔt才是速度增量",
        "answerIndex": 2,
        "unique": "正确项“aΔt才是速度增量”同时满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt与Δt>0并比较减半步长；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "更新漏乘Δt",
            "errorModel": "选择“更新漏乘Δt”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "更新漏乘Δt",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“aΔt才是速度增量”冲突"
          },
          {
            "option": "用一次大步宣称模型正确",
            "errorModel": "选择“用一次大步宣称模型正确”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "用一次大步宣称模型正确",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“aΔt才是速度增量”冲突"
          }
        ]
      }
    }
  ]
});
