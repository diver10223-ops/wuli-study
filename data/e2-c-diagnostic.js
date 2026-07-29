window.E2CDiagnostic=Object.freeze({module:'E2E3',track:'C',storageKey:'physics-e2e3-c-diagnostic-v1',passCorrect:7,prerequisites:[{key:'physics-e2e3-b-exam-v1',label:'B卷未通过',test:v=>v?.passed===true}],confirmations:[{id:'goal',label:'我确认当前需要强基/大学先修轨'}],questions:[
      {id:'CD01',node:'E0-ALG',gate:'代数图像',text:'若U=E-Ir，在U-I图中改变横纵轴顺序后，斜率的物理意义会怎样？',options:['保持不变','随方程表达和坐标轴改变，必须重新推导','只改变正负号且无需单位'],answer:1},
      {id:'CD02',node:'E2-K07',gate:'模型假设',text:'使用I=E/(R+r)时隐含的核心前提之一是？',options:['外电路可以用确定的等效电阻描述且电源模型适用','任何非线性元件都可直接用恒定R代替','电流必须为整数'],answer:0},
      {id:'CD03',node:'E3-K03',gate:'测量误差',text:'电压表内阻有限会影响待测电路，正确理解是？',options:['电压表是完全不取电流的理想元件','接入仪表改变了系统，需要把仪表纳入电路模型','只要读数有小数就没有误差'],answer:1},
      {id:'CD04',node:'E2-K06',text:'对一个复杂电阻网络，写节点电流关系前应先做什么？',options:['定义节点和各支路电流方向','直接把所有电阻相加','假设所有支路电流相等'],answer:0},
      {id:'CD05',node:'E2-K09',text:'讨论负载获得最大功率时，为什么必须同时说明约束条件？',options:['极值结论依赖电源模型、可调参数和研究对象','任何电路的最大功率条件都完全相同','约束只影响单位'],answer:0},
      {id:'CD06',node:'E2-K04',text:'非线性元件某工作点附近的变化关系，为什么不能简单等同U/I？',options:['工作点附近变化率与从原点到工作点的比值不是同一概念','因为U/I永远没有意义','因为非线性元件没有电压'],answer:0},
      {id:'CD07',node:'E3-K06',text:'用多组数据估计E和r，相比只用两点，主要优势是？',options:['可以观察离散、异常点和整体趋势，降低偶然读数影响','一定消除所有系统误差','不再需要物理模型'],answer:0},
      {id:'CD08',node:'E3-K01',text:'“测量值保留更多小数就更准确”为什么不成立？',options:['有效位数应受仪器分辨率和不确定度约束','小数越多单位会改变','整数永远最准'],answer:0},
      {id:'CD09',node:'E3-K07',text:'设计探究实验时，可检验假设必须具备什么特点？',options:['能够导出可测量、可反驳的预测','结论必须预先确定为正确','不需要控制或记录条件'],answer:0},
      {id:'CD10',node:'E2-K10',text:'两个不同故障模型给出相同观测结果，下一步应？',options:['设计能区分两模型预测的新测量','任选一个结论','重复写原观测'],answer:0}
    ],evaluate:c=>{const toolsPassed=c.correct>=7&&c.gatesPassed,bPassed=c.eligible,goalConfirmed=c.confirmationsPassed,admitted=toolsPassed&&bPassed&&goalConfirmed;return{toolsPassed,bPassed,goalConfirmed,admitted,passed:admitted}},passPlan:()=>'<strong>下一步：</strong>进入C学习包。',failPlan:()=>'<strong>准入未完成：</strong>补齐B卷、工具或目标。'});
