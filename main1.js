
const data = [
    {
        repo: "Typing Speedo",
        page: true
    },
    {
        repo: "Platformer Game",
        page: true
    },
    {
        repo: "Parallax Background",
        page: true
    },
    {
        repo: "2D JS Platformer Collision and Response",
        page: true
    },
    {
        repo: "2D Collision resolution using Vector Math",
        page: true
    },
    {
        repo: "Color Palette",
        page: true
    },
    {
        repo: "Simple todo list creator",
        page: true
    },
    {
        repo: "Simple Snake Game",
        page: true
    },
    {
        repo: "T-rex Runner Game",
        page: true
    },
    {
        repo:"Matrix code generator",
        page: true
    }
];




let html = "";
let githubProfile = "https://github.com/AvinashPro/";
data.forEach(obj => {
    if(obj.page) {
        html += 
        `
            <div class="card">
                <div>
                    <h2 class="project-name">${obj.repo}</h2>
                    <a href="files/${obj.repo}/index.html" class="button secondary-btn">View</a>
                    <a href="${githubProfile}avinashpro.github.io/tree/main/files/${obj.repo}" class="button primary-btn">Code</a>
                </div>
            </div>
        `;
    }
    
    else {
        html += 
        `
            <div class="card">
                <div>
                    <h2 class="project-name">${obj.repo}</h2>
                    <a href="${githubProfile}avinashpro.github.io/tree/main/files/${obj.repo}" class="button primary-btn">Code</a>
                </div>
            </div>
        `;
    }
})

document.querySelector("#projects-container").innerHTML += html;
