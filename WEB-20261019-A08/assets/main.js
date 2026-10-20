(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('#site-nav');
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
  var header = document.querySelector('.site-header');
  if (header) {
    var ticking = false;
    var update = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
  var form = document.querySelector('#anfrage-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var thanks = document.querySelector('#form-thanks');
      form.hidden = true;
      if (thanks) {
        thanks.hidden = false;
        thanks.focus();
      }
    });
  }
})();
