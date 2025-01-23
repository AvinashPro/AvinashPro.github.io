const { log } = console;
function hamburger() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const closeNav = document.getElementById("closeNav");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
    closeNav.classList.toggle("show");
  })
  closeNav.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
    closeNav.classList.toggle("show");
  })
}
hamburger();

let me = {
  user: {
    name: "Avinash",
    pfp: "res/pfp.jpg",
    passcode: "Oyvewlmxem"
  },
  data: data
};
me.data.all = me.data.main.concat(me.data.ecchi);
let settings = {
  theme: "dark",
  sort: "default",
  layout: "normal",
  data: data,
  ecchi: false,
  pMode: false,
  user: me.user,
  users: {
    guest: {},
    online: {}
  },
  eyeComfortMode: false
};



function retrieveSettings() {
  if(localStorage.getItem("mal-setting") != null) {
    settings = JSON.parse(localStorage.getItem("mal-setting"));
  }
}
function saveSettings() {
  localStorage.setItem("mal-setting", JSON.stringify(settings));
}

retrieveSettings();

function handleMyMode() {
  if(!settings.pMode) {
    settings.user = me.user;
    settings.data = me.data;
    
    let personalModeBtn = document.getElementById("personalModeBtn");
    personalModeBtn.addEventListener("click", () => {
      document.getElementById("personalMode").classList.toggle("on");
      settings.pMode = true;
      settings.data = { main: [], ecchi: [] };
      settings.user = null;
      settings.ecchi = false;
      saveSettings();
      window.location.reload();
    })
    
    document.getElementById("signOutBtn").classList.add("fadeOut");
    //document.querySelector("#rearrangeBtn").style.display = "none";
    //handleAnimeDetailsPage();
    
  } else {
    document.getElementById("personalModeCont").remove();
  }
}

//handleMyMode();
if(settings.eyeComfortMode) {
  document.getElementById("eye-comfort-filter").classList.add("filterShow");
}

function updateProfile() {
  let profileName = document.getElementById("profileName"),
  pfpElm = document.getElementById("pfp"),
  profileEdit = document.getElementById("profileEdit"),
  profileSave = document.getElementById("profileSave"),
  changeNavPfp = document.getElementById("changeNavPfp"),
  navPfpInput = document.getElementById("nav_pfp_input");
  
  let wlUserNameElm = document.querySelector("#wlUserNameElm");
  
  if(settings.user) {
    profileName.innerHTML = wlUserNameElm.innerHTML = settings.user.name;
    pfpElm.src = settings.user.pfp;
  }
  
  if(settings.guest) {
    
    //fadeOutElm(profileEdit);
    fadeInElm(profileEdit);
    
    profileEdit.addEventListener("click", () => {
      
      fadeOutElm(profileEdit);
      fadeInElm(profileSave);
      fadeInElm(changeNavPfp)
      
      profileEdit.style.display = "none";
      profileSave.style.display = "block";
      profileName.contentEditable = true;
      profileName.classList.add("editable");
      
      navPfpInput.addEventListener("change", () => {
        const file = navPfpInput.files[0];
       if(file) {
         const fileReader = new FileReader();
         fileReader.onload = e => {
          pfpElm.setAttribute('src', e.target.result); 
          settings.user.pfp = settings.users.guest[settings.user.name].pfp = e.target.result;
          saveSettings();
         }
        fileReader.readAsDataURL(file);
       }
    
     })
      
    })
    
    profileSave.addEventListener("click", () => {
      
      profileName.contentEditable = false;
      profileName.classList.remove("editable");
      fadeOutElm(profileSave);
      fadeOutElm(changeNavPfp);
      fadeInElm(profileEdit);
      
      
      //imageToUri(document.getElemeprofileName
      let pArr = profileName.innerText.split("\\");
      
      let oldName = settings.user.name;
      let newName = pArr[0];
      if(oldName != newName) delete Object.assign(settings.users.guest, {[newName]: settings.users.guest[oldName] })[oldName]; 
      
      settings.users.guest[newName].name = settings.user.name = newName;
      
      if(pArr[1]) {
        settings.user.pfp = settings.users.guest[settings.user.name].pfp = pfpElm.src = pArr[1];
      }
      
      profileName.innerHTML = wlUserNameElm.innerHTML = newName;
      saveSettings();
      
      
    })
    
    
  }
}

/*if(settings.user == null) {
  document.querySelector("#nav").style.position = "absolute";
}*/
/*function imageToUri(url, callback) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    var base_image = new Image();
    base_image.src = url;
    base_image.onload = function() {
        canvas.width = base_image.width;
        canvas.height = base_image.height;

        ctx.drawImage(base_image, 0, 0);
    
        callback(canvas.toDataURL('image/png'));

        canvas.remove();
    }
}*/

/*imageToUri('res/logo.png', function(uri) {
    pfp.src = uri;
});*/



function fadeOutElm(elm) {
  elm.classList.remove("fadeIn");
  elm.classList.add("fadeOut");
}
function fadeInElm(elm) {
  elm.classList.remove("fadeOut");
  elm.classList.add("fadeIn");
}

//let profileName = document.getElementById("profileName");
//let pfp = document.getElementById("pfp");

//function handleGuestMode() {
  //retrieveSettings();
 // if(settings.guest) {
    /*
    let newUser = {
      name: "Shinohara",
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhGd_vVtIUuB8i7EinT7BOQRTBF-lr3R0xR_y9vdONEjPxiJKYRNBoHM&s=10"
    };
    */
    
    
    /*
    let guestList = Object.keys(settings.users.guest);
    //onlineList = Object.keys(settings.users.online);
    
    if(guestList.length == 0) {
      settings.users.guest[newUser.name] = settings.user = newUser;
    } else {
      settings.user = settings.users.guest[guestList[0]];
    }
    
    log(settings)
    */
    
    /*
    // first time
    if(settings.user == null) {
      // current user
      settings.user = guestUser;
      
      settings.users = {
        guest: {},
        online: {}
      };
      settings.users.guest[guestUser.name] = {
        name: guestUser.name,
        pfp: guestUser.pfp,
        data: {
          main: [],
          ecchi: []
        }
      };
      
      saveSettings();
      retrieveSettings();
      updateProfile();
    }
    
    settings.data = settings.users.guest[settings.user.name].data;
    */
    
 // }
//}

//handleGuestMode();
handleMyMode();
updateProfile();


/*
if(settings.pMode) {
  document.getElementById("personalModeCont").remove();
} else {
  let personalModeBtn = document.getElementById("personalModeBtn");
  personalModeBtn.addEventListener("click", () => {
    document.getElementById("personalMode").classList.toggle("on");
    settings.pMode = true;
    if(settings.data == data) {
      settings.data = {
        main: [],
        ecchi: []
      };
    }
    settings.user = null;
    saveSettings();
    window.location.reload();
  })
}
*/


function personalModeUpdate() {

let btnOpt = document.getElementById("btnOpt");
let optDrop = document.getElementById("option-dropdown");

if(settings.pMode) {
  let navLinks = document.getElementById("nav-links");
  let elm = navLinks.children[2];
  
  let li = document.createElement("li");
  li.classList.add("dropdown-container");
  li.id = "sort-dropdown";
  li.innerHTML = `
    <div class="a dropdown-element">
      <div>
        <i class="fa-solid fa-arrow-down-short-wide icon"></i>
        <p>Sort</p>
      </div>
      <div>
        <span id="sort-dropdown-text" class="dropdown-text">Default</span>
        <i class="fa-solid fa-angle-down icon"></i>
      </div>
    </div>`;
  
  navLinks.insertBefore(li, elm);
  
  let btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerHTML = `<i class="fas fa-plus"></i> Add Anime`;
  btn.id = "addAnimeBtn";
  btnOpt.insertBefore(btn, optDrop);
  
  let addAnimePage = document.getElementById("addAnimePage");
  
  document.getElementById("addAnimeBtn").addEventListener("click", () => {
    
    hideNavBar();
    
    saveAnimeCurrentType = "add";
    setAddAnimeFieldVal("", "", "", "", "", "", [], "none")
    
    
    //addAnimeCont.classList.remove("elementHIDE");
    //addAnimeCont.classList.add("element-show");
    addAnimeCont.classList.add("showPage-type2");
    addAnimeCont.classList.remove("hidePage-type2");
    addAnimePage.classList.remove("hidePage");
    addAnimePage.classList.add("showPage");
    //addAnimeToLocalStorage();
  })
  document.getElementById("addAnimeContCancelBtn").addEventListener("click", () => {
    
    showNavBar();
    
    //addAnimeCont.classList.remove("element-show");
    //addAnimeCont.classList.add("elementHIDE");
    //addAnimeCont.classList.remove("showPage-type2")
    addAnimeCont.classList.add("hidePage-type2");
    //addAnimePage.classList.remove("showPage");
    addAnimePage.classList.add("hidePage");
    //addAnimeCont.classList.add("element-hide");
  })
  
  let addAnimeSaveBtn = document.getElementById("addAnimeSaveBtn");
  addAnimeSaveBtn.addEventListener("click", () => {
    
    addMessage(document.getElementById("addAnime_name").value, "anime added successfully!", "res/add.png");
    
    saveAnimeToLocalStorage();
    //addAnimeCont.classList.remove("element-show");
    //addAnimeCont.classList.add("elementHIDE");
    addAnimeCont.classList.add("hidePage-type2");
    addAnimePage.classList.add("hidePage");
    
    showNavBar();
    
  })
  
} else {
  let sortDrop = document.createElement("div");
  sortDrop.classList.add("dropdown-container", "sort-dropdown-pers");
  sortDrop.id = "sort-dropdown";
  sortDrop.innerHTML = `
  <button class="button dropdown-element" id="sort-btn">
    <i class="fa-solid fa-arrow-down-short-wide icon"></i>
    <span>Sort</span>
  </button>`;
  
  
  btnOpt.insertBefore(sortDrop, optDrop);
  createRipple(document.getElementById("sort-btn"));
}

}

personalModeUpdate();




const animeCont = document.getElementById("anime");
 
