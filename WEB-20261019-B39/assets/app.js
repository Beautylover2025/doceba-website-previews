(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  var form = document.querySelector('form[data-demo]');
  var thanks = document.getElementById('danke');
  if (form && thanks) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.hidden = true;
      thanks.hidden = false;
    });
  }
})();
