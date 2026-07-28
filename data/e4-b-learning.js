window.E4BLearning = Object.freeze({
  version:1,module:'E4',track:'B',storageKey:'physics-e4-b-learning-v1',diagnosticKey:'physics-e4-b-diagnostic-v1',
  admission:(s)=>s.read('physics-e4-a-exam-v1',null)?.passed===true||s.read('physics-e4-b-diagnostic-v1',null)?.passed===true,
  admissionMessage:'<strong>预览模式：</strong>需要A卷通过或B准入诊断通过，才能记录B轨正式进度。',
  completePlan:'<strong>B学习包完成：</strong>进入B轨即时检测；勾选不等于拓展卷通过。',
  items:[
    {id:'B01',node:'E4-K05',title:'多电流空间叠加与零场位置',summary:'统一空间坐标，逐源画B并分解，再由矢量和寻找零场或方向变化。',conditions:'先筛选方向可能相消的区域，再列大小关系并核验。',misconception:'场强为零不等于各场源不存在。',example:'处理三根导线或非共线场源的一点合场。',check:'我能自主完成空间叠加和区域筛选'},
    {id:'B02',node:'E4-K07',title:'多段与弯折导线安培力',summary:'按每一段的I、B、有效长度和夹角分别求力，再做矢量合成。',conditions:'必要时使用等效有效长度，但必须说明均匀场和几何条件。',misconception:'不能把折线总长直接当作L。',example:'比较直线、L形和闭合线框的受力。',check:'我能分段求力并合成'},
    {id:'B03',node:'E4-K08',title:'多根平行导线与动态平衡',summary:'对每根研究对象分别叠加其他导线的场，再分析合力、平衡与参数变化。',conditions:'换对象必须重建外场；对称性只在方向和距离核验后使用。',misconception:'中间位置不自动等于平衡。',example:'三导线中求某根平衡所需电流方向或比值。',check:'我能处理多导线的场—力双层叠加'},
    {id:'B04',node:'E4-K09',title:'安培力与力学多过程',summary:'导轨、斜面、弹簧或约束变化时，分阶段更新电路、电流、B和受力。',conditions:'画过程图和每段受力图，选择平衡、牛顿定律或临界条件。',misconception:'不能用一个恒定安培力覆盖全程。',example:'完成静止—启动—新平衡三阶段模型。',check:'我能分段处理安培力力学综合'},
    {id:'B05',node:'E4-K10',title:'电路—安培力—能量账本',summary:'连接E2电路，追踪电源输入、焦耳热、克服外力功和机械能变化。',conditions:'先定系统边界和时间段，再写能量收支。',misconception:'安培力功不等于电源全部输出。',example:'为电动装置写一段完整能量账本。',check:'我能解释能量来源与去向'},
    {id:'B06',node:'E4-K11',title:'磁电装置与参数迁移',summary:'从线圈分边受力出发分析转动、灵敏度、量程或结构变化。',conditions:'明确哪些量改变、哪些近似保持，区分定性趋势和定量关系。',misconception:'匀强场结论不能无条件迁移到任意磁场。',example:'评价改变线圈匝数、电流或B的影响。',check:'我能迁移磁电装置模型'},
    {id:'B07',node:'E4-K12',title:'霍尔传感器与载流子迁移',summary:'在不同材料、载流子、电流和B方向中重走受力—积累—平衡链。',conditions:'定量题先定义宽度、厚度、载流子密度和测量方向。',misconception:'正负载流子不能共用一个未经重建的极性口诀。',example:'由霍尔极性反推载流子符号或B方向。',check:'我能在陌生霍尔图中重新建模'},
    {id:'B08',node:'E4-K13',title:'陌生装置、实验与开放论证',summary:'把文字和装置图转成对象、变量、模型、可测证据、判据与局限。',conditions:'结论必须被数据支持，并说明误差、范围和改进。',misconception:'只引用定律名称不构成方案评价。',example:'为一项磁场传感或电动装置设计验证方案。',check:'我能完成证据充分的装置评价'},
  ],
});
