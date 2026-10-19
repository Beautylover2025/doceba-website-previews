const b = document.querySelector('.burger');
const m = document.getElementById('mnav');
if (b && m) {
  const set = (o) => { m.classList.toggle('open', o); b.setAttribute('aria-expanded', o); };
  b.addEventListener('click', () => set(!m.classList.contains('open')));
  m.addEventListener('click', (e) => { if (e.target.tagName === 'A') set(false); });
}
