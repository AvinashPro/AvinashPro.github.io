const data = [
    {
        sNo: 1,
        title: "Grotto Escape Game",
        folderName: "Grotto Escape"
    },
    {
        sNo:2,
        title: "My Anime List",
        folderName: "My Anime List"
    },
    {
        sNo: 3,
        title: "Typing Speedo",
        folderName: "Typing Speedo"
    },
    {
        sNo: 4,
        title: "Color Palette",
        folderName: "Color Palette"
    },
    {
        sNo: 5,
        title: "Circles collision resolution",
        folderName: "2D Collision resolution using Vector Math"
    },
    {
        sNo: 6,
        title: "Pixel Art{Matrice}",
        folderName: "Matrix code generator"
    },
    {
        sNo: 7,
        title: "Parallax background",
        folderName: "Parallax Background"
    },
    {
        sNo: 8,
        title: "Tiles collision resolution",
        folderName: "2D JS Platformer Collision and Response"
    },
    {
        sNo: 9,
        title: "T-rex runner game",
        folderName: "T-rex Runner Game"
    },
    {
        sNo: 10,
        title: "Snake game",
        folderName: "Simple Snake Game"
    },
    {
        sNo: 11,
        title: "To-do list creator",
        folderName: "Simple todo list creator"
    },
    {
        sNo: 12,
        title: "Platformer Game",
        folderName: "Platformer Game"
    },
    {
        sNo: 13,
        title: "2D Shooter Game",
        folderName: "Shooter Game"
    }
]

console.log(data);



let html = "", webName = "https://avinashpro.github.io/";

data.forEach(dt => {
    html +=
    `<div class="code">
    
        <p class="code-title">
            <span class="sz-20">#${dt.sNo}</span>
            <span class="sz-15">${dt.title}</span>
        </p>
            
        <div class="btn-container">
            <div class="btn primary"><a href="../../files/${dt.folderName}/">VIEW</a></div>
            <div class="btn secondary"><a href="https://github.com/AvinashPro/AvinashPro.github.io/tree/main/files/${dt.folderName}">CODE</a></div>
        </div>
        
    </div>`;
    
})

document.querySelector("#codes-container").innerHTML = html;
