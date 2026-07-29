window.E1BDiagnostic=Object.freeze({module:'E1',track:'B',storageKey:'physics-e1-b-diagnostic-v1',passCorrect:7,questions:[
      {id:'E1BD01',node:'E1-K03',gate:'矢量叠加',text:'两个场源在某点产生的场强大小相等。判断合场强前还必须知道？',options:['两个场强方向','检验电荷质量','该点电势零点'],answer:0},
      {id:'E1BD02',node:'E1-K06',gate:'符号与能量',text:'负电荷由低电势点到高电势点，正确的是？',options:['电势能减小、电场力做正功','电势能增大、电场力做负功','与电荷符号无关'],answer:0},
      {id:'E1BD03',node:'E1-K09',gate:'电容器状态',text:'电容器动态题中，决定先保持Q还是U的首要信息是？',options:['是否仍连接理想电源','极板颜色','电荷是正还是负'],answer:0},
      {id:'E1BD04',node:'E1-K02/K03',text:'寻找两个同号点电荷连线上的零场点时，正确方法是？',options:['先确定两场强反向的区域，再比较大小','只令两个场强大小相等','零场点一定在连线中点'],answer:0},
      {id:'E1BD05',node:'E1-K04/K05',text:'φ-x图像某区间下降，能直接得到的定性信息是？',options:['电势沿x方向降低；场方向还需结合场与势关系','正电荷一定向+x运动','场强处处相同'],answer:0},
      {id:'E1BD06',node:'E1-K06',text:'多阶段电场题中，电场力和外力都做功，最稳妥的能量处理是？',options:['先定义系统和阶段，分别记功与能量变化','只计算电场力功','默认机械能守恒'],answer:0},
      {id:'E1BD07',node:'E1-K09',text:'断电平行板电容器改变板距时，分析能量变化还应考虑？',options:['外力是否做功及场能变化','电源始终维持U','Q和U同时不变'],answer:0},
      {id:'E1BD08',node:'E1-K10',text:'带电粒子依次经过两个电场区域，正确做法是？',options:['按区域分段，每段重新确认受力和初始状态','全程只用一个加速度','忽略区域边界'],answer:0},
      {id:'E1BD09',node:'E1-K10',text:'判断粒子是否撞到极板，需要比较？',options:['到达板端所需时间与达到极板边界的条件','只比较电荷量','只看末速度大小'],answer:0},
      {id:'E1BD10',node:'E1-K11',text:'评价静电装置方案时，可靠结论至少需要？',options:['说明物理机制、适用条件和可观察证据','只写用途','只引用一个公式'],answer:0}
    ],evaluate:c=>{const admitted=c.correct>=7&&!c.failedGates.length&&!c.guessedGates.length;return{passed:admitted,admitted}},passPlan:()=>'<strong>下一步：</strong>进入B轨学习包。',failPlan:()=>'<strong>回补：</strong>只修复薄弱A节点和失败门槛。'});
