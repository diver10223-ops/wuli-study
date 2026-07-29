(function (global) {
  'use strict';

  function runDiagnostic(config) {
    const storage = global.WuliStorage;
    if (!storage) throw new Error('WuliStorage must load before diagnostic.js');

    const quiz = document.getElementById(config.elements?.quiz || 'quiz');
    const result = document.getElementById(config.elements?.result || 'result');
    const plan = document.getElementById(config.elements?.plan || 'plan');
    const submit = document.getElementById(config.elements?.submit || 'submit');
    const reset = document.getElementById(config.elements?.reset || 'reset');
    if (!quiz || !result || !plan || !submit || !reset) {
      throw new Error('Diagnostic page is missing a required element');
    }

    const questions = config.questions;
    const prerequisites = (config.prerequisites || []).map((rule) => {
      const value = storage.read(rule.key, null);
      return { ...rule, passed: rule.test(value) };
    });
    const eligible = prerequisites.every((rule) => rule.passed);
    const eligibility = document.getElementById('eligibility');
    if (eligibility) eligibility.innerHTML = eligible
      ? '<h2 class="pass">前置证据齐全</h2>'
      : `<h2 class="fail">前置证据未齐</h2><p>${prerequisites.filter((rule) => !rule.passed).map((rule) => rule.label).join('、')}</p>`;
    const confirmationContainer = document.getElementById('confirmations');
    if (confirmationContainer && config.confirmations?.length) confirmationContainer.innerHTML = config.confirmations.map((item) =>
      `<label class="task"><input type="checkbox" data-confirmation="${item.id}"> ${item.label}</label>`
    ).join('');
    quiz.innerHTML = questions.map((question, index) => `
      <article class="question">
        <div class="question-meta">
          <span>${index + 1}. ${config.questionLabel || '前置诊断'}</span>
          <code>${question.node}</code>
          ${question.gate ? `<strong>门槛：${question.gate}</strong>` : ''}
        </div>
        <h3>${question.text}</h3>
        <div class="options">${question.options.map((option, optionIndex) => `
          <label><input type="radio" name="${question.id}" value="${optionIndex}"> <span>${option}</span></label>
        `).join('')}</div>
        <div class="response-meta">
          <label>状态 <select data-state="${question.id}">${(config.states || ['未选择', '独立完成', '猜测', '不会']).map((state) => `<option value="${state === '未选择' ? '' : state}">${state}</option>`).join('')}</select></label>
          <label>信心 <select data-confidence="${question.id}">${(config.confidence || ['未选择', '高', '中', '低']).map((level) => `<option value="${level === '未选择' ? '' : level}">${level}</option>`).join('')}</select></label>
        </div>
      </article>
    `).join('');

    function collect() {
      const answers = {};
      const states = {};
      const confidence = {};
      questions.forEach((question) => {
        answers[question.id] = document.querySelector(`input[name="${question.id}"]:checked`)?.value ?? null;
        states[question.id] = document.querySelector(`[data-state="${question.id}"]`).value;
        confidence[question.id] = document.querySelector(`[data-confidence="${question.id}"]`).value;
      });
      return { answers, states, confidence };
    }

    function grade() {
      const response = collect();
      let correct = 0;
      const weak = [];
      const failedGates = [];
      const guessedGates = [];
      questions.forEach((question) => {
        const answer = response.answers[question.id];
        const isCorrect = answer !== null && Number(answer) === question.answer;
        if (isCorrect) {
          correct += 1;
          if (question.gate && response.states[question.id] === '猜测') guessedGates.push(question.gate);
        } else {
          weak.push(question.node);
          if (question.gate) failedGates.push(question.gate);
        }
      });
      const unique = (values) => [...new Set(values)];
      const gatesPassed = failedGates.length === 0 && guessedGates.length === 0;
      const confirmations = Object.fromEntries((config.confirmations || []).map((item) => [item.id, Boolean(document.querySelector(`[data-confirmation="${item.id}"]`)?.checked)]));
      const confirmationsPassed = (config.confirmations || []).every((item) => confirmations[item.id]);
      const context = { eligible, confirmations, confirmationsPassed, correct, gatesPassed, failedGates: unique(failedGates), guessedGates: unique(guessedGates), weak: unique(weak), response };
      const decision = config.evaluate ? config.evaluate(context) : { passed: eligible && correct >= config.passCorrect && gatesPassed && confirmationsPassed };
      const passed = decision.passed === true;
      const data = {
        version: config.version || 1,
        module: config.module,
        track: config.track,
        eligible,
        confirmations,
        confirmationsPassed,
        correct,
        total: questions.length,
        gatesPassed,
        failedGates: unique(failedGates),
        guessedGates: unique(guessedGates),
        weak: unique(weak),
        passed,
        ...decision,
        ...response,
        submittedAt: new Date().toISOString(),
      };
      storage.write(config.storageKey, data);
      result.hidden = false;
      result.innerHTML = `<h2 class="${passed ? 'pass' : 'fail'}">${correct}/${questions.length} · ${passed ? config.passTitle || '诊断通过' : config.failTitle || '需要回补'}</h2>
        <p><strong>失败门槛：</strong>${data.failedGates.join('、') || '无'}</p>
        <p><strong>猜对门槛：</strong>${data.guessedGates.join('、') || '无'}</p>
        <p><strong>薄弱节点：</strong>${data.weak.join('、') || '无'}</p>`;
      plan.innerHTML = passed
        ? typeof config.passPlan === 'function' ? config.passPlan(data) : config.passPlan
        : typeof config.failPlan === 'function' ? config.failPlan(data) : config.failPlan;
      result.scrollIntoView({ behavior: 'smooth' });
      return data;
    }

    submit.addEventListener('click', grade);
    reset.addEventListener('click', () => {
      storage.remove(config.storageKey);
      quiz.querySelectorAll('input').forEach((input) => { input.checked = false; });
      quiz.querySelectorAll('select').forEach((select) => { select.value = ''; });
      confirmationContainer?.querySelectorAll('input').forEach((input) => { input.checked = false; });
      result.hidden = true;
      plan.textContent = config.initialPlan;
    });

    return Object.freeze({ collect, grade });
  }

  global.WuliDiagnostic = Object.freeze({ run: runDiagnostic });
})(window);
