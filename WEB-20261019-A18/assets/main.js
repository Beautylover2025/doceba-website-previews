(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var header = document.querySelector('header.top');
  if (header) {
    var queued = false;
    var update = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
      queued = false;
    };
    window.addEventListener('scroll', function () {
      if (!queued) { queued = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
  var form = document.querySelector('.demo-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('.form-thanks');
      Array.prototype.forEach.call(form.querySelectorAll('.field, button[type=submit]'), function (el) {
        el.hidden = true;
      });
      if (ok) ok.hidden = false;
    });
  }
})();
