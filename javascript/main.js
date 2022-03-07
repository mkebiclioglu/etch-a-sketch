import { 
    showPixels,
    showSliderValue,
    showImage,
    showMenu
} from "./functions.js";

const githubIcon = document.querySelector(".icon-wrapper");
const slider = document.querySelector(".menu__slider");
const menuIcon = document.querySelector(".header__settings");

window.addEventListener("load", (event) => {
    showPixels();
    showSliderValue();
    showImage();
}, false);

menuIcon.addEventListener("click", (event) => {
    showMenu();
});

slider.addEventListener("change", (event) => {
    showPixels();
    showSliderValue();
    showImage();
});

githubIcon.addEventListener("mouseenter", ( event ) => {
    event.target.classList.add("fa-flip");
}, false);

githubIcon.addEventListener("mouseleave", ( event ) => {
    event.target.classList.remove("fa-flip");
});