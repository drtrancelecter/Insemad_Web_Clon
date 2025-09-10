(function(){
  const SECTIONS = Array.from(document.querySelectorAll('[data-section]'));
  const NAV_LINKS = Array.from(document.querySelectorAll('[data-link]'));
  function setActive(hash){
    const id = (hash || '#inicio').replace('#','');
    SECTIONS.forEach(sec=>{
      const active = sec.id === id;
      sec.classList.toggle('active', active);
      sec.setAttribute('aria-hidden', active ? 'false':'true');
      const vids = sec.querySelectorAll('video');
      vids.forEach(v=> active ? (v.getAttribute('data-src') && !v.src && (v.src=v.getAttribute('data-src'))) : v.pause());
    });
    NAV_LINKS.forEach(a=>{
      const target = a.getAttribute('href').replace('#','');
      a.classList.toggle('active', target===id);
      a.setAttribute('aria-current', target===id ? 'page':'false');
    });
    const heading = document.querySelector(`#${id} [id^="h-"]`);
    if(heading){ heading.setAttribute('tabindex','-1'); heading.focus({preventScroll:true}); }
    window.scrollTo({top:0, behavior:'smooth'});
  }
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[data-link]');
    if(!a) return;
    const href = a.getAttribute('href') || '';
    if(href.startsWith('#')){
      e.preventDefault();
      history.pushState(null, '', href);
      setActive(href);
    }
  });
  window.addEventListener('popstate', ()=> setActive(location.hash));
  window.addEventListener('hashchange', ()=> setActive(location.hash));
  setActive(location.hash || '#inicio');
})();