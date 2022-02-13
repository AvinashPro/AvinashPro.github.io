const data = [
    {
        sNo: 1,
        title: "Platformer Game",
        folderName: "Platformer Game"
    },
    {
        sNo: 2,
        title: "Typing Speedo",
        folderName: "Typing Speedo"
    },
    {
        sNo: 3,
        title: "Color Palette",
        folderName: "Color Palette"
    },
    {
        sNo: 4,
        title: "Circles collision resolution",
        folderName: "2D Collision resolution using Vector Math"
    },
    {
        sNo: 5,
        title: "Pixel Art{Matrice}",
        folderName: "Matrix code generator"
    },
    {
        sNo: 6,
        title: "Parallax background",
        folderName: "Parallax Background"
    },
    {
        sNo: 7,
        title: "Tiles collision resolution",
        folderName: "2D JS Platformer Collision and Response"
    },
    {
        sNo: 8,
        title: "T-rex runner game",
        folderName: "T-rex Runner Game"
    },
    {
        sNo: 9,
        title: "Snake game",
        folderName: "Simple Snake Game"
    },
    {
        sNo: 10,
        title: "To-do list creator",
        folderName: "Simple todo list creator"
    }
]

console.log(data);



let html = "", webName = "https://avinashpro.github.io/";

data.forEach(dt => {
    html +=
    `<div class="code">
        <h3 class="heading">
            <span class="heading-num">#${dt.sNo}</span>
            <span class="heading-title">${dt.title}</span>
        </h3>
        <div class="btn-container">
            <div class="button primary">
                <a href="../../files/${dt.folderName}/index.html" class="btn primary">View</a>
            </div>
            <div class="button secondary">
                
            <a href="https://github.com/AvinashPro/AvinashPro.github.io/tree/main/files/${dt.folderName}" class="btn secondary">Code</a>
            </div>
        </div>
    </div>`;
    
})

document.querySelector("#codes-container").innerHTML = html;
