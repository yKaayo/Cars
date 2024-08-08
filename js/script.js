const indicatorCircle = document.querySelectorAll("circle");
const video = document.querySelectorAll(".video");

function resetCircles() {
  for (let i = 0; i < video.length; i++) {
    function startCircles() {
      let duracaoVideo = video[i].duration;
      indicatorCircle[i].style.animation = `anim ${
        duracaoVideo
      }s linear forwards`;
    }
    
    function endedCircles() {
      indicatorCircle[i].style.strokeDashoffset = 472;
      resetCircles();
    }

    video[i].addEventListener("play", startCircles);
    video[i].addEventListener("ended", endedCircles);
  }
}

resetCircles();
