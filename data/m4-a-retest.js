window.M4ARetest=Object.freeze({
  "version": 1,
  "module": "M4",
  "track": "A",
  "storageKey": "physics-mechanics-m4-a-retest-v1",
  "durationSeconds": 1800,
  "reviewDays": 14,
  "passTitle": "A轨retest通过",
  "failTitle": "A轨retest未通过",
  "prerequisites": [
    {
      "key": "physics-mechanics-m4-a-exam-v1",
      "label": "前置证据未通过"
    }
  ],
  "threshold": 100,
  "questions": [
    {
      "id": "M4AR01",
      "section": "牛顿第一定律、惯性与惯性系",
      "task": "K01",
      "node": "M4-AK01",
      "gate": "核心边界",
      "novel": true,
      "text": "太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确？",
      "options": [
        "工具箱仍有惯性，惯性由质量决定",
        "相对舱静止所以惯性为零",
        "失重使质量和惯性同时消失"
      ],
      "answer": 0,
      "skill": "牛顿第一定律、惯性与惯性系",
      "level": "迁移",
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
        "target": "transfer",
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
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "太空舱中关闭发动机的工具箱仍受重力但相对舱静止，关于惯性哪项正确？",
        "candidate": "工具箱仍有惯性，惯性由质量决定",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "工具箱仍有惯性，惯性由质量决定",
        "answerIndex": 0,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：相对舱静止所以惯性为零",
          "错误路径：失重使质量和惯性同时消失"
        ]
      }
    },
    {
      "id": "M4AR02",
      "section": "牛顿第二定律三性",
      "task": "K02",
      "node": "M4-AK02",
      "gate": "",
      "novel": true,
      "text": "向右运动的球受恒定向左合力，瞬时加速度怎样？",
      "options": [
        "必须等球停下后才有向左加速度",
        "加速度立即向左，速度可暂时仍向右",
        "加速度因速度向右而向右"
      ],
      "answer": 1,
      "skill": "牛顿第二定律三性",
      "level": "迁移",
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
        "target": "transfer",
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
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "向右运动的球受恒定向左合力，瞬时加速度怎样？",
        "candidate": "加速度立即向左，速度可暂时仍向右",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "加速度立即向左，速度可暂时仍向右",
        "answerIndex": 1,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：必须等球停下后才有向左加速度",
          "错误路径：加速度因速度向右而向右"
        ]
      }
    },
    {
      "id": "M4AR03",
      "section": "国际单位制与量纲",
      "task": "K03",
      "node": "M4-AK03",
      "gate": "",
      "novel": true,
      "text": "一力使250 g物体产生4.0 m/s²加速度，该力应为多少？",
      "options": [
        "1000 N",
        "0.0625 N",
        "1.0 N"
      ],
      "answer": 2,
      "skill": "国际单位制与量纲",
      "level": "迁移",
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
        "target": "transfer",
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
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "一力使250 g物体产生4.0 m/s²加速度，该力应为多少？",
        "candidate": "1.0 N",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "1.0 N",
        "answerIndex": 2,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：1000 N",
          "错误路径：0.0625 N"
        ]
      }
    },
    {
      "id": "M4AR04",
      "section": "已知受力求运动",
      "task": "K04",
      "node": "M4-AK04",
      "gate": "",
      "novel": true,
      "text": "3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少？",
      "options": [
        "3.0 m/s",
        "5.0 m/s",
        "7.0 m/s"
      ],
      "answer": 0,
      "skill": "已知受力求运动",
      "level": "迁移",
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
        "target": "transfer",
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
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "3.0 kg箱受右15 N拉力、左6 N摩擦，由静止1.0 s后的速度为多少？",
        "candidate": "3.0 m/s",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "3.0 m/s",
        "answerIndex": 0,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：5.0 m/s",
          "错误路径：7.0 m/s"
        ]
      }
    },
    {
      "id": "M4AR05",
      "section": "已知运动反推受力",
      "task": "K05",
      "node": "M4-AK05",
      "gate": "",
      "novel": true,
      "text": "2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大？",
      "options": [
        "3.0 N",
        "4.0 N",
        "2.0 N"
      ],
      "answer": 1,
      "skill": "已知运动反推受力",
      "level": "迁移",
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
        "target": "transfer",
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
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "2.0 kg小车向右加速度1.5 m/s²，已知左向阻力1.0 N，右向拉力多大？",
        "candidate": "4.0 N",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "4.0 N",
        "answerIndex": 1,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：3.0 N",
          "错误路径：2.0 N"
        ]
      }
    },
    {
      "id": "M4AR06",
      "section": "超重失重与测力实验",
      "task": "K06",
      "node": "M4-AK06",
      "gate": "",
      "novel": true,
      "text": "电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少？",
      "options": [
        "450 N",
        "500 N",
        "550 N"
      ],
      "answer": 2,
      "skill": "超重失重与测力实验",
      "level": "迁移",
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
        "target": "transfer",
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
        "equation": "按节点规律列方程并检查题设边界",
        "substitution": "电梯向下运动却以1.0 m/s²减速，50 kg乘客的秤示数是多少？",
        "candidate": "550 N",
        "constraint": "核对非负接触、张紧、摩擦范围、参数区间或模型适用范围",
        "final": "550 N",
        "answerIndex": 2,
        "unique": "两个错误项分别违反力的定义、方程或状态条件，答案唯一",
        "distractors": [
          "错误路径：450 N",
          "错误路径：500 N"
        ]
      }
    }
  ]
,
  evaluate: c => ({ passed: c.eligible && c.score >= 100 })
});
