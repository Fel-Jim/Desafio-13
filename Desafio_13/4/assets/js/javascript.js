//cambio de color box
const box = document.querySelectorAll(".box");

function toBlack(evt) {
  evt.target.style.backgroundColor = "Black";
}

box.forEach((SingleBox) => {
  SingleBox.addEventListener("click", toBlack);
});

//key
