const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
  document.getElementById("closeNav").classList.toggle("show");
})
document.getElementById("closeNav").addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
  document.getElementById("closeNav").classList.toggle("show");
})

function superDark() {
  if (document.getElementById("superDark").classList.contains("on")) {
    document.getElementById("anime").classList.add("superDark");
  } else {
    document.getElementById("anime").classList.remove("superDark");
  }
}
superDark();

let lightMode;
document.getElementById("light").classList.contains("on") ? lightMode = true: lightMode = false;
function updateMode() {
  if (lightMode) {
    document.body.classList.add("light");
    document.getElementById("details").classList.add("light");
    if (document.getElementById("msg2") != undefined) document.getElementById("msg2").classList.add("light");
    document.getElementById("nav").classList.add("light");

    let cards = document.getElementsByClassName("card");
    for (let key in cards) {
      if (cards.hasOwnProperty(key)) {
        let card = cards[key];
        card.classList.add("light");
      }
    }

  } else {
    document.body.classList.remove("light");
    document.getElementById("details").classList.remove("light");
    if (document.getElementById("msg2") != undefined) document.getElementById("msg2").classList.remove("light");
    document.getElementById("nav").classList.remove("light");

    let cards = document.getElementsByClassName("card");
    for (let key in cards) {
      if (cards.hasOwnProperty(key)) {
        let card = cards[key];
        card.classList.remove("light");
      }
    }
  }

}

document.getElementById("light").addEventListener("click", () => {
  document.getElementById("light").classList.toggle("on");
  lightMode ? lightMode = false: lightMode = true;
  updateMode();
})
document.getElementById("superDark").addEventListener("click", () => {
  document.getElementById("superDark").classList.toggle("on");
  superDark()
})
let showEcchi = false;
if (document.getElementById("ecchi").classList.contains("on")) showEcchi = true;
document.getElementById("ecchi").addEventListener("click", () => {
  document.getElementById("ecchi").classList.toggle("on");
  if (document.getElementById("ecchi").classList.contains("on")) {
    showEcchi = true;
    if (document.getElementById("search").value == "") {
      draw(data.ecchi);
    } else {
      search();
    }
  } else {
    showEcchi = false;
    search();
  }
})

let images;
function draw(dat) {
  let html = "";

  dat.forEach(d => {
    html += `<div class="card ${d[3].slice(0, d[3].length - 5)}">
    <img src="${d[5]}" alt="Cover" name="${d[1]}"/>
    <div>
    <div class="title"><span class="index">${d[0]}.</span> ${d[1]}</div>
    <div class="aired">Aired: ${d[2]}</div>
    <div class="ep">Episodes: ${d[4]}</div>
    <div class="watched">Watched: ${d[3]}</div>
    </div>
    </div>`;
    //console.log(d[3].slice(0, d[3].length - 5))
  })
  document.getElementById("anime").innerHTML = html;
  updateAndAddEventImg();
  if (lightMode) updateMode();
  if (dat.length == 0) {
    document.getElementById("anime").innerHTML = `
    <div id="msg2">
    <h2 class="message">No Anime found</h2>
    <h4 class="message">And now you know, what to do, don't you >_<</h4>
    </div>`;
    if (lightMode) {
      document.getElementById("msg2").classList.add("light");
    }
  }


}
showEcchi ? draw(data.ecchi): draw(data.main);

function search() {
  let txt = document.getElementById("search").value.toLowerCase();

  let array = [],
  toDraw = [];
  showEcchi ? array = data.main.concat(data.ecchi).slice(0): array = data.main.slice(0);

  array.forEach((elm, idx) => {
    if (elm[1].toLowerCase().includes(txt)) {
      toDraw.push(elm);
    }
  })

  draw(toDraw);

  if (txt == `\\clear`) {
    localStorage.removeItem("password-require");
    document.getElementById("search").value = "";

    draw(data.main);
    details(false);
  }
}
document.getElementById("search").addEventListener("input", search);



function PasswordVerifier() {
  let code = "Fnxmnyjwz";
  function letter(s) {
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a) {
      let c = a.charCodeAt(0);
      switch (c) {
        case 90: return 'A';
        case 122: return 'a';
        default: return String.fromCharCode(c+5);
      }
    });
  }
  function verify(txt) {
    let t = "";
    txt.split("").forEach(char => {
      t += letter(char);
    })
    return t == code;
  }
  let pCont = document.getElementById("pCont");
  let pass = document.getElementById("password");
  pass.addEventListener("input", () => {
    if (verify(pass.value)) {
      localStorage.setItem("password-require", false);
      document.getElementById("pCont").classList.add("hide");
      document.getElementById("ecchi").classList.remove("hide");
      details(true);
    }
  })
}
if (!localStorage.getItem("password-require")) {
  PasswordVerifier();
} else {
  document.getElementById("pCont").classList.add("hide");
  document.getElementById("ecchi").classList.remove("hide");
}

