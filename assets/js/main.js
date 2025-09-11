// Tiny hash router so Home shows only the hero and no extra blocks
function route(){
  const hash = (location.hash || '#inicio').slice(1);
  document.querySelectorAll('.nav a').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href')==='#'+hash);
  });
  document.querySelectorAll('.route').forEach(r=>{
    r.hidden = r.dataset.route !== hash;
  });
}
addEventListener('hashchange', route);
addEventListener('DOMContentLoaded', route);
