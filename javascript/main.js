import { 
    showPixels,
    showSliderValue,
    showImage,
    toggleMenu,
    showGradientSelection,
    addGradientChoices,
    resetArea,
    showSettingsIcon
} from "./functions.js";

const githubIcon = document.querySelector(".icon-wrapper");
const slider = document.querySelector(".menu__slider");
const sliderValue = document.querySelector(".menu__slider-value");
const menuIcon = document.querySelector(".header__settings");
const gradientItem = document.querySelector(".gradient-items");
const resetBtn = document.querySelector(".reset-btn");

window.addEventListener("load", (event) => {
    showSettingsIcon();
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

resetBtn.addEventListener("click", () => {
    resetArea();
}, false);

githubIcon.addEventListener("mouseenter", ( event ) => {
    event.target.classList.add("fa-flip");
}, false);

githubIcon.addEventListener("mouseleave", ( event ) => {
    event.target.classList.remove("fa-flip");
});