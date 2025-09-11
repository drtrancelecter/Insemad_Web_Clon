(function(){
  function syncActive(){
    const a = document.querySelectorAll('.menu a');
    const hash = location.hash || '#/inicio';
    a.forEach(el => el.classList.toggle('active', el.getAttribute('href') === hash));
  }
  window.addEventListener('hashchange', syncActive);
  window.addEventListener('DOMContentLoaded', syncActive);
})();