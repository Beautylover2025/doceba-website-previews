(function () {
  var btn = document.querySelector('[data-menu]');
  var nav = document.querySelector('[data-nav]');
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
  var header = document.querySelector('.top');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  var form = document.querySelector('[data-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.createElement('p');
      msg.className = 'form-done';
      msg.setAttribute('role', 'status');
      msg.textContent = 'Danke, wir melden uns.';
      form.replaceWith(msg);
    });
  }
})();
