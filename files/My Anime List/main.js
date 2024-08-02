// \blue anr \clear
let edit = false,
	cardIdx;
let personalMode = localStorage.getItem("personalMode");
let personalModeElm = document.getElementById("personalMode");
if (personalMode) {
	document.getElementById("personalModeCont").style.display = "none";
	data = JSON.parse(localStorage.getItem("data"));
	if (data == undefined) data = {
		main: [],
		ecchi: []
	};

	function addToList(idx, name, air, date, ep, cover, main = true) {
		let id;
		main ? id = "main" : id = "ecchi";
		data[id].push([idx, name, air, date, ep, cover]);
		//localStorage.setItem("data", JSON.stringify(data));
	}

	document.getElementById("addAnimeBtn").addEventListener("click", () => {
		document.getElementById("addAnimeCont").classList.add("fadeIn");
		document.getElementById("addAnimeCont").style.display = "block";
		document.getElementById("addAnimeCont").classList.remove("fadeOut");
		document.getElementById("fName").value = document.getElementById("fCover").value = document.getElementById("fEp").value = document.getElementById("fWatched").value = document.getElementById("fAir").value = "";
		showEcchi ? document.getElementById("fIdx").value = ecchiC + 1 : document.getElementById("fIdx").value = mainC + 1;
	})
	document.getElementById("addAnimeCancelBtn").addEventListener("click", () => {
		document.getElementById("addAnimeCont").classList.remove("fadeIn");
		document.getElementById("addAnimeCont").classList.add("fadeOut");
		edit = false;
	})

	document.getElementById("addAnimeSaveBtn").addEventListener("click", () => {
		let idx = document.getElementById("fIdx").value,
			name = document.getElementById("fName").value,
			watched = document.getElementById("fWatched").value,
			ep = document.getElementById("fEp").value,
			air = document.getElementById("fAir").value,
			cover = document.getElementById("fCover").value;

		if (!edit) {
			addToList(idx, name, air, watched, ep, cover, document.getElementById("addAnimeMain").checked);
		} else {
			if (showEcchi) {
				data.ecchi[cardIdx] = [idx, name, air, watched, ep, cover];
			} else {
				data.main[cardIdx] = [idx, name, air, watched, ep, cover];
			}
			//localStorage.setItem("data", JSON.stringify(data));
		}

		let toDraw;
		showEcchi ? toDraw = data.ecchi : toDraw = data.main;
		draw(toDraw);
		details(localStorage.getItem("password-require"));



		document.getElementById("addAnimeCont").classList.remove("fadeIn");
		document.getElementById("addAnimeCont").classList.add("fadeOut");

		document.getElementById("fIdx").value = document.getElementById("fName").value = document.getElementById("fEp").value = document.getElementById("fAir").value = document.getElementById("fWatched").value = document.getElementById("fCover").value = "";

		edit = false;
	})



} else {
	document.getElementById("importLabel").style.display = "none";
	document.getElementById("addAnime").style.display = "none";
	personalModeElm.addEventListener("click", () => {
		personalModeElm.classList.toggle("on");
		localStorage.setItem("personalMode", true);
		document.getElementById("personalModeCont").style.display = "none";
		window.location.reload();
	})
}





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
document.getElementById("light").classList.contains("on") ? lightMode = true : lightMode = false;

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
	lightMode ? lightMode = false : lightMode = true;
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
		let month = d[3].slice(0, d[3].length - 5);
		let m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let stop = false;

		month.split(" ").forEach(k => {
			if (!stop) {
				if (m.includes(k)) {
					month = k;
					stop = true;
				} else {
					month = "May";
				}
			}
		})
		//console.log(month);
		html += `<div class="card ${month}">
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

	if (personalMode) {
		cardEventList();
		localStorage.setItem("data", JSON.stringify(data));
	}
}
showEcchi ? draw(data.ecchi) : draw(data.main);

if (personalMode) {
	document.getElementById("optionCancel").addEventListener("click", () => {
		document.getElementById("optionCont").classList.remove("fadeIn");
		document.getElementById("optionCont").classList.add("fadeOut");
	})



}

function cardEventList() {
	let cards = document.getElementsByClassName("card");

	cardIdx = null;
	for (let key in cards) {
		if (cards.hasOwnProperty(key)) {
			let card = cards[key];
			card.addEventListener("dblclick", () => {
				document.getElementById("optionCont").style.display = "block";
				document.getElementById("optionCont").classList.remove("fadeOut");
				document.getElementById("optionCont").classList.add("fadeIn");
				cardIdx = parseInt(key);

			})
		}
	}
	document.getElementById("optionEdit").addEventListener("click", () => {
		document.getElementById("optionCont").classList.remove("fadeIn");
		document.getElementById("optionCont").classList.add("fadeOut");
		document.getElementById("addAnimeCont").classList.remove("fadeOut");
		document.getElementById("addAnimeCont").style.display = "block";
		document.getElementById("addAnimeCont").classList.add("fadeIn");
		edit = true;
		let d;
		showEcchi ? d = data.ecchi : d = data.main;
		let dat = d[cardIdx];

		document.getElementById("fIdx").value = dat[0];
		document.getElementById("fName").value = dat[1];
		document.getElementById("fAir").value = dat[2];
		document.getElementById("fWatched").value = dat[3];
		document.getElementById("fEp").value = dat[4];
		document.getElementById("fCover").value = dat[5];
	})

	document.getElementById("optionDelete").addEventListener("click", () => {
		document.getElementById("confirm").classList.remove("fadeOut");
		document.getElementById("confirm").style.display = "flex";
		document.getElementById("confirm").classList.add("fadeIn");
	})
	document.getElementById("confirmNo").addEventListener("click", () => {
		document.getElementById("confirm").classList.remove("fadeIn");
		document.getElementById("confirm").classList.add("fadeOut");
	})
}
if (personalMode) {
	cardEventList();
	document.getElementById("confirmYes").addEventListener("click", () => {
		document.getElementById("confirm").classList.remove("fadeIn");
		document.getElementById("confirm").classList.add("fadeOut");
		document.getElementById("optionCont").classList.remove("fadeIn");
		document.getElementById("optionCont").classList.add("fadeOut");


		showEcchi ? data.ecchi.splice(cardIdx, 1) : data.main.splice(cardIdx, 1);
		showEcchi ? draw(data.ecchi) : draw(data.main);
		details(localStorage.getItem("password-require"));
	})
}


function search() {
	let txt = document.getElementById("search").value.toLowerCase();

	let array = [],
		toDraw = [];
	showEcchi ? array = data.main.concat(data.ecchi).slice(0) : array = data.main.slice(0);

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
	} else if (txt == `\\blue`) {
		localStorage.removeItem("personalMode");
		document.getElementById("search").value = "";
		window.location.reload();
	}
}
document.getElementById("search").addEventListener("input", search);



function PasswordVerifier() {
	let code = "Fnxmnyjwz";

	function letter(s) {
		return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a) {
			let c = a.charCodeAt(0);
			switch (c) {
				case 90:
					return 'A';
				case 122:
					return 'a';
				default:
					return String.fromCharCode(c + 5);
			}
		});
	}

	if (personalMode) code = "Uzwuqj";

	function verify(txt) {
		let t = "";
		txt.split("").forEach(char => {
			t += letter(char);
		})
		console.log(t)
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
	mainC = ecchiC = movieC = mainE = ecchiE = movieE = totalC = totalE = 0;

	data.main.forEach(elm => {
		if (elm[0].toString().slice(0, 1) != "M") {
			mainC++;
			mainE += parseInt(elm[4]);
		} else {
			movieC++;
			movieE += parseInt(elm[4]);
		}
	})
	if (ec) {
		data.ecchi.forEach(elm => {
			ecchiC++;
			ecchiE += parseInt(elm[4]);
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
	imgSec.classList.remove("fadeOut");
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
		imgSec.classList.add("fadeOut");
	})
}

function resize() {
	let orientation;
	innerWidth > innerHeight ? orientation = "landscape" : orientation = "potrait";
	document.getElementById("imgSecImg").classList.remove("potraitImg", "landscapeImg");
	document.getElementById("imgSecImg").classList.add(`${orientation}Img`);

}


function Export() {
	let a = document.createElement("a");
	let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
	let t = new Date(),
		d = t.getDate().toString(),
		m = (t.getMonth() + 1).toString(),
		y = t.getFullYear().toString();
	d.length < 2 ? d = "0" + d : d = d;
	m.length < 2 ? m = "0" + m : m = m;
	a.setAttribute("href", dataStr);
	a.setAttribute("download", `AnimeBackup${d}${m}${y}.json`);
	a.click();
}

document.getElementById("export").addEventListener("click", Export);

document.getElementById("import").addEventListener("change", () => {
	let d = document.getElementById("import").files[0].text().then(t => {
		data = JSON.parse(t);
		showEcchi ? draw(data.ecchi) : draw(data.main);
		details(localStorage.getItem("password-require"));
	});
})
