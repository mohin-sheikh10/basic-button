/* const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  btn.style.backgroundColor = "#d35400";
});
 */

function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  btn.style.backgroundColor = generateRGBColor();
});
