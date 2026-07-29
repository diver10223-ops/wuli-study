(function (global) {
  'use strict';

  function run(options = {}) {
    const storage = global.WuliStorage;
    const course = options.course || global.WuliElectricCourse;
    const evidence = global.WuliEvidence;
    if (!storage || !course || !evidence) throw new Error('Progress dependencies are missing');
    const records = evidence.collect(storage, course);
    const container = document.getElementById('modules');
    const plan = document.getElementById('plan');
    container.innerHTML = course.modules.map((module) => {
      const moduleRecords = records.filter((record) => record.module.id === module.id);
      const rows = course.tracks.map((track) => {
        const exam = moduleRecords.find((record) => record.track === track && record.stage === 'exam');
        const retest = moduleRecords.find((record) => record.track === track && record.stage === 'retest');
        return `<li>${track}轨：正式卷${exam?.evidence?.passed ? '通过' : '未通过'}；复测${retest?.evidence?.passed ? '通过' : '未通过'}${exam?.migrated || retest?.migrated ? '（兼容旧记录）' : ''}</li>`;
      }).join('');
      const progressLink = module.progress ? `<a href="${module.progress}">模块进度</a> · ` : '';
      return `<article class="m"><h2>${module.id} ${module.title}</h2><ul>${rows}</ul>${progressLink}<a href="${module.entry}">模块入口</a></article>`;
    }).join('');
    const passed = records.filter((record) => ['exam', 'retest'].includes(record.stage) && record.evidence?.passed).length;
    const total = course.modules.length * course.tracks.length * 2;
    plan.innerHTML = `当前${passed}/${total}项正式卷/复测证据通过。${options.note || ''}`;
    document.getElementById('export').onclick = () => {
      const slug = options.slug || 'electric';
      const payload = { schema: options.schema || 'wuli-study/electric-progress', version: 2, exportedAt: new Date().toISOString(), records: Object.fromEntries(records.map((record) => [record.canonicalKey, record.evidence])) };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob); const anchor = document.createElement('a');
      anchor.href = url; anchor.download = `${slug}-progress-${new Date().toISOString().slice(0, 10)}.json`; anchor.click(); URL.revokeObjectURL(url);
      document.getElementById('state').textContent = '已导出';
    };
  }

  global.WuliProgress = Object.freeze({ run });
})(window);
