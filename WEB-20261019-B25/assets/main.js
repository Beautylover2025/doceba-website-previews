(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.site-nav');
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
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var thanks = form.querySelector('.form-thanks');
      var fields = form.querySelectorAll('.field, button[type="submit"]');
      for (var i = 0; i < fields.length; i++) fields[i].hidden = true;
      thanks.hidden = false;
    });
  }
})();
