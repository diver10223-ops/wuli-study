(function (global) {
  'use strict';

  function runLearning(config) {
    const storage = global.WuliStorage;
    if (!storage) throw new Error('WuliStorage must load before learning.js');

    const container = document.getElementById(config.elements?.container || 'cards');
    const count = document.getElementById(config.elements?.count || 'count');
    const bar = document.getElementById(config.elements?.bar || 'bar');
    const plan = document.getElementById(config.elements?.plan || 'plan');
    const route = document.getElementById(config.elements?.route || 'route');
    if (!container || !count || !bar || !plan) throw new Error('Learning page is missing a required element');

    const diagnosis = config.diagnosticKey ? storage.read(config.diagnosticKey, null) : null;
    const weak = new Set(diagnosis?.weak || []);
    const saved = storage.read(config.storageKey, {});
    const done = new Set(saved.done || []);
    const items = [...config.items].sort((a, b) => Number(weak.has(b.node)) - Number(weak.has(a.node)));

    if (route) {
      route.innerHTML = diagnosis
        ? weak.size
          ? `<strong>诊断优先：</strong>先完成${[...weak].join('、')}；其他卡片仍可学习。`
          : '<strong>诊断结果：</strong>没有薄弱节点，按知识链完成全部任务。'
        : '<strong>尚无诊断：</strong>可以预览和学习；建议先完成前置诊断以获得精确顺序。';
    }

    container.innerHTML = items.map((item) => `
      <article class="m" data-node="${item.node}">
        <span class="status ${weak.has(item.node) ? 'review' : 'evidence'}">${item.id} · ${item.node}${weak.has(item.node) ? ' · 诊断优先' : ''}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        ${item.conditions ? `<div class="challenge"><b>条件/步骤：</b>${item.conditions}</div>` : ''}
        ${item.misconception ? `<p><strong>反例或易错：</strong>${item.misconception}</p>` : ''}
        ${item.example ? `<p><strong>最小任务：</strong>${item.example}</p>` : ''}
        <label class="task"><input type="checkbox" value="${item.id}"${done.has(item.id) ? ' checked' : ''}> ${item.check}</label>
      </article>
    `).join('');

    const inputs = [...container.querySelectorAll('.task input[type="checkbox"]')];
    function save() {
      const completed = inputs.filter((input) => input.checked).map((input) => input.value);
      storage.write(config.storageKey, {
        version: config.version || 1,
        module: config.module,
        track: config.track,
        done: completed,
        updatedAt: new Date().toISOString(),
      });
      count.textContent = String(completed.length);
      bar.max = inputs.length;
      bar.value = completed.length;
      plan.innerHTML = completed.length === inputs.length
        ? config.completePlan
        : `<strong>当前：</strong>还剩${inputs.length - completed.length}项。优先完成标记为“诊断优先”的任务。`;
    }
    inputs.forEach((input) => input.addEventListener('change', save));
    save();
    return Object.freeze({ save, items });
  }

  global.WuliLearning = Object.freeze({ run: runLearning });
})(window);
