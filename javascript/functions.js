export const showPixels = (sideLen) => {
    const area = document.querySelector(".area");
    const root = document.documentElement;

    let areaHeight = parseInt(area.offsetHeight);
    let numPixels = sideLen * sideLen;

    root.style.setProperty("--num-pixels", sideLen);
    area.classList.add("area--pixelated");

    for (let i = 0; i < numPixels; i++) {
        const singlePixel = document.createElement("div");
        singlePixel.classList.add("pixel");
        area.appendChild(singlePixel);
    }
};

export const showSliderValue = () => {
    const slider = document.querySelector(".menu__slider");
    const sliderVal = document.querySelector(".menu__slider-value");
    sliderVal.innerText = slider.value;
};