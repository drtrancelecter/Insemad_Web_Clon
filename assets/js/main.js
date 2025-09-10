// Router por hash + utilidades
(function(){
  const sections = Array.from(document.querySelectorAll('.section'));
  const video = document.querySelector('#inicio video');
  function show(id){
    sections.forEach(s=>s.classList.toggle('visible', s.id === id));
    if (id !== 'inicio' && video){ video.pause(); }
    if (id === 'inicio' && video){ video.play().catch(()=>{}); }
    // focus de accesibilidad
    const el = document.getElementById(id);
    if (el){ el.setAttribute('tabindex','-1'); el.focus({preventScroll:true}); window.scrollTo({top:0,behavior:'smooth'}); }
  }
  function current(){
    const h = (location.hash||'#inicio').replace('#','');
    if (!document.getElementById(h)) return 'inicio';
    return h || 'inicio';
  }
  window.addEventListener('hashchange', ()=>show(current()));
  document.addEventListener('click', (e)=>{
    const brand = e.target.closest('.brand');
    if (brand){ e.preventDefault(); location.hash='#inicio'; }
  });
  show(current());
})();