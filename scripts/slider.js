document.addEventListener("DOMContentLoaded", () => {
  const backgroundsLength = 3;
  const slider = document.querySelector(".hero-box");
  let i = 1;
  setInterval(() => {

    slider.style.backgroundImage = `
            linear-gradient(to bottom right, rgba(0,0,0,0.5),rgba(86,67,250,0.8)),
            url("../img/background-${i}.jpg")`;
    i++;
    if (i > backgroundsLength) {
      i = 1;
    }
  }, 4000);
});