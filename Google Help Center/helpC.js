let menuBar = document.querySelector(".menuContainer");
let cross = document.querySelector(".cross");
function toggle() {
  menuBar.classList.toggle("visible");
}
cross.addEventListener("click", () => {
  toggle();
});





























let btn = document.querySelector(".expander");
let btnRotate = document.querySelector(".expand_sign");
let alert = document.querySelector(".unavail");
let rotated = false;
function rotate() {
  if (rotated) {
    btnRotate.style.transform = "rotate(0deg)";
    alert.style.visibility = "hidden";
  } else {
    btnRotate.style.transform = "rotate(180deg)";
    alert.style.visibility = "visible";
  }
  rotated = !rotated;
}
btn.addEventListener("click", rotate);
