window.M2BCheck=Object.freeze({version:1,module:'M2',track:'B',storageKey:'physics-mechanics-m2-b-check-v1',passTitle:'可以进入B正式卷',failTitle:'先回补B轨节点',reviewDays:1,prerequisites:[{key:'physics-mechanics-m2-b-learning-v1',label:'8项迁移学习未完成',test:v=>new Set(v?.done||[]).size===8},{key:'physics-mechanics-m2-b-models-v1',label:'6个综合模型未完成',test:v=>new Set(v?.done||[]).size===6}],questions:[
{"id":"M2BC01","section":"综合迁移","task":"BK01","node":"M2-BK01","text":"甲从x=0以4 m/s匀速，乙从x=10 m同时以2 m/s同向匀速。两者相遇时刻？","options":["5 s","2.5 s","不存在"],"answer":0},
{"id":"M2BC02","section":"综合迁移","task":"BK02","node":"M2-BK02","text":"后车速度20 m/s，前车速度15 m/s，初距30 m；两车速度不变，追上需？","options":["6 s","1.5 s","3 s"],"answer":0},
{"id":"M2BC03","section":"综合迁移","task":"BK03","node":"M2-BK03","text":"司机以20 m/s行驶，反应0.5 s后以5 m/s²制动。反应段位移为？","options":["10 m","20 m","2.5 m"],"answer":0,"gate":"分段状态"},
{"id":"M2BC04","section":"综合迁移","task":"BK04","node":"M2-BK04","text":"同向运动两车距离先减后增，最近时刻满足？","options":["两车速度相等","两车加速度相等","后车速度为零"],"answer":0,"gate":"临界条件"},
{"id":"M2BC05","section":"综合迁移","task":"BK05","node":"M2-BK05","text":"两车v-t曲线间0—4 s有向面积为12 m，初距15 m，后车尚未追上时末距为？","options":["3 m","12 m","27 m"],"answer":0},
{"id":"M2BC06","section":"综合迁移","task":"BK06","node":"M2-BK06","text":"相遇方程两根为2 s、8 s，但前车5 s已停车且方程只适用制动段，应保留？","options":["2 s","8 s","两根"],"answer":0},
{"id":"M2BC07","section":"综合迁移","task":"BK07","node":"M2-BK07","text":"用逐差法测匀加速小车，连续相等时间位移差应近似？","options":["相等","成1∶3∶5","逐渐减半"],"answer":0},
{"id":"M2BC08","section":"综合迁移","task":"BK08","node":"M2-BK08","text":"实验拟合v-t直线斜率为-2.0 m/s²，它表示？","options":["加速度为-2.0 m/s²","位移为-2.0 m","速度为-2.0 m/s"],"answer":0,"novel":true}
],evaluate:c=>{const gatesPassed=!c.failedGates.length&&!c.guessedGates.length;return{gatesPassed,passed:c.eligible&&c.score>=75&&gatesPassed}},passPlan:()=>'<strong>通过：</strong>进入B轨正式卷。',failPlan:()=>'<strong>回补：</strong>重建对应位置函数或实验判断。'});
