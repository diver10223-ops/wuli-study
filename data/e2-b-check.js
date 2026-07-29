window.E2BCheck=Object.freeze({version:2,module:'E2E3',track:'B',storageKey:'physics-e2e3-b-check-v1',passTitle:'B轨当前通过',failTitle:'B轨暂未通过',reviewDays:1,durationSeconds:0,prerequisites:[{key:'physics-e2e3-b-models-v1',label:'B模型未完成',test:v=>new Set(v?.done||[]).size===6}],questions:[
      {id:'BC01',section:'综合检测',task:'B01',node:'E2-K08',text:'动态电路中路端电压增大，为什么不能直接断定每条支路电流都增大？',options:['因为局部支路的电阻和分流关系也可能变化','因为欧姆定律永远失效','因为总电流一定增大'],answer:0},
      {id:'BC02',section:'综合检测',task:'B02',node:'E2-K04/K05',text:'非线性元件伏安曲线与外电路约束线交点的含义是？',options:['只满足元件自身特性','只满足电源约束','同时满足元件特性和外电路约束'],answer:2},
      {id:'BC03',section:'综合检测',task:'B03',node:'E2-K09',text:'分析电动机效率随负载变化时，最完整的做法是？',options:['只计算I²r','区分输入、热损耗和有效输出，并确认各量属于电动机支路','只比较端电压'],answer:1},
      {id:'BC04',section:'综合检测',task:'B04',node:'E2-K10',text:'用一次电压测量判断“灯泡一定断路”，还需要满足什么条件？',options:['测量结果能排除其他合理故障','电压表示数较大即可','灯泡外观完好'],answer:0},
      {id:'BC05',section:'综合检测',task:'B05',node:'E3-K03/K06',text:'比较两种测量方案，以下哪组评价维度最完整？',options:['图是否好看、器材是否少','原理、可测量量、仪表影响、误差方向、数据处理和器材限制','只比较最终数值'],answer:1},
      {id:'BC06',section:'综合检测',task:'B06',node:'E3-K07',text:'传感器在高输入端趋于饱和，说明？',options:['输入继续增大时输出变化很小，灵敏度下降','量程和测量能力一定同时增加','可以忽略工作区间'],answer:0}
    ],evaluate:c=>({passed:c.eligible&&c.correct>=5}),passPlan:d=>'<strong>下一步：</strong>进入下一阶段或复测。',failPlan:()=>'<strong>回补：</strong>返回薄弱任务。'});
