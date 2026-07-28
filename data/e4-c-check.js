window.E4CCheck=Object.freeze({version:1,module:'E4',track:'C',storageKey:'physics-e4-c-check-v1',passTitle:'可以进入C强基卷',failTitle:'先回补C轨任务',reviewDays:1,prerequisites:[{key:'physics-e4-c-learning-v1',label:'8项C轨任务未全部完成',test:(v)=>new Set(v?.done||[]).size===8},{key:'physics-e4-c-models-v1',label:'6项模型任务未全部完成',test:(v)=>new Set(v?.done||[]).size===6}],questions:[
{id:'E4CC01',section:'模型推导',task:'C01',node:'E4-K03/K05',gate:'模型边界',text:'长直电流磁场关系使用前必须说明？',options:['长度、距离和边缘近似条件','导线颜色','电势零点'],answer:0},
{id:'E4CC02',section:'模型推导',task:'C02',node:'E4-K04/K05',text:'连续分布叠加前对称性主要用于？',options:['判断分量抵消与保留','证明总场为零','省略微元定义'],answer:0},
{id:'E4CC03',section:'模型推导',task:'C03',node:'E4-K07',text:'由电流元求整体力需要？',options:['按方向叠加各微元力','只加长度','只看端点'],answer:0},
{id:'E4CC04',section:'参数与稳定',task:'C04',node:'E4-K08',gate:'参数极限',text:'单位长度受力推导后合理检查是？',options:['电流趋零或距离趋大时回到合理极限','所有参数取零','只看正负'],answer:0},
{id:'E4CC05',section:'参数与稳定',task:'C05',node:'E4-K09',text:'合力为零能否证明稳定？',options:['不能，还要做微小扰动分析','能','只对重力场不能'],answer:0},
{id:'E4CC06',section:'参数与稳定',task:'C06',node:'E4-K10',text:'装置能量模型首先明确？',options:['系统边界和时间段','只有安培力','只有效率'],answer:0},
{id:'E4CC07',section:'测量与探究',task:'C07',node:'E4-K12',gate:'测量假设',text:'霍尔定量关系需要明确？',options:['载流子、几何、方向和稳态','只有电压','只有电流'],answer:0},
{id:'E4CC08',section:'测量与探究',task:'C07',node:'E4-K12',text:'定标曲线外推前应？',options:['检查线性范围和模型边界','直接无限外推','删去异常'],answer:0},
{id:'E4CC09',section:'测量与探究',task:'C08',node:'E4-K13',text:'可反驳假设要求？',options:['存在数据能够否定它','保证正确','无需判据'],answer:0},
{id:'E4CC10',section:'测量与探究',task:'C08',node:'E4-K13',text:'规范结论应区分？',options:['证据、解释、推测与局限','只分对错','只写公式'],answer:0}],evaluate:(c)=>{const sectionsPassed=Object.values(c.sections).every(v=>v.correct/v.total>=.6),gatesPassed=!c.failedGates.length&&!c.guessedGates.length;return{sectionsPassed,gatesPassed,passed:c.eligible&&c.correct>=8&&sectionsPassed&&gatesPassed,details:`<p><strong>分项：</strong>${sectionsPassed?'达标':'有分项低于60%'}</p>`};},passPlan:()=>'<strong>下一步：</strong>进入C强基卷并准备纸面推导与探究原稿。',failPlan:(d)=>d.eligible?'<strong>下一步：</strong>返回薄弱C任务。':'<strong>下一步：</strong>先完成C学习包。'});
