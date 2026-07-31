window.M4ACheck=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "A",
  "storageKey": "physics-mechanics-m4-a-check-v1",
  "durationSeconds": 1800,
  "reviewDays": 7,
  "passTitle": "A轨check通过",
  "failTitle": "A轨check未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-learning-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 80,
  "questions": [
    {
      "id": "M4AC01",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": false,
      "text": "0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速 由这组数据可得哪项结论？",
      "options": [
        "故保持匀速",
        "错误路径：把匀速说成不受力",
        "错误路径：把速度当作惯性大小"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速",
        "substitution": "0.50 kg气垫滑块以2.0 m/s运动，水平ΣF=0=0.50a，得a=0 m/s²，故保持匀速",
        "candidate": "故保持匀速",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "故保持匀速",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把匀速说成不受力",
          "错误路径：把速度当作惯性大小"
        ]
      }
    },
    {
      "id": "M4AC02",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": false,
      "text": "2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右 由这组数据可得哪项结论？",
      "options": [
        "错误路径：把某个拉力直接当合力",
        "得a=3.0 m/s²向右",
        "错误路径：由速度方向决定加速度方向"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右",
        "substitution": "2.0 kg小车受右10 N、左4 N，10-4=2.0a，得a=3.0 m/s²向右",
        "candidate": "得a=3.0 m/s²向右",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "得a=3.0 m/s²向右",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把某个拉力直接当合力",
          "错误路径：由速度方向决定加速度方向"
        ]
      }
    },
    {
      "id": "M4AC03",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": false,
      "text": "500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s² 由这组数据可得哪项结论？",
      "options": [
        "错误路径：把2 kg写成2 N",
        "错误路径：把克直接代入F=ma",
        "合力1.5 N时a=1.5/0.500=3.0 m/s²"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "substitution": "500 g=0.500 kg，合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "candidate": "合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "合力1.5 N时a=1.5/0.500=3.0 m/s²",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把2 kg写成2 N",
          "错误路径：把克直接代入F=ma"
        ]
      }
    },
    {
      "id": "M4AC04",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": false,
      "text": "2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s 由这组数据可得哪项结论？",
      "options": [
        "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "错误路径：漏摩擦",
        "错误路径：把拉力直接当合力"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "substitution": "2.0 kg物块受8 N拉力和2 N摩擦，8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "candidate": "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "8-2=2a得a=3 m/s²；静止2 s后v=6 m/s",
        "answerIndex": 0,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：漏摩擦",
          "错误路径：把拉力直接当合力"
        ]
      }
    },
    {
      "id": "M4AC05",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": false,
      "text": "1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N 由这组数据可得哪项结论？",
      "options": [
        "错误路径：把速度当加速度",
        "得T=3 N",
        "错误路径：把合力误当未知拉力"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N",
        "substitution": "1.0 kg小车2 s内由2增至6 m/s，a=2 m/s²；阻力1 N时T-1=2，得T=3 N",
        "candidate": "得T=3 N",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "得T=3 N",
        "answerIndex": 1,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：把速度当加速度",
          "错误路径：把合力误当未知拉力"
        ]
      }
    },
    {
      "id": "M4AC06",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": false,
      "text": "60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N 由这组数据可得哪项结论？",
      "options": [
        "错误路径：用速度方向判断超失重",
        "错误路径：认为失重时重力消失",
        "得N=720 N而重力仍600 N"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "理解",
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
        "target": "calculation",
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
        "equation": "60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N",
        "substitution": "60 kg乘客向上加速2.0 m/s²，N-600=60×2，得N=720 N而重力仍600 N",
        "candidate": "得N=720 N而重力仍600 N",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "得N=720 N而重力仍600 N",
        "answerIndex": 2,
        "unique": "正确项满足题设方程与边界；两个错误项分别对应本节点列明的具体误解。",
        "distractors": [
          "错误路径：用速度方向判断超失重",
          "错误路径：认为失重时重力消失"
        ]
      }
    }
  ]
});
