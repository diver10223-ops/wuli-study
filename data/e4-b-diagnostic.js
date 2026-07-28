window.E4BDiagnostic = Object.freeze({
  version:1,track:'B',storageKey:'physics-e4-b-diagnostic-v1',passCorrect:8,questionLabel:'B准入',passTitle:'可直接进入B轨',failTitle:'先回补前置节点',initialPlan:'提交后判断能否直接进入B轨。',
  passPlan:'<strong>下一步：</strong>进入B轨拓展学习包；诊断通过不等于B轨出关。',
  failPlan:(d)=>`<strong>回补路线：</strong>先修复${d.weak.join('、')||d.failedGates.join('、')}；不要求重学整个A轨。`,
  questions:[
    {id:'E4BD01',node:'E4-K05',gate:'空间矢量叠加',text:'多导线空间场叠加时最先做什么？',options:['统一坐标并逐源画B','只加大小','先猜零场点'],answer:0},
    {id:'E4BD02',node:'E4-K05',text:'对称结构中两个等大B能否抵消取决于？',options:['方向分量','导线颜色','电流单位'],answer:0},
    {id:'E4BD03',node:'E4-K06',gate:'研究对象切换',text:'从导线1受力改问导线2受力时必须？',options:['交换场源和受力对象并重画I、B、F','沿用原受力图','只改变力大小'],answer:0},
    {id:'E4BD04',node:'E4-K07',text:'弯折导线受力最可靠的处理是？',options:['按磁场内各段条件分别分析再合成','总长度直接代BIL','忽略转角'],answer:0},
    {id:'E4BD05',node:'E4-K08',text:'三根平行导线中间导线受力应？',options:['分别求两外场并合成后判力','只看最近一根','必然平衡'],answer:0},
    {id:'E4BD06',node:'E4-K09',text:'安培力随位置变化的运动题应？',options:['分阶段更新B、I和受力','始终用初始力','默认匀速'],answer:0},
    {id:'E4BD07',node:'E4-K10',gate:'系统能量账本',text:'电动装置的完整能量分析至少包含？',options:['电源输入、焦耳热、机械能变化','只有安培力功','只有动能'],answer:0},
    {id:'E4BD08',node:'E4-K10',text:'安培力做正功是否说明机械能增加量等于该功？',options:['不一定，还需看其他力和系统边界','一定','永远不等'],answer:0},
    {id:'E4BD09',node:'E4-K12',text:'改变载流子类型后判断霍尔极性应？',options:['从速度与受力重新走完整链','保持原结论','只看电流表'],answer:0},
    {id:'E4BD10',node:'E4-K13',text:'陌生装置信息题的可靠评价包括？',options:['机制、证据、条件、局限和改进','名称和用途','一个公式'],answer:0},
  ],
});
