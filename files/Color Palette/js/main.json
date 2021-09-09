const select = selector => document.querySelector(selector);

// Selecting all buttons
const homeBtn = select("#home");
const gradientBtn = select("#gradientBtn");
const materialColorBtn = select("#materialColorBtn");
const colorPickerBtn = select("#colorPickerBtn");
const socialColorBtn = select("#socialColorBtn");

// Selecting all pages
const gradientPage = select("#gradient");
const materialColorPage = select("#materialColor");
const colorPickerPage = select("#colorPicker");
const socialColorPage = select("#socialColor");



// Event listeners
gradientBtn.addEventListener(("click"), () => {
    gradientPage.classList.add("show");
    homePage.classList.remove("show");
    materialColorPage.classList.remove("show");
    colorPickerPage.classList.remove("show");
    materialColorPage.classList.remove("show");
    socialColorPage.classList.remove("show");
})

homeBtn.addEventListener(("click"), ()=> {
    gradientPage.classList.remove("show");
    homePage.classList.add("show");
    materialColorPage.classList.remove("show");
    colorPickerPage.classList.remove("show");
    materialColorPage.classList.remove("show");
    socialColorPage.classList.remove("show");
})

colorPickerBtn.addEventListener(("click"), ()=> {
    gradientPage.classList.remove("show");
    homePage.classList.remove("show");
    materialColorPage.classList.remove("show");
    colorPickerPage.classList.add("show");
    materialColorPage.classList.remove("show");
    socialColorPage.classList.remove("show");
})

materialColorBtn.addEventListener(("click"), ()=> {
    gradientPage.classList.remove("show");
    homePage.classList.remove("show");
    materialColorPage.classList.remove("show");
    colorPickerPage.classList.remove("show");
    materialColorPage.classList.add("show");
    socialColorPage.classList.remove("show");
})

socialColorBtn.addEventListener(("click"), ()=> {
    gradientPage.classList.remove("show");
    homePage.classList.remove("show");
    materialColorPage.classList.remove("show");
    colorPickerPage.classList.remove("show");
    materialColorPage.classList.remove("show");
    socialColorPage.classList.add("show");
})
