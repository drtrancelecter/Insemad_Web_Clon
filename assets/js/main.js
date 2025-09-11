
(function () {
  const routes = Array.from(document.querySelectorAll('.route'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  function show(hash){
    const id = (hash || location.hash || '#inicio').replace('#','');
    routes.forEach(r => r.classList.toggle('is-visible', r.id === id));
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#'+id));
    // Scroll a top suave
    window.scrollTo({top:0, behavior:'instant'});
  }
  window.addEventListener('hashchange', () => show(location.hash));
  show(location.hash);
})();
