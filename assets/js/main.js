// Hash router mínimo + marcado activo
(function(){
  const views = Array.from(document.querySelectorAll('.view'));
  const links = Array.from(document.querySelectorAll('.nav a'));
  function show(hash){
    const id = (hash || location.hash || '#inicio').replace('#','');
    views.forEach(v => v.classList.toggle('active', v.id === id));
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id));
  }
  window.addEventListener('hashchange', () => show(location.hash));
  document.addEventListener('DOMContentLoaded', () => show(location.hash));
})();