function updateAnimeCard(data, showIndex = true) {
  let html = "";
  //animeCont.data = data;
  data.forEach(item => {
    
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], month = null, array = item[3].split(" ");
    array.forEach((k, idx) => {
      if(monthNames.includes(k) && month == null) {
        month = k;
      }
    })
    if(month === null) month = "May";
    
    html += `<div class="card ${month} card-${item[0]}"> 
    <div class="card-img-parent">
    <img src="${item[5]}" alt="Cover" name="${item[1]}"/></div>
    <div>`
    
    if(showIndex) {
      html += `<div class="title"><span class="index">${item[0]}.</span> ${item[1]}</div>`;
    } else {
      html += `<div class="title">${item[1]}</div>`;
    }
    html += `
    <div class="extra">
    <div class="aired"><span>Aired:</span> ${item[2]}</div>
    <div class="ep"><span>Episodes:</span> ${item[4]}</div>
    <div class="watched"><span>Watched:</span> ${item[3]}</div>
    </div>`
    if(settings.pMode) {
      html += `
        <div class="side ${month}">
          <button class="button sideBtn sideEditBtn"><i class="fa-solid fa-pen"></i></button>
          <button class="button sideBtn sideDeleteBtn"><i class="fa-solid fa-trash"></i></button>
          <button class="button sideBtn sideInsertDownBtn"><i class="fa-regular fa-square-caret-down"></i></button>
        </div>`;
    }
    
    html += `
    </div>
    </div>`;
    
  })
  
  animeCont.innerHTML = html;
  
  addLandscapeClassToImgs(animeCont.querySelectorAll("img"));
  
  handleImgEventList();
  if(!settings.pMode) {
    handleAnimeDetailsPage();
  }
  
  if(settings.pMode) {
    let sideBtns = document.getElementsByClassName("sideBtn");
    for(let key in sideBtns) {
      if(sideBtns.hasOwnProperty(key)) {
        createRipple(sideBtns[key]);
      }
    }
    handleSide();
  }
  
}

function addLandscapeClassToImgs(imgs) {
  imgs.forEach(img => {
    if(img.naturalWidth > img.naturalHeight) img.classList.add("landscape");
  })
}

let details = document.getElementById("details");
function updateDetails(data) {
  let html = null;
  let ep = {
    main: 0,
    movie: 0
  };
  let count = {
    main: 0,
    movie: 0
  }
  
  data.main.forEach(item => {
    let e = item[4];
    if(item[0].toString().slice(0, 1) != "M") {
      ep.main += e;
      count.main += 1;
    }
    else {
      ep.movie += e;
      count.movie += 1;
    }
  })
  if(data.ecchi != undefined && settings.ecchi) {
    ep.ecchi = count.ecchi = 0;
    data.ecchi.forEach(item => {
      ep.ecchi += item[4];
      count.ecchi += 1;
    })
    count.total = count.main + count.ecchi;
    ep.total = ep.main + ep.ecchi + ep.movie;
  } else {
    ep.total = ep.main + ep.movie;
    count.total = count.main;
  }
  
  
  
  html = `
    <div>
    <div class="circle">
    <div>
    <p id="num">${count.total}</p>
    <p>Anime's watched</p>
    </div>
    </div>
    </div>

    <div id="para">
    <p style="font-size:16px; font-weight: bold;" id="t2">Anime Runtime</p>`;
    
  if(count.main != 0) {
    html += `<p><span class="t12 bold">Main<sub>${count.main}</sub></span>: <span class="bold">${ep.main} EP</span> or about <span class="bold">${Math.floor(ep.main/3)} hours</span></p>`;
  }
  
  if(data.ecchi != undefined && settings.ecchi && count.ecchi!=0) {
    html += `
      <p><span class="t12 bold">Ecchi<sub>${count.ecchi}</sub></span>: <span class="bold">${ep.ecchi} EP</span> or about <span class="bold">${Math.floor(ep.ecchi/3)} hours</span></p>
    `;
  }
  if(count.movie != 0) {
    html += `
    <p><span class="t12 bold">${count.movie} Movies</span> watched of about <span class="bold">${Math.floor(ep.movie/3)} hours</span></p>`;
  }
  html += `<p><span class="t12">Overall</span>: <span class="bold">${ep.total} Episodes</span> or about <span class="bold">${Math.floor(ep.total/3)} hours</span></p>
    </div>`;
    
    
  details.innerHTML = html;
    
  if(data.main.length == 0 && data.ecchi.length == 0) {
    details.style.display = "none";
  } else {
    details.style.display = "flex";
  }
}

let animeDetailsCont = document.querySelector("#animeDetailsCont"),
animeDetailsPage = document.querySelector("#animeDetailsPage");

function handleAnimeDetailsPage() {
  let cards = document.querySelectorAll(".card");
  
  
  cards.forEach(card => {
    let t = {start:{}, current:{}};
    
    card.addEventListener("touchstart", e => {
      t.start.x = e.touches[0].clientX;
      t.start.y = e.touches[0].clientY;
    })
    
    card.addEventListener("touchmove", e => {
      if(animeDetailsCont.classList.contains("showPage-type3")==false||animeDetailsCont.classList.contains("hidePage-type3")) {
        
        t.current.x = e.touches[0].clientX;
        t.current.y = e.touches[0].clientY;
        t.dx = t.current.x - t.start.x;
        t.dy = t.current.y - t.start.y;
      
      
        if(t.dx > 50 && Math.abs(t.dy) < 10) {
        /*animeDetailsPage.classList.remove("hidePage-type2");
        animeDetailsPage.classList.add("showPage-type2");
        animeDetailsCont.classList.remove("hidePage-type3");
        animeDetailsCont.classList.add("showPage-type3");*/
         // log(card.querySelector("img").name)
          hAnimePage(card);
        }
      }
    })
    
  })
}

function hAnimePage(card) {
  animeDetailsPage.classList.remove("hidePage-type2");
  animeDetailsPage.classList.add("showPage-type2");
  animeDetailsCont.classList.remove("hidePage-type3");
  animeDetailsCont.classList.add("showPage-type3");
  
  let item;
  let img = card.querySelector("img");
  settings.data.main.concat(settings.data.ecchi).forEach((a, i) => {
    if(img.name == a[1]) {
      item = a;
    }
  })
  
  
  let title = animeDetailsPage.querySelector("h2");
  title.innerHTML = item[1];
  title.innerHTML += `<span style="font-size:8px;font-weight:300;"><sub>${item[0]}</sub></span>`
  if(item[1].length > 17) {
    title.style.fontSize = "16px";
  } else {
    title.style.fontSize = "1.5em"
  }
  animeDetailsPage.querySelector("#detMainCover").src = animeDetailsPage.querySelector("#detTopBg").src = item[5];
  let parent = animeDetailsPage.querySelector("#detMisc");
  let html;
  html = `
    <div><span>Aired:</span><span>${item[2]}</span></div>
    <div><span>Watched:</span><span>${item[3]}</span></div>`;
    //<div><span>Episodes</span><span>${item[4]}</span></div>`;
  
  if(item[6]) {
    html += `<div><span>Genre:</span><span>${getString(item[6])}</span></div>`;
  } else {
    //parent.innerHTML += ``;
  }
  
  html += `<div id="detBot">`
  
  if(item[7]) {
    html += `
    <div class="alignVert"><span>${item[7]}</span><span><img src="res/star.png"/></span></div>
    `;
  } else {
    html += `<div class="alignVert"><span>---</span><span><img src="res/star.png"/></span></div>`;
  }
  
  html += `<div class="alignVert"><span>${item[4]} ep</span><span><img src="res/stop-watch.png"/></span></div>`;
  
  
  html += `</div>`;
  
  parent.innerHTML = html;
  //log(card.querySelector("img"))
  
}

