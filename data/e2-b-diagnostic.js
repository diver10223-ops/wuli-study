window.E2BDiagnostic=Object.freeze({module:'E2E3',track:'B',storageKey:'physics-e2e3-b-diagnostic-v1',passCorrect:7,questions:[
      {id:'BD01', node:'E2-K06', group:'基础门槛', gate:'节点支路', text:'并联电路总电流4 A，支路甲1.5 A，支路乙电流为？', options:['1.5 A','2.5 A','4 A'], answer:1},
      {id:'BD02', node:'E2-K09', group:'基础门槛', gate:'功率对象', text:'计算电动机机械功率前，必须先确认什么？', options:['所用电流是电动机支路电流','干路电流最大','线圈电阻等于外电阻'], answer:0},
      {id:'BD03', node:'E3-K06', group:'基础门槛', gate:'实验图像', text:'电源U-I图像的斜率为负，求内阻时应使用？', options:['斜率本身且不写单位','斜率绝对值并结合坐标单位','纵截距除以横截距且不说明条件'], answer:1},
      {id:'BD04', node:'E2-K08', group:'动态迁移', text:'电源内阻不可忽略，外电路等效电阻增大。正确的首段因果链是？', options:['总电流减小→内电压减小→路端电压增大','总电流增大→内电压减小→路端电压增大','路端电压先增大→总电流再减小'], answer:0},
      {id:'BD05', node:'E2-K04', group:'图像迁移', text:'非线性元件的U-I图像不经过原点。分析某工作状态时应优先？', options:['把元件当作恒定电阻','读取该工作点的U和I并检查所求物理量','强制延长图线通过原点'], answer:1},
      {id:'BD06', node:'E2-K09', group:'能量迁移', text:'电动机输入功率为UI，线圈热功率为I²r。在忽略其他损耗时机械功率为？', options:['UI+I²r','UI-I²r','I²r-UI'], answer:1},
      {id:'BD07', node:'E3-K03', group:'实验设计', text:'两个伏安法方案测得结果不同，评价方案时最合理的是？', options:['只选电路图更简单的','比较电表内阻造成的系统误差及适用条件','选择读数更大的'], answer:1},
      {id:'BD08', node:'E3-K07', group:'实验设计', text:'评价传感器是否适合某测量范围，至少应考虑？', options:['灵敏度、工作区间和重复性','外壳颜色','导线长度越长越好'], answer:0},
      {id:'BD09', node:'E2-K10', group:'论证表达', text:'判断电路故障时，“某元件一定断路”的结论成立，需要？', options:['一种现象即可','现有测量证据能排除其他合理故障','只依据自己的第一感觉'], answer:1},
      {id:'BD10', node:'E3-K05', group:'论证表达', text:'实验图像有一个偏离趋势的点，规范处理是？', options:['立即删除','检查原始记录、操作和重复测量后说明处理依据','修改该点使其落在图线上'], answer:1}
    ],evaluate:c=>{const admitted=c.correct>=7&&!c.failedGates.length;return{admitted,passed:admitted}},passPlan:()=>'<strong>下一步：</strong>进入B学习包。',failPlan:()=>'<strong>回补：</strong>返回失败门槛。'});
