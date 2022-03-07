import { 
    GRADIENTS 
} from "./constants.js";

export const showPixels = () => {
    const area = document.querySelector(".area");
    const root = document.documentElement;
    let sideLen = document.querySelector(".menu__slider").value;
    let areaHeight = parseInt(area.offsetHeight);
    let numPixels = sideLen * sideLen;
    root.style.setProperty("--num-pixels", sideLen);
    for (let pixel of document.querySelectorAll(".pixel")) {
        pixel.remove();
    }
    for (let i = 0; i < numPixels; i++) {
        const singlePixel = document.createElement("div");
        singlePixel.classList.add("pixel");
        area.appendChild(singlePixel);
        singlePixel.addEventListener("mouseenter", (event) => {
            event.target.classList.add("pixel--disappear");
        }, false);
    }
};

export const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const menuIcon = document.querySelector(".header__settings");

    if (menu.classList.contains("menu--show")) {
        menu.classList.remove("menu--show");
        menuIcon.classList.remove("header__settings--active");
        menuIcon.innerText = "⚙️";
    } else {
        menu.classList.add("menu--show");
        menuIcon.classList.add("header__settings--active");
        menuIcon.innerText = "✕";
    }
};

export const showSliderValue = () => {
    const slider = document.querySelector(".menu__slider");
    const sliderVal = document.querySelector(".menu__slider-value");
    sliderVal.innerText = slider.value;
};

export const showImage = () => {
    const area = document.querySelector(".area");
    const root = document.documentElement;
    const curGradientItem = document.querySelector(".gradient-item--active");
    root.style.setProperty("--background-gradient", curGradientItem.style.background);
    area.classList.add("area--gradient");
};

export const showGradientSelection = (event) => {
    const gradientItems = document.querySelectorAll(".gradient-item");
    for (let item of gradientItems) {
        if  (item.classList.contains("gradient-item--active")) {
            item.classList.remove("gradient-item--active");
        }
    }
    event.target.classList.add("gradient-item--active");
};

export const addGradientChoices = () => {
    const gradientItems = document.querySelector(".gradient-items");
    for (let i = 0; i < GRADIENTS.length; i++) {
        const gradientItem = document.createElement("li");
        gradientItem.classList.add("gradient-item");
        gradientItem.style.background = GRADIENTS[i];
        if (i == 0) {
            gradientItem.classList.add("gradient-item--active");
        } 
        gradientItems.appendChild(gradientItem);
        gradientItem.addEventListener("click", (event) => {
            updateImage(event);
        }, false);
    }
};

const updateImage = (event) => {
    const root = document.documentElement;
    root.style.setProperty("--background-gradient", event.target.style.background);
};

export const resetArea = () => {
    const invisiblePixels = document.querySelectorAll(".pixel--disappear");
    for (let i = 0; i < invisiblePixels.length; i++) {
        invisiblePixels[i].classList.remove("pixel--disappear")
    }
};