function handleSide() {
  let cards = document.querySelectorAll(".card");
  //for(let key in cards) {
   // if(cards.hasOwnProperty(key) { 
  cards.forEach(card => {
    
  
     // let card = cards[key];
      let t = {
        start: {x: 0, y: 0},
        current: {x: 0, y: 0},
        dx: 0,
        dy: 0
      };
      let side = card.getElementsByClassName("side")[0];
      
      card.addEventListener("touchstart", e => {
        t.start = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      })
      card.addEventListener("dblclick", () => {
        document.querySelectorAll(".sideShow").forEach(el => {
          if(el != side) {
          el.classList.remove("sideShow");
          el.classList.add("sideHide");
          }
        });
        side.classList.toggle("sideShow");
        //side.classList.toggle("sideHide");
      })
      let justClosed = false;
      card.addEventListener("touchmove", e => {
        t.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        t.dx = t.current.x - t.start.x;
        t.dy = t.current.y - t.start.y;
      
      
        if(t.dx < -50 && Math.abs(t.dy) < 10) {
          //side.classList.remove("sideHide"); 
          document.querySelectorAll(".sideShow").forEach(el => {
          el.classList.remove("sideShow");
          el.classList.add("sideHide");
        });
          side.classList.add("sideShow");
        } else if(t.dx > 50 && Math.abs(t.dy) < 10) {
          //let justClosed = false;
          if(side.classList.contains("sideShow")) {
            side.classList.remove("sideShow");
            side.classList.add("sideHide");
            justClosed = true;
         } else {
           
            /*animeDetailsCont.classList.remove("hidePage-type3");
            animeDetailsCont.classList.add("showPage-type3");
            animeDetailsPage.classList.remove("hidePage-type2");
            animeDetailsPage.classList.add("showPage-type2");*/
            if(!justClosed) {
             hAnimePage(card);
            }
          }
          
        }
        
      })
      
      card.addEventListener("touchend", e => {
        justClosed = false;
      })
      
      
      let sideEditBtn = side.querySelector(".sideEditBtn"),
      sideDeleteBtn = side.querySelector(".sideDeleteBtn"),
      sideInsertDownBtn = side.querySelector(".sideInsertDownBtn");
      
      let addAnimeCont = document.getElementById("addAnimeCont");
      
      let name = card.querySelector("img").name;
      let type, idx;
  
      settings.data.main.forEach((anime, i) => {
        if(anime[1] === name) {
          type = "main";
          idx = i;
        }
      })
      settings.data.ecchi.forEach((anime, i) => {
        if(anime[1] === name) {
          type = "ecchi";
          idx = i;
        }
      })
  
      //let d = settings.data[type][idx];
      
      
      
      sideEditBtn.addEventListener("click", () => {
        
        hideNavBar();
        
        saveAnimeCurrentType = "edit";
        saveAnimeCurrent.listType = type;
        saveAnimeCurrent.idx = idx;
        
        //addAnimeCont.classList.remove("elementHIDE");
        //addAnimeCont.classList.add("element-show");
        addAnimeCont.classList.remove("hidePage-type2");
        addAnimeCont.classList.add("showPage-type2");
        addAnimePage.classList.remove("hidePage");
        addAnimePage.classList.add("showPage");
        side.classList.toggle("sideShow");
        side.classList.toggle("sideHide");
        editAnimeToLocalStorage(type, idx);
        //console.log(type, idx)
      });
      
      
      let promptElm = document.querySelector("#confirmPrompt");
      let sideDeleteAnimeName = document.getElementById("sideDeleteAnimeName");
      
      sideDeleteBtn.addEventListener("click", () => {
        
        sideDeleteAnimeName.innerText = settings.data[type][idx][1];
        sideDeleteAnimeName.type = type;
        sideDeleteAnimeName.idx = idx;
        
        
        promptElm.classList.remove("hidePage-type2");
        promptElm.classList.add("showPage-type2");
        document.getElementById("prompt-cancel").addEventListener("click", () => {
          promptElm.classList.add("hidePage-type2")
          //promptElm.classList.remove("showPage")
        })
      })
      
        /*document.getElementById("prompt-proceed").addEventListener("click", () => {
          
          //deleteAnimeToLocalStorage(type, idx);
          promptElm.classList.add("hidePage-type2");
          
          console.log(document.getElementById("sideDeleteAnimeName").innerText)
          if(settings.data[type][idx] == document.getElementById("sideDeleteAnimeName").innerText) {
            console.log(type, idx)
          }
          //document.getElementById("sideDeleteAnimeName").innerText = "";
        })*/
      
      
  })  
  
  
    //}
  //}
  
  //let editBtn = document.querySelectorAll(".t");
}
  let promptElm = document.querySelector("#confirmPrompt");
  let promptProceed = document.getElementById("prompt-proceed");
  promptProceed.addEventListener("click", () => {
    
    promptElm.classList.add("hidePage-type2");
    
    let type = document.getElementById("sideDeleteAnimeName").type,
    idx = document.getElementById("sideDeleteAnimeName").idx;
    
    addMessage(settings.data[type][idx][1], "anime deleted successfully!", "res/delete.png");
    
    settings.data[type].splice(idx, 1);
    animeReIndexing(type);
    saveAnimeCurrentType = "delete"
    saveAnimeToLocalStorage();
    //console.log(settings.data)
    
    
      /*let type, idx;
  
      settings.data.main.forEach((anime, i) => {
        if(anime[1] === name) {
          type = "main";
          idx = i;
        }
      })
      settings.data.ecchi.forEach((anime, i) => {
        if(anime[1] === name) {
          type = "ecchi";
          idx = i;
        }
      })*/
    
  })
  


    /*  sideDeleteBtn.addEventListener("click", () => {
        
        let name = card.querySelector("img").name;
      let type, idx;
  
      settings.data.main.forEach((anime, i) => {
        if(anime[1] === name) {
          type = "main";
          idx = i;
        }
      })
      settings.data.ecchi.forEach((anime, i) => {
        if(anime[1] === name) {
          type = "ecchi";
          idx = i;
        }
      })
        
        
        document.getElementById("sideDeleteAnimeName").innerText = settings.data[type][idx][1];
        
        promptElm.classList.remove("hidePage-type2");
        promptElm.classList.add("showPage-type2");
        document.getElementById("prompt-cancel").addEventListener("click", () => {
          promptElm.classList.add("hidePage-type2")
          //promptElm.classList.remove("showPage")
        })
        document.getElementById("prompt-proceed").addEventListener("click", () => {
          
          deleteAnimeToLocalStorage(type, idx);
          promptElm.classList.add("hidePage-type2");
          //document.getElementById("sideDeleteAnimeName").innerText = "";
        })
      })*/
  
function animeReIndexing(type) {
  arr = settings.data[type];
  count = {
    main: 0,
    ecchi: 0,
    movie: 0
  }
  arr.forEach(d => {
    if(d[0].toString().slice(0, 1) == "M") {
      d[0] = "M" + (count.movie + 1);
      count.movie += 1;
    } else {
      d[0] = count[type] + 1 
      count[type] += 1
    }
  })
}


function handleImgEventList() {
  let images = animeCont.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("mousedown", e => {
      let prop = img.getBoundingClientRect();
      //log(prop)
      displayImg(img.src, img.name, prop.x, prop.y, prop.width, prop.height); 
      
      onresize = resize;
      
      let imgSec = document.querySelector("#img-section");
      document.getElementById("bg").addEventListener("click", () => {
        imgSec.classList.add("fadeOut");
        imgSec.classList.remove("fadeIn");
      })
      document.querySelector("#imgSecImg").addEventListener("click", e => {
        if(!e) var e = window.event;
        e.cancelBubble = true;
        if(e.stopPropagation) e.stopPropagation();
      })
      
    })
  })
  
  /*for(let key in images) {
    if(images.hasOwnProperty(key)) {
      let img = images[key];
      log(img.getBoundingClientRect())
      img.addEventListener("mousedown", e => {
        displayImg(img.src, img.name, img.getBoundingClientRect().x, img.getBoundingClientRect().y - 45);
        onresize = resize;
      })
      
    }
  }*/
}

function scaleImage() {
  let imgElm = document.getElementById("imgSecImg");
  let prop = imgElm.getBoundingClientRect();
  let [propW, propH, maxW, maxH] = [prop.width, prop.height, 720, 720];
  let SET = {w: 0, h: 0};
  
  let scale = 1;
  
  let aspect_ratio = imgElm.naturalWidth / imgElm.naturalHeight,
  inv_aspect_ratio = imgElm.naturalHeight / imgElm.naturalWidth;
  
  let H = inv_aspect_ratio * innerWidth;
  let max = Math.min(innerHeight * scale, maxH);
  
  if(propW > propH) {
    /*SET.w = Math.min(innerWidth, maxW);
    SET.h = inv_aspect_ratio * SET.w;*/
    
    //let H = inv_aspect_ratio * innerWidth;
    //let max = Math.min(innerHeight * scale, maxH);
    
    if(H > max) {
      SET.h = max;
      SET.w = aspect_ratio * SET.h;
    } else {
      SET.w = innerWidth;
      SET.h = inv_aspect_ratio * SET.w;
    }
    
  } else {
    //let H = inv_aspect_ratio * innerWidth;
    if(H > max) {
      SET.h = max;
      SET.w = aspect_ratio * SET.h;
    } else {
      SET.w = innerWidth;
      SET.h = H;
    }
    
  }
  SET.x = (innerWidth - SET.w) / 2;
  SET.y = (innerHeight - SET.h) / 2;
  
  return SET;
}

function displayImg(url, caption, x, y, w, h) {
  let imgSec = document.getElementById("img-section");
  imgSec.classList.remove("fadeOut");
  imgSec.classList.add("fadeIn");
  /*
  let orientation;
  innerWidth > innerHeight ? orientation = "landscape": orientation = "potrait";*/
  //log(x, y)
  imgSec.innerHTML = `<div id="bg">
  <div>
  <img src="${url}" alt="Anime cover" id="imgSecImg" style="left: ${x}px; top: ${y}px; width: ${w}px; height: ${h}px;" class="img-enlarge"/>
  <button id="close" class="cancelBtn"></button>
  <div class="caption">
  <a href="https://www.google.com/search?q=${caption}&oq=${caption}" target="_blank">${caption}</a>
  </div>
  </div>
  </div>`;
  
  createRipple(document.querySelector("#close"));
  
  /*let i = document.getElementById("imgSecImg");
  let auto = {w: i.getBoundingClientRect().width, h: i.getBoundingClientRect().height};
  log(auto.w, auto.h);*/
  /*
  let imgElm = document.getElementById("imgSecImg");
  let prop = imgElm.getBoundingClientRect();
  let [W, H, maxW, maxH] = [prop.width, prop.height, 720, 720];
  let SET = {w: 0, h: 0};
  
  let scale = 1;
  
  if(W > H) {
    // landscape 
    SET.w = Math.min(innerWidth, maxW);
    //if(SET.w > maxW) SET.w = maxW;
    SET.h = h / w * SET.w;
  } else {
    // portrait 
    
    let H = h / w * innerWidth;
    if(H > Math.min(innerHeight * scale, maxH)) {
      SET.h = Math.min(innerHeight * scale, maxH);
      SET.w = w / h * SET.h;
    } else {
      SET.w = innerWidth;
      SET.h = H;
    }
    
    /*SET.h = innerHeight * 0.8;
    if(SET.h > maxH) SET.h = maxH;
    SET.w = w / h * SET.h;*/
  /*}
  SET.x = (innerWidth - SET.w) / 2;
  SET.y = (innerHeight - SET.h) / 2;
  log(SET, x, y)
  */
  let style = document.createElement("style");
  let SET = scaleImage();
  
  
  style.innerHTML = `
    @keyframes Enlarge {
      0% {
        
      }
      100% {
        top: ${SET.y}px;
        left: ${SET.x}px;
        width: ${SET.w}px;
        height: ${SET.h}px;
      }
    }
    #close {
      left: ${SET.x + SET.w - 40}px;
    }
  `;
  document.head.appendChild(style);
  /*setTimeout(() => {
    document.head.removeChild(style);
  }, 1200)*/
  //i.style.transform = `scale(${w/i.getBoundingClientRect().width})`;
  
  /*document.getElementById("close").addEventListener("click", () => {
    imgSec.classList.remove("fadeIn");
    imgSec.classList.add("fadeOut");
    log("yes working close")
  })*/
}

function resize() {
  let style = document.createElement("style");
  let SET = scaleImage();
  
  
  style.innerHTML = `
    @keyframes Enlarge {
      0% {
        
      }
      100% {
        top: ${SET.y}px;
        left: ${SET.x}px;
        width: ${SET.w}px;
        height: ${SET.h}px;
      }
    }
    #close {
      left: ${SET.x + SET.w - 40}px;
    }
    
  `;
  document.head.appendChild(style);
  /*
  let orientation;
  innerWidth > innerHeight ? orientation = "landscape": orientation = "potrait";
  document.getElementById("imgSecImg").classList.remove("potraitImg", "landscapeImg");
  document.getElementById("imgSecImg").classList.add(`${orientation}Img`);
  */
  
  
}

let signUpPage = document.getElementById("signUpPage"),
  signInPage = document.getElementById("signInPage"),
  mainCont = document.getElementById("main-container"),
  welcomeCont = document.getElementById("welcomeCont"),
  forgotPage = document.getElementById("forgotPage"),
  forgotBtn = document.getElementById("forgotBtn"),
  forgotGoBackBtn = document.getElementById("forgotGoBackBtn"),
  goBackSignInBtn = document.getElementById("goBackSignInBtn"),
  goBackSignUpBtn = document.getElementById("goBackSignUpBtn"),
  pInt = document.getElementById("pfp_input"),
  guestBtn = document.getElementById("guestBtn"),
  guestEnterBtn = document.getElementById("guestEnterBtn"),
  guestPage = document.getElementById("guestPage"),
  guestGoBackBtn = document.getElementById("guestGoBackBtn");
  
  
