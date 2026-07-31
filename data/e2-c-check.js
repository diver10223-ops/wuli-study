window.E2CCheck=Object.freeze({version:2,module:'E2E3',track:'C',storageKey:'physics-e2e3-c-check-v1',passTitle:'可以进入C卷',failTitle:'先回补C任务',reviewDays:1,prerequisites:[{key:'physics-e2e3-c-models-v1',label:'C模型未完成',test:v=>new Set(v?.done||[]).size===6}],questions:[
      {id:'CC01',section:'综合检测',task:'C01',node:'E2-K01/K06',text:'稳态节点电流代数和为零的物理依据是？',options:['节点不发生持续电荷积累','所有支路电阻相同','所有电流方向相同'],answer:0},
      {id:'CC02',section:'综合检测',task:'C02',node:'E2-K02/K06',text:'预设支路电流方向后求得负值，正确解释是？',options:['方程一定错误','实际方向与预设方向相反','电流不存在'],answer:1},
      {id:'CC03',section:'综合检测',task:'C03',node:'E2-K07',text:'两个网络在端口处等效，意味着？',options:['内部结构完全相同','指定工作范围内端口U-I关系相同','任何频率和状态下都相同'],answer:1},
      {id:'CC04',section:'综合检测',task:'C04',node:'E2-K09',text:'研究负载最大功率时，首先必须明确？',options:['电源模型、可调参数和允许范围','答案一定在R=r且无需条件','效率必定最大'],answer:0},
      {id:'CC05',section:'综合检测',task:'C05',node:'E2-K04',text:'非线性曲线上工作点U/I与局部ΔU/ΔI的区别是？',options:['前者是原点割线比值，后者描述工作点附近变化','两者永远相等','后者没有单位'],answer:0},
      {id:'CC06',section:'综合检测',task:'C06',node:'E3-K01/K03',text:'分析伏安法系统误差的强基方法是？',options:['把非理想电表内阻写入方程并比较测量值与真值','只背偏大或偏小','忽略电表'],answer:0},
      {id:'CC07',section:'综合检测',task:'C07',node:'E3-K06',text:'增加数据点通常不能自动消除什么？',options:['随机波动','系统误差','对整体趋势的观察'],answer:1},
      {id:'CC08',section:'综合检测',task:'C08',node:'E3-K07',text:'可反驳的实验假设必须能够？',options:['导出可测量且可能与数据冲突的预测','保证结论正确','避免定义变量'],answer:0}
    ],evaluate:c=>({passed:c.eligible&&c.correct>=6}),passPlan:()=>'<strong>下一步：</strong>进入C卷。',failPlan:()=>'<strong>回补：</strong>返回薄弱任务。'});
