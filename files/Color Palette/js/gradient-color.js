async function fetchColor() {
    const response = await fetch("json/gradient-color.json");
    const data = await response.json();
    //console.log(data);
    return data;
}

fetchColor().then(data => {
    let html = "";
    data.forEach(color => {
        html += 
        `
        <div class="colorContainer">
            <div class="colorBox" style="background:${color.css};"></div>
            <div class="colorName">
                <span>${color.color1}</span>
                <span>${color.color2}</span>
                <span>${color.color3}</span>
            </div>
        </div>
        `;
    })
    gradientPage.innerHTML += html;
})