let addAnimeCont = document.getElementById("addAnimeCont");

// not used
function guestMode() {
  welcomeCont.style.display = "none";
  mainCont.style.display = "block";
  
  let firstTime = settings.data.main.length == 0 && settings.data.ecchi.length == 0;
  if(firstTime) {
    //details.style.display = "none";
    /*settings.user = {
      name: "User101",
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS758iyvaab3IXy8tpFngNDLcraGpeD5eoFN04E4ibGHuYHiDUzOrDig10&s=10"
    }
    saveSettings();*/
    //updateAnimeCard();
    
    //let profileEdit = document.getElementById("profileEdit");
    //profileEdit.style.display = "block";
    
    filter();
  } else {
    updateDetails(settings.data);
  }
  
}

let addAnime_name = document.getElementById("addAnime_name"),
addAnime_air = document.getElementById("addAnime_air"),
addAnime_watched = document.getElementById("addAnime_watched"),
addAnime_ep = document.getElementById("addAnime_ep"),
addAnime_cover = document.getElementById("addAnime_cover"),
addAnime_score = document.getElementById("addAnime_score"),
addAnime_genre = document.getElementById("addAnime_genre"),
addAnime_preference = document.getElementById("addAnime_preference"),
addAnime_preferenceTxt = document.getElementById("addAnime_preferenceTxt");


let saveAnimeCurrentType, saveAnimeCurrent = {};
function saveAnimeToLocalStorage() {
  // save, modify and saveBtwn
  let info = {
    index: null,
    
    name: addAnime_name.value,
    aired: addAnime_air.value,
    watched: addAnime_watched.value,
    episodes: parseInt(addAnime_ep.value),
    cover: addAnime_cover.value,
    score: addAnime_score.value,
    
    genre: [],
    ecchi: false,
    movie: false,
    favourite: false,
    masterpiece: false
  };
  
  // info.genre
  let genreElms = addAnime_genre.getElementsByClassName("active-elm");
  for(let key in genreElms) {
    if(genreElms.hasOwnProperty(key)) {
      info.genre.push(genreElms[key].innerText);
    }
  }
  
  // info.masterpiece info.favourite
  let prfTxt = document.getElementById("addAnime_preferenceTxt").innerText.toLowerCase();
  if(prfTxt == "masterpiece") {
    info.masterpiece = true;
    info.favourite = true;
  } if(prfTxt == "favourite") {
    info.favourite = true;
  }
  
  info.movie = info.genre.includes("Movie");
  info.ecchi = info.genre.includes("Ecchi");
  
  let idx = mIdx = eIdx = eMIdx = 0;
  settings.data.main.forEach(anime => {
    typeof anime[0] == "number" ? idx++ : mIdx++;
  })
  settings.data.ecchi.forEach(anime => {
    typeof anime[0] == "number" ? eIdx++ : eMIdx++;
  })
  
  if(!info.ecchi) {
    // main 
    info.index = idx + 1;
    if(info.movie) {
      info.index = "M" + (mIdx + 1);
    }
  } else {
    // ecchi 
    info.index = eIdx + 1;
    if(info.movie) {
      info.index = "M" + (eMIdx + 1);
    }
  }
  
  
  //settings.data;
  
  if(saveAnimeCurrentType == "add") {
    if(info.ecchi) {
      settings.data.ecchi.push([info.index, info.name, info.aired, info.watched, info.episodes, info.cover, info.genre, info.score, info.favourite, info.masterpiece]);
    } else {
      // edit
      settings.data.main.push([info.index, info.name, info.aired, info.watched, info.episodes, info.cover, info.genre, info.score, info.favourite, info.masterpiece]);
    }
  } else if(saveAnimeCurrentType == "edit") {
    
    let type = saveAnimeCurrent.listType, idx = saveAnimeCurrent.idx; 
    let dummyIdx = 0;
    if(info.movie) dummyIdx = "M0";
    
    if(info.ecchi && type == "main") {
      settings.data.main.splice(idx, 1);
      settings.data.ecchi.push([dummyIdx, info.name, info.aired, info.watched, info.episodes, info.cover, info.genre, info.score, info.favourite, info.masterpiece]);
    } else if(!info.ecchi && type == "ecchi") {
      settings.data.ecchi.splice(idx, 1);
      settings.data.main.push([dummyIdx, info.name, info.aired, info.watched, info.episodes, info.cover, info.genre, info.score, info.favourite, info.masterpiece]);
      
    } else {
      //log(idx, type)
      settings.data[type][idx] = [dummyIdx, info.name, info.aired, info.watched, info.episodes, info.cover, info.genre, info.score, info.favourite, info.masterpiece];
    }
    
    animeReIndexing("main");
    animeReIndexing("ecchi");
    
    //let animeDat = settings.data[saveAnimeCurrent.listType][saveAnimeCurrent.idx];
    //settings.data[saveAnimeCurrent.listType][saveAnimeCurrent.idx] = [animeDat[0], info.name, info.aired, info.watched, info.episodes, info.cover, info.genre, info.score, info.favourite, info.masterpiece];
    //settings[saveAnimeCurrent.listType][saveAnimeCurrent.idx] = [];
  }
  
  if(settings.guest) {
    settings.users.guest[settings.user.name].data = settings.data;
  }
  saveSettings();
  updateDetails(settings.data);
  updateAnimeCard(settings.data.main);
  filter();
  
  //if(details.style.display == "none") details.style.display = "flex";
  
}

function setAddAnimeFieldVal(name, air, watched, ep, cover, score, genres, preference = "none") {
  // preference - "masterpiece", "favourite", "none"
  addAnime_name.value = name;
  addAnime_air.value = air;
  addAnime_watched.value = watched;
  addAnime_ep.value = ep;
  addAnime_cover.value = cover;
  addAnime_score.value = score;
  
  addAnime_genre.querySelectorAll(".dropdown-item").forEach(el => el.classList.remove("active-elm"));
  //var str = "Sonic Free Games";
//str = str.replace(/\s+/g, '-').toLowerCase();
 //let strArr = new Array();
  
  genres.forEach(genre => {
    //strArr.push(genre);
    let cls = ".genre-" + genre.replace(/\s+/g, '-').toLowerCase();
    let elm = addAnime_genre.querySelector(cls).parentElement;
    elm.classList.add("active-elm");
  })
  
  
  //let strArr = new Array();
 //addAnime_genre.querySelectorAll(".active-elm").forEach(el => strArr.push(el.innerText));
        
  document.getElementById("addAnime_genreTxt").innerHTML = getString(genres);
  
  let prf_mast = addAnime_preference.querySelectorAll(".dropdown-item")[0],
  prf_fav = addAnime_preference.querySelectorAll(".dropdown-item")[1];
  if(preference == "none") {
    prf_mast.classList.remove("active-elm");
    prf_fav.classList.remove("active-elm");
    addAnime_preferenceTxt.innerHTML = "none";
  } else if(preference == "favourite") {
    prf_fav.classList.add("active-elm");
    prf_mast.classList.remove("active-elm");
    addAnime_preferenceTxt.innerHTML = "Favourite";
  } else {
    prf_mast.classList.add("active-elm");
    prf_fav.classList.remove("active-elm");
    addAnime_preferenceTxt.innerHTML = "Masterpiece";
  }
  //log(prf_mast.innerText, prf_fav.innerText);
  
  
}

function editAnimeToLocalStorage(type, idx) { 
  /*let name = card.querySelector("img").name;
  let type, idx;
  
  settings.data.main.forEach((anime, i) => {
    if(anime[1] === name) {
      type = "main";
      idx = i;
    }
  })
  settings.data.ecchi.forEach((anime, i) => {
    if(anime[1] === name) {
      type = "ecchi";
      idx = i;
    }
  })*/
  let d = settings.data[type][idx];
  
  let prf = "none";
  if(d[8]) prf = "favourite";
  if(d[9]) prf = "masterpiece";
  
  setAddAnimeFieldVal(d[1], d[2], d[3], d[4], d[5], d[7], d[6], prf);
  //log(name, type, idx);
  
  //addAnime_name.value = d[1];
  //addAnime_air.value = d[2];
  //addAnime_watched.value = d[];
  
  /*let addAnimeCont = document.getElementById("addAnimeCont");
  addAnimeCont.classList.remove("elementHIDE");
  addAnimeCont.classList.add("element-show");
  addAnimePage.classList.remove("hidePage");
  addAnimePage.classList.add("showPage");*/
  
  
  
}

function deleteAnimeToLocalStorage(type, idx) {
  console.log(type, idx)
}


//if(!settings.pMode) {
  //welcomeCont.style.display = "none";
  //settings.user = me.user;
  //updateAnimeCard(data.main);
  //updateDetails(data);
//} else if(settings.guest) {
  /*if(settings.user == null) {
    settings.user = {
      name: "User101",
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS758iyvaab3IXy8tpFngNDLcraGpeD5eoFN04E4ibGHuYHiDUzOrDig10&s=10"
    };
    saveSettings();
  }*/
  //guestMode();
  //log(JSON.stringify(settings.user))
  //profileName.innerHTML = settings.user.name;
  //pfp.src = settings.user.url;
//} else {

// Not yet logged in, created account or guest mode in personal mode 

// logged in, in guest mode or on my page
if(settings.user != null) {
  welcomeCont.style.display = "none";
  signUpPage.style.display = "none";
  signInPage.style.display = "none";
  forgotPage.style.display = "none";
  guestPage.style.display = "none";
}


