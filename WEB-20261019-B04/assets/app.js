(function () {
  var toggle = document.querySelector('[data-menu]');
  var nav = document.querySelector('[data-nav]');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
    });
    tab.addEventListener('keydown', function (e) {
      var list = Array.prototype.slice.call(tabs);
      var i = list.indexOf(tab);
      var next = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = list[(i + 1) % list.length];
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = list[(i - 1 + list.length) % list.length];
      if (next) { e.preventDefault(); next.focus(); next.click(); }
    });
  });

  var form = document.querySelector('form[data-demo]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.createElement('p');
      msg.className = 'form-done';
      msg.setAttribute('role', 'status');
      msg.textContent = 'Danke, wir melden uns.';
      form.replaceWith(msg);
    });
  }
})();
