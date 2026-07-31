window.M2CDiagnostic=Object.freeze({version:1,track:'C',storageKey:'physics-mechanics-m2-c-diagnostic-v1',passCorrect:6,questionLabel:'M2 C工具',passTitle:'C轨工具准入',failTitle:'先补数学工具',initialPlan:'用具体运动数据诊断变化率、导数、积分、近似和边界。',prerequisites:[{key:'physics-mechanics-m2-b-exam-v1',label:'M2 B轨正式卷未通过',test:v=>v?.passed===true}],passPlan:'<strong>下一步：</strong>进入C轨先修学习。',failPlan:d=>`<strong>回补：</strong>${d.weak.join('、')||d.failedGates.join('、')}。`,questions:[
{"id":"M2CD01","node":"M2-CK01","text":"小车的位置满足x=t²（m）。用0.1 s区间估算t=2.0 s瞬时速度，最接近？","options":["4.1 m/s","2.0 m/s","0.1 m/s"],"answer":0},
{"id":"M2CD02","node":"M2-CK02","gate":"导数意义","text":"质点x=3t²-2t（m），t=1 s时速度为？","options":["4 m/s","1 m/s","6 m/s"],"answer":0},
{"id":"M2CD03","node":"M2-CK03","gate":"积分有向累积","text":"0—2 s内v(t)=2-t（m/s），位移为？","options":["2 m","3 m","4 m"],"answer":0},
{"id":"M2CD04","node":"M2-CK04","text":"小车a(t)=2t（m/s²），v(0)=1 m/s，则v(2 s)=？","options":["5 m/s","4 m/s","3 m/s"],"answer":0},
{"id":"M2CD05","node":"M2-CK05","text":"质点v=t-1（m/s），0—2 s的位移和路程分别为？","options":["0 m，1 m","1 m，1 m","0 m，0 m"],"answer":0},
{"id":"M2CD06","node":"M2-CK06","text":"用左端点矩形估算v=t²在0—1 s的位移，步长由0.5 s减到0.25 s，通常会怎样？","options":["近似值更接近积分真值","误差必增大","结果与步长无关"],"answer":0},
{"id":"M2CD07","node":"M2-CK07","text":"v(t)=kt-t²（k>0）在t≥0何时达到最大值？","options":["t=k/2","t=k","t=2k"],"answer":0},
{"id":"M2CD08","node":"M2-CK08","gate":"工具适用边界","text":"只给出0、1、2 s三个速度测量值，要断言其间加速度处处恒定，证据是否充分？","options":["不充分，离散点不能唯一确定区间内函数","充分，三点必定确定物理规律","充分，只要单位正确"],"answer":0}
]});
