
const data = [
    {
        repo: "Typing Speedo",
        page: true
    },
    {
        repo: "Simple todo list creator",
        page: true
    },
    {
        repo: "Sweet alert",
        page: false
    },
    {
        repo: "T-rex Runner Game",
        page: true
    },
];




let html = "";
let githubProfile = "https://github.com/avinashprogrammer/";
data.forEach(obj => {
    if(obj.page) {
        html += 
        `
            <div class="card">
                <div>
                    <h2 class="project-name">${obj.repo}</h2>
                    <a href="files/${obj.repo}/index.html" class="button secondary-btn">View</a>
                    <a href="${githubProfile}avinashprogrammer.github.io/tree/main/files/${obj.repo}" class="button primary-btn">Code</a>
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
                    <a href="${githubProfile}avinashprogrammer.github.io/tree/main/files/${obj.repo}" class="button primary-btn">Code</a>
                </div>
            </div>
        `;
    }
})

document.querySelector("#projects-container").innerHTML += html;
