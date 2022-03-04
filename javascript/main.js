import { 
    showPixels,
    showSliderValue
} from "./functions.js";
import { STARTING_PIXEL_NUM } from "./constants.js";

const githubIcon = document.querySelector(".icon-wrapper");
const slider = document.querySelector(".menu__slider");

window.addEventListener("load", (event) => {
    showPixels();
    showSliderValue();
});

slider.addEventListener("change", (event) => {
    showPixels();
    showSliderValue();
});

githubIcon.addEventListener("mouseenter", ( event ) => {
    event.target.classList.add("fa-flip");
}, false);

githubIcon.addEventListener("mouseleave", ( event ) => {
    event.target.classList.remove("fa-flip");
});