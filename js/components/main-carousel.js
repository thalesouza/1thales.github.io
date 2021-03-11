const btnRight = window.document.querySelector(".button-arrow.-right");
const btnLeft = window.document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
let pixels = 10;

console.log(btnRight)
btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translate(${pixels}px)`;
});

console.log(btnLeft)
btnLeft.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translate(${pixels}px)`;
});