if(settings.pMode && settings.user == null) {
  mainCont.style.display = "none";
  signUpPage.style.display = "none";
  signInPage.style.display = "none";
  forgotPage.style.display = "none";
  guestPage.style.display = "none";
  
  goBackSignUpBtn.addEventListener("click", () => {
    //signInPage.classList.remove("showPage");
    signInPage.classList.add("hidePage");
    signUpPage.classList.remove("hidePage");
    signUpPage.classList.add("showPage");
  })
  goBackSignInBtn.addEventListener("click", () => {
    //signUpPage.classList.remove("showPage");
    signUpPage.classList.add("hidePage");
    signInPage.classList.remove("hidePage");
    signInPage.classList.add("showPage");
  })
  forgotBtn.addEventListener("click", () => {
   //signInPage.classList.remove("showPage");
    signInPage.classList.add("hidePage");
    forgotPage.classList.remove("hidePage");
    forgotPage.classList.add("showPage");
  })
  forgotGoBackBtn.addEventListener("click", () => {
    //forgotPage.classList.remove("showPage");
    forgotPage.classList.add("hidePage");
    signInPage.classList.remove("hidePage");
    signInPage.classList.add("showPage");
  })
  pInt.addEventListener("change", () => {
    const file = document.getElementById("pfp_input").files[0];
    if(file) {
      const fileReader = new FileReader();
      fileReader.onload = e => {
        document.getElementById("user_pfp").setAttribute('src', e.target.result);
      }
      fileReader.readAsDataURL(file);
    }
    
  })
  
  
  
  guestBtn.addEventListener("click", () => {
    signInPage.classList.add("hidePage");
    guestPage.classList.remove("hidePage");
    guestPage.classList.add("showPage");
    
    
    //welcomeCont.style.display = "none";
    //mainCont.style.display = "block";
    //settings.guest = true;
    //saveSettings();
    //retrieveSettings();
    //handleGuestMode();
    //guestMode();
    
  })
  
  guestGoBackBtn.addEventListener("click", () => {
    guestPage.classList.add("hidePage");
    signInPage.classList.remove("hidePage");
    signInPage.classList.add("showPage");
  })
  
  let guestListElm = document.getElementById("guestList");
  let allGuestUsers = Object.keys(settings.users.guest);
  allGuestUsers.forEach(u => {
    let div = document.createElement("div");
    div.innerHTML = `<img src="${settings.users.guest[u].pfp}" alt="pfp"/> <p>${u}</p>`;
    
    div.addEventListener("click", () => {
      settings.user = settings.users.guest[u];
      settings.guest = true;
      settings.data = settings.users.guest[u].data;
      saveSettings();
    
      updateAnimeCard(settings.data.main);
      updateDetails(settings.data);
      filter();
    
      welcomeCont.style.display = "none";
      mainCont.style.display = "block";
      updateProfile();
      
    })
    guestListElm.append(div);
  })
  /*guestListElm.document.getElementsByTagName("div").forEach(el => {
    el.addEventListener("click", () => {
      log(el);
    })
  })*/
  
  
  guestEnterBtn.addEventListener("click", () => {
    
    let n = document.getElementById("guestName").value;
    
    settings.user = settings.users.guest[n] = {
      name: n,
      pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xdIhUI7znjJDuuePgLybmeHRr4w1xjUasUdan3Q2TiyEHtPd36kVpxQ&s=10",
      data: {
        main: [],
        ecchi: []
      },
      passcode: "fpqi"
    };
    settings.guest = true;
    
    saveSettings();
    
    welcomeCont.style.display = "none";
    mainCont.style.display = "block";
    updateProfile();
    //guestPage.classList.add("hidePage");
    
  })
  
}

//console.log(settings)
/*if(settings.user == null && !settings.guest) {
  settings.user = {
    name: "User101",
    pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS758iyvaab3IXy8tpFngNDLcraGpeD5eoFN04E4ibGHuYHiDUzOrDig10&s=10"
  };
}*/
//profileName.innerHTML = settings.user.name;
//pfp.src = settings.user.pfp;




function createRipple(element) {
  element.addEventListener("touchstart", e => {
    
      let childs = element.children;
      for(key in childs) {
        if(childs.hasOwnProperty(key)) {
          let child = childs[key];
          if(child.classList.contains("riple")) {
            element.removeChild(child);
          }
        }
      }
    
      
      let ripple = document.createElement("div");
      let size = 20;
      ripple.classList.add("riple");
      let pos = element.getBoundingClientRect();
      ripple.setAttribute("style", `
        width: ${size}px;
        height: ${size}px;
        position: absolute;
        left: ${e.touches[0].clientX - pos.x - size/2}px;
        top: ${e.touches[0].clientY - pos.y - size/2}px;
        
      `);
      
      let style = document.createElement("style");
      style.textContent = `
        .riple {
          background: rgba(255,255,255,0.2);
          border-radius: 100%;
          animation: Riple 0.8s;
          animation-fill-mode: forwards;
          pointer-events: none;
        }
        @keyframes Riple {
          100% {
            transform: scale(${2*pos.width/size*100+150}%);
            display: none;
            opacity: 0;
          }
        }
      `;
      document.head.append(style);
      element.appendChild(ripple);
      setTimeout(() => {
        document.head.removeChild(style);
        ripple.remove();
        //log(element.innerHTML)
      }, 1000)
    })
}

/*let buttons = document.getElementsByTagName("button");
for(let key in buttons) {
  if(buttons.hasOwnProperty(key)) {
    let button = buttons[key];
    createRipple(button);
  }
}*/
/*let lists = document.getElementsByTagName("li");
for(let key in lists) {
  if(lists.hasOwnProperty(key)) {
    let list = lists[key];
    createRipple(list);
  }
}*/

//createRipple(document.getElementById("searchBar"));




function createDropdown(element, data) {
  let dropdown = document.createElement("div");
  dropdown.classList.add("dropdown", "dropdown-hide");
  
  
  let html = "";
  data.forEach(d => {
    
    html += `<div class="dropdown-class dropdown-multiple-${d[2]}">`;
    html += `<div class="dropdown-title">${d[0].toUpperCase()}</div>
    <div class="hr"></div>
    `;
    
    d[1].forEach(item => {
      html += item;
    })
    html += `</div>`;
    
  })
  
  dropdown.innerHTML = html;
  element.append(dropdown);
  element.data = data;
}


let genreData = [
  
  ["Action", "gun genre-action"],
  ["Adventure","tree genre-adventure"],
  ["Comedy", "face-grin-squint-tears genre-comedy"],
  ["Drama", "panorama genre-drama"],
  ["Emotional", "heart-crack genre-emotional"],
  ["Fantasy", "dragon genre-fantasy"],
  ["Gore", "person-falling-burst genre-gore"],
  ["Gourmet", "burger genre-gourmet"],
  
  ["Harem", "dove genre-harem"],
  
  ["Horror", "ghost genre-horror"],
  ["Isekai", "earth-americas genre-isekai"],
  ["Magic", "hat-wizard genre-magic"],
  ["Martial Arts", "hand-fist genre-martial-arts"],
  ["Music", "music genre-music"],
  ["Mystery", "question genre-mystery"],
  ["Post Apocalyptic", "biohazard genre-post-apocalyptic"],
  ["Psychological", "braille genre-psychological"],
  ["Romance", "heart genre-romance"],
  ["Rom-com", "heart genre-rom-com"],
  ["School", "school genre-school"],
  ["Sci-Fi", "shuttle-space genre-sci-fi"],
  ["Slice of Life", "bread-slice genre-slice-of-life"],
  ["Sports", "baseball genre-sports"],
  ["Supernatural", "dharmachakra genre-supernatural"],
  ["Thriller", "user-secret genre-thriller"],
  ["Time Travel", "timeline genre-time-travel"],
  
  
  ["Movie", "film genre-movie"],
  ["Ecchi", "cat ecchiDropItem genre-ecchi"],
  ["All", "user-astronaut allDropItem genre-all"]
];


let monthData = [
  ["January", ""],
  ["February", ""],
  ["March", ""],
  ["April", ""],
  ["May", ""],
  ["June", ""],
  ["July", ""],
  ["August", ""],
  ["September", ""],
  ["October", ""],
  ["November", ""],
  ["December", ""]
];
let yearData = [], yearLimit = 2015;
let m = new Date().getFullYear();
let year_list = settings.data.main.concat(settings.data.ecchi);
if(!settings.pMode) year_list = me.data.all;

year_list.forEach(i => {
  let d = NaN;
  i[3].toString().split(" ").forEach(k => {
    if(parseInt(k) != NaN && d != NaN && k.length == 4) d = parseInt(k);
  })
  if(d < m) {
    m = d;
  }
})
yearLimit = m;

for(let i = new Date().getFullYear(); i >= yearLimit; i--) {
  yearData.push([i, ""]);
}
let arr = dropdownItemCreate(monthData);
arr.push(`<div class="dropdown-title" style="margin-top:10px;">YEAR</div><div class="hr"></div>`);
let arr2 = dropdownItemCreate(yearData);


function dropdownItemCreate(array, stg = null, txtElm = null) {
  let t = [];
  array.forEach((item, idx) => {
    let c = "";
    if(stg) {
      if(stg.toLowerCase() == item[0].toLowerCase()) {
        c = " active-elm";
        if(txtElm) {
          txtElm.innerHTML = item[0];
        }
      }
    }
   
    t[idx] = `<div class="dropdown-item${c}"><i class="fa-solid fa-${item[1]}"></i><span>${item[0]}</span></div>`;
  })
  return t;
}


let array = [
  ["Genre", dropdownItemCreate(genreData), true],
  ["Rating", [`<div class="dropdown-item"><i class="fa-solid fa-gem"></i>Masterpiece</div>`,`<div class="dropdown-item"><i class="fa-solid fa-star"></i>Favourite</div>`]],
  ["Date", [`<div class="dropdown-container nested-dropdown" id="date-dropdown"><div class="dropdown-element"><div><i class="fa-solid fa-calendar"></i><span>Date</span></div><div>
            <i class="fas fa-angle-down icon"></i>
          </div></div></div>`]]
];

createDropdown(document.getElementById("filter-dropdown"), array, document.getElementById("demo"));
createDropdown(document.getElementById("option-dropdown"), [["Options", [`<button class="button full" id="viewJSONBtn"><i class="fa-regular fa-file-code"></i></button>`, `<button class="button full dark-pink" id="saveBtn"><i class="fa-solid fa-file-pdf"></i>PDF</button>`, `<button class="button full" id="rearrangeBtn"><i class="fa-solid fa-dice"></i>Sort List</button>`]]]);
createDropdown(document.getElementById("date-dropdown"), [["Month", arr.concat(arr2), true]]);


createDropdown(document.getElementById("theme-dropdown"), [["Appearance", dropdownItemCreate(
    [
      ["Light", "sun"],
      ["Dark", "moon"],
      ["Twilight", "cloud"],
      ["Night", "cloud-moon"]
    ],
    settings.theme, document.getElementById("theme-dropdown-text")
  )]]);
