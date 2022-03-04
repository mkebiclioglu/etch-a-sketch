import { 
    showPixels,
    showSliderValue,
    showImage
} from "./functions.js";

const githubIcon = document.querySelector(".icon-wrapper");
const slider = document.querySelector(".menu__slider");

window.addEventListener("load", (event) => {
    showPixels();
    showSliderValue();
    showImage();
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