(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('mobile-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
    nav.addEventListener('click',function(e){
      if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
    });
  }
  var form=document.querySelector('form[data-demo]');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      form.classList.add('sent');
      var t=document.querySelector('.thanks');
      if(t){t.setAttribute('tabindex','-1');t.focus();}
    });
  }
})();