createDropdown(document.getElementById("layout-dropdown"), [["Layout", dropdownItemCreate(
    [
      ["Small", "atom"],
      ["Normal", "dna"],
      ["Large", "satellite"]
    ], settings.layout, document.getElementById("layout-dropdown-text")
  )]]);
createDropdown(document.getElementById("sort-dropdown"), [["Sort", dropdownItemCreate(
    [
      
      ["Default", "angles-right"],
      ["Alphabetical", "arrow-down-a-z"],
      ["Aired", "calendar-days"],
      ["Episodes", "arrow-down-9-1"],
      ["Score", "list-ol"]
    ], settings.sort, document.getElementById("sort-dropdown-text")
  )]]);
  //console.log(dropdownItemCreate(genreData))
//let b = genreData.pop();
let b = genreData.slice().splice(0, genreData.length - 1);
createDropdown(document.getElementById("addAnime_genre"), [["Genre", dropdownItemCreate(b), true]])
createDropdown(document.getElementById("addAnime_preference"), [["Preference", dropdownItemCreate([
    ["Masterpiece", "gem"],
    ["Favourite", "star"]
  ])]]);


let ecchiDropItem = document.getElementsByClassName("ecchiDropItem")[0].parentElement;
let ecchiDropItem2 = document.querySelectorAll(".ecchiDropItem")[1].parentElement;
let allDropItem = document.getElementsByClassName("allDropItem")[0].parentElement;
function hideEcchiOpt() {
  if(!settings.ecchi) {
    ecchiDropItem.style.display = "none";
    allDropItem.style.display = "none";
    ecchiDropItem2.style.display = "none";
  }
}
function showEcchiOpt() {
  if(settings.ecchi) {
    ecchiDropItem.style.display = "flex";
    allDropItem.style.display = "flex";
    ecchiDropItem2.style.display = "flex";
  }
}
hideEcchiOpt();
showEcchiOpt();

function getString(array) {
  let str = "";
  let len = array.length;
  if(len === 0) {
    str = "none";
  } else if(len === 1) {
    str = array[0];
  } else {
    array.forEach((s, idx) => {
    
      if(idx != len - 1 && idx != len - 2) {
        str += s + ", ";
      } else if(idx == len - 2) {
        str += s + " and ";
      } else {
        str += s;
      }
     
    })
  }
  
  return str;
}


let dropdownItems = document.getElementsByClassName("dropdown-item");
for(key in dropdownItems) {
  if(dropdownItems.hasOwnProperty(key)) {
    let dropdownItem = dropdownItems[key];
    createRipple(dropdownItem);
    dropdownItem.addEventListener("click", () => {
      handleDropdown(dropdownItem);
      
      let dId = dropdownItem.offsetParent.offsetParent.offsetParent.id;
      let Txt = dropdownItem.innerText;
      let txt = Txt.toLowerCase();
      
      if(dId == "filter-dropdown" || dId == "date-dropdown") {
        filter();
        searchAnime();
      }
      /*else if(dId == "option-dropdown") {
        demo();
      } */
      else if(dId == "theme-dropdown") {
        document.getElementById("theme-dropdown-text").innerHTML = Txt;
        updateTheme(txt);
      } else if(dId == "sort-dropdown") {
        let sortDropTxt = 
        document.getElementById("sort-dropdown-text");
        if(sortDropTxt) {
          sortDropTxt.innerHTML = Txt;
        }
        sortAnime(txt);
      } else if(dId == "layout-dropdown") {
       document.getElementById("layout-dropdown-text").innerHTML = Txt;
       updateLayout(txt);
      } else if(dId == "addAnime_genre") {
        
        let strArr = new Array();
        addAnime_genre.querySelectorAll(".active-elm").forEach(el => strArr.push(el.innerText));
        
        document.getElementById("addAnime_genreTxt").innerHTML = getString(strArr);
        
      } else if(dId == "addAnime_preference") {
        let prf = "none";
        let actElms = document.getElementById("addAnime_preference").getElementsByClassName("active-elm");
        for(let key in actElms) {
          if(actElms.hasOwnProperty(key)) {
            let actElm = actElms[key];
            prf = actElm.innerText;
          }
        }
        document.getElementById("addAnime_preferenceTxt").innerHTML = prf;
      }
      
    })
  }
}




let dropdownElms = document.getElementsByClassName("dropdown-element");
for(let key in dropdownElms) {
  if(dropdownElms.hasOwnProperty(key)) {
    let dropdownElm = dropdownElms[key];
    dropdownElm.addEventListener("click", () => {
      let parent = dropdownElm.offsetParent;
      
      let dropdown = parent.getElementsByClassName("dropdown")[0];
      parent.classList.toggle("active");
      dropdown.classList.toggle("dropdown-show");
      dropdown.classList.toggle("dropdown-hide");
    })
  }
}

function handleDropdown(element) {
  then = performance.now();
  let dropdown = element.offsetParent.offsetParent;
  let parent = dropdown.offsetParent;
  let dropdownCont = dropdown.offsetParent;
  let dropdownClass = element.offsetParent;
  
  parent.classList.toggle("active");
  dropdown.classList.toggle("dropdown-show");
  dropdown.classList.toggle("dropdown-hide");
  
  if(dropdownClass.classList.contains("dropdown-multiple-true")) {
    element.classList.toggle("active-elm");
    
    let singleClasses = dropdown.getElementsByClassName("dropdown-multiple-undefined");
    for(let key in singleClasses) {
      if(singleClasses.hasOwnProperty(key)) {
        let singleClass = singleClasses[key];
        let singleElms = singleClass.getElementsByClassName("dropdown-item");
        
        for(let key2 in singleElms) {
          if(singleElms.hasOwnProperty(key2)) {
            let singleElm = singleElms[key2];
            singleElm.classList.remove("active-elm");
          }
        }
        
      }
    }
    
  } else {
    let dropdownItems = dropdown.getElementsByClassName("dropdown-item");
    for(let key in dropdownItems) {
      if(dropdownItems.hasOwnProperty(key)) {
        
        let dropdownItem = dropdownItems[key];
        if(dropdownItem != element) {
          dropdownItem.classList.remove("active-elm");
        }
        
      }
    }
    element.classList.toggle("active-elm");
  }

  
  let nested = parent.classList.contains("nested-dropdown");
  
  if(nested) {
    let dropdownItems = dropdownClass.getElementsByClassName("dropdown-item");
    //console.log(dropdownClass)
    
    for(let key in dropdownItems) {
      if(dropdownItems.hasOwnProperty(key)) {
        let dropdownItem = dropdownItems[key];
        if(!dropdownItem.offsetParent.offsetParent.offsetParent.classList.contains("nested-dropdown")) {
          dropdownItem.classList.remove("active-elm");
        }
        
      }
    }
    
    
  }
  
  let dateDropdown = document.getElementById("date-dropdown")
  let dateDropdownElms = dateDropdown.children[1].getElementsByClassName("dropdown-item");
  let dDActive = false;
  for(let key in dateDropdownElms) {
    if(dateDropdownElms.hasOwnProperty(key)) {
      let dateDropdownElm = dateDropdownElms[key];
      if(dateDropdownElm.classList.contains("active-elm")) {
        dDActive = true;
      }
    }
  }
  dDActive ? dateDropdown.classList.add("active") : dateDropdown.classList.remove("active");
  
  if(parent.id == "theme-dropdown" || parent.id == "layout-dropdown" || parent.id == "sort-dropdown") {
    element.classList.add("active-elm");
  }
  //log(parent.id, element.classList.contains("active-elm"))

}


let buttons = document.getElementsByTagName("button");
for(let key in buttons) {
  if(buttons.hasOwnProperty(key)) {
    let button = buttons[key];
    createRipple(button);
  }
}
createRipple(document.getElementById("filter-dropdown").querySelector(".dropdown-element"));



function filter() {
  let activeElements = document.getElementById("filter-dropdown").getElementsByClassName("active-elm");
  let keywords = [];
  for(let key in activeElements) {
    if(activeElements.hasOwnProperty(key)) {
      let activeElement = activeElements[key];
      keywords.push(activeElement.innerText.toLowerCase());
    }
  }
   
  
  let masterpiece = keywords.includes("masterpiece");
  let favourite = keywords.includes("favourite");
  let movies = keywords.includes("movie");
  
  //console.log(keywords)
  
  let ecchi = keywords.includes("ecchi");
  let both = keywords.includes("all");
  let list = [];
  let array = [];
  if(ecchi) {
    list = settings.data.ecchi;
  } else {
    list = settings.data.main;
  } if(both) {
    list = settings.data.main.concat(settings.data.ecchi);
  }
  
  if(!settings.pMode) {
    if(ecchi) {
      list = me.data.ecchi;
    } else {
      list = me.data.main;
    } if(both) {
      list = me.data.all;
    }
  }
  
  
  
  if(keywords.length != 0) {
    list.forEach((anime, idx) => {
      
      let genres = anime[6];
      if(genres == undefined) genres = [];
      if(masterpiece && anime[9]) array.push(anime);
      if(favourite && anime[8] && !anime[9]) array.push(anime);
      
      if(!ecchi && !movies && !both) {
        genres.forEach(genre => {
          if(keywords.includes(genre.toLowerCase())) array.push(anime);
        })
      } else if(ecchi) {
        if(keywords.length == 1) {
          array.push(anime);
        } else {
          genres.forEach(genre => {
            if(keywords.includes(genre.toLowerCase()) && genre != "ecchi") array.push(anime);
          })
        }
      } else if(movies && (genres.includes("movie") || anime[0].toString().slice(0,1) == "M")) {
        if(keywords.length == 1) {
          array.push(anime);
        } else {
          genres.forEach(genre => {
            if(keywords.includes(genre.toLowerCase()) && genre != "movie") array.push(anime);
          })
        }
      } else if(both) {
        if(keywords.length == 1) {
          array.push(anime);
        } else {
          genres.forEach(genre => {
            if(keywords.includes(genre.toLowerCase())) array.push(anime);
          })
        }
      }/* else {
        genres.forEach(genre => {
          if(keywords.includes(genre.toLowerCase())) array.push(anime);
        })
      }*/
      
      //genres = [... new Set(genres)];
      
      
      /*if(keywords.length == 1 && (keywords.includes("all") || keywords.includes("ecchi"))) {
        array.push(anime);
      }*/
      //if(both || ecchi) array.push(anime);
      
      /*if(keywords.includes("movie") && anime[0].toString()[0] == "M") {
        array.push(anime);
      }*/
      
      //let genres = anime[6];
      //console.log(anime)
      /*if(genres == undefined) {
        genres = []
      }*/
        //console.log(anime[0], keywords)
       /* if(anime[0].toString().slice(0, 1) == "M") {
          genres.push("movie");
        }
        genres = [... new Set(genres)];*/
        
        /*genres.forEach(genre => {
          if(keywords.includes(genre.toLowerCase())) {
            if(!array.includes(anime)) {
              array.push(anime);
            }
          }
        })*/
      //}
      
      let date = anime[3].toLowerCase();
      let valM = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
      let valY = [];
      for(let i = new Date().getFullYear(); i >= yearLimit; i--) {
        valY.push(i.toString());
      }
      

      let commonM = keywords.filter(value => valM.includes(value));
      let commonY = keywords.filter(value => valY.includes(value));
      
      if(commonY.length != 0 && commonM.length != 0) {
        commonY.forEach(y => {
          commonM.forEach(m => {
            let str = m + " " + y;
            if(date.includes(str)) {
              array.push(anime);
            }
          })
        })
      } else {
        if(commonM.length != 0) {
          commonM.forEach(m => {
            if(date.includes(m)) {
              array.push(anime);
            }
          })
        } else {
          commonY.forEach(y => {
            if(date.includes(y)) {
              array.push(anime);
            }
          })
        }
      }
      
    })
    
    array = [... new Set(array)];
  } else {
    array = list;
  }

  document.getElementById("itemCounter").innerHTML = array.length;
  array.length > 1 ? document.getElementById("itemCounterText").innerHTML = "s" : document.getElementById("itemCounterText").innerHTML = "";
  
  updateAnimeCard(array);
  animeCont.filteredData = array;
  sortAnime(settings.sort);
  
  if(array.length == 0) {
    document.getElementById("no-result").classList.remove("element-hide");
    document.getElementById("no-result").classList.add("element-show");
    //animeCont.filteredData = list;
  } else {
    document.getElementById("no-result").classList.remove("element-show");
    document.getElementById("no-result").classList.add("element-hide");
  }
  
}



