(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = form.querySelector('[data-form-done]');
      form.querySelectorAll('.field, button[type=submit]').forEach(function (el) { el.hidden = true; });
      if (done) { done.hidden = false; done.focus(); }
    });
  }
  var chips = document.querySelectorAll('[data-chip]');
  var panels = document.querySelectorAll('[data-panel]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var key = chip.getAttribute('data-chip');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== key; });
    });
  });
})();
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function update() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
