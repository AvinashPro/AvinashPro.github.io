async function fetchSocialColor() {
    const response = await fetch("json/social-color.json");
    const data = await response.json();
    return data;
}
fetchSocialColor().then(data => {
    const socialColorElm = select("#socialColor");
    let scHtml = "";
    data.forEach(elm => {
        scHtml +=
        `<div class="colorContainer">
            <div class="colorBox" style="background: ${elm.color};"></div>
            <div class="colorName">
                <span>${elm.name}</span>
                <span>&mdash;</span>
                <span>${elm.color}</span>
            </div>
        </div>`;
    })
    socialColorElm.innerHTML += scHtml;
})
