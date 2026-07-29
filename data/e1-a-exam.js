window.E1AExam=Object.freeze({version:2,module:'E1',track:'A',storageKey:'physics-e1-a-exam-v1',passTitle:'A轨当前通过',failTitle:'A轨暂未通过',reviewDays:7,durationSeconds:3600,prerequisites:[{key:'physics-e1-a-check-v1',label:'A轨即时检测未通过',test:v=>v?.passed===true}],questions:[
      {id:'E1A01',section:'概念条件',bucket:'场与力',task:'场与力',node:'E1-K01',text:'摩擦起电过程中，若把两个物体作为孤立系统，正确的是？',options:['总电荷守恒','产生了新的净电荷','质子在固体间转移'],answer:0},
      {id:'E1A02',section:'概念条件',bucket:'场与力',task:'场与力',node:'E1-K02',text:'库仑定律直接适用前应检查？',options:['点电荷模型及环境条件','两物体质量相同','电荷必须静止且不受其他力'],answer:0},
      {id:'E1A03',section:'概念条件',bucket:'势与能',task:'势与能',node:'E1-K05',text:'更换电势零点后保持不变的是？',options:['每一点电势','同两点电势差','所有电势的正负'],answer:1},
      {id:'E1A04',section:'概念条件',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K08',text:'关于C=Q/U，正确的是？',options:['对给定线性电容器，C主要由结构和介质决定','Q增大一定导致C增大','U减小一定导致C增大'],answer:0},

      {id:'E1A05',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K03',gate:'场强方向',text:'场强方向定义为？',options:['正检验电荷受力方向','负检验电荷受力方向','电子速度方向'],answer:0},
      {id:'E1A06',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K03',text:'某点场强向右，放入负电荷后其电场力方向？',options:['向右','向左','一定为零'],answer:1},
      {id:'E1A07',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K02',text:'点电荷间距离变为原来2倍，其他条件不变，库仑力大小变为？',options:['1/2','1/4','2倍'],answer:1},
      {id:'E1A08',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K03',text:'两个场源在某点产生的场强大小相等，能否直接判定合场强为零？',options:['能','不能，还要判断方向','只要电荷同号就能'],answer:1},
      {id:'E1A09',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K04',text:'关于静电场电场线，正确的是？',options:['可相交','切线表示场强方向','一定是粒子轨迹'],answer:1},

      {id:'E1A10',section:'势能做功',bucket:'势与能',task:'势与能',node:'E1-K06',gate:'符号与能量',text:'负电荷从低电势移到高电势，其电势能变化？',options:['减小','增大','与电荷符号无关'],answer:0},
      {id:'E1A11',section:'势能做功',bucket:'势与能',task:'势与能',node:'E1-K06',text:'电场力做正功时，电势能？',options:['减小','增大','不变'],answer:0},
      {id:'E1A12',section:'势能做功',bucket:'势与能',task:'势与能',node:'E1-K04/K05',text:'电荷沿同一等势面移动，电场力功？',options:['为零','一定为正','一定为负'],answer:0},
      {id:'E1A13',section:'势能做功',bucket:'势与能',task:'势与能',node:'E1-K07',text:'匀强电场中两点连线长度L，与场强夹角60°，电势差大小为？',options:['EL','ELcos60°','ELsin60°且无条件'],answer:1},

      {id:'E1A14',section:'电容器',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K09',gate:'电容器状态',text:'电容器断开电源且忽略漏电后，增大板间距，首先保持不变的是？',options:['Q','U','C'],answer:0},
      {id:'E1A15',section:'电容器',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K09',text:'平行板电容器始终接理想电源，增大板间距时？',options:['U保持不变','Q保持不变','C保持不变'],answer:0},
      {id:'E1A16',section:'电容器',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K08',text:'同一线性电容器Q、U同时变为2倍，C？',options:['2倍','1/2','不变'],answer:2},
      {id:'E1A17',section:'电容器',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K09',text:'分析电容器动态变化的第一步是？',options:['判断接电源还是断电源','直接判断电场强度','假设Q和U都不变'],answer:0},

      {id:'E1A18',section:'粒子模型',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K10',text:'带电粒子由静止在电场中加速，最稳妥的首步是？',options:['明确电性、场方向和受力/做功','直接写最终速度','忽略电势差符号'],answer:0},
      {id:'E1A19',section:'粒子模型',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K10',text:'粒子水平进入竖直匀强电场，只受电场力，水平方向通常？',options:['匀速','匀加速且加速度为qE/m','静止'],answer:0},
      {id:'E1A20',section:'粒子模型',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K10',text:'计算偏转位移前还应检查？',options:['粒子是否先撞板或离开电场区域','电荷量是否为整数','场强是否向右'],answer:0}
    ],evaluate:c=>{const bucketsPassed=Object.values(c.tasks).every(v=>v.correct/v.total>=.6);return{bucketsPassed,passed:c.eligible&&c.score>=80&&bucketsPassed&&!c.failedGates.length&&!c.guessedGates.length}},passPlan:d=>`<strong>通过：</strong>${d.reviewDate}完成A轨复测。`,failPlan:()=>'<strong>回补：</strong>只返回薄弱节点和失败门槛。'});
