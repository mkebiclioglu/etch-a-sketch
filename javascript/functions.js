export const showPixels = () => {
    let area = document.querySelector(".area");
    let root = document.documentElement;

    let areaHeight = parseInt(area.offsetHeight);
    let numPixels = 11*11;

    root.style.setProperty("--num-pixels", 11);
    area.classList.add("area--pixelated");

    for (let i = 0; i < numPixels; i++) {
        let singlePixel = document.createElement("div");
        singlePixel.classList.add("pixel");
        area.appendChild(singlePixel);
    }
};