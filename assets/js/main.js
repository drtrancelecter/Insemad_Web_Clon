// Marca el link activo según el hash
function setActiveFromHash(){
  const hash = window.location.hash || "#inicio";
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.getAttribute('href') === hash){ a.setAttribute('aria-current','page'); }
    else { a.removeAttribute('aria-current'); }
  });
}
window.addEventListener('hashchange', setActiveFromHash);
window.addEventListener('DOMContentLoaded', ()=>{
  // Si no hay hash, forzamos #inicio para mantener navegación tipo SPA
  if(!window.location.hash){ window.location.hash = "#inicio"; }
  setActiveFromHash();
  // scroll suave
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click', (e)=>{
      // Comportamiento nativo + suavizado
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        history.pushState(null, "", id);
        setActiveFromHash();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
