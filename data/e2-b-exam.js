window.E2BExam=Object.freeze({version:2,module:'E2E3',track:'B',storageKey:'physics-e2e3-b-exam-v1',passTitle:'B轨当前通过',failTitle:'B轨暂未通过',reviewDays:3,durationSeconds:4500,prerequisites:[{key:'physics-e2e3-b-check-v1',label:'B检测未通过',test:v=>v?.passed===true}],questions:[
      {id:'BE01',section:'动态电路',task:'B01',node:'E2-K08',novel:true,text:'含内阻电源给“定值电阻与光敏电阻并联部分”供电。光照增强使光敏电阻减小。分析时正确的第一步是？',options:['先判断并联部分及外电路等效电阻变化','直接断定定值电阻电流增大','先假设路端电压不变'],answer:0},
      {id:'BE02',section:'动态电路',task:'B01',node:'E2-K08',text:'外电路等效电阻减小时，电源内阻不可忽略，则？',options:['总电流增大、内电压增大、路端电压减小','总电流减小、路端电压增大','总电流不变'],answer:0},
      {id:'BE03',section:'动态电路',task:'B01',node:'E2-K06/K08',text:'开关闭合导致一条新支路并入。判断原支路电流变化时还必须考虑？',options:['路端电压可能随总电流改变','原支路电阻必定改变','电源电动势必定改变'],answer:0},
      {id:'BE04',section:'动态电路',task:'B02',node:'E2-K04',text:'非线性元件工作点改变后，能否用原工作点U/I代替新工作点电阻？',options:['总能','不能，应读取新工作点的U和I','只要电流增大就能'],answer:1},
      {id:'BE05',section:'动态电路',task:'B02',node:'E2-K04/K05',novel:true,text:'元件曲线与外电路约束线没有交点，最合理的解释是？',options:['所设工作状态不能同时满足两者约束','元件一定损坏','任取一点即可'],answer:0},

      {id:'BE06',section:'能量效率',task:'B03',node:'E2-K09',text:'电动机机械功率的正确能量账本是？',options:['P机=UI-I²r（忽略其他损耗）','P机=I²r','P机=UI+I²r'],answer:0},
      {id:'BE07',section:'能量效率',task:'B03',node:'E2-K09',text:'比较两个效率数值前必须首先确认？',options:['分子分母对应的输入和有效输出对象相同','数值更大的必定正确','电流相同即可'],answer:0},
      {id:'BE08',section:'能量效率',task:'B03',node:'E2-K07/K09',text:'电源输出功率不等于电源总功率，差值主要对应？',options:['电源内阻热功率','外电阻功率','电动势'],answer:0},
      {id:'BE09',section:'能量效率',task:'B03',node:'E2-K09',novel:true,text:'负载变化后电动机输入功率增加，能否断定机械功率增加？',options:['能','不能，还要比较线圈热损耗及其他损耗变化','只看电压即可'],answer:1},

      {id:'BE10',section:'图像迁移',task:'B02',node:'E2-K04',text:'读取非线性元件工作电阻时，应使用？',options:['该工作点U/I','曲线任意两点连线斜率且不看坐标轴','纵截距'],answer:0},
      {id:'BE11',section:'图像迁移',task:'B05',node:'E3-K06',text:'比较两种U-I图像方案时，斜率含义不同的主要原因可能是？',options:['横纵轴选择和方程形式不同','图线颜色不同','数据点数量不同就一定改变物理意义'],answer:0},
      {id:'BE12',section:'图像迁移',task:'B06',node:'E3-K07',text:'传感器定标曲线高端变平表示？',options:['该区间输出对输入变化不敏感','灵敏度升高','量程无限扩大'],answer:0},

      {id:'BE13',section:'实验设计',task:'B05',node:'E3-K03',text:'比较伏安法内外接方案时，核心依据是？',options:['电表内阻相对待测电阻的影响','导线颜色','电源放置方向'],answer:0},
      {id:'BE14',section:'实验设计',task:'B05',node:'E3-K06',novel:true,text:'某测E、r方案数据点集中在很窄电流区间，主要问题是？',options:['斜率估计对读数误差更敏感','纵截距必定为零','数据越集中越准确'],answer:0},
      {id:'BE15',section:'实验设计',task:'B05',node:'E3-K05',text:'异常点处理的合理步骤是？',options:['核对记录与操作、必要时重复测量、说明处理依据','直接删除','改成靠近拟合线的数值'],answer:0},
      {id:'BE16',section:'实验设计',task:'B06',node:'E3-K07',text:'选择传感器时，除灵敏度外还应重点考虑？',options:['工作区间、重复性和响应特征','外壳颜色','导线越长越好'],answer:0},
      {id:'BE17',section:'实验设计',task:'B04',node:'E2-K10',text:'设计故障排查方案时，新增测量最有价值的标准是？',options:['能区分现存的竞争性假设','读数尽可能大','操作步骤尽可能多'],answer:0},

      {id:'BE18',section:'开放表达',task:'B04',node:'E2-K10',text:'“元件一定断路”属于可靠结论的必要条件是？',options:['证据排除了其他合理解释','观察到一次异常','学生很有信心'],answer:0},
      {id:'BE19',section:'开放表达',task:'B06',node:'E3-K07',novel:true,text:'传感器在目标区间部分饱和，最合理的改进方向是？',options:['调整工作区间或更换适配传感器并重新定标','忽略饱和数据','把输出值按比例随意放大'],answer:0},
      {id:'BE20',section:'开放表达',task:'B05',node:'E3-K03/K06',text:'评价“方案更好”的规范表达至少包含？',options:['评价指标、适用条件、证据和局限','只写结论','只比较器材数量'],answer:0}
    ],evaluate:c=>(()=>{const migrationCorrect=['动态电路','能量效率','图像迁移'].reduce((n,s)=>n+c.sections[s].correct,0),experimentCorrect=c.sections['实验设计'].correct+c.sections['开放表达'].correct,novelIndependent=['BE02','BE05','BE09','BE13','BE17'].some(id=>c.response.states[id]==='独立完成');return{novelIndependent,passed:c.eligible&&c.score>=75&&migrationCorrect/12>=.6&&experimentCorrect/8>=.6&&novelIndependent}})(),passPlan:d=>'<strong>下一步：</strong>进入下一阶段或复测。',failPlan:()=>'<strong>回补：</strong>返回薄弱任务。'});
