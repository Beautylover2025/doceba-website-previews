(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  var form = document.querySelector('#kontaktformular');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = document.querySelector('#form-danke');
      form.hidden = true;
      if (done) { done.hidden = false; done.focus(); }
    });
  }
})();