function updateTheme(theme) {
  settings.theme = theme;
  saveSettings();
  
  
  if(theme == "light") {
    document.body.classList.add("light");
  } else if(theme == "dark") {
    document.body.classList.remove("light");
  } else if(theme == "twilight") {
    
  } else if(theme == "night") {
    
  }
  //log(theme)
  //log(theme);
}

function sort(array, arrIdx) {
  let strArr = new Array();
  let newArr = new Array();
    
  array.forEach((anime, idx) => {
    strArr.push(anime[arrIdx] + " " + idx);
  })
  
  if(arrIdx != 4 && arrIdx != 2 && arrIdx != 7) {
    strArr.sort();
  } else if(arrIdx == 2) {
    strArr.forEach((item, idx) => {
      let aD = false;
      item.split(" ").forEach(val => {
        let k = parseInt(val);
        //console.log(k)
        if(k != NaN) {
          if(val.length === 4 && aD === false) {
            aD = true;
            strArr[idx] = val + " " + item.split(" ")[item.split(" ").length - 1];
          }
        }
      })
    })
    strArr.sort();
    //console.log(strArr)
     
  } else {
    strArr.sort(function(a, b) {
      return a.split(" ")[0] - b.split(" ")[0];
    });
    
  }
  
  strArr.forEach(item => {
    let idx = item.split(" ")[item.split(" ").length - 1];
    newArr.push(array[idx]);
  })
  
  return newArr;
}

function sortAnime(mode) {
  let mainData = JSON.parse(JSON.stringify(animeCont.filteredData));
  settings.sort = mode;
  
  if(mode == "default") {
    updateAnimeCard(animeCont.filteredData);
  } else if(mode == "alphabetical") {
    updateAnimeCard(sort(mainData, 1), false);
  } else if(mode == "aired") {
    updateAnimeCard(sort(mainData, 2), false);
  } else if(mode == "episodes") {
    updateAnimeCard(sort(mainData, 4), false);
  } else if(mode == "score") {
    updateAnimeCard(sort(mainData, 7), false);
  }
  
  
}

//let animeCont = document.getElementById("anime");

function updateLayout(layout) {
  settings.layout = layout;
  saveSettings();
  
  if(layout == "normal") {
    animeCont.classList.remove("largeLayout");
    animeCont.classList.remove("smallLayout");
  } else if(layout == "large") {
    animeCont.classList.add("largeLayout");
    animeCont.classList.remove("smallLayout");
    //largeLayout();
  } else if(layout == "small") {
    animeCont.classList.remove("largeLayout");
    animeCont.classList.add("smallLayout");
  }
}

//function largeLayout() {
  //let animeCont = document.getElementById("anime");
  //animeCont.classList.add("largeLayout");
//}

function sortFilteredData() {
  let mainData = JSON.parse(JSON.stringify(animeCont.filteredData));
  mode = settings.sort;
  
  if(mode == "default") {
    return animeCont.filteredData;
  } else if(mode == "alphabetical") {
    return sort(mainData, 1);
  } else if(mode == "aired") {
    return sort(mainData, 2);
  } else if(mode == "episodes") {
    return sort(mainData, 4);
  } else if(mode == "score") {
    return sort(mainData, 7);
  } else {
    return animeCont.filteredData;
  }
  
}

let searchBar = document.getElementById("searchBar");
function searchAnime() {
  let val = searchBar.value.toLowerCase();
  //sortFilteredData();
  let mainData = sortFilteredData();
  let toDraw = [];
  
  /*mainData.forEach(anime => {
    let name = anime[1].toLowerCase();
    if(name.includes(val)) {
      toDraw.push(anime);
    }
  })*/
  
  // \resest, \og, \hide, \eye num%
  
  // /reset, /hide, /eye num%, /changePass{pass}
  
  if(val === `/reset`) {
    localStorage.clear();
    searchBar.value = val = "";
    window.location.reload();
  }/*else if(val === `\\og`) {
    settings.pMode = false;
    settings.guest = false;
    settings.ecchi = false;
    saveSettings();
    window.location.reload();
  } */
  else if(val === `/hide`) {
    settings.ecchi = false;
    saveSettings();
    handleList();
    searchBar.value = val = "";
    searchAnime();
    return;
  } else if(val.includes(`/eye`) && val.includes(`%`)) {
    let alpha = val.split(" ")[1];
    alpha = alpha.slice(0, -1);
    searchBar.value = val = "";
    document.getElementById("eye-comfort-filter").style.background = `rgb(255,184,90,${alpha / 100 * 0.7})`;
    addMessage("Eye Comfort Mode", `Opacity set to ${alpha}%`, "res/eye.png");
  } else if(val === `/download`) {
    PWAInstallPrompt();
  }
  
  mainData.forEach(anime => {
    let name = anime[1].toLowerCase();
    if(name.includes(val)) {
      toDraw.push(anime);
    }
  })
  
  document.getElementById("itemCounter").innerHTML = toDraw.length;
  let itemCounterText = document.getElementById("itemCounterText");
  toDraw.length > 1 ? itemCounterText.innerHTML = "s" : itemCounterText.innerHTML = "";
  if(toDraw.length == 0) {
    document.getElementById("no-result").classList.remove("element-hide");
    document.getElementById("no-result").classList.add("element-show");
  } else {
    document.getElementById("no-result").classList.remove("element-show");
    document.getElementById("no-result").classList.add("element-hide");
   //animeCont.filteredData = toDraw;
  }
  
  //animeCont.filteredData = toDraw;
  settings.sort == "default" ? showIdx = true : showIdx = false;
  updateAnimeCard(toDraw, showIdx);
}

searchBar.addEventListener("input", searchAnime);


updateTheme(settings.theme);
if(settings.data.length != 0) {
  filter();
  sortAnime(settings.sort);
}
updateLayout(settings.layout);
updateDetails(settings.data);
if(!settings.pMode) {
  //handleAnimeDetailsPage();
  document.querySelector("#rearrangeBtn").style.display = "none";
  document.querySelector("#JSONSaveBtn").style.display = "none";
  document.querySelector("#JSONImportBtn").style.display = "none";
}

let xStart, xCurrent, dx, yStart, yCurrent, dy, sensitivity, tStart, tCurrent;
function swipeDetectStart(e) {
  xStart = e.touches[0].clientX;
  yStart = e.touches[0].clientY;
  tStart = performance.now();
}
function swipeDetectMove(e) {
  tCurrent = performance.now();
  
  xCurrent = e.touches[0].clientX;
  yCurrent = e.touches[0].clientY;
  
  dx = xCurrent - xStart;
  dy = yCurrent - yStart;
  
  sensitivity = Math.abs(dx/(tCurrent - tStart));
  //document.getElementById("dev").innerHTML = sensitivity.toFixed(1);
  
  let hamburger = document.getElementById("hamburger"),
  navLinks = document.getElementById("nav-links"),
  closeNav = document.getElementById("closeNav");
  
  if(innerWidth < 800) {
    if(dx > 70 && Math.abs(dy) < 30 && sensitivity > 1) {
      hamburger.classList.add("active");
      navLinks.classList.add("show");
      closeNav.classList.add("show");
    } else if(dx < -70 && Math.abs(dy) < 30 && sensitivity > 1) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("show");
      closeNav.classList.remove("show");
    }
  }
}

document.body.addEventListener("touchstart", e => swipeDetectStart(e));
document.body.addEventListener("touchmove", e => swipeDetectMove(e));

if(settings.pMode) {
  document.getElementById("rearrangeBtn").addEventListener("click", () => {
    let p = document.getElementById("option-dropdown");
    let d = p.querySelector(".dropdown");
    //console.log(d.innerHTML)
    d.classList.toggle("dropdown-show");
    d.classList.toggle("dropdown-hide");
    p.classList.toggle("active");
    
    hideNavBar();
    
    if(settings.ecchi) {
      document.querySelector("#rEcchi").style.display = "";
    } else {
      //log("he")
      document.querySelector("#rEcchi").style.display = "none";
    }
    
    document.getElementById("rearrangeAnimePage").classList.add("showPage-type2");
    document.getElementById("rearrangeAnimePage").classList.remove("hidePage-type2");
    
    let rList = document.getElementById("rearrangeList"),
    rSaveBtn = document.getElementById("rearrangeSaveBtn");
    
    document.getElementById("rearrangeCancel").addEventListener("click", () => {
      showNavBar();
      document.getElementById("rearrangeAnimePage").classList.add("hidePage-type2");
      rList.innerHTML = "";
      //rSaveBtn.removeEventListener("click", rSave);
      
    })
    
    
    
    let rMainBtn = document.getElementById("rMain"),
    rEcchiBtn = document.getElementById("rEcchi");
    rMainBtn.addEventListener("click", () => {
      rEcchiBtn.classList.remove("rActive");
      rMainBtn.classList.add("rActive");
      handleRList();
    })
    rEcchiBtn.addEventListener("click", () => {
      rEcchiBtn.classList.add("rActive");
      rMainBtn.classList.remove("rActive");
      handleRList();
    })
    
    //rearrangeAnime();
    handleRList();
    
    
    
  })
}

