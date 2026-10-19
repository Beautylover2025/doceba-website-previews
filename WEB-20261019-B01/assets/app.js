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
      var done = form.querySelector('[data-form-done]');
      form.querySelectorAll('.field, button[type=submit]').forEach(function (el) { el.hidden = true; });
      if (done) { done.hidden = false; done.focus(); }
    });
  }

  var tabs = document.querySelectorAll('[data-finder-tab]');
  var panels = document.querySelectorAll('[data-finder-panel]');
  if (tabs.length) {
    var show = function (id) {
      tabs.forEach(function (t) { t.setAttribute('aria-pressed', t.dataset.finderTab === id ? 'true' : 'false'); });
      panels.forEach(function (p) { p.hidden = p.dataset.finderPanel !== id; });
    };
    tabs.forEach(function (t) { t.addEventListener('click', function () { show(t.dataset.finderTab); }); });
    show(tabs[0].dataset.finderTab);
  }
})();
