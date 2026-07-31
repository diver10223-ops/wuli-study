window.M4BLearning=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "B",
  "storageKey": "physics-mechanics-m4-b-learning-v1",
  "diagnosticKey": "physics-mechanics-m4-b-diagnostic-v1",
  "completePlan": "完成后进入下一阶段。",
  "items": [
    {
      "id": "M4BK01",
      "node": "M4-BK01",
      "title": "整体法与隔离法",
      "summary": "整体法消去内力求共同加速度，隔离单体求接触力",
      "conditions": "物体保持共同加速度；整体只列外力",
      "misconception": "把内力列入整体式，或求内力时不隔离",
      "example": "1 kg与2 kg相接受9 N推力，整体9=3a得a=3 m/s²；隔离2 kg得N=6 N",
      "check": "画或写出整体法与隔离法的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4BK02",
      "node": "M4-BK02",
      "title": "轻绳轻杆弹簧约束",
      "summary": "绷直轻绳限制沿绳运动且T≥0；轻杆可推拉，弹簧力取决于形变量",
      "conditions": "绳张紧、杆不伸长、弹簧在弹性限度内",
      "misconception": "保留负张力，或把弹簧两端加速度强制相同",
      "example": "2 kg与1 kg由轻绳相连受6 N拉力，6=3a得a=2 m/s²；隔离1 kg得T=2 N>0",
      "check": "画或写出轻绳轻杆弹簧约束的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4BK03",
      "node": "M4-BK03",
      "title": "临界分离与接触切换",
      "summary": "单侧接触力只能非负；令N=0求临界，越界后切换模型",
      "conditions": "接触面只推不拉，候选N<0必须舍弃",
      "misconception": "保留负支持力，或认为N=0时重力消失",
      "example": "电梯地板上物块N=m(g-a)，向下a=g=10 m/s²时N=0，继续要求更大加速度则分离",
      "check": "画或写出临界分离与接触切换的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4BK04",
      "node": "M4-BK04",
      "title": "临界滑动与静摩擦需求",
      "summary": "先求共同运动所需静摩擦并与μsN比较，超过才滑动",
      "conditions": "未滑时|f需求|≤μsN，滑动后用μkN",
      "misconception": "未达上限就写f=μsN，或滑后仍用静摩擦",
      "example": "2 kg箱在车上μs=0.30，fmax=0.30×20=6 N，故共同加速度上限3.0 m/s²",
      "check": "画或写出临界滑动与静摩擦需求的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4BK05",
      "node": "M4-BK05",
      "title": "传送带板块分段动力学",
      "summary": "摩擦由相对运动决定；达到带速或边界时重建下一段方程",
      "conditions": "每段相对速度符号固定，切换时刻由速度相等或越界确定",
      "misconception": "只看对地速度定摩擦，或忽略达到带速后的切换",
      "example": "静止1 kg物块放上4 m/s传送带，μk=0.20，a=2 m/s²，2 s达到带速后改为匀速",
      "check": "画或写出传送带板块分段动力学的对象、正方向与真实力，列方程复算数值并代回约束。"
    },
    {
      "id": "M4BK06",
      "node": "M4-BK06",
      "title": "动力学实验图像与误差",
      "summary": "a-F图斜率反映1/m，截距可检验残余阻力和系统质量遗漏",
      "conditions": "控制质量或合力，拟合数据对应同一系统边界",
      "misconception": "把平衡摩擦说成消除摩擦，或把截距都当随机误差",
      "example": "0.50 kg小车拟合a=1.8F-0.36，F轴截距0.20 N提示残余阻力",
      "check": "画或写出动力学实验图像与误差的对象、正方向与真实力，列方程复算数值并代回约束。"
    }
  ]
});
