// Scroll suave + marcador activo de menú
(function(){
  const links = document.querySelectorAll('.nav .link');
  const ids = ['inicio','productos','certificacion','nosotros','galeria','infraestructura','contacto'];
  const anchors = ids.map(id => document.getElementById(id)).filter(Boolean);

  // set active on hash or default
  function markActiveByHash(){
    const h = (location.hash||'#inicio').replace('#','');
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href')==='#'+h));
  }
  markActiveByHash();

  // smooth scroll on click
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      const hash = a.getAttribute('href');
      if(hash && hash.startsWith('#')){
        e.preventDefault();
        const el = document.querySelector(hash);
        if(el){
          el.scrollIntoView({behavior:'smooth', block:'start'});
          history.replaceState(null, '', hash);
          links.forEach(l=>l.classList.remove('active'));
          a.classList.add('active');
        }
      }
    });
  });

  // highlight by scroll position
  const obs = new IntersectionObserver((entries)=>{
    const visible = entries.filter(en => en.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible){
      const id = visible.target.id;
      links.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+id));
    }
  }, {rootMargin:'-50% 0px -40% 0px', threshold:[0, .5, 1]});

  anchors.forEach(el=>obs.observe(el));
})();