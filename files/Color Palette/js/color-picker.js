const colorPickerBox = select("#colorPickerBox");

const redSlider = select("#red");
const greenSlider = select("#green");
const blueSlider = select("#blue");
const customColor = select("#customColor");

const blueValueElm = select("#blueValue");
const greenValueElm = select("#greenValue");
const redValueElm = select("#redValue");

let red = redValueElm.innerHTML;
let green = greenValueElm.innerHTML;
let blue = blueValueElm.innerHTML;
colorPickerBox.style.background = `rgb(${red}, ${green}, ${blue})`;


redSlider.addEventListener("input", ()=>{
    redValueElm.innerHTML = redSlider.value;
    red = redSlider.value;
    colorPickerBox.style.background = `rgb(${red}, ${green}, ${blue})`;
    customColor.value = `rgb(${red}, ${green}, ${blue})`;
})
greenSlider.addEventListener("input", ()=>{
    greenValueElm.innerHTML = greenSlider.value;
    green = greenSlider.value;
    colorPickerBox.style.background = `rgb(${red}, ${green}, ${blue})`;
    customColor.value = `rgb(${red}, ${green}, ${blue})`;
})
blueSlider.addEventListener("input", ()=>{
    blueValueElm.innerHTML = blueSlider.value;
    blue = blueSlider.value;
    colorPickerBox.style.background = `rgb(${red}, ${green}, ${blue})`;
    customColor.value = `rgb(${red}, ${green}, ${blue})`;
})



customColor.addEventListener("input", ()=>{
    colorPickerBox.style.background = customColor.value;
})
