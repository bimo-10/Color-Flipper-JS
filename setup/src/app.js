const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colorText = document.querySelector("span");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const rand = colors[mathRand()];
  colorText.textContent = rand;
  document.body.style.backgroundColor = rand;
});

const mathRand = function () {
  const rand = Math.floor(Math.random() * colors.length);
  return rand;
};
console.log(mathRand());
