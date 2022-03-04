import { 
    showPixels,
    showSliderValue
} from "./functions.js";
import { STARTING_PIXEL_NUM } from "./constants.js";

const githubIcon = document.querySelector(".icon-wrapper");
const slider = document.querySelector(".menu__slider");
const sliderVal = document.querySelector(".menu__slider-value");


window.addEventListener("load", (event) => {
    showPixels(STARTING_PIXEL_NUM);
    showSliderValue();
});

slider.addEventListener("change", (event) => {
    showSliderValue();
});

githubIcon.addEventListener("mouseenter", ( event ) => {
    event.target.classList.add("fa-flip");
}, false);

githubIcon.addEventListener("mouseleave", ( event ) => {
    event.target.classList.remove("fa-flip");
});