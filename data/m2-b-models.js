window.M2BModels=Object.freeze({version:1,module:'M2',track:'B',storageKey:'physics-mechanics-m2-b-models-v1',diagnosticKey:'physics-mechanics-m2-b-diagnostic-v1',completePlan:'<strong>综合模型完成：</strong>参加B轨即时检测。',items:[
{id:'BM01',node:'M2-BK01',title:'匀速追匀加速',summary:'分别列位置函数，用相遇条件求时刻并核验方向。',conditions:'统一坐标与计时。',misconception:'不应只比较速度。',example:'后车匀速追前车加速。',check:'我能写出两个位置函数'},
{id:'BM02',node:'M2-BK04',title:'最小安全距离',summary:'用相对速度为零定位最近距离，联立临界距离。',conditions:'核验两车是否已停车。',misconception:'不能默认最近时都在制动段。',example:'含反应时间的追尾临界。',check:'我会分情况找距离最小值'},
{id:'BM03',node:'M2-BK03',title:'多阶段追及',summary:'建立事件轴，逐段传递位置与速度。',conditions:'动作时刻可能不同。',misconception:'不能共用局部时间。',example:'先加速、后匀速、再制动。',check:'我会维护段间状态'},
{id:'BM04',node:'M2-BK05',title:'图像补全与反推',summary:'由斜率、面积和连续性补全未知图段。',conditions:'区分速度连续与加速度连续。',misconception:'折点不是位移突变。',example:'由总位移约束求未知斜率。',check:'我会使用面积约束'},
{id:'BM05',node:'M2-BK06',title:'多解物理筛选',summary:'按根所属阶段、时间、方向和停止条件筛选。',conditions:'列出每个公式有效区间。',misconception:'舍根必须说明物理理由。',example:'二次方程两根仅一根有效。',check:'我会写舍根依据'},
{id:'BM06',node:'M2-BK07',title:'实验与证据评价',summary:'检查采样、变量、拟合、误差和结论链。',conditions:'区分随机误差和系统影响。',misconception:'相关不等于因果。',example:'评价用手机视频测加速度。',check:'我能提出可执行改进'}]});
