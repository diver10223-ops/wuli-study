window.WuliMechanicsCourse = Object.freeze({
  version: 1,
  modules: [
    { id: 'M1', title: '运动的描述', entry: 'mechanics.html#m1', progress: 'mechanics-progress.html', status: 'source-ready' },
    { id: 'M2', title: '匀变速直线运动', entry: 'm2.html', progress: 'mechanics-progress.html', status: 'building' },
    { id: 'M3', title: '相互作用与受力分析', entry: 'mechanics.html#m3', progress: 'mechanics-progress.html', status: 'source-ready' },
    { id: 'M4', title: '牛顿运动定律', entry: 'mechanics.html#m4', progress: 'mechanics-progress.html', status: 'source-ready' },
    { id: 'M5', title: '曲线运动与圆周运动', entry: 'mechanics.html#m5', progress: 'mechanics-progress.html', status: 'source-ready' },
    { id: 'M6', title: '万有引力与宇宙航行', entry: 'mechanics.html#m6', progress: 'mechanics-progress.html', status: 'planned' },
    { id: 'M7', title: '功、能量与机械能', entry: 'mechanics.html#m7', progress: 'mechanics-progress.html', status: 'planned' },
    { id: 'M8', title: '动量、振动与机械波', entry: 'mechanics.html#m8', progress: 'mechanics-progress.html', status: 'planned' },
  ],
  tracks: ['A', 'B', 'C'],
  stages: ['diagnostic', 'learning', 'models', 'check', 'exam', 'retest'],
  cycles: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'],
  key(moduleId, track, stage) {
    return `physics-mechanics-${moduleId.toLowerCase()}-${track.toLowerCase()}-${stage}-v1`;
  },
});
