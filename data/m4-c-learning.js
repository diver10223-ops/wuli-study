window.M4CLearning=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "C",
  "storageKey": "physics-mechanics-m4-c-learning-v1",
  "diagnosticKey": "physics-mechanics-m4-c-diagnostic-v1",
  "completePlan": "完成后进入下一阶段。",
  "items": [
    {
      "id": "M4CK01",
      "node": "M4-CK01",
      "title": "非惯性系与惯性力边界",
      "summary": "加速度为A的随动系可加入-mA；惯性力无施力物体",
      "conditions": "必须声明非惯性参考系，只处理平动随动系",
      "misconception": "在地面系添加惯性力，或给惯性力找施力者",
      "example": "车厢向右加速2 m/s²，车厢系内1 kg物块受向左惯性力2 N；相对静止需2 N静摩擦向右",
      "check": "画或写出非惯性系与惯性力边界的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4CK02",
      "node": "M4-CK02",
      "title": "参数动力学与存在区间",
      "summary": "参数候选解须代回N≥0、T≥0或摩擦范围，给出存在区间",
      "conditions": "质量为正且所有单侧约束成立",
      "misconception": "只给代数解不写区间，或保留负接触力",
      "example": "以m=2.0 kg、恒阻力f=3.0 N为例，受参数力P时a=(P-3.0)/2.0 m/s²；向右加速要求P>3.0 N，P=3.0 N为临界",
      "check": "画或写出参数动力学与存在区间的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4CK03",
      "node": "M4-CK03",
      "title": "速度阻力与终端速度",
      "summary": "线性阻力下m dv/dt=mg-kv，终端速度vt=mg/k",
      "conditions": "下落取正，k恒定且模型只在给定速度范围内",
      "misconception": "把阻力当恒力，或认为终端速度时重力消失",
      "example": "m=0.20 kg、k=0.50 N·s/m时vt=4.0 m/s；v=2.0 m/s时a=5.0 m/s²",
      "check": "画或写出速度阻力与终端速度的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4CK04",
      "node": "M4-CK04",
      "title": "变质量系统与动量流",
      "summary": "开放系统不能直接写F外=m(t)a，必须计入跨边界动量流",
      "conditions": "声明控制体、相对喷射速度和质量变化率符号",
      "misconception": "未计入推力项，或把质量变化本身当外力",
      "example": "火箭向后喷气u=20 m/s，-dm/dt=0.50 kg/s，推力u(-dm/dt)=10 N向前",
      "check": "画或写出变质量系统与动量流的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4CK05",
      "node": "M4-CK05",
      "title": "一阶动力学微分方程",
      "summary": "m dv/dt=F(v,t)表示当前状态决定瞬时斜率，初值选定物理解",
      "conditions": "质量恒定、惯性系、给定力模型区间与初值",
      "misconception": "把dv/dt当速度，或未计入非齐次驱动力",
      "example": "dv/dt=4-2v且v0=0时初始a=4 m/s²，平衡速度2 m/s，斜率逐渐减小",
      "check": "画或写出一阶动力学微分方程的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4CK06",
      "node": "M4-CK06",
      "title": "欧拉法数值动力学",
      "summary": "显式欧拉用v下一步=v当前+a当前Δt，减小步长比较离散误差",
      "conditions": "每步用当前状态算力，Δt单位为s且足够小",
      "misconception": "更新漏乘Δt，或用一次大步宣称模型正确",
      "example": "dv/dt=4-2v、v0=0、Δt=0.10 s，v1=0.40 m/s，v2=0.72 m/s",
      "check": "画或写出欧拉法数值动力学的对象、正方向与真实力，列方程复算数值并代回约束。"
    }
  ]
});
