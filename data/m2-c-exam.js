window.M2CExam=Object.freeze({version:1,module:'M2',track:'C',storageKey:'physics-mechanics-m2-c-exam-v1',durationSeconds:3600,reviewDays:7,passTitle:'C轨通过',failTitle:'C轨未通过',prerequisites:[{key:'physics-mechanics-m2-c-models-v1',label:'前置证据未通过',test:v=>new Set(v?.done||[]).size===6}],questions:[
{"id":"M2CE01","section":"一般变速","task":"CK01","node":"M2-CK01","text":"无人车x=5+3t+0.5t²（m），t=4 s瞬时速度为？","options":["7 m/s","5 m/s","11 m/s"],"answer":0},
{"id":"M2CE02","section":"一般变速","task":"CK02","node":"M2-CK02","text":"x=2t³-t²（m），t=1 s时a为？","options":["10 m/s²","4 m/s²","2 m/s²"],"answer":0,"gate":"导数意义"},
{"id":"M2CE03","section":"一般变速","task":"CK03","node":"M2-CK03","text":"0—2 s速度v=3t（m/s），位移为？","options":["6 m","3 m","12 m"],"answer":0,"gate":"积分有向累积"},
{"id":"M2CE04","section":"一般变速","task":"CK04","node":"M2-CK04","text":"a=4-2t（m/s²），v(0)=1 m/s，则v(3 s)=？","options":["4 m/s","7 m/s","1 m/s"],"answer":0},
{"id":"M2CE05","section":"一般变速","task":"CK05","node":"M2-CK05","text":"v=t²-1（m/s），0—1 s的位移为？","options":["-2/3 m","2/3 m","-1/3 m"],"answer":0},
{"id":"M2CE06","section":"一般变速","task":"CK06","node":"M2-CK06","text":"0、1、2 s测得速度1、3、5 m/s，用梯形法估算0—2 s位移为？","options":["6 m","5 m","8 m"],"answer":0,"novel":true},
{"id":"M2CE07","section":"一般变速","task":"CK07","node":"M2-CK07","text":"相对距离d=t³-3t²+5（m），t∈[0,3]，内部极小值出现于？","options":["t=2 s","t=1 s","t=3 s"],"answer":0,"novel":true},
{"id":"M2CE08","section":"一般变速","task":"CK08","node":"M2-CK08","text":"仅知道小车0—2 s平均速度为4 m/s，能否确定t=1 s瞬时速度？","options":["不能，需位置函数或更局部数据","能，必为4 m/s","能，必为2 m/s"],"answer":0,"gate":"工具适用边界","novel":true}
],evaluate:c=>{const gatesPassed=!c.failedGates.length&&!c.guessedGates.length,independent=Object.values(c.response.states).some(v=>v==='独立完成');return{gatesPassed,independent,passed:c.eligible&&c.score>=70&&gatesPassed&&independent}},passPlan:()=>'<strong>通过：</strong>进入C轨独立复测；C轨不替代A轨。',failPlan:()=>'<strong>修复：</strong>返回失败工具节点。'});
