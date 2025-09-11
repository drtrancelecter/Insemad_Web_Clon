// Hash router simple + realce del tab activo + scroll al inicio
(function(){
  const routes = Array.from(document.querySelectorAll('.view')).map(v => v.id);
  function show(hash){
    const target = (hash||'#inicio').replace('#','');
    document.querySelectorAll('.view').forEach(v=>v.classList.toggle('is-active', v.id===target));
    document.querySelectorAll('[data-route]').forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+target));
    window.scrollTo({top:0, behavior:'instant'});
  }
  window.addEventListener('hashchange', ()=>show(location.hash));
  if(!location.hash){ location.hash='#inicio'; } else { show(location.hash); }
  // Pausar cualquier <video> fuera de foco (por si los agregas después)
  const obs = new MutationObserver(()=>{
    document.querySelectorAll('video').forEach(v=>{
      const visible = v.closest('.view')?.classList.contains('is-active');
      if(!visible && !v.paused) v.pause();
    });
  });
  obs.observe(document.getElementById('app'), {subtree:true, attributes:true, attributeFilter:['class']});
})();
