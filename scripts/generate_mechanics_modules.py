#!/usr/bin/env python3
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
MODULES={
'M1':('运动的描述',{'A':['质点与参考系','时间与时刻','位置位移与路程','平均速度与瞬时速度','加速度','测量速度实验'],'B':['相对运动','多参考系转换','关联速度','多对象位置图像','数字化测量方案','数据误差评价'],'C':['坐标变换','速度矢量合成','瞬时变化率','参数运动','微元描述','参考系边界']}),
'M3':('相互作用与受力分析',{'A':['重力','弹力与胡克定律','静摩擦与滑动摩擦','力的合成分解','牛顿第三定律','受力分析'],'B':['多接触面摩擦','动态平衡','摩擦临界','整体法与隔离法','绳杆弹簧组合','实验方案评价'],'C':['非惯性系初步','连续分布力','复杂约束','矢量几何进阶','参数平衡','模型边界']}),
'M4':('牛顿运动定律',{'A':['牛顿第一定律与惯性','牛顿第二定律','单位制','已知力求运动','已知运动求力','超重失重与实验'],'B':['连接体','临界分离','临界滑动','传送带','板块模型','多过程动力学'],'C':['非惯性参考系','惯性力','变质量初步','阻力模型','微分方程形式','数值动力学']}),
'M5':('曲线运动与圆周运动',{'A':['曲线运动条件','运动合成分解','平抛运动','圆周运动量','向心加速度与向心力','平抛圆周实验'],'B':['斜面平抛','平抛临界','竖直圆周临界','绳杆轨道约束','关联运动','圆周与能量综合'],'C':['斜抛参数方程','轨迹包络最值','极坐标描述','非匀速圆周','曲率与法向加速度','旋转系初步']}),
'M6':('万有引力与宇宙航行',{'A':['开普勒定律','万有引力定律','重力与万有引力','天体质量密度','圆轨道卫星','宇宙速度与同步卫星'],'B':['双星模型','多星简化','变轨定性','椭圆轨道定性','临界发射','航天信息题'],'C':['引力势能','椭圆轨道定量','双体问题','有效势初步','轨道参数','数值轨道模拟']}),
'M7':('功、能量与机械能',{'A':['功与功的正负','功率','动能定理','势能','机械能守恒','功能关系与实验'],'B':['变力功图像','机车启动','传送带能量','板块耗散','圆周能量临界','多过程功能关系'],'C':['功的积分','势能曲线','稳定平衡','有效势能','参数能量模型','数值能量检验']}),
'M8':('动量、振动与机械波',{'A':['冲量与动量定理','动量守恒','碰撞与反冲','简谐运动与单摆','机械波图像波速','干涉衍射多普勒'],'B':['多体碰撞','动量能量联合','碰撞后振动','振动参数变化','波形与振动图转换','波的多解与实验'],'C':['质心与质心系','二维碰撞','振动微分方程','阻尼驱动与相位','驻波与相位差','波动方程初步']})}
TRACK_INFO={'A':('基础核心',80),'B':('迁移拔高',75),'C':('强基先修',70)}
STAGES=['diagnostic','learning','models','check','exam','retest']

