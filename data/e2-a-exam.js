window.E2AExam=Object.freeze({version:2,module:'E2E3',track:'A',storageKey:'physics-e2e3-a-exam-v1',passTitle:'A轨当前通过',failTitle:'A轨暂未通过',reviewDays:7,durationSeconds:3600,prerequisites:[{key:'physics-e2e3-a-check-v1',label:'A检测未通过',test:v=>v?.passed===true}],questions:[
      {id:'A01', node:'E2-K01',task:'E2-K01', section:'概念条件', text:'关于电流，下列说法正确的是？', options:['电流方向一定与电子定向移动方向相同','电流必须说明所研究的具体支路','只要电路中有电源就一定有持续电流'], answer:1},
      {id:'A02', node:'E2-K03',task:'E2-K03', section:'概念条件', text:'关于电动势和路端电压，下列说法正确的是？', options:['电动势等于任何工作状态下的路端电压','电动势描述电源把其他形式能转化为电能的本领','电源有内阻时路端电压一定大于电动势'], answer:1},
      {id:'A03', node:'E2-K04',task:'E2-K04', section:'概念条件', text:'由R=U/I可以得到的正确结论是？', options:['对同一导体，电阻一定随U增大而增大','R=U/I给出某工作状态下电压与电流的比值','任何元件都满足U与I成正比'], answer:1},
      {id:'A04', node:'E2-K05',task:'E2-K05', section:'概念条件', text:'使用欧姆定律前最重要的检查是？', options:['电流数值是否为整数','元件及其工作状态是否满足欧姆关系','电路中是否只有一个电阻'], answer:1},

      {id:'A05', node:'E2-K06',task:'E2-K06', section:'电路计算', text:'两个电阻并联在6 V电源两端，其中一支路电阻为3 Ω，该支路电流为？', options:['0.5 A','2 A','18 A'], answer:1},
      {id:'A06', node:'E2-K07',task:'E2-K07', section:'电路计算', text:'电源电动势6 V、内阻1 Ω，外电阻5 Ω，电路电流为？', options:['1 A','1.2 A','6 A'], answer:0},
      {id:'A07', node:'E2-K06',task:'E2-K06', section:'电路计算', gate:'支路对象', text:'并联电路干路电流3 A，电阻支路电流1 A，则另一条电动机支路电流为？', options:['1 A','2 A','3 A'], answer:1},
      {id:'A08', node:'E2-K08',task:'E2-K08', section:'电路计算', text:'电源内阻不可忽略。外电路等效电阻增大时，第一步可以确定的是？', options:['总电流减小','所有支路电流都增大','电源内电压增大'], answer:0},
      {id:'A09', node:'E2-K09',task:'E2-K09', section:'电路计算', text:'一个纯电阻两端电压6 V，通过电流2 A，其电功率为？', options:['3 W','12 W','18 W'], answer:1},
      {id:'A10', node:'E2-K09',task:'E2-K09', section:'电路计算', gate:'非纯电阻功率', text:'电动机端电压6 V、支路电流2 A、线圈电阻1 Ω，其机械功率为？', options:['4 W','8 W','12 W'], answer:1},

      {id:'A11', node:'E2-K07',task:'E2-K07', section:'图像故障', text:'电源U-I图像中，纵轴截距和斜率绝对值分别表示？', options:['电动势和内阻','内阻和电动势','输出功率和效率'], answer:0},
      {id:'A12', node:'E2-K10',task:'E2-K10', section:'图像故障', text:'某支路灯泡不亮，电压表跨接灯泡两端示数接近电源电压，最可能的是？', options:['灯泡处断路','灯泡处短路','电源一定损坏'], answer:0},
      {id:'A13', node:'E2-K04',task:'E2-K04', section:'图像故障', text:'比较两个元件的U-I图像时，首先必须确认？', options:['图线颜色','坐标轴分别表示哪个物理量及单位','图线是否经过原点'], answer:1},

      {id:'A14', node:'E3-K01',task:'E3-K01', section:'实验操作', gate:'仪表安全', text:'用电流表测量前，不能确定电流大小时应如何选择量程？', options:['先用较大量程试测','直接用最小量程提高精度','任意量程都不会损坏仪表'], answer:0},
      {id:'A15', node:'E3-K02',task:'E3-K02', section:'实验操作', text:'使用多用电表欧姆挡，更换倍率后必须？', options:['机械调零','重新欧姆调零','立即接入带电电路'], answer:1},
      {id:'A16', node:'E3-K03',task:'E3-K03', section:'实验操作', text:'伏安法测电阻选择内接或外接方案，主要是为了？', options:['消除所有随机误差','减小电表内阻引起的系统误差','让电流一定最大'], answer:1},

      {id:'A17', node:'E3-K05',task:'E3-K05', section:'实验表达', text:'描绘元件伏安特性时，合理的数据处理方式是？', options:['只记录一个工作点','在安全范围内取多组数据并作图','把所有偏离直线的数据删除'], answer:1},
      {id:'A18', node:'E3-K06',task:'E3-K06', section:'实验表达', text:'用U-I图测电源电动势和内阻，规范描述斜率时应包括？', options:['只写斜率数值','符号、单位及其物理意义','只写图线倾斜方向'], answer:1},
      {id:'A19', node:'E3-K07',task:'E3-K07', section:'实验表达', text:'研究传感器特性时，判断“灵敏度”首先要明确？', options:['输入量与输出量及图像斜率含义','导线颜色','电源是否放在左侧'], answer:0},
      {id:'A20', node:'E3-K06',task:'E3-K06', section:'实验表达', text:'实验图线出现明显异常点时，正确处理是？', options:['不加说明直接删除','检查原始记录和操作，说明依据后再决定是否剔除','为使图线好看而修改数据'], answer:1}
    ],evaluate:c=>{const conceptRate=c.sections['概念条件'].correct/c.sections['概念条件'].total,circuitRate=c.sections['电路计算'].correct/c.sections['电路计算'].total,experimentRate=(c.sections['实验操作'].correct+c.sections['实验表达'].correct)/(c.sections['实验操作'].total+c.sections['实验表达'].total);return{conceptRate,circuitRate,experimentRate,passed:c.eligible&&c.score>=80&&conceptRate>=.6&&circuitRate>=.6&&experimentRate>=.6&&!c.failedGates.length}},passPlan:d=>`<strong>通过：</strong>${d.reviewDate}复测。`,failPlan:()=>'<strong>回补：</strong>返回薄弱节点。'});