function handleRList() {
  let rMainBtn = document.getElementById("rMain"),
  rEcchiBtn = document.getElementById("rEcchi"),
  rList = document.getElementById("rearrangeList");
  
  let type;
  rMainBtn.classList.contains("rActive") ? type = "main" : type = "ecchi";
  
  rList.innerHTML = "";
  
  settings.data[type].forEach((d, idx) => {
    rList.innerHTML += `<div class="rearrangeAnimePageItems" draggable="true" title="${idx}">
      <img src="${d[5]}" alt="cover-image"/> 
      <div>
        <div style="display:flex; justify-content:space-between;">
          <p><span>${d[0]}</span>. ${d[1]}</p>
          <button id="rearrangeSortBtn"></button>
        </div>
      </div>
    </div>`;
  })
  
  rearrangeAnime();
  
}

function rearrangeAnime() {
  
  let rList = document.getElementById("rearrangeList");
  
  
  
  
  let items = rList.querySelectorAll(".rearrangeAnimePageItems");
  items.forEach(item => {
    item.addEventListener("dragstart", () => {
      setTimeout(() => {
        item.classList.add("dragging");
      }, 0);
    })
    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    })
  })
  
  function initSortableList(e) {
    e.preventDefault();
    
    let draggingItem = rList.querySelector(".dragging");
    let siblings = [...rList.querySelectorAll(".rearrangeAnimePageItems:not(.dragging)")];
    
    let nextSibling = siblings.find(sibling => {
      return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    
    rList.insertBefore(draggingItem, nextSibling);
    
  }
  
  rList.addEventListener("dragover", initSortableList);
  rList.addEventListener("dragenter", e => e.preventDefault());
  
  /*document.getElementById("rearrangeSaveBtn").addEventListener("click", () => {
    log("h")
  })*/
  
}


function handleList() {
  
  updateDetails(settings.data);
  hideEcchiOpt();
  showEcchiOpt();
  
  let eCont = document.getElementById("eCont");
  if(settings.ecchi) {
    eCont.classList.add("element-hide");
    document.getElementById("password").value = "";
  } else {
    eCont.classList.add("element-show");
    eCont.classList.remove("element-hide");
  }
}
handleList();


/*function character(str, offset) { 
  let txt = "";
  str.split("").forEach(char => {
    txt += String.fromCharCode(char.charCodeAt() + offset);
  })
  return txt;
}

function encryptPass(txt) {
  return character(txt, 4);
}

function decryptPass(txt) {
  return character(txt, -4);
}*/

function _0x188e(){const _0x3836c9=['7fjASKg','9ZeNFuG','fromCharCo','1497870HPJtfN','forEach','6168712wOodwp','1579688YyqzTe','nbJLN','4143846PEEBEC','OIWeO','4IBBfEL','60VpmlOF','4987188ZSnNYA','split','charCodeAt','1108266dnHBPt','RsJrD','4190857stggLG'];_0x188e=function(){return _0x3836c9;};return _0x188e();}(function(_0x5446a9,_0xbae61e){const _0xf0a14c=_0x52e8,_0x1cf93b=_0x5446a9();while(!![]){try{const _0xef7fb1=parseInt(_0xf0a14c(0x1b1))/(0x24da+0x8*0x133+-0x2e71)+parseInt(_0xf0a14c(0x1ba))/(0x12cf+0x3a*-0x9d+0x597*0x3)+-parseInt(_0xf0a14c(0x1bc))/(-0xb7*-0x31+0x2*0x514+-0x2d2c)*(-parseInt(_0xf0a14c(0x1be))/(0x7c*0xd+0xf74+-0x15bc))+-parseInt(_0xf0a14c(0x1b7))/(-0x1e70+-0x12da+0x3cb*0xd)+parseInt(_0xf0a14c(0x1c0))/(0x13df+-0x1472+-0x1*-0x99)*(parseInt(_0xf0a14c(0x1b4))/(-0x17*0x79+0x233c+0x26f*-0xa))+parseInt(_0xf0a14c(0x1b9))/(-0x239*0x1+-0x15fd+0x183e*0x1)*(-parseInt(_0xf0a14c(0x1b5))/(-0x1d*-0x7+0x1c6d+-0x1d2f*0x1))+-parseInt(_0xf0a14c(0x1bf))/(0x9ba+-0x11cd+0x81d)*(parseInt(_0xf0a14c(0x1b3))/(0x94*0x5+0x4ca*0x2+0x1*-0xc6d));if(_0xef7fb1===_0xbae61e)break;else _0x1cf93b['push'](_0x1cf93b['shift']());}catch(_0x4708ba){_0x1cf93b['push'](_0x1cf93b['shift']());}}}(_0x188e,0x12eb74+-0x3fd28+-0x17*0x2621));function character(_0x3f7b27,_0x3a18e3){const _0x5f486e=_0x52e8,_0x11a9ec={'OIWeO':function(_0x557dab,_0x3e8a26){return _0x557dab+_0x3e8a26;}};let _0x461857='';return _0x3f7b27[_0x5f486e(0x1af)]('')[_0x5f486e(0x1b8)](_0x35a832=>{const _0x507409=_0x5f486e;_0x461857+=String[_0x507409(0x1b6)+'de'](_0x11a9ec[_0x507409(0x1bd)](_0x35a832[_0x507409(0x1b0)](),_0x3a18e3));}),_0x461857;}function _0x52e8(_0x55874b,_0x10a452){const _0x2b4a11=_0x188e();return _0x52e8=function(_0x53e28a,_0x4d3f42){_0x53e28a=_0x53e28a-(0x1e56+0xf84+0x3*-0xeb9);let _0x128058=_0x2b4a11[_0x53e28a];return _0x128058;},_0x52e8(_0x55874b,_0x10a452);}function encryptPass(_0x2c2cb1){const _0x28ad59=_0x52e8,_0x867d59={'nbJLN':function(_0x50dbc0,_0x42fc93,_0x4208f0){return _0x50dbc0(_0x42fc93,_0x4208f0);}};return _0x867d59[_0x28ad59(0x1bb)](character,_0x2c2cb1,0x3d0*0xa+0x160c+-0x3c28);}function decryptPass(_0x3b4787){const _0x5d5fb6=_0x52e8,_0x2b3e2e={'RsJrD':function(_0x42d2c4,_0x55aff9,_0x5c4899){return _0x42d2c4(_0x55aff9,_0x5c4899);}};return _0x2b3e2e[_0x5d5fb6(0x1b2)](character,_0x3b4787,-(-0xe86+-0xd18+0x1ba2));}

function handlePasscode() {
  let passInp = document.getElementById("password");
  
  passInp.addEventListener("input", () => {
    let passcode = settings.user.passcode;
    if(passInp.value === decryptPass(passcode)) {
      settings.ecchi = true;
      saveSettings();
      handleList();
    }
  })
}

handlePasscode();

let viewJSONBtn = document.getElementById("viewJSONBtn");
let JSONPage = document.getElementById("JSONPage");
viewJSONBtn.addEventListener("click", () => {
  hideNavBar();
  let p = document.getElementById("option-dropdown");
  let d = p.querySelector(".dropdown");
  d.classList.toggle("dropdown-show");
  d.classList.toggle("dropdown-hide");
  p.classList.toggle("active");
    
  JSONPage.classList.add("showPage-type2");
  JSONPage.classList.remove("hidePage-type2");
})
document.getElementById("JSONCancelBtn").addEventListener("click", () => {
  JSONPage.classList.add("hidePage-type2");
  showNavBar();
})


function addMessage(title, content, icon, bigIcon = false) {
  let parent = document.getElementById("message-container-parent");
  let elm = document.createElement("div");
  elm.classList.add("toast", "toast-active");
  
  elm.innerHTML = `
    <div>
      <img src="${icon}" alt="icon" class="bigIcon-${bigIcon}" />
    </div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-content">${content}</div>
    </div>
    `;
  parent.append(elm);
  setTimeout(() => {
    parent.removeChild(elm);
  }, 5000)
}
//setTimeout(() => {
  
//addMessage("Dr.STONE", "Anime added", `<img src="res/checkmark.png" />`);
//hideNavBar();
//}, 2000)
/*
setTimeout(() => {
  showNavBar();
}, 5000)*/
//addMessage("Dr.STONE", "Anime added", `<img src="res/checkmark.png" />`);
//addMessage("<strong>Dr.STONE</strong> anime added!", 0.5);

let nav = document.getElementById("nav");
function hideNavBar() {
  nav.classList.add("hideNavBar");
}
function showNavBar() {
  nav.classList.remove("hideNavBar");
}


let eyeBtn = document.getElementById("eye-comfort-filter-btn");
let bg = document.getElementById("eye-comfort-filter");
eyeBtn.addEventListener("click", () => {
  
  bg.classList.toggle("filterShow");
  //if(document.getElementById("eye"))
  if(bg.classList.contains("filterShow")) {
    addMessage("Eye Comfort Mode", "Turned on", "res/eye.png");
    settings.eyeComfortMode = true;
  } else {
    addMessage("Eye Comfort Mode", "Turned off", "res/eye.png");
    settings.eyeComfortMode = false;
  }
  
  saveSettings();
})


animeDetailsCont.addEventListener("click", () => {
  animeDetailsCont.classList.add("hidePage-type3");
  animeDetailsPage.classList.add("hidePage-type2")
})
document.querySelector("#animeDetailsPageCancelBtn").addEventListener("click", () => {
  animeDetailsCont.classList.add("hidePage-type3");
  animeDetailsPage.classList.add("hidePage-type2")
})
animeDetailsPage.addEventListener("click", e => {
  if(!e) var e = window.event;
    e.cancelBubble = true;
  if(e.stopPropagation) e.stopPropagation();
})


let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
});

async function PWAInstallPrompt() {
  if (deferredPrompt !== null) {
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      deferredPrompt = null;
    }
    
  }
}
