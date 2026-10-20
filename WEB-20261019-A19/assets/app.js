(function () {
  var toggle = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-menu]');
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

  var form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var thanks = form.parentNode.querySelector('[data-thanks]');
      form.hidden = true;
      if (thanks) {
        thanks.hidden = false;
        thanks.focus();
      }
    });
  }

  var exclusive = document.querySelectorAll('details[data-group]');
  exclusive.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      exclusive.forEach(function (o) {
        if (o !== d && o.dataset.group === d.dataset.group) o.open = false;
      });
    });
  });
})();
