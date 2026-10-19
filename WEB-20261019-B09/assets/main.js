(function () {
  var t = document.querySelector('.nav-toggle');
  var n = document.querySelector('.site-nav');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('is-open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    n.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { n.classList.remove('is-open'); t.setAttribute('aria-expanded', 'false'); }
    });
  }
  var f = document.querySelector('.contact-form');
  if (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = f.querySelector('.form-ok');
      f.querySelectorAll('input,textarea,button').forEach(function (el) { el.disabled = true; });
      if (ok) { ok.hidden = false; }
    });
  }
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('.finder-item');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      if (c.getAttribute('aria-pressed') === 'true') { return; }
      chips.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      c.setAttribute('aria-pressed', 'true');
      var k = c.getAttribute('data-cat');
      var list = document.querySelector('.finder-list');
      if (list) { list.classList.add('is-swapped'); }
      var i = 0;
      cards.forEach(function (card) {
        card.hidden = card.getAttribute('data-cat') !== k;
        if (!card.hidden) { card.style.setProperty('--i', Math.min(i++, 6)); }
      });
    });
  });
  var r = document.querySelector('.compare-range');
  var cmp = document.querySelector('.compare');
  if (r && cmp) {
    var set = function () { cmp.style.setProperty('--pos', r.value + '%'); };
    r.addEventListener('input', set);
    set();
  }
})();
