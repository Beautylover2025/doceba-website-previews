(function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
    };
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  Array.prototype.forEach.call(document.querySelectorAll('.faq details'), function (d) {
    var summary = d.querySelector('summary');
    var p = d.querySelector('summary ~ p');
    if (!summary || !p) return;
    var body = document.createElement('div');
    body.className = 'faq-body';
    var inner = document.createElement('div');
    body.appendChild(inner);
    d.insertBefore(body, p);
    inner.appendChild(p);
    d.classList.add('is-anim');
    if (d.open) d.classList.add('is-open');
    var timer;
    summary.addEventListener('click', function (e) {
      e.preventDefault();
      clearTimeout(timer);
      if (!d.classList.contains('is-open')) {
        d.open = true;
        void body.offsetHeight;
        d.classList.add('is-open');
      } else {
        d.classList.remove('is-open');
        timer = setTimeout(function () { d.open = false; }, reduce.matches ? 0 : 260);
      }
    });
  });
})();