function details(ec) {
  let mainC = ecchiC = movieC = mainE = ecchiE = movieE = totalC = totalE = 0;

  data.main.forEach(elm => {
    if (elm[0].toString().slice(0, 1) != "M") {
      mainC++;
      mainE += elm[4];
    } else {
      movieC++;
      movieE += elm[4];
    }
  })
  if (ec) {
    data.ecchi.forEach(elm => {
      ecchiC++;
      ecchiE += elm[4];
    })
  }

  totalC = mainC + ecchiC;
  totalE = mainE + ecchiE + movieE;
  let html;
  if (ec) {
    html = `
    <div>
    <div class="circle">
    <div>
    <p id="num">${totalC}</p>
    <p>Anime's watched</p>
    </div>
    </div>
    </div>

    <div id="para">
    <p style="font-size:16px; font-weight: bold;" id="t2">Anime Runtime</p>
    <p><span class="t12 bold">Main<sub>${mainC}</sub></span>: <span class="bold">${mainE} EP</span> or about <span class="bold">${Math.floor(mainE/3)} hours</span></p>
    <p><span class="t12 bold">Ecchi<sub>${ecchiC}</sub></span>: <span class="bold">${ecchiE} EP</span> or about <span class="bold">${Math.floor(ecchiE/3)} hours</span></p>
    <p><span class="t12 bold">${movieC} Movies</span> watched of about <span class="bold">${Math.floor(movieE/3)} hours</span></p>
    <p><span class="t12">Gross</span>: <span class="bold">${totalE} Episodes</span> or about <span class="bold">${Math.floor(totalE/3)} hours</span></p>
    </div>`;
  } else {
    html = `
    <div>
    <div class="circle">
    <div>
    <p id="num">${totalC}</p>
    <p>Anime's watched</p>
    </div>
    </div>
    </div>

    <div id="para">
    <p style="font-size:16px; font-weight: bold;">Anime Runtime</p>
    <p><span class="t12 bold">Main<sub>${mainC}</sub></span>: <span class="bold">${mainE} EP</span> or about <span class="bold">${Math.floor(mainE/3)} hours</span></p>
    <p><span class="t12 bold">${movieC} Movies</span> watched of about <span class="bold">${Math.floor(movieE/3)} hours</span></p>
    <p><span class="t12">Gross</span>: <span class="bold">${totalE} Episodes</span> or about <span class="bold">${Math.floor(totalE/3)} hours</span></p>
    </div>`;
  }
  document.getElementById("details").innerHTML = html;
}
details(localStorage.getItem("password-require"));

function updateAndAddEventImg() {
  images = document.getElementsByTagName("img");
  for (let key in images) {
    if (images.hasOwnProperty(key)) {
      let img = images[key];
      img.addEventListener("dblclick", () => {
        showImage(img.src, img.name, img.getBoundingClientRect().x, img.getBoundingClientRect().y - 45);
        onresize = resize;
      })
      img.addEventListener("mousedown", () => {
        showImage(img.src, img.name, img.getBoundingClientRect().x, img.getBoundingClientRect().y - 45);
        onresize = resize;
      })
    }
  }
}


function showImage(url, caption, x, y) {
  let imgSec = document.getElementById("img-section");
  let orientation;
  innerWidth > innerHeight ? orientation = "landscape" : orientation = "potrait";
  imgSec.classList.remove("hide");
  imgSec.classList.add("fadeIn");
  imgSec.innerHTML = `<div id="bg">
  <div>
  <img src="${url}" alt="Anime Image" class="${orientation}Img" id="imgSecImg" style="left: ${x}px; top: ${y}px;"/>
  <i class="fas fa-arrow-left" id="close"></i>
  <div class="caption">
  <a href="https://www.google.com/search?q=${caption}&oq=${caption}" target="_blank">${caption}</a>
  </div>
  </div>
  </div>`;
  document.getElementById("close").addEventListener("click", () => {
    imgSec.classList.remove("fadeIn");
    imgSec.classList.add("hide");
  })
}

function resize() {
  let orientation;
  innerWidth > innerHeight ? orientation = "landscape" : orientation = "potrait";
  document.getElementById("imgSecImg").classList.remove("potraitImg", "landscapeImg");
  document.getElementById("imgSecImg").classList.add(`${orientation}Img`);
  
}
