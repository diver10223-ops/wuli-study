window.M4CCheck=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-check-v1",
  "durationSeconds": 1800,
  "reviewDays": 7,
  "passTitle": "C轨check通过",
  "failTitle": "C轨check未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-c-learning-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 70,
  "questions": [
    {
      "id": "M4CC01",
      "section": "非惯性系与惯性力边界",
      "task": "K01",
      "node": "M4-CK01",
      "gate": "核心边界",
      "novel": false,
      "text": "非惯性系与惯性力边界即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "在地面系添加惯性力",
        "给惯性力找施力者"
      ],
      "answer": 0,
      "skill": "非惯性系与惯性力边界",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入ΣF真实-mA=ma相对，候选结果为“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”",
        "candidate": "车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "constraint": "惯性力无施力物体且仅属随动系",
        "final": "车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
        "answerIndex": 0,
        "unique": "正确项“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”同时满足ΣF真实-mA=ma相对与惯性力无施力物体且仅属随动系；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "在地面系添加惯性力",
            "errorModel": "选择“在地面系添加惯性力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "在地面系添加惯性力",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”冲突"
          },
          {
            "option": "给惯性力找施力者",
            "errorModel": "选择“给惯性力找施力者”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ΣF真实-mA=ma相对",
            "errorSubstitution": "应使用题中数据代入ΣF真实-mA=ma相对",
            "errorResult": "给惯性力找施力者",
            "conflict": "与约束“惯性力无施力物体且仅属随动系”或正确结果“车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CC02",
      "section": "参数动力学与存在区间",
      "task": "K02",
      "node": "M4-CK02",
      "gate": "",
      "novel": false,
      "text": "参数动力学与存在区间即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "只给代数解不写区间",
        "P=f为临界",
        "保留负接触力"
      ],
      "answer": 1,
      "skill": "参数动力学与存在区间",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入N-mg=ma且N≥0，候选结果为“P=f为临界”",
        "candidate": "P=f为临界",
        "constraint": "m>0并满足N或T非负",
        "final": "P=f为临界",
        "answerIndex": 1,
        "unique": "正确项“P=f为临界”同时满足N-mg=ma且N≥0与m>0并满足N或T非负；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "只给代数解不写区间",
            "errorModel": "选择“只给代数解不写区间”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "只给代数解不写区间",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“P=f为临界”冲突"
          },
          {
            "option": "保留负接触力",
            "errorModel": "选择“保留负接触力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足N-mg=ma且N≥0",
            "errorSubstitution": "应使用题中数据代入N-mg=ma且N≥0",
            "errorResult": "保留负接触力",
            "conflict": "与约束“m>0并满足N或T非负”或正确结果“P=f为临界”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CC03",
      "section": "速度阻力与终端速度",
      "task": "K03",
      "node": "M4-CK03",
      "gate": "",
      "novel": false,
      "text": "速度阻力与终端速度即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "把阻力当恒力",
        "认为终端速度时重力消失",
        "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²"
      ],
      "answer": 2,
      "skill": "速度阻力与终端速度",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入m dv/dt=mg-kv；vt=mg/k，候选结果为“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”",
        "candidate": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "constraint": "k>0且线性模型范围有效",
        "final": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
        "answerIndex": 2,
        "unique": "正确项“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”同时满足m dv/dt=mg-kv；vt=mg/k与k>0且线性模型范围有效；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把阻力当恒力",
            "errorModel": "选择“把阻力当恒力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "把阻力当恒力",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”冲突"
          },
          {
            "option": "认为终端速度时重力消失",
            "errorModel": "选择“认为终端速度时重力消失”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=mg-kv；vt=mg/k",
            "errorSubstitution": "应使用题中数据代入m dv/dt=mg-kv；vt=mg/k",
            "errorResult": "认为终端速度时重力消失",
            "conflict": "与约束“k>0且线性模型范围有效”或正确结果“m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CC04",
      "section": "变质量系统与动量流",
      "task": "K04",
      "node": "M4-CK04",
      "gate": "",
      "novel": false,
      "text": "变质量系统与动量流即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "推力u(-dm/dt)=10 N向前",
        "写成F外=m(t)a而不计动量流",
        "把质量变化本身当外力"
      ],
      "answer": 0,
      "skill": "变质量系统与动量流",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入ma=Fext+u(-dm/dt)，候选结果为“推力u(-dm/dt)=10 N向前”",
        "candidate": "推力u(-dm/dt)=10 N向前",
        "constraint": "系统边界与喷气速度定义固定",
        "final": "推力u(-dm/dt)=10 N向前",
        "answerIndex": 0,
        "unique": "正确项“推力u(-dm/dt)=10 N向前”同时满足ma=Fext+u(-dm/dt)与系统边界与喷气速度定义固定；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "写成F外=m(t)a而不计动量流",
            "errorModel": "选择“写成F外=m(t)a而不计动量流”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "写成F外=m(t)a而不计动量流",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“推力u(-dm/dt)=10 N向前”冲突"
          },
          {
            "option": "把质量变化本身当外力",
            "errorModel": "选择“把质量变化本身当外力”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足ma=Fext+u(-dm/dt)",
            "errorSubstitution": "应使用题中数据代入ma=Fext+u(-dm/dt)",
            "errorResult": "把质量变化本身当外力",
            "conflict": "与约束“系统边界与喷气速度定义固定”或正确结果“推力u(-dm/dt)=10 N向前”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CC05",
      "section": "一阶动力学微分方程",
      "task": "K05",
      "node": "M4-CK05",
      "gate": "",
      "novel": false,
      "text": "一阶动力学微分方程即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "把dv/dt当速度",
        "斜率逐渐减小",
        "只保留dv/dt=-kv/m"
      ],
      "answer": 1,
      "skill": "一阶动力学微分方程",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入m dv/dt=F0-kv，候选结果为“斜率逐渐减小”",
        "candidate": "斜率逐渐减小",
        "constraint": "给定初值和模型区间",
        "final": "斜率逐渐减小",
        "answerIndex": 1,
        "unique": "正确项“斜率逐渐减小”同时满足m dv/dt=F0-kv与给定初值和模型区间；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "把dv/dt当速度",
            "errorModel": "选择“把dv/dt当速度”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "把dv/dt当速度",
            "conflict": "与约束“给定初值和模型区间”或正确结果“斜率逐渐减小”冲突"
          },
          {
            "option": "只保留dv/dt=-kv/m",
            "errorModel": "选择“只保留dv/dt=-kv/m”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足m dv/dt=F0-kv",
            "errorSubstitution": "应使用题中数据代入m dv/dt=F0-kv",
            "errorResult": "只保留dv/dt=-kv/m",
            "conflict": "与约束“给定初值和模型区间”或正确结果“斜率逐渐减小”冲突"
          }
        ]
      }
    },
    {
      "id": "M4CC06",
      "section": "欧拉法数值动力学",
      "task": "K06",
      "node": "M4-CK06",
      "gate": "",
      "novel": false,
      "text": "欧拉法数值动力学即时独立检测：从三个物理结论中选择满足本节点方程与条件的一项。",
      "options": [
        "更新漏乘Δt",
        "用一次大步宣称模型正确",
        "v2=0.72 m/s"
      ],
      "answer": 2,
      "skill": "欧拉法数值动力学",
      "level": "理解",
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
        "target": "independent-execution",
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
        "substitution": "按题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt，候选结果为“v2=0.72 m/s”",
        "candidate": "v2=0.72 m/s",
        "constraint": "Δt>0并比较减半步长",
        "final": "v2=0.72 m/s",
        "answerIndex": 2,
        "unique": "正确项“v2=0.72 m/s”同时满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt与Δt>0并比较减半步长；其余两项至少违背其中一项。",
        "distractors": [
          {
            "option": "更新漏乘Δt",
            "errorModel": "选择“更新漏乘Δt”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "更新漏乘Δt",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“v2=0.72 m/s”冲突"
          },
          {
            "option": "用一次大步宣称模型正确",
            "errorModel": "选择“用一次大步宣称模型正确”对应的对象、力方向或状态假设错误",
            "errorEquation": "把该结果代回时不满足a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorSubstitution": "应使用题中数据代入a_n=g-(k/m)v_n；v_{n+1}=v_n+a_nΔt",
            "errorResult": "用一次大步宣称模型正确",
            "conflict": "与约束“Δt>0并比较减半步长”或正确结果“v2=0.72 m/s”冲突"
          }
        ]
      }
    }
  ]
});
