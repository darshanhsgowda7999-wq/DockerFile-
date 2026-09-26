const runButton = document.querySelector('#runButton');
const resetButton = document.querySelector('#resetButton');
const logButton = document.querySelector('#logButton');
const lastRun = document.querySelector('#lastRun');
const activityList = document.querySelector('#activityList');
const themeToggle = document.querySelector('#themeToggle');
const nodes = document.querySelectorAll('.node');

nodes.forEach((node) => {
  node.addEventListener('click', () => {
    nodes.forEach((item) => item.classList.remove('active'));
    node.classList.add('active');
  });
});

runButton.addEventListener('click', () => {
  runButton.disabled = true;
  runButton.innerHTML = '<span class="play-icon">◌</span> Running...';
  lastRun.textContent = 'just now';

  const runningNode = document.querySelector('.node-router');
  nodes.forEach((node) => node.classList.remove('active'));
  runningNode.classList.add('active');

  window.setTimeout(() => {
    runButton.disabled = false;
    runButton.innerHTML = '<span class="play-icon">▶</span> Run workflow';
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = '<span class="activity-time">NOW</span><div><strong>Workflow complete</strong><p>Response composed locally</p></div><span class="activity-check">✓</span>';
    activityList.prepend(item);
  }, 850);
});

resetButton.addEventListener('click', () => {
  nodes.forEach((node) => node.classList.remove('active'));
  document.querySelector('.node-start').classList.add('active');
});

logButton.addEventListener('click', () => {
  logButton.innerHTML = 'Event log synced <span>✓</span>';
  window.setTimeout(() => { logButton.innerHTML = 'Open event log <span>→</span>'; }, 1800);
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '○' : '◐';
});
