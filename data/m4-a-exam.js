window.M4AExam=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "A",
  "storageKey": "physics-mechanics-m4-a-exam-v1",
  "durationSeconds": 3600,
  "reviewDays": 7,
  "passTitle": "A轨exam通过",
  "failTitle": "A轨exam未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-check-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 80,
  "questions": [
    {
      "id": "M4AE01",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": true,
      "text": "对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s 该模型的最终结论是什么？",
      "options": [
        "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "错误路径：把匀速说成不受力",
        "错误路径：把速度当作惯性大小"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "应用",
      "constraint": "宏观低速物体、地面近似惯性系且合外力为零",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "牛顿第一定律、惯性与惯性系题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "substitution": "对象为0.50 kg滑块；地面系向右正；重力5.0 N与支持力5.0 N抵消，ΣFx=0=0.50a；候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "candidate": "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "候选a=0 m/s²，支持力非负，结论为速度保持2.0 m/s",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把匀速说成不受力",
          "错误路径：把速度当作惯性大小"
        ]
      }
    },
    {
      "id": "M4AE02",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": true,
      "text": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0 该模型的最终结论是什么？",
      "options": [
        "错误路径：把某个拉力直接当合力",
        "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "错误路径：由速度方向决定加速度方向"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "应用",
      "constraint": "质量不变、宏观低速、惯性参考系，分量力属于同一对象",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "牛顿第二定律三性题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "substitution": "对象为3.0 kg箱；地面系向右正；真实力为12 N拉力、3 N摩擦、重力和支持力；12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "candidate": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "12-3=3.0a，得a=3.0 m/s²，N=30 N≥0",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把某个拉力直接当合力",
          "错误路径：由速度方向决定加速度方向"
        ]
      }
    },
    {
      "id": "M4AE03",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": true,
      "text": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立 该模型的最终结论是什么？",
      "options": [
        "错误路径：把2 kg写成2 N",
        "错误路径：把克直接代入F=ma",
        "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "应用",
      "constraint": "代入前统一国际单位，等式两边量纲一致",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "国际单位制与量纲题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "substitution": "对象为0.20 kg小车；地面系向右正；真实水平合力0.60 N；0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "candidate": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "0.60=0.20a，候选a=3.0 m/s²，N/kg=m/s²，单位核对成立",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把2 kg写成2 N",
          "错误路径：把克直接代入F=ma"
        ]
      }
    },
    {
      "id": "M4AE04",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": true,
      "text": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负 该模型的最终结论是什么？",
      "options": [
        "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "错误路径：漏摩擦",
        "错误路径：把拉力直接当合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "应用",
      "constraint": "单对象、分段内合力恒定、地面惯性系",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "已知受力求运动题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "substitution": "对象为4.0 kg雪橇；沿坡向下正；真实力沿坡分量20 N、摩擦8 N；20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "candidate": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "20-8=4a，候选a=3.0 m/s²，2.0 s速度增加6.0 m/s，接触力非负",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：漏摩擦",
          "错误路径：把拉力直接当合力"
        ]
      }
    },
    {
      "id": "M4AE05",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": true,
      "text": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N 该模型的最终结论是什么？",
      "options": [
        "错误路径：把速度当加速度",
        "T-2.0=2.0×2.0，候选T=6.0 N",
        "错误路径：把合力误当未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "应用",
      "constraint": "运动数据和动力学方程对应同一对象、时段和方向",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "applied",
          "resistance"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": false,
        "steps": 4
      },
      "review": {
        "object": "已知运动反推受力题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N",
        "substitution": "对象为2.0 kg小车；地面系向右正；v-t斜率a=(7-1)/3=2.0 m/s²；真实力为T和2.0 N阻力；T-2.0=2.0×2.0，候选T=6.0 N",
        "candidate": "T-2.0=2.0×2.0，候选T=6.0 N",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "T-2.0=2.0×2.0，候选T=6.0 N",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把速度当加速度",
          "错误路径：把合力误当未知拉力"
        ]
      }
    },
    {
      "id": "M4AE06",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": true,
      "text": "对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N 该模型的最终结论是什么？",
      "options": [
        "错误路径：用速度方向判断超失重",
        "错误路径：认为失重时重力消失",
        "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "应用",
      "constraint": "地面惯性系、人与秤共同加速并保持接触，g=10 m/s²",
      "structure": {
        "objectType": "single-body",
        "bodyCount": 1,
        "forceTypes": [
          "gravity",
          "normal"
        ],
        "balanceDimension": "one-axis",
        "referenceFrame": "inertial",
        "target": "model-result",
        "hasParameter": false,
        "hasCritical": false,
        "hasStateSwitch": false,
        "hasExperimentError": true,
        "steps": 4
      },
      "review": {
        "object": "超重失重与测力实验题设对象",
        "frame": "题设参考系",
        "forces": "题干所列真实力；惯性力仅为非惯性系工具",
        "axis": "题设正方向",
        "equation": "对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "substitution": "对象为50 kg乘客；地面系向上正；真实力N、mg；向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "candidate": "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "向下加速1.0 m/s²时N-500=50×(-1)，候选N=450 N≥0，为失重但重力仍500 N",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：用速度方向判断超失重",
          "错误路径：认为失重时重力消失"
        ]
      }
    }
  ],
  evaluate: c => ({ passed: c.eligible && c.score >= 80 })
});
