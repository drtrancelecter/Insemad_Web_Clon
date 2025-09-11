// Navegación por hash
(function(){
  const views=document.querySelectorAll('.view');
  const links=document.querySelectorAll('[data-route]');
  function show(id){
    views.forEach(v=>v.classList.toggle('active', v.id===id));
    links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+id));
  }
  function route(){
    const hash=location.hash.replace('#','')||'inicio';
    show(hash);
  }
  window.addEventListener('hashchange', route);
  document.addEventListener('DOMContentLoaded', route);
})();