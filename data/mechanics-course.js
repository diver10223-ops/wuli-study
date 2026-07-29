window.WuliMechanicsCourse = Object.freeze({
  version: 2,
  modules: [
    { id: 'M1', title: '运动的描述', entry: 'm1.html', progress: 'm1-progress.html', status: 'three-track-complete' },
    { id: 'M2', title: '匀变速直线运动', entry: 'm2.html', progress: 'm2-progress.html', status: 'three-track-complete' },
    { id: 'M3', title: '相互作用与受力分析', entry: 'm3.html', progress: 'm3-progress.html', status: 'three-track-complete' },
    { id: 'M4', title: '牛顿运动定律', entry: 'm4.html', progress: 'm4-progress.html', status: 'three-track-complete' },
    { id: 'M5', title: '曲线运动与圆周运动', entry: 'm5.html', progress: 'm5-progress.html', status: 'three-track-complete' },
    { id: 'M6', title: '万有引力与宇宙航行', entry: 'm6.html', progress: 'm6-progress.html', status: 'three-track-complete' },
    { id: 'M7', title: '功、能量与机械能', entry: 'm7.html', progress: 'm7-progress.html', status: 'three-track-complete' },
    { id: 'M8', title: '动量、振动与机械波', entry: 'm8.html', progress: 'm8-progress.html', status: 'three-track-complete' },
  ],
  tracks: ['A', 'B', 'C'],
  stages: ['diagnostic', 'learning', 'models', 'check', 'exam', 'retest'],
  cycles: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'],
  key(moduleId, track, stage) {
    return `physics-mechanics-${moduleId.toLowerCase()}-${track.toLowerCase()}-${stage}-v1`;
  },
});
