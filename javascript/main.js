import { 
    showPixels,
    showSliderValue,
    showImage,
    toggleMenu,
    showGradientSelection,
    addGradientChoices
} from "./functions.js";

const githubIcon = document.querySelector(".icon-wrapper");
const slider = document.querySelector(".menu__slider");
const sliderValue = document.querySelector(".menu__slider-value");
const menuIcon = document.querySelector(".header__settings");
const gradientItem = document.querySelector(".gradient-items");

window.addEventListener("load", (event) => {
    addGradientChoices();
    showPixels();
    showSliderValue();
    showImage();
}, false);

menuIcon.addEventListener("click", (event) => {
    toggleMenu();
});

slider.addEventListener("change", (event) => {
    showPixels();
    showImage();
});

slider.oninput = () => {
    sliderValue.innerText = slider.value;
};

gradientItem.addEventListener("click", (event) => {
    showGradientSelection(event);
}, false);

githubIcon.addEventListener("mouseenter", ( event ) => {
    event.target.classList.add("fa-flip");
}, false);

githubIcon.addEventListener("mouseleave", ( event ) => {
    event.target.classList.remove("fa-flip");
});