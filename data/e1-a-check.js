window.E1ACheck=Object.freeze({version:2,module:'E1',track:'A',storageKey:'physics-e1-a-check-v1',passTitle:'可以进入A正式卷',failTitle:'先回补A任务',reviewDays:1,prerequisites:[{key:'physics-e1-a-cards-v1',label:'10张知识卡未完成',test:v=>new Set(v?.done||[]).size===10},{key:'physics-e1-a-models-v1',label:'8个模型未完成',test:v=>new Set(v?.done||[]).size===8}],questions:[
{id:'E1A01',section:'概念条件',bucket:'场与力',task:'场与力',node:'E1-K01',text:'摩擦起电过程中，若把两个物体作为孤立系统，正确的是？',options:['总电荷守恒','产生了新的净电荷','质子在固体间转移'],answer:0},
{id:'E1A02',section:'概念条件',bucket:'场与力',task:'场与力',node:'E1-K02',text:'库仑定律直接适用前应检查？',options:['点电荷模型及环境条件','两物体质量相同','电荷必须静止且不受其他力'],answer:0},
{id:'E1A03',section:'概念条件',bucket:'势与能',task:'势与能',node:'E1-K05',text:'更换电势零点后保持不变的是？',options:['每一点电势','同两点电势差','所有电势的正负'],answer:1},
{id:'E1A04',section:'概念条件',bucket:'电容器/粒子',task:'电容器/粒子',node:'E1-K08',text:'关于C=Q/U，正确的是？',options:['对给定线性电容器，C主要由结构和介质决定','Q增大一定导致C增大','U减小一定导致C增大'],answer:0},
{id:'E1A05',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K03',gate:'场强方向',text:'场强方向定义为？',options:['正检验电荷受力方向','负检验电荷受力方向','电子速度方向'],answer:0},
{id:'E1A06',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K03',text:'某点场强向右，放入负电荷后其电场力方向？',options:['向右','向左','一定为零'],answer:1},
{id:'E1A07',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K02',text:'点电荷间距离变为原来2倍，其他条件不变，库仑力大小变为？',options:['1/2','1/4','2倍'],answer:1},
{id:'E1A08',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K03',text:'两个场源在某点产生的场强大小相等，能否直接判定合场强为零？',options:['能','不能，还要判断方向','只要电荷同号就能'],answer:1},
{id:'E1A09',section:'场强矢量',bucket:'场与力',task:'场与力',node:'E1-K04',text:'关于静电场电场线，正确的是？',options:['可相交','切线表示场强方向','一定是粒子轨迹'],answer:1},
{id:'E1A10',section:'势能做功',bucket:'势与能',task:'势与能',node:'E1-K06',gate:'符号与能量',text:'负电荷从低电势移到高电势，其电势能变化？',options:['减小','增大','与电荷符号无关'],answer:0}
],evaluate:c=>{const sectionsPassed=Object.values(c.sections).every(v=>v.correct/v.total>=.6);return{sectionsPassed,passed:c.eligible&&c.correct>=8&&sectionsPassed&&!c.failedGates.length&&!c.guessedGates.length}},passPlan:()=>'<strong>下一步：</strong>进入A正式卷。',failPlan:()=>'<strong>回补：</strong>返回薄弱知识卡或模型。'});
