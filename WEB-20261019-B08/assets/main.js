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

  var form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var thanks = form.querySelector('[data-thanks]');
      form.querySelectorAll('.field, button[type="submit"]').forEach(function (el) {
        el.hidden = true;
      });
      if (thanks) thanks.hidden = false;
    });
  }

  var goals = document.querySelectorAll('[data-goal]');
  var panels = document.querySelectorAll('[data-goal-panel]');
  goals.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-goal');
      goals.forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      panels.forEach(function (p) {
        p.hidden = p.getAttribute('data-goal-panel') !== id;
      });
    });
  });
})();
