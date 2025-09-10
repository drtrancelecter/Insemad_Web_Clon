// Navegación por secciones (sin router complejo). Seguro ante fallos.
// Estrategia: por defecto TODO visible. Cuando JS carga, activamos modo secciones.
// Mostramos solo la sección indicada por hash o 'inicio'. Pausamos videos fuera de foco.
(function(){
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

  function enableJsMode(){
    document.body.classList.add('js-enabled');
  }

  function activate(id){
    const panes = $$('.pane');
    let target = id && $('#' + id) ? id : 'inicio';

    panes.forEach(p => p.classList.remove('active'));
    const el = $('#' + target);
    if(el){ el.classList.add('active'); }

    // nav estado activo
    $$('#main-nav a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('data-target') === target);
    });

    // manejar videos: pausar los que no están activos
    const allVideos = $$('video');
    allVideos.forEach(v => {
      const parentPane = v.closest('.pane');
      if(parentPane && !parentPane.classList.contains('active')){
        try{ v.pause(); }catch(e){}
      }
    });

    // si es hero y está autoplay, intentar play (algunos móviles lo bloquean)
    if(target === 'inicio'){
      const hv = $('#hero-video');
      if(hv){ try{ hv.play(); }catch(e){} }
    }

    // Actualizar hash sin saltos bruscos
    if(location.hash !== '#' + target){
      history.replaceState(null, '', '#' + target);
    }
  }

  function fromHash(){
    const h = (location.hash || '#inicio').replace('#','').trim();
    return h || 'inicio';
  }

  document.addEventListener('DOMContentLoaded', () => {
    enableJsMode();
    // Clicks en nav
    $$('#main-nav a').forEach(a => {
      a.addEventListener('click', (e) => {
        const target = a.getAttribute('data-target');
        if(target){
          e.preventDefault();
          activate(target);
        }
      });
    });

    // Arranque según hash
    activate(fromHash());
  });

  window.addEventListener('hashchange', () => {
    activate(fromHash());
  });

  // Fallback de video → mostrar poster si falla
  document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#hero-video');
    const posterImg = document.querySelector('#hero-poster');
    if(video){
      video.addEventListener('error', ()=> {
        if(posterImg){ posterImg.style.display='block'; }
      });
    }
  });
})();
