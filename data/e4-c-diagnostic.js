window.E4CDiagnostic=Object.freeze({version:1,track:'C',storageKey:'physics-e4-c-diagnostic-v1',passCorrect:8,questionLabel:'C准入',passTitle:'C轨正式准入',failTitle:'准入条件未齐',initialPlan:'提交后检查B轨证据、数学工具、模型和探究准备。',prerequisites:[{key:'physics-e4-b-exam-v1',label:'E4 B轨拓展卷尚未通过',test:(v)=>v?.passed===true}],passPlan:'<strong>下一步：</strong>进入C轨强基学习包；C轨不替代普通高考主线。',failPlan:(d)=>`<strong>准入前回补：</strong>${d.weak.join('、')||d.failedGates.join('、')}。`,questions:[
{id:'E4CD01',node:'E0-MATH',gate:'函数与极限',text:'参数化表达式完成后，合理的极限检查是？',options:['令某参数趋于已知简单情形检验结果','把所有量都取零','替代原推导'],answer:0},
{id:'E4CD02',node:'E4-K05',gate:'微元与连续近似',text:'把连续电流分布分成电流元前必须说明？',options:['尺度、分布和近似适用范围','电流不再由电荷形成','每段电流为零'],answer:0},
{id:'E4CD03',node:'E4-K05',text:'用对称性简化场模型时应先判断？',options:['哪些分量成对抵消、哪些保留','总场必为零','只保留最大场源'],answer:0},
{id:'E4CD04',node:'E4-K07',text:'由电流元受力推导整体导线受力时需要？',options:['明确B分布并矢量叠加各微元力','只加长度','忽略方向'],answer:0},
{id:'E4CD05',node:'E4-K08',text:'单位长度平行导线受力模型的适用性依赖？',options:['长直导线、距离和边缘效应等条件','导线颜色','电势为零'],answer:0},
{id:'E4CD06',node:'E4-K09',text:'讨论平衡点稳定性应？',options:['施加微小扰动并判断回复或远离趋势','只令合力为零','只看初速度'],answer:0},
{id:'E4CD07',node:'E4-K10',text:'建立装置能量模型首先应？',options:['定义系统边界和能量交换','只算安培力功','假设无热损耗'],answer:0},
{id:'E4CD08',node:'E4-K12',text:'霍尔关系推导需要明确？',options:['载流子密度、电性、漂移速度和几何','只有总电阻','只有电压'],answer:0},
{id:'E4CD09',node:'E4-K13',gate:'实验论证',text:'可反驳的磁学实验假设必须导出？',options:['可测且可能与数据冲突的预测','必然正确结论','无需变量的描述'],answer:0},
{id:'E4CD10',node:'C-GOAL',gate:'强基目标',text:'选择C轨前应确认？',options:['目标确含强基、竞赛衔接或大学先修，并不挤占A/B主线','C轨是普通高考必做','只为增加题量'],answer:0}]});
