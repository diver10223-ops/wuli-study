window.E4BCheck=Object.freeze({version:1,module:'E4',track:'B',storageKey:'physics-e4-b-check-v1',passTitle:'可以进入B拓展卷',failTitle:'先回补B轨任务',reviewDays:1,prerequisites:[{key:'physics-e4-b-learning-v1',label:'8项B轨学习任务未全部完成',test:(v)=>new Set(v?.done||[]).size===8},{key:'physics-e4-b-models-v1',label:'6项模型任务未全部完成',test:(v)=>new Set(v?.done||[]).size===6}],questions:[
{id:'E4BC01',section:'空间叠加',task:'B01',node:'E4-K05',gate:'空间矢量叠加',text:'寻找多场源零场位置前应？',options:['筛选B方向可能相消区域','直接令距离相等','只看最近场源'],answer:0},
{id:'E4BC02',section:'空间叠加',task:'B02',node:'E4-K07',text:'弯折导线在匀强场中的合力应？',options:['分段求力并矢量合成','总长代BIL','只求最长段'],answer:0},
{id:'E4BC03',section:'空间叠加',task:'B03',node:'E4-K08',text:'三导线中判断中间导线受力应？',options:['叠加另外两根在此处的B再判F','只用同向吸引口诀','必为零'],answer:0},
{id:'E4BC04',section:'能量与过程',task:'B04',node:'E4-K09',gate:'多过程建模',text:'导体从静止到运动再达新状态，应？',options:['分段更新电流、B和受力','全程用初始平衡','忽略约束'],answer:0},
{id:'E4BC05',section:'能量与过程',task:'B05',node:'E4-K10',gate:'系统能量账本',text:'电动装置能量收支不能遗漏？',options:['电源、热和机械能','只有动能','只有安培力'],answer:0},
{id:'E4BC06',section:'能量与过程',task:'B05',node:'E4-K10',text:'安培力功与电源输出能量？',options:['系统边界明确后才能比较，不必相等','永远相等','永远无关'],answer:0},
{id:'E4BC07',section:'装置与探究',task:'B06',node:'E4-K11',text:'改变线圈匝数判断装置响应前需说明？',options:['电流、B、结构等哪些条件保持','颜色','只有电阻'],answer:0},
{id:'E4BC08',section:'装置与探究',task:'B07',node:'E4-K12',text:'由霍尔极性反推载流子符号时必须？',options:['结合电流、B和测量方向重建受力链','只看电压大小','假设都是正电荷'],answer:0},
{id:'E4BC09',section:'装置与探究',task:'B08',node:'E4-K13',text:'开放实验结论应有？',options:['可测证据、判据、误差和局限','定律名称','成功描述'],answer:0},
{id:'E4BC10',section:'装置与探究',task:'B08',node:'E4-K13',text:'数据与假设不符时应？',options:['检查误差与模型后修正或否定假设','删除数据','强行支持假设'],answer:0}],evaluate:(c)=>{const sectionsPassed=Object.values(c.sections).every(v=>v.correct/v.total>=.6),gatesPassed=!c.failedGates.length&&!c.guessedGates.length;return{sectionsPassed,gatesPassed,passed:c.eligible&&c.correct>=8&&sectionsPassed&&gatesPassed,details:`<p><strong>分项：</strong>${sectionsPassed?'达标':'有分项低于60%'}</p>`};},passPlan:()=>'<strong>下一步：</strong>进入正式B拓展卷。',failPlan:(d)=>d.eligible?'<strong>下一步：</strong>只返回列出的B任务。':'<strong>下一步：</strong>先完成B轨学习包。'});
