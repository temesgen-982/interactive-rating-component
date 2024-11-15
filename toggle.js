const mainWindow = document.querySelector(".main-window");
const successWindow = document.querySelector(".success-window");
let buttons = document.querySelector(".ratings");
buttons = buttons.querySelectorAll("button");
let rating = 1;

const result = successWindow.querySelector(".result");

const btn = document.querySelector(".submit");

btn.addEventListener('click', (e) => {
    mainWindow.classList.toggle("hidden");
    successWindow.classList.toggle("hidden");
    result.innerHTML = rating;
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        rating = e.target.innerHTML;
    });
});