(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
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

  var form = document.querySelector('.request-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var done = form.parentNode.querySelector('.form-done');
      form.hidden = true;
      if (done) {
        done.hidden = false;
        done.focus();
      }
    });
  }

  var presets = document.querySelectorAll('[data-problem]');
  var select = document.getElementById('problem');
  presets.forEach(function (el) {
    el.addEventListener('click', function () {
      if (select) select.value = el.getAttribute('data-problem');
    });
  });

  var today = document.querySelector('[data-today]');
  if (today) {
    var parts = new Intl.DateTimeFormat('de-DE', {
      timeZone: 'Europe/Berlin', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
    }).formatToParts(new Date());
    var get = function (t) { return parts.filter(function (p) { return p.type === t; })[0].value; };
    var day = get('weekday').replace('.', '');
    var mins = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
    var ranges = {
      Mo: [[600, 1140]], Di: [[600, 1140]], Mi: [[600, 1140]], Do: [[600, 1140]],
      Fr: [[600, 795], [885, 1140]], Sa: [[600, 1140]], So: []
    };
    var r = ranges[day] || [];
    var isOpen = r.some(function (x) { return mins >= x[0] && mins < x[1]; });
    today.textContent = isOpen ? 'Jetzt geöffnet' : 'Gerade geschlossen';
    today.classList.add(isOpen ? 'is-open' : 'is-closed');
    var row = document.querySelector('[data-day="' + day + '"]');
    if (row) row.classList.add('is-today');
  }
})();
