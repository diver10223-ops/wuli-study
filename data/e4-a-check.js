window.E4ACheck = Object.freeze({
  version:1,module:'E4',track:'A',storageKey:'physics-e4-a-check-v1',passTitle:'可以进入A基础卷',failTitle:'先回补A轨任务',reviewDays:1,
  prerequisites:[
    {key:'physics-e4-a-learning-v1',label:'13张知识卡未全部完成',test:(v)=>new Set(v?.done||[]).size===13},
    {key:'physics-e4-a-models-v1',label:'7个基础模型未全部完成',test:(v)=>new Set(v?.done||[]).size===7},
  ],
  questions:[
    {id:'E4AC01',section:'方向与场',task:'K03',node:'E4-K03',gate:'电流磁场方向',text:'判断直导线右侧一点的B方向时，第一项必要信息是？',options:['电流方向及观察点相对导线的位置','导线电阻','电源功率'],answer:0},
    {id:'E4AC02',section:'方向与场',task:'K05',node:'E4-K05',text:'两个等大磁场在一点是否抵消，取决于？',options:['方向是否相反','场源名称','导线是否等长'],answer:0},
    {id:'E4AC03',section:'安培力',task:'K06',node:'E4-K06',gate:'安培力研究对象',text:'平行导线题判断导线2受力，应使用？',options:['导线2电流和导线1在2处产生的磁场','导线1电流和自身场','两导线总电阻'],answer:0},
    {id:'E4AC04',section:'安培力',task:'K07',node:'E4-K07',gate:'F=BIL适用条件',text:'直导线与B平行时直接代入F=BIL会怎样？',options:['错误；此时安培力为零','正确且最大','只需改变单位'],answer:0},
    {id:'E4AC05',section:'安培力',task:'K08',node:'E4-K08',text:'同向平行电流相吸的主推理应是？',options:['先求一根产生的B，再判另一根F','只写口诀','比较电流大小'],answer:0},
    {id:'E4AC06',section:'运动与应用',task:'K09',node:'E4-K09',text:'导体平衡时除了安培力还必须？',options:['画出其他全部外力','令重力为零','令电流为零'],answer:0},
    {id:'E4AC07',section:'运动与应用',task:'K10',node:'E4-K10',text:'安培力做正功能直接推出？',options:['安培力贡献使动能增加，但总变化仍看合功','机械能一定守恒','电源不供能'],answer:0},
    {id:'E4AC08',section:'运动与应用',task:'K11',node:'E4-K11',text:'线圈合力为零时仍可能转动，因为？',options:['不同边的力可形成转动作用','没有安培力','只有重力'],answer:0},
    {id:'E4AC09',section:'运动与应用',task:'K12',node:'E4-K12',text:'霍尔稳态形成前的正确顺序是？',options:['磁偏转—电荷积累—霍尔电场—横向平衡','先平衡再积累','发热—断路'],answer:0},
    {id:'E4AC10',section:'运动与应用',task:'K13',node:'E4-K13',text:'评价装置解释最可靠的是？',options:['控制变量和可重复数据','装置名称','单一句口诀'],answer:0},
  ],
  evaluate:(c)=>{const sectionsPassed=Object.values(c.sections).every((v)=>v.correct/v.total>=.6),gatesPassed=!c.failedGates.length&&!c.guessedGates.length;return{sectionsPassed,gatesPassed,passed:c.eligible&&c.correct>=8&&sectionsPassed&&gatesPassed,details:`<p><strong>分项：</strong>${sectionsPassed?'达标':'有分项低于60%'}</p>`};},
  passPlan:()=>'<strong>下一步：</strong>进入正式A基础卷；即时检测不能替代出关证据。',
  failPlan:(d)=>d.eligible?'<strong>下一步：</strong>只回补列出的K任务和失败门槛，再用相邻题重测。':'<strong>下一步：</strong>先完成知识卡和基础模型。',
});
