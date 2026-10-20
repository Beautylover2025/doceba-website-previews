(function () {
  var btn = document.querySelector('[data-menu-btn]');
  var nav = document.querySelector('[data-menu]');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('[data-thanks]');
      form.querySelectorAll('.field, button[type=submit]').forEach(function (el) { el.hidden = true; });
      if (ok) { ok.hidden = false; ok.focus(); }
    });
  }
})();
