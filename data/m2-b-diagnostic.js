window.M2BDiagnostic=Object.freeze({version:1,track:'B',storageKey:'physics-mechanics-m2-b-diagnostic-v1',passCorrect:6,questionLabel:'M2 B准入',passTitle:'B轨准入达标',failTitle:'先回补迁移前置',initialPlan:'诊断追及、临界、图像与实验评价。',prerequisites:[{key:'physics-mechanics-m2-a-exam-v1',label:'M2 A轨正式卷未通过',test:v=>v?.passed===true}],passPlan:'<strong>下一步：</strong>进入B轨迁移学习。',failPlan:d=>`<strong>回补：</strong>${d.weak.join('、')||d.failedGates.join('、')}。`,questions:[
{id:'M2BD01',node:'M2-BK01',gate:'位置关系',text:'直路取向东为正，t=0时甲在x=0以6 m/s匀速，乙在x=-20 m以10 m/s匀速。两车第一次相遇时刻为？',options:['5 s','2 s','10 s'],answer:0},
{id:'M2BD02',node:'M2-BK02',text:'同向行驶的前车初始在后车前30 m；0—4 s内后车与前车的v-t图有向面积分别为64 m和48 m。4 s末两车间距为？',options:['14 m','16 m','46 m'],answer:0},
{id:'M2BD03',node:'M2-BK03',gate:'分段状态',text:'前车t=0开始制动，后车在反应时间1.0 s后才以恒加速度制动。建立后车位置函数至少应在哪个时刻分段？',options:['t=1.0 s','t=0.5 s','无需分段'],answer:0},
{id:'M2BD04',node:'M2-BK04',gate:'临界条件',text:'两车同向运动的间距d(t)=t²-6t+12（m），模型有效域0≤t≤5 s。最近距离及其时刻为？',options:['3 m，t=3 s','12 m，t=0','7 m，t=5 s'],answer:0},
{id:'M2BD05',node:'M2-BK05',text:'前车初始领先20 m。0—5 s内后车v-t图面积为45 m、前车面积为30 m，则仅由这些数据能确定的结论是？',options:['5 s末间距为5 m，但不能单凭末距断言中途未相遇','5 s末间距为15 m且必已相遇','5 s末间距为35 m且必未相遇'],answer:0},
{id:'M2BD06',node:'M2-BK06',text:'相遇方程在前车制动段0≤t≤3 s得到t=2 s和t=5 s，且前车3 s后静止、不倒车。该段可保留的根是？',options:['只保留2 s','两根都保留','只保留5 s'],answer:0},
{id:'M2BD07',node:'M2-BK07',text:'50 Hz纸带每5点取一计数点，三组相邻位移差为0.95、1.02、1.00 cm。关于“加速度严格不变”的结论，合理评价是？',options:['数据仅支持误差范围内近似恒加速，不能证明严格恒定','三组不完全相同，必为变加速','只要平均为0.99 cm就能严格证明'],answer:0},
{id:'M2BD08',node:'M2-BK08',text:'某模型给a(t)=2t m/s²，仅在0≤t≤3 s有效，v(0)=1 m/s。v(3 s)为？',options:['10 m/s','7 m/s','19 m/s'],answer:0}]});
