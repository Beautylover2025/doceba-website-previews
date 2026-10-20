(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
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
      var fields = form.querySelector('.form-fields');
      if (fields) fields.hidden = true;
      if (thanks) {
        thanks.hidden = false;
        thanks.focus();
      }
    });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.faq details').forEach(function (d) {
    var summary = d.querySelector('summary');
    var body = d.querySelector('.faq-body');
    var timer = 0;
    if (!summary || !body) return;
    summary.addEventListener('click', function (e) {
      e.preventDefault();
      clearTimeout(timer);
      if (d.open && !d.classList.contains('is-collapsed')) {
        d.classList.add('is-collapsed');
        timer = setTimeout(function () {
          d.open = false;
          d.classList.remove('is-collapsed');
        }, reduce.matches ? 150 : 240);
      } else if (d.open) {
        d.classList.remove('is-collapsed');
      } else {
        d.classList.add('is-collapsed');
        d.open = true;
        void body.offsetHeight;
        d.classList.remove('is-collapsed');
      }
    });
  });

  var rows = document.querySelectorAll('.svc-row[data-preview]');
  var previews = document.querySelectorAll('.svc-preview img');
  function show(i) {
    previews.forEach(function (img, idx) {
      img.classList.toggle('is-active', String(idx) === i);
    });
  }
  rows.forEach(function (row) {
    var i = row.getAttribute('data-preview');
    row.addEventListener('mouseenter', function () { show(i); });
    row.addEventListener('focusin', function () { show(i); });
  });
})();
