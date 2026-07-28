window.E4AModels = Object.freeze({
  version: 1,
  module: 'E4',
  track: 'A',
  storageKey: 'physics-e4-a-models-v1',
  diagnosticKey: 'physics-e4-a-diagnostic-v1',
  completePlan: '<strong>基础模型完成：</strong>下一步参加A轨即时检测，再进入正式A基础卷。',
  items: [
    {id:'M01',node:'E4-K01',title:'磁场方向与空间表征',summary:'把纸面内外、左右上下和空间切向统一到明确坐标。',conditions:'画坐标→标观察点→画B箭头→用语言复述。',misconception:'“顺时针”必须说明从哪一侧观察。',example:'互换观察方向后重新判断同一磁场。',check:'我能在二维图中稳定表达三维方向'},
    {id:'M02',node:'E4-K03',title:'典型电流产生的磁场',summary:'直线、环形与螺线管都从电流方向出发判断B。',conditions:'辨认几何→标完整电流→使用方向规则→核验对称。',misconception:'不要混用直导线圆周磁场与线圈轴线磁场。',example:'完成直导线和线圈各一道反向判断。',check:'我能选择正确方向规则'},
    {id:'M03',node:'E4-K06',title:'场源—受力对象分离',summary:'一对象产生外磁场，另一通电对象在该场中受力。',conditions:'圈出场源→求对象处B→圈出受力对象→标I→判F。',misconception:'计算自身磁场不能直接用于判断自身整体安培力。',example:'交换两平行导线角色并分别判断。',check:'我能区分谁产生场、谁受到力'},
    {id:'M04',node:'E4-K07',title:'F=BIL条件与有效长度',summary:'公式计算前进行对象、磁场、夹角、有效长度、单位五项检查。',conditions:'若不垂直，先分解或使用适合的夹角关系；分段导线分别处理。',misconception:'总线长、磁场内长度和有效长度可能不同。',example:'比较直导线、斜导线和弯折导线的可用长度。',check:'我能先审条件再列安培力公式'},
    {id:'M05',node:'E4-K08',title:'平行导线两步法',summary:'用“先求B、再判F”得到相互作用方向，并用交换对象检验。',conditions:'不得直接把口诀作为主推理。',misconception:'两导线之间的合磁场方向与每根导线受到的力不是同一个问题。',example:'完成同向与反向各一题。',check:'我能独立完成平行导线两步推理'},
    {id:'M06',node:'E4-K09',title:'安培力平衡、运动与能量',summary:'先完成受力图和过程图，再选平衡、牛顿定律或功和能。',conditions:'电流或位置变化可能同时改变B和F，必须分阶段。',misconception:'动能变化由合功决定，不只看安培力。',example:'完成一个静止模型和一个发生位移的模型。',check:'我能在力学规律间正确选择'},
    {id:'M07',node:'E4-K12',title:'霍尔效应完整链',summary:'从载流子电性与速度出发，依次判断磁力、积累、电场、电势与稳态。',conditions:'每次反转电流、B或载流子类型，只改变对应起点并重走全链。',misconception:'不能直接背某一侧高电势而忽略图示方向。',example:'分别反转B和载流子电性进行迁移。',check:'我能在新图中重建霍尔因果链'},
  ],
});
