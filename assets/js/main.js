// Router por hash simple + control de foco + lazy video + hero safety
(function(){
  const views = [...document.querySelectorAll('.view')];
  const heroVideo = document.getElementById('heroVideo');

  function show(hash){
    const id = (hash || '#inicio').replace('#','');
    views.forEach(v => v.classList.toggle('active', v.id === id));
    const title = document.querySelector(`#${id}`)?.dataset.title || 'INSEMAD';
    document.title = `${title} — INSEMAD SPA`;

    // pausa hero si salimos de inicio
    if (heroVideo) {
      if (id === 'inicio') heroVideo.play().catch(()=>{});
      else heroVideo.pause();
    }

    // lazy load de videos en infraestructura
    if (id === 'infraestructura'){
      document.querySelectorAll('#infraestructura video').forEach(v=>{
        if (!v.src && v.dataset.src) v.src = v.dataset.src;
      });
    }

    window.scrollTo({top:0, behavior:'smooth'});
  }

  window.addEventListener('hashchange', ()=>show(location.hash));
  document.addEventListener('DOMContentLoaded', ()=>show(location.hash || '#inicio'));

  // Asegurar que el logo nunca abra el JPG
  const brand = document.querySelector('a.brand');
  if (brand) {
    brand.addEventListener('click', (e)=>{
      e.preventDefault();
      location.hash = '#inicio';
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // Acción de la barra flotante (arriba)
  const topBtn = document.querySelector('.blk-top');
  if (topBtn){
    topBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      location.hash = '#inicio';
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }
})();
