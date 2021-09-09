async function fetchMaterialColor() {
    const response = await fetch("json/material-color.json");
    const data = response.json();
    return data;
}
async function fetchColorPanel() {
    const response = await fetch("json/color-panel.json");
    const data = response.json();
    return data;
}

fetchMaterialColor().then(materialC => {
    fetchColorPanel().then(colorP => {
        // Populating color in panel box
        const colorPanelElm = select("#colorPanel");
        let colorPanelHtml = "";

        colorP.forEach(color => {
            colorPanelHtml += `<div class="colorPanelBox" style="background:${color};"></div>`;
        })
        colorPanelElm.innerHTML += colorPanelHtml;

        // Populating material color in material box
        const colorContentElm = select("#colorContent");
        let colorContentHtml = "";

        // All arrays of tabs
        let tab1Arr = materialC.tab1;
        let tab2Arr = materialC.tab2;
        let tab3Arr = materialC.tab3;
        let tab4Arr = materialC.tab4;
        let tab5Arr = materialC.tab5;
        let tab6Arr = materialC.tab6;
        let tab7Arr = materialC.tab7;
        let tab8Arr = materialC.tab8;
        let tab9Arr = materialC.tab9;
        let tab10Arr = materialC.tab10;
        let tab11Arr = materialC.tab11;
        let tab12Arr = materialC.tab12;
        let tab13Arr = materialC.tab13;
        let tab14Arr = materialC.tab14;
        let tab15Arr = materialC.tab15;
        let tab16Arr = materialC.tab16;
        let tab17Arr = materialC.tab17;
        let tab18Arr = materialC.tab18;
        let tab19Arr = materialC.tab19;


        let fHtml = "";
        let tab1Html = "";
        let tab2Html = "";
        let tab3Html = "";
        let tab4Html = "";
        let tab5Html = "";
        let tab6Html = "";
        let tab7Html = "";
        let tab8Html = "";
        let tab9Html = "";
        let tab10Html = "";
        let tab11Html = "";
        let tab12Html = "";
        let tab13Html = "";
        let tab14Html = "";
        let tab15Html = "";
        let tab16Html = "";
        let tab17Html = "";
        let tab18Html = "";
        let tab19Html = "";


        tab1Arr.forEach(bg => {
            tab1Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab1Html = `<div class="tab">${tab1Html}</div>`;

        tab2Arr.forEach(bg => {
            tab2Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab2Html = `<div class="tab">${tab2Html}</div>`;

        tab3Arr.forEach(bg => {
            tab3Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab3Html = `<div class="tab">${tab3Html}</div>`;

        tab4Arr.forEach(bg => {
            tab4Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab4Html = `<div class="tab">${tab4Html}</div>`;

        tab5Arr.forEach(bg => {
            tab5Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab5Html = `<div class="tab">${tab5Html}</div>`;

        tab6Arr.forEach(bg => {
            tab6Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab6Html = `<div class="tab">${tab6Html}</div>`;

        tab7Arr.forEach(bg => {
            tab7Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab7Html = `<div class="tab">${tab7Html}</div>`;

        tab8Arr.forEach(bg => {
            tab8Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab8Html = `<div class="tab">${tab8Html}</div>`;

        tab9Arr.forEach(bg => {
            tab9Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab9Html = `<div class="tab">${tab9Html}</div>`;

        tab10Arr.forEach(bg => {
            tab10Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab10Html = `<div class="tab">${tab10Html}</div>`;

        tab11Arr.forEach(bg => {
            tab11Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab11Html = `<div class="tab">${tab11Html}</div>`;

        tab12Arr.forEach(bg => {
            tab12Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab12Html = `<div class="tab">${tab12Html}</div>`;

        tab13Arr.forEach(bg => {
            tab13Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab13Html = `<div class="tab">${tab13Html}</div>`;

        tab14Arr.forEach(bg => {
            tab14Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab14Html = `<div class="tab">${tab14Html}</div>`;

        tab15Arr.forEach(bg => {
            tab15Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab15Html = `<div class="tab">${tab15Html}</div>`;

        tab16Arr.forEach(bg => {
            tab16Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab16Html = `<div class="tab">${tab16Html}</div>`;

        tab17Arr.forEach(bg => {
            tab17Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab17Html = `<div class="tab">${tab17Html}</div>`;

        tab18Arr.forEach(bg => {
            tab18Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab18Html = `<div class="tab">${tab18Html}</div>`;

        tab19Arr.forEach(bg => {
            tab19Html += `<div class="colorContainer"><div class="colorBox" style="background:${bg};"></div><div class="colorName"><span>${bg}</span></div></div>`;
        })
        tab19Html = `<div class="tab">${tab19Html}</div>`;

        fHtml = `${tab1Html}
        ${tab2Html}
        ${tab3Html}
        ${tab4Html}
        ${tab5Html}
        ${tab6Html}
        ${tab7Html}
        ${tab8Html}
        ${tab9Html}
        ${tab10Html}
        ${tab11Html}
        ${tab12Html}
        ${tab13Html}
        ${tab14Html}
        ${tab15Html}
        ${tab16Html}
        ${tab17Html}
        ${tab18Html}
        ${tab19Html}`;
        colorContentElm.innerHTML = fHtml;

        let colorPanelBox = document.querySelectorAll(".colorPanelBox");
        let tabs = document.querySelectorAll(".tab");
        tabs[0].classList.add("tab-active");
        colorPanelBox[0].classList.add("box-active");

        colorPanelBox.forEach((box, index) => {
            box.addEventListener("click", ()=> {
                const activeColorPanelBox = document.querySelectorAll(".box-active");
                const activeTab = document.querySelectorAll(".tab-active");

                activeTab[0].classList.remove("tab-active");
                activeColorPanelBox[0].classList.remove("box-active");

                box.classList.add("box-active");
                tabs[index].classList.add("tab-active");
            })
        })
        
        // This code is used to copy colors
        const colorBox = document.querySelectorAll(".colorBox");
        console.log(colorBox);

        colorBox.forEach(box => {
            box.addEventListener("click", e => {
                let color = box.style.background;
                let textarea = document.createElement("textarea");
                textarea.setAttribute("readonly", "true");
                textarea.setAttribute("class", "temporary-textarea")
                textarea.innerHTML = color;
                document.body.appendChild(textarea);

                textarea.select();
                document.execCommand("copy");

                let alertElm = select("#alert");
                alertElm.style.opacity = 1;
                alertElm.style.transform = `translateY(-10px)`;
                setTimeout(() => {
                    alertElm.style.opacity = 0;
                    alertElm.style.transform = `translateY(10px)`;
                }, 1000)
            })
        })

    })
})
