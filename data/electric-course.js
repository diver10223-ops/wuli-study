window.WuliElectricCourse = Object.freeze({
  version: 2,
  modules: [
    { id: 'E1', title: '静电场', entry: 'e1.html', progress: 'e1-progress.html' },
    { id: 'E2', title: '恒定电流', entry: 'e2-tracks.html', progress: 'e2e3-progress.html', bundle: 'E2E3' },
    { id: 'E3', title: '电学实验', entry: 'e2-tracks.html', progress: 'e2e3-progress.html', bundle: 'E2E3' },
    { id: 'E4', title: '磁场与安培力', entry: 'e4.html', progress: 'e4-progress.html' },
    { id: 'E5', title: '洛伦兹力与带电粒子', entry: 'e5.html', progress: 'e5-progress.html' },
    { id: 'E6', title: '电磁感应', entry: 'e6.html', progress: 'e6-progress.html' },
    { id: 'E7', title: '交变电流与电磁波', entry: 'e7.html', progress: 'e7-progress.html' },
    { id: 'E8', title: '电磁综合', entry: 'e8.html', progress: 'e8-progress.html' },
  ],
  tracks: ['A', 'B', 'C'],
  stages: ['diagnostic', 'learning', 'models', 'check', 'exam', 'retest'],
  key(moduleId, track, stage) {
    const module = this.modules.find((item) => item.id === moduleId);
    const prefix = module?.bundle ? `physics-${module.bundle.toLowerCase()}` : `physics-${moduleId.toLowerCase()}`;
    return `${prefix}-${track.toLowerCase()}-${stage}-v1`;
  },
});
