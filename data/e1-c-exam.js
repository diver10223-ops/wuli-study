window.E1CExam=Object.freeze({module:'E1',track:'C',storageKey:'physics-e1-c-exam-v1',durationSeconds:5400,passTitle:'C轨当前通过',failTitle:'C轨暂未通过',prerequisites:[{key:'physics-e1-c-check-v1',test:v=>v?.passed===true}],objective:[
      {id:'E1CE01',section:'模型推导',task:'C01',text:'连续电荷近似可靠性的核心依据是？',options:['研究尺度远大于微观间距且误差可接受','电荷不再离散','总电荷必须为零'],answer:0},
      {id:'E1CE02',section:'模型推导',task:'C02',text:'对称性在微元叠加中的主要作用是？',options:['预判可抵消与保留的分量','替代所有积分或求和','证明场处处相等'],answer:0},
      {id:'E1CE03',section:'函数与稳定性',task:'C03',text:'φ-x曲线下降最陡处，沿+x方向的场强分量通常？',options:['为正且绝对值较大','为零','一定为负'],answer:0},
      {id:'E1CE04',section:'函数与稳定性',task:'C04',text:'判断带电粒子在电势极值点附近是否稳定，应研究？',options:['势能qφ的局部形状','只看φ正负','只看粒子质量'],answer:0},
      {id:'E1CE05',section:'网络与能量',task:'C05',text:'电容器始终接理想电源时改变几何参数，能量账本必须包含？',options:['电源交换能量，必要时还含外力功','只有场能','电荷量恒定'],answer:0},
      {id:'E1CE06',section:'网络与能量',task:'C05',text:'电容网络等效前必须先确定？',options:['节点与连接关系','所有电容相同','总电势为零'],answer:0},
      {id:'E1CE07',section:'参数与边界',task:'C06',text:'量纲正确的表达式是否一定物理正确？',options:['不一定，还须检查模型、边界与极限','一定正确','只需数值为正'],answer:0},
      {id:'E1CE08',section:'参数与边界',task:'C07',text:'静电屏蔽实验的结论应限定于？',options:['装置结构、静电状态和测量灵敏度等条件','任何时变场','所有开口尺寸'],answer:0},
      {id:'E1CE09',section:'探究论证',task:'C08',text:'可反驳假设必须导出？',options:['可能与数据冲突的可测预测','必然成功的实验','无需定义变量的结论'],answer:0},
      {id:'E1CE10',section:'探究论证',task:'C08',text:'实验数据与假设不一致时，规范处理是？',options:['检查测量和模型后如实修正或否定假设','删除数据','只保留支持结果'],answer:0}
    ],written:[
      {id:'E1CW01',section:'模型推导',max:10,independent:true,title:'连续带电圆环轴线场模型',prompt:'从电荷微元出发，利用对称性建立轴线上一点的场强表达结构，并说明连续近似条件及一个失效情境。',rubric:'研究对象与微元2分；方向和对称性2分；叠加结构3分；近似条件2分；失效边界1分'},
      {id:'E1CW02',section:'函数与稳定性',max:10,independent:true,title:'场势关系与局部稳定性',prompt:'给出一条自拟φ(x)曲线，标注场强方向、零点和大小趋势，再分别讨论正负电荷在一个极值点附近的稳定性。',rubric:'曲线与坐标1分；场强判断3分；势能转换2分；正负电荷稳定性2分；局部假设2分'},
      {id:'E1CW03',section:'网络与能量',max:10,title:'电容网络与能量账本',prompt:'任选串联或并联电容网络推导等效电容，再讨论改变一个参数时场能、电源能量和外力功的关系。',rubric:'节点与约束2分；等效推导3分；连接状态2分；能量账本2分；边界1分'},
      {id:'E1CW04',inquiry:true,section:'探究论证',max:10,title:'静电屏蔽探究',prompt:'设计实验研究开口尺寸或接地状态对屏蔽效果的影响，写出假设、变量、可测预测、操作、判据和局限。',rubric:'假设1分；变量2分；预测2分；操作与数据2分；判据2分；局限1分'},
      {id:'E1CW05',section:'参数与边界',max:10,title:'参数化粒子模型',prompt:'推导平行板电场中粒子偏转量对q、m、E、板长和初速度的依赖，完成量纲、至少两个极限及适用边界检查。',rubric:'分段模型2分；推导3分；量纲1分；极限2分；适用边界2分'}
    ],evaluate:c=>{const modelPassed=c.sections['模型推导'].score/c.sections['模型推导'].max>=.6,inquiryPassed=c.sections['探究论证'].score/c.sections['探究论证'].max>=.6,independentDerivation=['E1CW01','E1CW02'].some(id=>c.response.writtenState[id]==='独立完成'&&c.response.reviewed[id]&&Number(c.response.scores[id])>=6),inquiryStructure=['假设','变量','可测预测','判据','局限'].every(x=>c.response.inquiry[x]),inquiryComplete=c.response.reviewed.E1CW04&&Number(c.response.scores.E1CW04)>=6&&inquiryStructure;return{modelPassed,inquiryPassed,independentDerivation,inquiryStructure,inquiryComplete,passed:c.eligible&&c.reviewComplete&&c.total>=70&&modelPassed&&inquiryPassed&&independentDerivation&&inquiryComplete}},passPlan:()=>'<strong>通过：</strong>7天后完成C轨复测。',failPlan:d=>!d.reviewComplete?'<strong>下一步：</strong>请家长或教师审核原稿。':'<strong>回补：</strong>返回未达标C任务。'});
