export const CHUNK_SIZE = 16 * 1024;

export function toast(msg, ms = 2200) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), ms);
}

export function isMobileDevice() {
  const ua = navigator.userAgent || '';
  const uaMobile = /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(ua);
  const smallScreen = Math.min(window.innerWidth, window.innerHeight) <= 820;
  return uaMobile || smallScreen;
}

export function fmtBytes(b) {
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
  if (b < 1073741824) return (b / 1048576).toFixed(1) + ' MB';
  return (b / 1073741824).toFixed(2) + ' GB';
}

export function randomId(prefix = '') {
  return prefix + Math.random().toString(36).slice(2, 8) + Math.random().toString(36).slice(2, 6);
}

export function logLine(container, text, cls = '') {
  const line = document.createElement('div');
  line.className = cls;
  const t = new Date().toLocaleTimeString('tr-TR');
  line.textContent = `[${t}] ${text}`;
  container.appendChild(line);
  container.scrollTop = container.scrollHeight;
}

export function setProgress(barEl, pct) {
  barEl.style.width = Math.max(0, Math.min(100, pct)) + '%';
}