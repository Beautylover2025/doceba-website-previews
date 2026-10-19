(function () {
  var toggle = document.querySelector('.menu-toggle');
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
      var thanks = form.parentNode.querySelector('.form-thanks');
      form.hidden = true;
      if (thanks) { thanks.hidden = false; thanks.focus(); }
    });
  }

  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('[data-goals]');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var goal = chip.getAttribute('data-goal');
      chips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      var n = 0;
      cards.forEach(function (card) {
        var goals = card.getAttribute('data-goals').split(' ');
        var show = goal === 'alle' || goals.indexOf(goal) !== -1;
        card.hidden = !show;
        if (show) n++;
      });
      var count = document.querySelector('.result-count');
      if (count) count.textContent = n === 1 ? '1 passende Behandlung' : n + ' passende Behandlungen';
    });
  });
})();
