window.E2CExam=Object.freeze({module:'E2E3',track:'C',storageKey:'physics-e2e3-c-exam-v1',durationSeconds:5400,passTitle:'C轨当前通过',failTitle:'C轨暂未通过',prerequisites:[{key:'physics-e2e3-c-check-v1',test:v=>v?.passed===true}],objective:[
      {id:'CE01',section:'模型推导',task:'C01',text:'非稳态节点关系中，流入与流出电流不相等时，其差对应？',options:['节点电荷随时间的变化率','节点电阻','电源效率'],answer:0},
      {id:'CE02',section:'模型推导',task:'C03',text:'端口等效成立的判断依据是？',options:['端口U-I关系在指定范围一致','内部元件数量一致','网络外观一致'],answer:0},
      {id:'CE03',section:'模型推导',task:'C05',text:'非线性元件局部变化率应由什么描述？',options:['工作点附近切线或小变化比值','原点到工作点割线必然代替','纵截距'],answer:0},
      {id:'CE04',section:'网络参数',task:'C02',text:'节点电势法选定参考节点后，其他节点电势表示？',options:['相对参考节点的电势差','绝对不依赖参考的数值','各支路电流'],answer:0},
      {id:'CE05',section:'网络参数',task:'C02',text:'预设支路方向的主要作用是？',options:['统一列式符号，负结果修正实际方向','保证结果为正','让所有支路同向'],answer:0},
      {id:'CE06',section:'网络参数',task:'C04',text:'在理想电动势E、内阻r固定且负载R可调的模型中，负载功率极值条件为？',options:['R=r','R=0','R无限大'],answer:0},
      {id:'CE07',section:'非理想测量',task:'C06',text:'电压表有限内阻造成的影响应如何分析？',options:['把电压表作为支路纳入网络方程','始终忽略','只改变有效数字'],answer:0},
      {id:'CE08',section:'非理想测量',task:'C07',text:'重复测量主要帮助估计或减弱？',options:['随机波动影响','固定系统偏差','错误模型的全部影响'],answer:0},
      {id:'CE09',section:'探究设计',task:'C08',text:'可检验假设的预测必须？',options:['对应可测量量并允许数据否定假设','永远与假设一致','避免设置判据'],answer:0},
      {id:'CE10',section:'探究设计',task:'C08',text:'传感器定标实验中设置重复测量的主要价值之一是？',options:['观察重复性和随机离散','保证消除所有系统误差','扩大工作区间'],answer:0}
    ],written:[
      {id:'CW01',section:'模型推导',max:10,independent:true,title:'稳恒节点关系推导',prompt:'从一段时间内节点电荷变化出发，推导稳态节点电流关系，并说明非稳态时方程如何改变。',rubric:'电荷变化定义2分；电流代数关系3分；稳态条件2分；非稳态修正2分；符号与单位1分'},
      {id:'CW02',section:'网络参数',max:10,independent:true,title:'最大功率与效率边界',prompt:'从P=E²R/(R+r)²推导负载功率极值条件，计算该点效率，并说明为什么最大功率不等于最大效率。',rubric:'模型与约束2分；推导4分；效率2分；边界说明2分'},
      {id:'CW03',section:'非理想测量',max:10,title:'非理想电表建模',prompt:'任选伏安法一种接法，把RA或RV写入方程，推导测量值与真实值的关系，并讨论仪表趋于理想时的极限。',rubric:'电路对象2分；方程3分；误差关系3分；理想极限2分'},
      {id:'CW04',inquiry:true,section:'探究设计',max:10,title:'传感器灵敏度探究',prompt:'设计实验判断传感器灵敏度是否随工作点变化，必须给出假设、变量、可测预测、数据图像、判据与局限。',rubric:'假设1分；变量2分；可测预测2分；操作与图像2分；判据2分；局限1分'},
      {id:'CW05',section:'学术表达',max:10,title:'模型评价短文',prompt:'选择本卷一个模型，说明研究对象、基本假设、证据、适用范围、一个反例或失效情境，以及改进方向。',rubric:'对象与假设2分；证据2分；范围2分；反例2分；改进与表达2分'}
    ],evaluate:c=>{const modelPassed=c.sections['模型推导'].score/c.sections['模型推导'].max>=.6,inquiryPassed=c.sections['探究设计'].score/c.sections['探究设计'].max>=.6,independentDerivation=c.response.reviewed.CW01&&c.response.writtenState.CW01==='独立完成'&&Number(c.response.scores.CW01)>=6,inquiryStructure=['假设','变量','可测预测','判据','局限'].every(x=>c.response.inquiry[x]),inquiryComplete=c.response.reviewed.CW04&&Number(c.response.scores.CW04)>=6&&inquiryStructure;return{modelPassed,inquiryPassed,independentDerivation,inquiryStructure,inquiryComplete,passed:c.eligible&&c.reviewComplete&&c.total>=70&&modelPassed&&inquiryPassed&&independentDerivation&&inquiryComplete}},passPlan:()=>'<strong>通过：</strong>7天后复测。',failPlan:d=>!d.reviewComplete?'请完成教师审核。':'返回薄弱任务。'});
