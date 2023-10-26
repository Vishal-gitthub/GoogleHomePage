// set same height of cards for all
const cards = document.querySelectorAll(".card");
let maxHeight = 0;
cards.forEach((card) => {
  const cardHeight = card.offsetHeight;
  if (cardHeight > maxHeight) {
    maxHeight = cardHeight;
  }
});

// Set the same height for all cards
cards.forEach((card) => {
  card.style.height = `${maxHeight}px`;
});

// Get all elements with the class "checkbox" and "checked"|
let checkboxes = document.querySelectorAll(".checkbox");
let texts = document.querySelectorAll(".checked");
checkboxes.forEach(function (checkbox, index) {
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      texts[index].style.color = "blue";
    } else {
      texts[index].style.color = " #3c4043";
    }
  });
});

let nav = document.querySelector(".nav");
// nav shadow effect
window.addEventListener("scroll", function () {
  if (window.scrollY > 30) {
    nav.classList.add("nav");
  } else {
    nav.classList.remove("nav");
  }
});

function toggle() {
  let searchBox = document.getElementById("search");
  if ((searchBox.style.visibility = "hidden")) {
    searchBox.style.visibility = "visible";
  }
}
function toggle2() {
  let searchBox = document.getElementById("search");
  if ((searchBox.style.visibility = "visible")) {
    searchBox.style.visibility = "hidden";
  }
}