def ident(mid,tr,st): return f'{mid}{tr}{st.title().replace("-","")}'
def data(mid,tr,st,topics):
 obj=ident(mid,tr,st); key=f'physics-mechanics-{mid.lower()}-{tr.lower()}-{st}-v1'; pre=f'physics-mechanics-{mid.lower()}-{tr.lower()}-'
 if st=='diagnostic':
  prereq="prerequisites:[]," if tr=='A' else f"prerequisites:[{{key:'physics-mechanics-{mid.lower()}-{'a' if tr=='B' else 'b'}-exam-v1',label:'前一轨正式卷未通过',test:v=>v?.passed===true}}],"
  qs=','.join(f"{{id:'{mid}{tr}D{i:02d}',node:'{mid}-{tr}K{i:02d}'{",gate:'核心边界'" if i==1 else ''},text:'学习{t}前最重要的是？',options:['明确对象、条件与物理意义','只记结论','忽略单位与方向'],answer:0}}" for i,t in enumerate(topics,1))
  return f"window.{obj}=Object.freeze({{version:1,module:'{mid}',track:'{tr}',storageKey:'{key}',passCorrect:5,{prereq}passTitle:'{tr}轨诊断通过',failTitle:'需回补前置',initialPlan:'提交后生成节点路线。',passPlan:'<strong>下一步：</strong>进入知识学习。',failPlan:d=>`<strong>回补：</strong>${{d.weak.join('、')||d.failedGates.join('、')}}。`,questions:[{qs}]}});"
 if st in ('learning','models'):
  items=','.join(f"{{id:'{'K' if st=='learning' else 'M'}{i:02d}',node:'{mid}-{tr}K{i:02d}',title:'{t}',summary:'围绕{t}建立对象—过程—条件—规律—检验链。',conditions:'明确适用范围、方向、单位和阶段。',misconception:'不能用孤立口诀替代条件判断。',example:'完成一个正例、一个反例和一道迁移任务。',check:'我能解释条件并独立建模'}}" for i,t in enumerate(topics,1))
  return f"window.{obj}=Object.freeze({{version:1,module:'{mid}',track:'{tr}',storageKey:'{key}',diagnosticKey:'{pre}diagnostic-v1',completePlan:'<strong>完成：</strong>进入下一阶段。',items:[{items}]}});"
 count=3 if st=='retest' else 6
 qs=','.join(f"{{id:'{mid}{tr}{st[0].upper()}{i:02d}',section:'{topics[(i-1)%len(topics)]}',task:'K{i:02d}',node:'{mid}-{tr}K{i:02d}'{",gate:'核心边界'" if i==1 else ''}{',novel:true' if st in ('exam','retest') and i>count-3 else ''},text:'处理{topics[(i-1)%len(topics)]}任务应优先？',options:['明确条件并完成物理检验','直接套最长公式','忽略方向与单位'],answer:0}}" for i in range(1,count+1))
 score=TRACK_INFO[tr][1]
 if st=='check': prereq=f"[{{key:'{pre}learning-v1',label:'知识未完成',test:v=>new Set(v?.done||[]).size==={len(topics)}}},{{key:'{pre}models-v1',label:'模型未完成',test:v=>new Set(v?.done||[]).size==={len(topics)}}}]"
 elif st=='exam': prereq=f"[{{key:'{pre}check-v1',label:'即时检测未通过',test:v=>v?.passed===true}}]"
 else: prereq=f"[{{key:'{pre}exam-v1',label:'正式卷未通过',test:v=>v?.passed===true}}]"
 threshold=100 if st=='retest' else score
 independent="&&Object.values(c.response.states).some(v=>v==='独立完成')" if st in ('exam','retest') and tr!='A' else ''
 return f"window.{obj}=Object.freeze({{version:1,module:'{mid}',track:'{tr}',storageKey:'{key}',durationSeconds:{3600 if st=='exam' else 1800},reviewDays:{14 if st=='retest' else 7},passTitle:'{tr}轨{st}通过',failTitle:'{tr}轨{st}未通过',prerequisites:{prereq},questions:[{qs}],evaluate:c=>{{const gatesPassed=!c.failedGates.length&&!c.guessedGates.length;return{{gatesPassed,passed:c.eligible&&c.score>={threshold}&&gatesPassed{independent}}}}},passPlan:()=>'<strong>通过：</strong>保留证据并进入下一阶段。',failPlan:()=>'<strong>修复：</strong>只返回失败节点。'}});"

def page(mid,title,tr,st):
 obj=ident(mid,tr,st); filename=f'{mid.lower()}-{tr.lower()}.html' if st=='learning' else f'{mid.lower()}-{tr.lower()}-{st}.html'; datafile=f'{mid.lower()}-{tr.lower()}-{st}.js'; label={'diagnostic':'诊断','learning':'知识学习','models':'模型训练','check':'即时检测','exam':'正式卷','retest':'间隔复测'}[st]
 if st in ('learning','models'): body='<section class="c notice"><div class="plan" id="route"></div></section><section class="c grid" id="cards"></section><section class="c"><strong id="count">0</strong>/6项 <progress id="bar" max="6" value="0"></progress></section>'; engine='learning.js'; api='Learning'
 else: body='<section class="c" id="eligibility"></section><section class="c"><progress id="progress" max="6" value="0"></progress><span id="progress-text"></span><div id="quiz"></div></section><section class="c actions"><button class="btn" id="submit">提交</button><button class="btn secondary" id="reset">清空重做</button></section><section class="c" id="result" hidden></section>';engine='diagnostic.js' if st=='diagnostic' else 'assessment.js';api='Diagnostic' if st=='diagnostic' else 'Assessment'
 html=f'<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{mid} {tr}轨{label}</title><link rel="stylesheet" href="assets/electric.css"></head><body><header class="hero"><div class="w"><h1>{mid} {title} · {tr}轨{label}</h1></div></header><main class="w">{body}<section class="c"><div class="plan" id="plan"></div><a href="{mid.lower()}.html">返回模块入口</a> · <a href="{mid.lower()}-progress.html">模块进度</a></section></main><script src="assets/storage.js"></script><script src="assets/{engine}"></script><script src="data/{datafile}"></script><script>Wuli{api}.run({obj});</script></body></html>'
 (ROOT/filename).write_text(html)

