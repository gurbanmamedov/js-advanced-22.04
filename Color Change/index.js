function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const block = document.querySelector(".block");
const colorSpan = document.querySelector(".color");
const colorChangeButton = document.querySelector(".change-color");

colorChangeButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  block.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
