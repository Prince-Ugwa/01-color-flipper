const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomNumberColor = getRandomNumber();
  console.log(randomNumberColor);
  document.body.style.backgroundColor = colors[randomNumberColor];
  color.textContent = colors[randomNumberColor];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
