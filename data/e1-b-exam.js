window.E1BExam=Object.freeze({version:2,module:'E1',track:'B',storageKey:'physics-e1-b-exam-v1',passTitle:'B轨当前通过',failTitle:'B轨暂未通过',reviewDays:3,durationSeconds:4500,prerequisites:[{key:'physics-e1-b-check-v1',label:'B轨即时检测未通过',test:v=>v?.passed===true}],questions:[
      {id:'E1BE01',section:'叠加几何',task:'B01',node:'E1-K03',text:'三个场强矢量合成前，最可靠的步骤是？',options:['统一坐标并分别画方向/分量','只比较大小','把等量矢量全部抵消'],answer:0},
      {id:'E1BE02',section:'叠加几何',task:'B01',node:'E1-K02/K03',novel:true,text:'等边三角形两个顶点放等量同号电荷，求第三顶点场强时，对称性说明？',options:['沿对称轴垂直的分量抵消，沿轴分量相加','两个场强完全抵消','合场强必沿任意边'],answer:0},
      {id:'E1BE03',section:'叠加几何',task:'B02',node:'E1-K03',text:'同号不等量点电荷的连线零场点若存在，通常应先在何处寻找？',options:['两电荷之间且靠近电荷量较小者，再核验','任意外侧','必在中点'],answer:0},
      {id:'E1BE04',section:'叠加几何',task:'B02',node:'E1-K02/K03',text:'场强为零的点，其电势？',options:['不一定为零','一定为零','一定为正'],answer:0},
      {id:'E1BE05',section:'叠加几何',task:'B02',node:'E1-K02',text:'带电小球平衡问题只列库仑力大小相等为何不够？',options:['还需检查各力方向和其他受力','还需电势为零','质量必须相等'],answer:0},

      {id:'E1BE06',section:'图像迁移',task:'B03',node:'E1-K04/K05',novel:true,text:'φ-x图像在x增大方向持续下降，电场沿x方向的分量通常指向？',options:['+x方向','-x方向','无法由任何图像判断'],answer:0},
      {id:'E1BE07',section:'图像迁移',task:'B03',node:'E1-K04/K05',text:'φ-x图像某处更陡，定性表示？',options:['该处沿x方向场强分量绝对值更大','电势能一定更大','场强一定为零'],answer:0},
      {id:'E1BE08',section:'图像迁移',task:'B03',node:'E1-K04',text:'粒子轨迹是否与电场线重合，取决于？',options:['初始速度、受力及其他条件，不能只看电场线','永远重合','只取决于电荷量大小'],answer:0},

      {id:'E1BE09',section:'能量粒子',task:'B04',node:'E1-K06',text:'外力与电场力都做功时，动能变化应由？',options:['所有力总功决定','只由电场力功决定','只由电势能决定且无需系统说明'],answer:0},
      {id:'E1BE10',section:'能量粒子',task:'B04',node:'E1-K06',text:'由末动能增大能否唯一断定电势能减小？',options:['不能，还要看外力等其他功','能','只对负电荷不能'],answer:0},
      {id:'E1BE11',section:'能量粒子',task:'B06',node:'E1-K10',text:'粒子先加速再偏转，两阶段之间最重要的连接量是？',options:['加速区末速度作为偏转区初速度','两个区域加速度相同','总时间必相等'],answer:0},
      {id:'E1BE12',section:'能量粒子',task:'B06',node:'E1-K10',novel:true,text:'“恰好不撞上极板”的临界条件通常意味着？',options:['轨迹在边界处恰好相切或恰好经过限定点，需结合几何核验','偏转为零','电场力为零'],answer:0},
      {id:'E1BE13',section:'能量粒子',task:'B06',node:'E1-K10',text:'粒子进入第二电场区域后，应？',options:['重新定义该段初态和受力','沿用第一段加速度','忽略区域边界'],answer:0},

      {id:'E1BE14',section:'电容动态',task:'B05',node:'E1-K09',text:'始终接理想电源的电容器缓慢拉开极板，首先保持？',options:['U','Q','C'],answer:0},
      {id:'E1BE15',section:'电容动态',task:'B05',node:'E1-K09',text:'断电电容器缓慢拉开极板，忽略漏电，首先保持？',options:['Q','U','C'],answer:0},
      {id:'E1BE16',section:'电容动态',task:'B05',node:'E1-K08/K09',novel:true,text:'讨论拉开极板时场能变化，为什么必须区分接电源和断电源？',options:['电源是否交换能量且保持量不同','两种情况C变化方向不同','只有接电源时存在电场'],answer:0},
      {id:'E1BE17',section:'电容动态',task:'B05',node:'E1-K09',text:'电容器动态中不能同时默认Q、U都不变，是因为？',options:['两者由连接状态和Q=CU共同约束','二者单位相同','C永远为零'],answer:0},

      {id:'E1BE18',section:'探究表达',task:'B07',node:'E1-K11',novel:true,text:'评价静电除尘方案是否有效，最有力的证据是？',options:['在控制其他条件时比较装置开启前后的颗粒去除数据','只描述装置外观','引用“异种电荷相吸”即可'],answer:0},
      {id:'E1BE19',section:'探究表达',task:'B07',node:'E1-K11',text:'静电屏蔽结论必须说明的边界之一是？',options:['导体状态、结构和所讨论场的条件','金属颜色','屏蔽任意场都绝对完美'],answer:0},
      {id:'E1BE20',section:'探究表达',task:'B07',node:'E1-K11',text:'规范方案评价至少包含？',options:['机制、证据、条件、局限和改进','名称和用途','最终结论一句话'],answer:0}
    ],evaluate:c=>{const multiPassed=c.sections['能量粒子'].correct/c.sections['能量粒子'].total>=.6,capacitorPassed=c.sections['电容动态'].correct/c.sections['电容动态'].total>=.6,novelIndependent=['E1BE02','E1BE06','E1BE12','E1BE16','E1BE18'].some(id=>c.response.states[id]==='独立完成');return{multiPassed,capacitorPassed,novelIndependent,passed:c.eligible&&c.score>=75&&multiPassed&&capacitorPassed&&novelIndependent}},passPlan:d=>'<strong>下一步：</strong>按日期完成B复测。',failPlan:()=>'<strong>回补：</strong>返回薄弱B任务。'});
