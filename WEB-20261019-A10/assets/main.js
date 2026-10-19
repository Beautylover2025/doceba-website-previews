(function () {
  var b = document.querySelector('.burger'), m = document.querySelector('.menu');
  if (b && m) {
    b.addEventListener('click', function () {
      var o = m.classList.toggle('open');
      b.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
    m.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }
    });
  }
  var h = document.querySelector('.top');
  if (h) {
    var sc = function () { h.classList.toggle('scrolled', window.scrollY > 8); };
    sc();
    window.addEventListener('scroll', sc, { passive: true });
  }
  var f = document.querySelector('form[data-demo]'), t = document.querySelector('.thanks');
  if (f && t) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      f.style.display = 'none';
      t.style.display = 'block';
      t.focus();
    });
  }
  var chips = document.querySelectorAll('[data-chip]');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (o) {
        var on = o === c;
        o.setAttribute('aria-selected', on ? 'true' : 'false');
        var p = document.getElementById(o.getAttribute('aria-controls'));
        if (p) p.hidden = !on;
      });
    });
  });
})();
