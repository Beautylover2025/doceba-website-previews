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
      var done = document.querySelector('.form-done');
      form.hidden = true;
      if (done) { done.hidden = false; done.focus(); }
    });
  }

  var details = document.querySelectorAll('details');
  for (var i = 0; i < details.length; i++) {
    var d = details[i];
    var body = document.createElement('div');
    body.className = 'acc-body';
    while (d.lastChild && d.lastChild.nodeName !== 'SUMMARY') {
      body.insertBefore(d.lastChild, body.firstChild);
    }
    d.appendChild(body);
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var ticking = false;
    var update = function () {
      ticking = false;
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }
})();
