
(function(){
  function setActive(){
    const hash = location.hash || '#inicio';
    document.querySelectorAll('.topbar nav a').forEach(a=>{
      a.classList.toggle('active', a.getAttribute('href')===hash);
    });
  }
  window.addEventListener('hashchange', setActive);
  setActive();
})();
