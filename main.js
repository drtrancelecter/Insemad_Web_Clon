// Hash Router + UX + FAB scroll-to-top
(function(){
  const views = document.querySelectorAll('[data-view]');
  const navLinks = document.querySelectorAll('[data-nav]');
  const videos = document.querySelectorAll('video');

  function show(hash){
    const id = (hash || location.hash || '#inicio').replace('#','');
    views.forEach(v => v.hidden = v.id !== id);
    // pause videos fuera de foco
    videos.forEach(v => {
      const parent = v.closest('[data-view]');
      if(parent && parent.id !== id && !v.paused){ v.pause(); }
    });
    // nav activa
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id));
    // foco accesible
    const h2 = document.querySelector('#'+id+' .h1, #'+id+' .h2');
    if(h2){ h2.setAttribute('tabindex','-1'); h2.focus({preventScroll:true}); }
    window.scrollTo({top:0, behavior:'smooth'});
  }

  window.addEventListener('hashchange', () => show(location.hash));
  window.addEventListener('DOMContentLoaded', () => show(location.hash));

  // FAB: scroll to top
  const btnTop = document.getElementById('btnTop');
  if(btnTop){
    btnTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }
})();
