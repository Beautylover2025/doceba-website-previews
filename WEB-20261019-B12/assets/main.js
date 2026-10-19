(function () {
  var btn = document.querySelector('[data-menu-btn]');
  var nav = document.querySelector('[data-nav]');
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
  var header = document.querySelector('header.top');
  if (header) {
    var scrolled = false;
    var onScroll = function () {
      var now = window.scrollY > 8;
      if (now !== scrolled) { scrolled = now; header.classList.toggle('is-scrolled', now); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var form = document.querySelector('form[data-demo]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = form.querySelector('[data-done]');
      form.querySelectorAll('.field, button[type="submit"]').forEach(function (el) { el.hidden = true; });
      if (done) { done.hidden = false; done.focus(); }
    });
  }
})();
