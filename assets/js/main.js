/* Hash-router + mejoras de accesibilidad y video */
(function(){
  const views = Array.from(document.querySelectorAll('.view'));
  const links = Array.from(document.querySelectorAll('.main-nav a'));

  function show(id){
    views.forEach(v => v.classList.toggle('active', '#'+v.id === id));
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
    // pausa videos fuera de foco
    views.forEach(v => {
      v.querySelectorAll('video').forEach(vid => {
        if (!v.classList.contains('active')) { try{vid.pause();}catch(e){} }
      });
    });
    window.scrollTo({top:0, behavior:'instant'});
  }

  function onHash(){
    const id = location.hash || '#inicio';
    show(id);
  }
  window.addEventListener('hashchange', onHash);
  onHash();
})();