def module_pages(mid,title,tracks):
 cards=[]
 for tr in 'ABC':
  label,_=TRACK_INFO[tr];links=' · '.join([f'<a href="{mid.lower()}-{tr.lower()}.html">学习</a>',f'<a href="{mid.lower()}-{tr.lower()}-models.html">模型</a>',f'<a href="{mid.lower()}-{tr.lower()}-check.html">检测</a>',f'<a href="{mid.lower()}-{tr.lower()}-exam.html">正式卷</a>',f'<a href="{mid.lower()}-{tr.lower()}-retest.html">复测</a>'])
  cards.append(f'<article class="track track-{tr.lower()}"><span>{tr}轨 · 六阶段</span><h2>{label}</h2><p>{"、".join(tracks[tr])}</p><a class="btn-link" href="{mid.lower()}-{tr.lower()}-diagnostic.html">诊断</a><p>{links}</p></article>')
 (ROOT/f'{mid.lower()}.html').write_text(f'<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{mid} {title}</title><link rel="stylesheet" href="assets/electric.css"></head><body><header class="hero"><div class="w"><h1>{mid} {title}</h1><p>A/B/C三轨 · 每轨六阶段</p></div></header><main class="w"><section class="c"><a href="{mid.lower()}-progress.html">模块进度</a> · <a href="mechanics.html">力学中心</a> · <a href="docs/{mid}三轨知识矩阵与质量审计.md">规格与审计</a></section><section class="c track-grid">{"".join(cards)}</section></main></body></html>')
 (ROOT/f'{mid.lower()}-progress.html').write_text(f'<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{mid}进度</title><link rel="stylesheet" href="assets/electric.css"></head><body><header class="hero"><div class="w"><h1>{mid} {title} · 三轨进度</h1></div></header><main class="w"><section class="c"><button class="btn" id="export">导出证据</button><span id="state"></span></section><section class="c grid" id="modules"></section><section class="c"><div id="plan" class="plan"></div><a href="{mid.lower()}.html">返回模块</a></section></main><script src="assets/storage.js"></script><script src="data/mechanics-course.js"></script><script src="assets/evidence.js"></script><script src="assets/progress.js"></script><script>WuliProgress.run({{course:{{modules:WuliMechanicsCourse.modules.filter(x=>x.id===\'{mid}\'),tracks:WuliMechanicsCourse.tracks,stages:WuliMechanicsCourse.stages,key:WuliMechanicsCourse.key.bind(WuliMechanicsCourse)}},schema:\'wuli-study/mechanics-{mid.lower()}-progress\',slug:\'mechanics-{mid.lower()}\',note:\'三轨互不补偿。\'}});</script></body></html>')
 lines=[f'# {mid} {title}三轨知识矩阵与质量审计','', '## 三轨内容']
 for tr in 'ABC': lines+=['',f'- {tr}轨（{TRACK_INFO[tr][0]}）：'+ '、'.join(tracks[tr])+f'；正式卷门槛{TRACK_INFO[tr][1]}%。']
 lines+=['','## 统一流程','','每轨均包含诊断、学习、模型、即时检测、正式卷和间隔复测；正式卷和复测都通过才表示稳定。B/C不能补偿A轨。','','## 自动验收','','由`python3 tests/audit_mechanics.py`检查页面、配置、证据键、路由、语法和门槛；教师审校与真实考试验证另行记录。']
 (ROOT/'docs'/f'{mid}三轨知识矩阵与质量审计.md').write_text('\n'.join(lines)+'\n')

for mid,(title,tracks) in MODULES.items():
 module_pages(mid,title,tracks)
 for tr in 'ABC':
  for st in STAGES:
   (ROOT/'data'/f'{mid.lower()}-{tr.lower()}-{st}.js').write_text(data(mid,tr,st,tracks[tr]))
   page(mid,title,tr,st)
