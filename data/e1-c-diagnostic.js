window.E1CDiagnostic=Object.freeze({module:'E1',track:'C',storageKey:'physics-e1-c-diagnostic-v1',passCorrect:7,prerequisites:[{key:'physics-e1-b-exam-v1',label:'B轨正式卷尚未通过',test:v=>v?.passed===true}],confirmations:[{id:'goal',label:'我确认当前确实需要强基/大学先修轨，而不是普通高考默认任务'}],questions:[
      {id:'E1CD01',node:'E0-MATH',gate:'函数图像',text:'一维情形中，电势φ随x变化更快，意味着沿x方向的场强分量通常？',options:['绝对值更大，但方向要看φ增减','一定更小','与φ变化无关'],answer:0},
      {id:'E1CD02',node:'E1-K03',gate:'模型假设',text:'把离散电荷近似成连续分布前，必须说明？',options:['观察尺度、分布密度和近似适用范围','电荷不再量子化','每个电荷量变为零'],answer:0},
      {id:'E1CD03',node:'E1-K11',gate:'实验论证',text:'验证屏蔽效果时，可靠方案应？',options:['定义可测量量、对照条件和判据','只描述金属外壳','预先认定完全屏蔽'],answer:0},
      {id:'E1CD04',node:'E1-K03',text:'利用对称性求连续分布的场，首先应判断？',options:['哪些方向分量因对称抵消、哪些保留','总电荷一定集中在中心','场强一定处处相同'],answer:0},
      {id:'E1CD05',node:'E1-K04/K05',text:'若φ(x)在某点附近有极值，判断带电粒子稳定性还必须结合？',options:['电荷符号和势能qφ的局部形状','只看φ正负','只看粒子质量'],answer:0},
      {id:'E1CD06',node:'E1-K08/K09',text:'讨论电容器储能变化时，完整能量账本可能包含？',options:['场能、电源交换能量和外力功','只有Q和U','只有电容C'],answer:0},
      {id:'E1CD07',node:'E1-K08',text:'多个电容器等效时，为什么要先标节点和连接关系？',options:['串并联判断依赖节点约束','所有电容可直接相加','电势处处相同'],answer:0},
      {id:'E1CD08',node:'E1-K10',text:'推导粒子轨迹参数关系后，量纲检查的作用是？',options:['发现部分代数或模型错误，但不能证明结论一定正确','替代全部物理推导','决定粒子电性'],answer:0},
      {id:'E1CD09',node:'E1-K10',text:'参数极限分析的合理用途是？',options:['检验表达式在已知简单极限下是否合理','让所有参数取零','替代边界条件'],answer:0},
      {id:'E1CD10',node:'E1-K11',text:'可反驳的静电实验假设应能导出？',options:['可测量且可能被数据否定的预测','必然正确的口号','无需变量的结论'],answer:0}
    ],evaluate:c=>{const toolsPassed=c.correct>=7&&c.gatesPassed,bPassed=c.eligible,goalConfirmed=c.confirmationsPassed,admitted=toolsPassed&&bPassed&&goalConfirmed;return{toolsPassed,bPassed,goalConfirmed,admitted,passed:admitted}},passPlan:()=>'<strong>下一步：</strong>进入C轨强基学习包。',failPlan:()=>'<strong>准入未完成：</strong>补齐B卷、工具门槛或强基目标确认。'});
