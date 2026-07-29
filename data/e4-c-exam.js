window.E4CExam=Object.freeze({module:'E4',track:'C',storageKey:'physics-e4-c-exam-v1',durationSeconds:5400,passTitle:'C轨当前通过',failTitle:'C轨暂未通过',prerequisites:[{key:'physics-e4-c-check-v1',test:v=>v?.passed===true}],objective:[
{id:'E4CE01',section:'模型推导',task:'C01',points:5,text:'长直电流磁场模型外推到短导线近端的主要问题是？',options:['边缘效应和几何假设失效','单位改变','电流消失'],answer:0},
{id:'E4CE02',section:'模型推导',task:'C02',points:5,text:'微元叠加中对称性用于？',options:['判断分量抵消与保留','省略方向','保证总场为零'],answer:0},
{id:'E4CE03',section:'模型推导',task:'C03',points:5,text:'匀强场中闭合线框合力分析应基于？',options:['各边电流元受力矢量叠加','周长代BIL','只看一边'],answer:0},
{id:'E4CE04',section:'参数稳定',task:'C04',points:5,text:'单位长度受力关系使用前必须检查？',options:['长直平行和距离尺度条件','颜色','电势'],answer:0},
{id:'E4CE05',section:'参数稳定',task:'C05',points:5,text:'平衡点稳定性的证据是？',options:['微小扰动后出现回复趋势','合力为零','速度为零'],answer:0},
{id:'E4CE06',section:'参数稳定',task:'C06',points:5,text:'参数化能量模型必须说明？',options:['系统边界、输入输出和损耗','只有效率','只有安培力'],answer:0},
{id:'E4CE07',section:'测量探究',task:'C07',points:5,text:'霍尔关系推导的稳态条件是？',options:['横向电场力与磁力平衡','电流为零','无载流子'],answer:0},
{id:'E4CE08',section:'测量探究',task:'C07',points:5,text:'由定标测未知B时应限制在？',options:['已验证的模型和量程范围','任意范围','单一数据点'],answer:0},
{id:'E4CE09',section:'测量探究',task:'C08',points:5,text:'不确定度的作用之一是？',options:['描述测量结果可信范围','保证假设正确','删除误差'],answer:0},
{id:'E4CE10',section:'测量探究',task:'C08',points:5,text:'可反驳探究结论应？',options:['允许数据否定并说明局限','预设必然正确','不保存原始数据'],answer:0}],written:[
{id:'E4CW01',section:'模型推导',max:10,title:'连续电流分布场模型',prompt:'选择圆形或对称电流分布，定义微元并建立某轴线上B的叠加结构，说明对称性和失效边界。',rubric:'对象微元2；方向对称2；叠加结构3；假设2；边界1'},
{id:'E4CW02',section:'模型推导',max:10,title:'平行导线单位长度受力推导',prompt:'连接长直电流场与安培力，推导参数依赖，完成量纲、极限和适用条件检查。',rubric:'场模型2；受力关系2；推导2；量纲极限2；边界2'},
{id:'E4CW03',section:'参数稳定',max:10,title:'磁力平衡稳定性',prompt:'构造一个磁力平衡模型，求平衡条件，并用微小扰动讨论稳定性。',rubric:'对象与力2；平衡2；扰动2；趋势2；边界2'},
{id:'E4CW04',section:'测量探究',max:10,inquiry:true,title:'霍尔测量探究',prompt:'设计由霍尔信号测B或载流子参数的实验，给出假设、变量、预测、数据图像、判据和局限。',rubric:'假设1；变量2；预测2；操作图像2；判据2；局限1'},
{id:'E4CW05',section:'参数稳定',max:10,title:'电磁装置能量评价',prompt:'选择一个电动装置，建立电源、热、机械能与外界功的能量账本，评价理想化和损耗。',rubric:'系统边界2；能量账本3；参数2；损耗1；评价2'}],evaluate:c=>{const modelPassed=c.sections['模型推导'].score/c.sections['模型推导'].max>=.6,inquiryPassed=c.sections['测量探究'].score/c.sections['测量探究'].max>=.6,independentDerivation=['E4CW01','E4CW02'].some(id=>c.response.writtenState[id]==='独立完成'&&c.response.reviewed[id]&&Number(c.response.scores[id])>=6),inquiryStructure=['假设','变量','可测预测','判据','局限'].every(x=>c.response.inquiry[x]),inquiryComplete=c.response.reviewed.E4CW04&&Number(c.response.scores.E4CW04)>=6&&inquiryStructure;return{modelPassed,inquiryPassed,independentDerivation,inquiryStructure,inquiryComplete,passed:c.eligible&&c.reviewComplete&&c.total>=70&&modelPassed&&inquiryPassed&&independentDerivation&&inquiryComplete,details:`<p>模型推导：${modelPassed?'通过':'未通过'}；独立推导：${independentDerivation?'满足':'未满足'}</p><p>探究结构：${inquiryComplete?'满足':'未满足'}</p>`}},passPlan:()=>'<strong>通过路线：</strong>7天后完成新情境推导复测；C轨不替代普通高考主线。',failPlan:d=>!d.reviewComplete?'<strong>下一步：</strong>保存纸面原稿，请家长或教师审核。':'<strong>修复路线：</strong>返回未达标C任务。'});
