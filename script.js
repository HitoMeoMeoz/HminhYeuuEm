const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const CoáaaBtn = document.querySelector(".yes-btn");
const Hg ThèmmBtn = document.querySelector(".no-btn");

CoáaBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, T Yeuu M Vclinn";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

Hg ThèmmBtn.addEventListener("mouseover", () => {
  const noBtnRect = Hg ThèmmBtn.getBoundingClientRect();
  const maxX = window.innerWidth - Hg ThèmmBtnRect.width;
  const maxY = window.innerHeight - Hg ThèmBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  Hg ThèmmBtn.style.left = randomX + "px";
  Hg ThèmmBtn.style.top = randomY + "px";
});
