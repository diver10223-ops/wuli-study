window.M2ADiagnostic=Object.freeze({version:1,track:'A',storageKey:'physics-mechanics-m2-a-diagnostic-v1',passCorrect:6,questionLabel:'M2 A前置',passTitle:'A轨前置达标',failTitle:'先精确回补',initialPlan:'提交后按M2-K01—K08生成路线。',passPlan:'<strong>下一步：</strong>进入A轨知识学习。',failPlan:d=>`<strong>回补：</strong>${d.weak.join('、')||d.failedGates.join('、')}。`,questions:[
{id:'M2AD01',node:'M2-K01',gate:'速度加速度辨析',text:'加速度描述的是？',options:['速度变化的快慢','位置变化量','路程大小'],answer:0},
{id:'M2AD02',node:'M2-K02',gate:'正方向与符号',text:'规定向右为正，物体向左运动时速度应？',options:['为负','为正','一定为零'],answer:0},
{id:'M2AD03',node:'M2-K03',text:'匀变速直线运动的判据是？',options:['加速度恒定','速度恒定','每秒位移相同'],answer:0},
{id:'M2AD04',node:'M2-K04',text:'匀变速运动中不含时间的速度—位移关系是？',options:['v²-v0²=2aΔx','v=v0+at','Δx=v0t+at²/2'],answer:0},
{id:'M2AD05',node:'M2-K05',gate:'图像斜率面积',text:'v-t图像与时间轴围成的有向面积表示？',options:['位移','加速度','平均速率'],answer:0},
{id:'M2AD06',node:'M2-K06',text:'汽车刹车到停下后继续代入匀减速公式会导致？',options:['虚假的倒车结果','正确反向运动','加速度消失前速度增大'],answer:0},
{id:'M2AD07',node:'M2-K07',text:'忽略空气阻力的自由落体属于？',options:['初速度为零的匀加速运动','匀速运动','任意变速运动'],answer:0},
{id:'M2AD08',node:'M2-K08',text:'多阶段运动建模首先应？',options:['按条件变化时刻分段','全程只列一个方程','只求平均速度'],answer:0}]});
