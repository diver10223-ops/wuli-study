window.E1BCheck=Object.freeze({version:2,module:'E1',track:'B',storageKey:'physics-e1-b-check-v1',passTitle:'B轨当前通过',failTitle:'B轨暂未通过',reviewDays:1,durationSeconds:0,prerequisites:[{key:'physics-e1-b-models-v1',label:'B轨模型未完成',test:v=>new Set(v?.done||[]).size===6}],questions:[
      {id:'E1BC01',section:'综合检测',task:'B01',node:'E1-K02/K03',text:'利用对称性求合场强时，不能省略哪一步？',options:['逐个画出各场强方向','直接把大小相等的场强删去','假设所有分量相消'],answer:0},
      {id:'E1BC02',section:'综合检测',task:'B02',node:'E1-K02/K03',text:'求零场点时先筛选区域，是为了保证？',options:['参与相消的场强方向相反','电势一定为零','距离一定相等'],answer:0},
      {id:'E1BC03',section:'综合检测',task:'B03',node:'E1-K04/K05',text:'φ-x图像在某处变化更陡，定性上通常表示沿x方向的场强分量？',options:['绝对值更大','一定为零','与变化快慢无关'],answer:0},
      {id:'E1BC04',section:'综合检测',task:'B04',node:'E1-K06/K07',text:'多阶段能量题中存在外力做功，正确做法是？',options:['分阶段记录各类功和能量变化','仍默认机械能守恒','只记录电势能'],answer:0},
      {id:'E1BC05',section:'综合检测',task:'B05',node:'E1-K08/K09',text:'缓慢拉开断电电容器极板时，能量分析必须包含？',options:['外力功与场能变化','理想电源始终供能','U保持不变'],answer:0},
      {id:'E1BC06',section:'综合检测',task:'B06',node:'E1-K10',text:'粒子从加速区进入偏转区，连接两段的关键状态量之一是？',options:['离开加速区的速度作为偏转区初速度','全程同一加速度','只使用总路程'],answer:0},
      {id:'E1BC07',section:'综合检测',task:'B07',node:'E1-K11',text:'评价陌生静电装置的完整结构应包括？',options:['机制、证据、条件、局限和改进','用途和名称','一个公式即可'],answer:0}
    ],evaluate:c=>{const sectionsPassed=Object.values(c.sections).every(v=>v.correct/v.total>=.5);return{sectionsPassed,passed:c.eligible&&c.correct>=6&&sectionsPassed}},passPlan:d=>'<strong>下一步：</strong>进入B正式卷。',failPlan:()=>'<strong>回补：</strong>返回薄弱B任务。'});
