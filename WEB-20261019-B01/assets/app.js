(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var showAll = function () { root.classList.add('show-all'); };
  setTimeout(showAll, 2500);

  document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('[data-reveal]');
    if (reduce || !('IntersectionObserver' in window)) {
      showAll();
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
      items.forEach(function (el, i) {
        el.style.setProperty('--d', (i % 4) * 70 + 'ms');
        io.observe(el);
      });
    }

    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('nav');
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

    var form = document.querySelector('form[data-demo]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = form.querySelector('.form-ok');
        form.querySelectorAll('.field, button[type=submit]').forEach(function (el) { el.hidden = true; });
        if (ok) { ok.hidden = false; ok.focus(); }
      });
    }

    var finder = document.querySelector('[data-finder]');
    if (finder) {
      var tabs = finder.querySelectorAll('[data-goal]');
      var panels = finder.querySelectorAll('[data-panel]');
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.setAttribute('aria-pressed', t === tab ? 'true' : 'false'); });
          panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== tab.getAttribute('data-goal'); });
        });
      });
    }

    var track = document.querySelector('[data-track]');
    if (track) {
      var step = function (dir) {
        var card = track.querySelector('.card');
        var w = card ? card.getBoundingClientRect().width + 20 : 320;
        track.scrollBy({ left: dir * w, behavior: reduce ? 'auto' : 'smooth' });
      };
      var prev = document.querySelector('[data-prev]');
      var next = document.querySelector('[data-next]');
      if (prev) prev.addEventListener('click', function () { step(-1); });
      if (next) next.addEventListener('click', function () { step(1); });
    }
  });
})();
