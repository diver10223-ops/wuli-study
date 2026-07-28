function initModule(key) {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(key) || '{}');
  } catch {
    saved = {};
  }

  const tasks = [
    ...document.querySelectorAll(
      'input.task[type="checkbox"], .task input[type="checkbox"]',
    ),
  ];
  const uniqueTasks = [...new Set(tasks)];
  const count = document.getElementById('count');
  const bar = document.getElementById('bar');
  const plan = document.getElementById('plan');

  function render(done) {
    if (count) count.textContent = String(done.length);
    if (bar) {
      bar.max = uniqueTasks.length;
      bar.value = done.length;
    }
    if (plan) {
      plan.textContent = done.length === uniqueTasks.length
        ? '本模块首版完成；下一步完成混合检测和间隔复测。'
        : `只完成未勾选任务，还剩${uniqueTasks.length - done.length}项。`;
    }
  }

  function save() {
    const done = uniqueTasks.filter((task) => task.checked).map((task) => task.value);
    localStorage.setItem(key, JSON.stringify({ done, updated: new Date().toISOString() }));
    render(done);
  }

  uniqueTasks.forEach((task) => {
    task.checked = (saved.done || []).includes(task.value);
    task.addEventListener('change', save);
  });
  render(uniqueTasks.filter((task) => task.checked).map((task) => task.value));
}
