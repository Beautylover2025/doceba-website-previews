(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.querySelector('span').textContent = open ? 'Schließen' : 'Menü';
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('span').textContent = 'Menü';
      }
    });
  }

  var form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = form.querySelector('[data-form-done]');
      form.querySelectorAll('.field, button[type=submit]').forEach(function (el) {
        el.hidden = true;
      });
      if (done) {
        done.hidden = false;
        done.focus();
      }
    });
  }
})();
