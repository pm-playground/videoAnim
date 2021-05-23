const vid = document.getElementById('video');
console.log(vid.currentTime)
setInterval(function(){
  vid.currentTime = window.pageYOffset / 1000;
}, 100)