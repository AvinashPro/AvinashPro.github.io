const data = [
    {
        sNo: 1,
        title: "Platformer Game",
        folderName: "2D Platformer Game"
    },
    {
        sNo: 2,
        title: "Typing Speedo",
        folderName: "Typing Speedo"
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
