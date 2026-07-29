(function (global) {
  'use strict';

  function runAssessment(config) {
    const storage = global.WuliStorage;
    if (!storage) throw new Error('WuliStorage must load before assessment.js');
    const quiz = document.getElementById('quiz');
    const result = document.getElementById('result');
    const plan = document.getElementById('plan');
    const submit = document.getElementById('submit');
    const saveButton = document.getElementById('save');
    const timer = document.getElementById('timer');
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    if (!quiz || !result || !plan || !submit) throw new Error('Assessment page is missing required elements');

    const questions = config.questions;
    const draftKey = `${config.storageKey}-draft`;
    let seconds = config.durationSeconds || 0;
    let finished = false;
    let timerHandle;
    const prerequisites = (config.prerequisites || []).map((rule) => {
      const value = storage.read(rule.key, null);
      return { ...rule, passed: rule.test(value) };
    });
    const eligible = prerequisites.every((rule) => rule.passed);
    const eligibility = document.getElementById('eligibility');
    if (eligibility) eligibility.innerHTML = eligible
      ? '<h2 class="pass">前置学习证据齐全</h2><p>本次成绩可以形成正式证据。</p>'
      : `<h2 class="fail">前置证据未齐</h2><p>${prerequisites.filter((rule) => !rule.passed).map((rule) => rule.label).join('、')}。可以预览作答，但不能形成正式通过证据。</p>`;

    quiz.innerHTML = questions.map((question, index) => `
      <article class="question">
        <div class="question-meta"><span>${index + 1}. ${question.section}</span><code>${question.task} · ${question.node}</code>${question.gate ? `<strong>门槛：${question.gate}</strong>` : ''}${question.novel ? '<strong>新情境</strong>' : ''}</div>
        <h3>${question.text}</h3>
        <div class="options">${question.options.map((option, optionIndex) => `<label><input type="radio" name="${question.id}" value="${optionIndex}"> <span>${option}</span></label>`).join('')}</div>
        <div class="response-meta"><label>状态 <select data-state="${question.id}"><option value="">未选择</option><option>独立完成</option><option>猜测</option><option>不会</option><option>来不及</option></select></label><label>信心 <select data-confidence="${question.id}"><option value="">未选择</option><option>高</option><option>中</option><option>低</option></select></label></div>
      </article>
    `).join('');

    function collect() {
      const answers = {}, states = {}, confidence = {};
      questions.forEach((question) => {
        answers[question.id] = document.querySelector(`input[name="${question.id}"]:checked`)?.value ?? null;
        states[question.id] = document.querySelector(`[data-state="${question.id}"]`).value;
        confidence[question.id] = document.querySelector(`[data-confidence="${question.id}"]`).value;
      });
      return { answers, states, confidence };
    }
    function updateProgress() {
      if (!progress || !progressText) return;
      const answered = Object.values(collect().answers).filter((answer) => answer !== null).length;
      progress.max = questions.length; progress.value = answered; progressText.textContent = `${answered}/${questions.length}已作答`;
    }
    function saveDraft(show = true) {
      storage.write(draftKey, { ...collect(), seconds, updatedAt: new Date().toISOString() });
      if (show && document.getElementById('save-state')) document.getElementById('save-state').textContent = '已保存';
    }
    function restore() {
      const draft = storage.read(draftKey, null); if (!draft) return;
      if (Number.isFinite(draft.seconds)) seconds = draft.seconds;
      questions.forEach((question) => {
        if (draft.answers?.[question.id] != null) document.querySelector(`input[name="${question.id}"][value="${draft.answers[question.id]}"]`)?.click();
        document.querySelector(`[data-state="${question.id}"]`).value = draft.states?.[question.id] || '';
        document.querySelector(`[data-confidence="${question.id}"]`).value = draft.confidence?.[question.id] || '';
      });
      updateProgress();
    }
    function tick() {
      if (!timer || !config.durationSeconds) return;
      timer.textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
      if (seconds <= 0) { clearInterval(timerHandle); grade(); return; }
      seconds -= 1; if (seconds % 30 === 0) saveDraft(false);
    }
    function grade() {
      if (finished) return storage.read(config.storageKey, null);
      finished = true; clearInterval(timerHandle);
      const response = collect(), sections = {}, tasks = {}, weak = [], failedGates = [], guessedGates = [];
      let correct = 0;
      questions.forEach((question) => {
        sections[question.section] ||= { correct: 0, total: 0 };
        tasks[question.task] ||= { correct: 0, total: 0 };
        sections[question.section].total += 1; tasks[question.task].total += 1;
        const ok = response.answers[question.id] !== null && Number(response.answers[question.id]) === question.answer;
        if (ok) {
          correct += 1; sections[question.section].correct += 1; tasks[question.task].correct += 1;
          if (question.gate && response.states[question.id] === '猜测') guessedGates.push(question.gate);
        } else { weak.push({ task: question.task, node: question.node }); if (question.gate) failedGates.push(question.gate); }
      });
      const score = Math.round(correct * 100 / questions.length);
      const context = { eligible, correct, score, sections, tasks, failedGates: [...new Set(failedGates)], guessedGates: [...new Set(guessedGates)], weak, response };
      const decision = config.evaluate(context);
      const reviewDate = new Date(Date.now() + (config.reviewDays || 7) * 86400000).toISOString().slice(0, 10);
      const data = { version: config.version || 1, module: config.module, track: config.track, ...context, ...decision, reviewDate, secondsUsed: config.durationSeconds ? config.durationSeconds - seconds : null, submittedAt: new Date().toISOString() };
      storage.write(config.storageKey, data); storage.remove(draftKey);
      result.hidden = false;
      result.innerHTML = `<h2 class="${data.passed ? 'pass' : 'fail'}">${score}/100 · ${data.passed ? config.passTitle : eligible ? config.failTitle : '前置证据未齐'}</h2><div class="score-grid">${Object.entries(sections).map(([name, value]) => `<div><span>${name}</span><strong>${value.correct}/${value.total}</strong></div>`).join('')}</div><p><strong>失败门槛：</strong>${context.failedGates.join('、') || '无'}</p><p><strong>猜对门槛：</strong>${context.guessedGates.join('、') || '无'}</p><p><strong>回补任务：</strong>${[...new Set(weak.map((item) => item.task))].join('、') || '无'}</p>${decision.details || ''}`;
      plan.innerHTML = data.passed ? config.passPlan(data) : config.failPlan(data);
      result.scrollIntoView({ behavior: 'smooth' }); return data;
    }

    quiz.addEventListener('change', updateProgress); submit.addEventListener('click', grade);
    if (saveButton) saveButton.addEventListener('click', () => saveDraft(true));
    restore(); updateProgress(); tick(); if (timer && config.durationSeconds) timerHandle = setInterval(tick, 1000);
    return Object.freeze({ collect, grade, saveDraft });
  }
  global.WuliAssessment = Object.freeze({ run: runAssessment });
})(window);
