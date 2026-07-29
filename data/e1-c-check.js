window.E1CCheck=Object.freeze({version:2,module:'E1',track:'C',storageKey:'physics-e1-c-check-v1',passTitle:'可以进入C强基卷',failTitle:'先回补C任务',reviewDays:1,prerequisites:[{key:'physics-e1-c-models-v1',label:'C轨模型未完成',test:v=>new Set(v?.done||[]).size===6}],questions:[
      {id:'E1CC01',section:'综合检测',task:'C01',node:'E1-K01/K03',text:'将大量离散电荷近似为连续分布时，必须优先说明？',options:['观察尺度、密集程度和误差边界','电荷已不再离散','每个电荷量等于零'],answer:0},
      {id:'E1CC02',section:'综合检测',task:'C02',node:'E1-K03',text:'均匀带电圆环轴线上场强的横向分量为何抵消？',options:['关于轴成对微元的横向分量反向等大','每个微元场强为零','轴线上电势为零'],answer:0},
      {id:'E1CC03',section:'综合检测',task:'C03',node:'E1-K04/K05',text:'一维φ-x曲线在某点斜率为零，能够直接推出？',options:['该点沿x方向场强分量为零','总场强一定为零','粒子一定稳定'],answer:0},
      {id:'E1CC04',section:'综合检测',task:'C04',node:'E1-K05/K06',text:'同一电势极小点附近，正负电荷的稳定性为何可能不同？',options:['势能为qφ，电荷符号会改变势能曲线形状','质量不同','电势单位改变'],answer:0},
      {id:'E1CC05',section:'综合检测',task:'C05',node:'E1-K08/K09',text:'改变电容网络参数时，能量结论依赖的首要条件是？',options:['连接状态及电源是否交换能量','电容器颜色','始终只有场能变化'],answer:0},
      {id:'E1CC06',section:'综合检测',task:'C06',node:'E1-K10',text:'参数化推导后进行q→0或E→0极限检查，主要用于？',options:['检验表达式能否回到合理简单情形','替代原推导','证明所有假设正确'],answer:0},
      {id:'E1CC07',section:'综合检测',task:'C07',node:'E1-K11',text:'讨论金属外壳屏蔽效果时，不能省略？',options:['静电条件、结构、开口和接地等边界','金属颜色','外壳名称'],answer:0},
      {id:'E1CC08',section:'综合检测',task:'C08',node:'E1-K11',text:'可反驳探究方案最关键的特征是？',options:['给出可测预测和否定假设的判据','保证实验支持假设','只记录成功数据'],answer:0}
    ],evaluate:c=>({passed:c.eligible&&c.correct>=6}),passPlan:()=>'<strong>下一步：</strong>进入C正式卷。',failPlan:()=>'<strong>回补：</strong>返回薄弱C任务。'});
