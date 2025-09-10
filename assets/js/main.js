document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('#hero-video');
  const posterImg = document.querySelector('#hero-poster');
  if(video){
    video.addEventListener('error', ()=> {
      if(posterImg){ posterImg.style.display='block'; }
    });
  }
});
