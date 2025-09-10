// Hash router + UI interactions
(function(){
  const routes = ["inicio","productos","certificacion","nosotros","galeria","infraestructura","contacto"];
  const views = Object.fromEntries(routes.map(r => [r, document.getElementById(`view-${r}`)]));
  const navLinks = Array.from(document.querySelectorAll('[data-route]'));
  const railToggle = document.querySelector('.rail__toggle');
  const rail = document.querySelector('.rail');

  function show(route){
    if(!routes.includes(route)) route = "inicio";
    // toggle active link
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${route}`));
    // show/hide views
    Object.entries(views).forEach(([name, el])=>{
      const on = name === route;
      el.classList.toggle('is-visible', on);
      if(on){ el.classList.add('view-enter'); setTimeout(()=>el.classList.remove('view-enter'), 350); }
      // Pause any videos when hidden (defensive)
      const vids = el.querySelectorAll('video');
      vids.forEach(v=>{ if(!on && !v.paused){ v.pause(); } });
    });
    // scroll to top smoothly
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function readHash(){
    return (location.hash || '#inicio').replace('#','').toLowerCase();
  }

  window.addEventListener('hashchange', () => show(readHash()));
  document.addEventListener('DOMContentLoaded', () => show(readHash()));

  // Rail expand/collapse (simple)
  let open = true;
  railToggle?.addEventListener('click', ()=>{
    open = !open;
    rail.querySelectorAll('a.rail__btn').forEach(btn=>{
      btn.style.display = open ? 'grid' : 'none';
    });
    railToggle.textContent = open ? '→' : '←';
  });

  // Keyboard focus ring for accessibility
  let usingKeyboard = false;
  window.addEventListener('keydown', (e)=>{ if(e.key === 'Tab') document.body.classList.add('kbd'); });
  window.addEventListener('mousedown', ()=>document.body.classList.remove('kbd'));
})();
