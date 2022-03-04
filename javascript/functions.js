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

export const showSliderValue = () => {
    const slider = document.querySelector(".menu__slider");
    const sliderVal = document.querySelector(".menu__slider-value");
    sliderVal.innerText = slider.value;
};

export const showImage = () => {
    const area = document.querySelector(".area");
    area.classList.add("area--gradient");
};

const roundCorners = (sideLen) => {
    
};

