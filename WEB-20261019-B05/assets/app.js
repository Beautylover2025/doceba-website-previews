(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-menu]');
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
  var header = document.querySelector('.site-header');
  if (header) {
    var update = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    update();
    window.addEventListener('scroll', update, { passive: true });
  }
  var form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = form.querySelector('[data-form-done]');
      form.querySelectorAll('.field, button[type="submit"], .small').forEach(function (el) { el.hidden = true; });
      if (done) { done.hidden = false; done.focus(); }
    });
  }
})();
