export const showPixels = () => {
    let area = document.querySelector(".area");
    let root = document.documentElement;
    let input = 50;


    let areaHeight = parseInt(area.offsetHeight);
    let numPixels = input * input;

    root.style.setProperty("--num-pixels", input);
    area.classList.add("area--pixelated");

    for (let i = 0; i < numPixels; i++) {
        let singlePixel = document.createElement("div");
        singlePixel.classList.add("pixel");
        area.appendChild(singlePixel);
    }
};