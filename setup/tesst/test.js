// const btn = document.querySelector(".btn");
// const color = document.querySelector(".color");

// const myColors = [
//   "red",
//   "green",
//   "#00ff35",
//   "rgba(133,133,455)",
//   "#333",
//   "#ffb509",
// ];

// btn.addEventListener("click", (e) => {
//   const bgColor = randomNo();
//   document.body.style.backgroundColor = myColors[bgColor];
//   color.textContent = myColors[bgColor];
// });

// function randomNo() {
//   return Math.floor(Math.random() * myColors.length);
// }

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

const myColors = ["blue", "red", "rgb(133,142,133)", "crimson"];

function getColors() {
  return Math.floor(Math.random() * myColors.length);
}

btn.addEventListener("click", () => {
  const bgColor = getColors();
  document.body.style.backgroundColor = myColors[bgColor];
  color.textContent = myColors[bgColor];
});
