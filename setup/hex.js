const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomCode()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
function getRandomCode() {
  return Math.floor(Math.random() * hex.length);
}
