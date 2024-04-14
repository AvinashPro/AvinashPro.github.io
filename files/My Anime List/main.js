document.getElementById("ecchi").addEventListener("click", () => {
  document.getElementById("ecchi").classList.add("active");
  document.getElementById("main").classList.remove("active");
  updateList();
})
document.getElementById("main").addEventListener("click", () => {
  document.getElementById("ecchi").classList.remove("active");
  document.getElementById("main").classList.add("active");
  updateList();
})

function updateList() {
  let main,
  d;
  if (document.getElementById("main").classList.contains("active")) {
    main = true;
    d = data.main;
  } else {
    main = false;
    d = data.ecchi;
  }

  let html = "";
  d.forEach(elm => {
    html += `<div class="anime">
    <div>
    <img src="${elm[5]}">
    </div>
    <div>
    <h3 class="title">${elm[1]}</h3>
    <p>Index: ${elm[0]}</p>
    <p>Aired: ${elm[2]}</p>
    <p>Watched: ${elm[3]}</p>
    <p>Total Episodes: ${elm[4]}</p>
    </div>
    </div>
    <div class="border"></div>`;

  })

  if (d) document.getElementById("mainList").innerHTML = html;
  else document.getElementById("ecchiList").innerHTML = html;
}

updateList();
