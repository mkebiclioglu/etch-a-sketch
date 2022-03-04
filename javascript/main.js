import { showPixels } from "./functions.js";

let githubIcon = document.querySelector(".icon-wrapper");

window.addEventListener("load", (event) => {
    showPixels();
});

githubIcon.addEventListener("mouseenter", ( event ) => {
    event.target.classList.add("fa-flip");
}, false);

githubIcon.addEventListener("mouseleave", ( event ) => {
    event.target.classList.remove("fa-flip");
});