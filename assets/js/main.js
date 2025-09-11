// Router por hash – muestra una sola sección a la vez
(function(){
  const routes = Array.from(document.querySelectorAll('[data-route]')).map(a=>a.getAttribute('href'));
  function show(hash){
    const id = (hash || '#inicio').replace('#','');
    document.querySelectorAll('.view').forEach(s => s.classList.toggle('active', s.id === id));
    document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id));
    // accesibilidad: foco al título de la sección activa
    const activeTitle = document.querySelector('#'+id+' h1, #'+id+' h2');
    if(activeTitle){ activeTitle.setAttribute('tabindex','-1'); activeTitle.focus({preventScroll:true}); }
  }
  window.addEventListener('hashchange', () => show(location.hash));
  document.addEventListener('DOMContentLoaded', () => show(location.hash));
})();
