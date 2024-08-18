const videos = document.querySelectorAll(".hero-carousel-video");
const heroCarouselVideo = document.querySelectorAll(
  "#hero-carousel .carousel-inner .carousel-item"
);
const heroCarouselIndicators = document.querySelectorAll(
  "#hero-carousel .carousel-indicators svg circle"
);
const prev = document.querySelector("#hero-carousel .carousel-control-prev");
const next = document.querySelector("#hero-carousel .carousel-control-next");

function getTimeVideo() {
  videos.forEach((video, i) => {
    video.addEventListener("loadedmetadata", () => {
      let timeVideo = video.duration * 900; //There's a delay in transition beetween the videos
      heroCarouselVideo[i].setAttribute("data-bs-interval", timeVideo);

      video.addEventListener("play", () => {
        heroCarouselIndicators[i].style.strokeDashoffset = 0;
        heroCarouselIndicators[
          i
        ].style.animation = `spin ${timeVideo}ms linear forwards`;
      });

      video.addEventListener("ended", () => {
        heroCarouselIndicators[i].style.strokeDashoffset = 88;
      });
    });
  });
}

getTimeVideo();
