(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
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

  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var thanks = form.querySelector('.form-thanks');
      Array.prototype.forEach.call(form.querySelectorAll('.field, button[type="submit"]'), function (el) {
        el.hidden = true;
      });
      if (thanks) {
        thanks.hidden = false;
        thanks.focus();
      }
    });
  }
})();
