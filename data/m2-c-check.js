window.M2CCheck=Object.freeze({version:1,module:'M2',track:'C',storageKey:'physics-mechanics-m2-c-check-v1',durationSeconds:3600,reviewDays:7,passTitle:'C轨通过',failTitle:'C轨未通过',prerequisites:[{key:'physics-mechanics-m2-c-models-v1',label:'前置证据未通过',test:v=>new Set(v?.done||[]).size===6}],questions:[
{"id":"M2CC01","section":"一般变速","task":"CK01","node":"M2-CK01","text":"x=2t²+1（m），用[t,t+Δt]平均速度取Δt→0，t=1 s的极限为？","options":["4 m/s","2 m/s","1 m/s"],"answer":0},
{"id":"M2CC02","section":"一般变速","task":"CK02","node":"M2-CK02","text":"质点x=t³-6t（m），t=2 s时加速度为？","options":["12 m/s²","6 m/s²","0"],"answer":0,"gate":"导数意义"},
{"id":"M2CC03","section":"一般变速","task":"CK03","node":"M2-CK03","text":"v=4-2t（m/s）在0—3 s的位移为？","options":["3 m","5 m","7 m"],"answer":0,"gate":"积分有向累积"},
{"id":"M2CC04","section":"一般变速","task":"CK04","node":"M2-CK04","text":"a=3t²（m/s²），v(0)=2 m/s，则v(2 s)=？","options":["10 m/s","8 m/s","14 m/s"],"answer":0},
{"id":"M2CC05","section":"一般变速","task":"CK05","node":"M2-CK05","text":"v=2t-2（m/s），0—2 s路程为？","options":["2 m","0 m","4 m"],"answer":0},
{"id":"M2CC06","section":"一般变速","task":"CK06","node":"M2-CK06","text":"速度表每1 s采样一次。用梯形法算相邻两点v=2、4 m/s间位移近似值为？","options":["3 m","2 m","4 m"],"answer":0,"novel":true},
{"id":"M2CC07","section":"一般变速","task":"CK07","node":"M2-CK07","text":"距离d=t²-4t+7（m），t∈[0,5]，最小距离为？","options":["3 m","7 m","2 m"],"answer":0,"novel":true},
{"id":"M2CC08","section":"一般变速","task":"CK08","node":"M2-CK08","text":"碰撞时v(t)发生跳变，关于碰撞时刻加速度的通常导数表达，正确的是？","options":["普通有限导数不存在，需分段研究","必为0","等于碰撞前后速度平均值"],"answer":0,"gate":"工具适用边界","novel":true}
],evaluate:c=>{const gatesPassed=!c.failedGates.length&&!c.guessedGates.length,independent=Object.values(c.response.states).some(v=>v==='独立完成');return{gatesPassed,independent,passed:c.eligible&&c.score>=75&&gatesPassed}},passPlan:()=>'<strong>通过：</strong>进入C轨正式卷；C轨不替代A轨。',failPlan:()=>'<strong>修复：</strong>返回失败工具节点。'});
