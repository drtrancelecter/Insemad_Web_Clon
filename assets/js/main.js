
// placeholder for simple interactivity
document.addEventListener('DOMContentLoaded', () => {
  // track clicks to WhatsApp CTA for future analytics hook
  const w = document.querySelectorAll('[data-cta=whatsapp]');
  w.forEach(btn => btn.addEventListener('click', ()=>{
    console.log('WhatsApp CTA clicked');
  }));
});
