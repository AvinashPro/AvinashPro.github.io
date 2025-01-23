let stgs = JSON.parse(localStorage.getItem("mal-setting"));

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, push, onValue, update } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
import { getStorage, uploadBytes, ref as stRef, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


if(stgs != null && stgs.pMode == true) {

let firebaseConfig = {
  databaseURL: "https://mal0577-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyAenb9LYCD8qinnj86HvHia_w5N5i9ZR20",
  authDomain: "mal0577.firebaseapp.com",
  projectId: "mal0577",
  storageBucket: "mal0577.appspot.com",
  messagingSenderId: "331686520805",
  appId: "1:331686520805:web:f407eab774fc6b8c01710c"
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

const usersRef = ref(database, "users");
const auth = getAuth();

const defaultPfp = "https://firebasestorage.googleapis.com/v0/b/mal0577.appspot.com/o/pfp%2FDefault%2Fryusui.jpg?alt=media&token=94287f71-80f2-4cb9-9578-8f26f1272c89";

function signUp(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    /*updateProfile(auth.currentUser, {
    displayName: name
    })*/
    
    
/*.then(() => {
  // Profile updated!
  sendEmailVerification(auth.currentUser)
  .then(() => {
    log("ver email sent!")
    // Email verification sent!
    // ...
  });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});*/

    let data = {
      name: name,
      data: {
        main: [],
        ecchi: []
      },
      passcode: encryptPass("blue"),
      pfp: defaultPfp
    };
    let id = user.uid;
    //console.log(userCredential)
    updateProfile(auth.currentUser, { displayName: name }).then(() => {
      
      update(ref(database, `${user.uid}`), data);
      
      addMessage("Welcome Goshujin-sama", "Your account is created successfully!", "res/kawaii2.jpg", true)
      
      sendEmailVerification(auth.currentUser).then(() => {
        //console.log("verification email sent!")
        addMessage("Verification Email", "Check your email!", "res/gmail.png");
        signOut();
      }).catch(error => {
        //addMessage("Some error occured!", "Check your details again", "res/add.png")
        console.log(error);
      })
      
    })
    
    let file = document.getElementById("pfp_input").files[0];
    if(file) {
      uploadBytes(stRef(storage, `pfp/${name}`), file).then(snapshot => {
        getDownloadURL(stRef(storage, `pfp/${name}`)).then(url => {
          data.pfp = url;
          update(ref(database, `${user.uid}`), data);
        })
      })
    }
    
    
    /*let PFP = document.getElementById("pfp_input").files[0];
    if(PFP != undefined) {
      //const user = userCredential.user;
      const pfpRef = stRef(storage, `pfp/${data.name}`);
      uploadBytes(pfpRef, PFP).then(snapshot => {
        // Uploaded
        getDownloadURL(pfpRef).then(url => {
          console.log(url, id)
          settings.user.pfp = data.pfp = url;
          let uRef = ref(database, id);
          console.log(data)
          update(uRef, data);
        })
      })
    }*/
    
  }).catch((error) => {
    addMessage("Some error occured!", "Check your details again", "res/error.png");
  })
    
    /*sendEmailVerification(auth.currentUser)
  .then(() => {
    log("ver email sent!")
    // Email verification sent!
    // ...
  });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });*/
}

function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user.emailVerified) {
      addMessage("Welcome! Goshujin-sama", "Boooo!", "res/kawaii.jpg", true)
    } else {
      addMessage("Goshujin-sama", "Wouldn't you verify your email first >_<", "res/kawaii2.jpg", true);
    }
    //console.log("Signed In", user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    addMessage("Some error occured!", "E-mail and Password Mismatch", "res/error.png")
    console.log(errorMessage)
  });
}
//signOut()
/*
let goBackSignUpBtn = document.getElementById("goBackSignUpBtn"),
goBackSignInBtn = document.getElementById("goBackSignInBtn"),
signUpBtn = document.getElementById("signUpBtn"),
signInBtn = document.getElementById("signInBtn");

function eventA() {
  signInBtn = document.getElementById("signInBtn");
  goBackSignUpBtn = document.getElementById("goBackSignUpBtn");
  
  signInBtn.addEventListener("click", () => {
    signIn(document.getElementById("email").value, document.getElementById("signPass").value);
  })
  
  document.getElementById("forgotBtn").addEventListener("click", () => {
    document.getElementById("signInForm").style.display = "none";
    document.getElementById("forgotForm").style.display = "grid";
    /*document.getElementById("welcomeCont").innerHTML += `
  <div class="form" id="forgotForm">
    <div>
      <p>Reset password</p>
      <div class="form-field">
        <div>
          <input type="email" id="forgotEmail" name="forgotEmail" required="">
          <label for="forgotEmail">Email address</label>
        </div>
      </div>
      <div style="display:flex;">
      <button class="button" id="forgotGoBackBtn">Go back</button>
      <button class="button">Send code</button>
      </div>
    </div>
  </div>
    `;*/
  /*  document.getElementById("forgotGoBackBtn").addEventListener("click", () => {
      document.getElementById("signInForm").style.display = "grid";
      document.getElementById("forgotForm").style.display = "none";
      
    })
    
  });
  
  document.getElementById("passwordResetBtn").addEventListener("click", () => {
    resetPassword(document.getElementById("forgotEmail").value);
    document.getElementById("forgotEmail").value = "";
    document.getElementById("forgotMsg").style.display = "block";
  });
  /*document.getElementById("forgotGoBackBtn").addEventListener("click", () => {
    
  })*/

 /* goBackSignUpBtn.addEventListener("click", eventB);
  
}
function eventB() {
  signUpBtn = document.getElementById("signUpBtn");
  goBackSignInBtn = document.getElementById("goBackSignInBtn");
    
  signUpBtn.addEventListener("click", () => {
    signUp(document.getElementById("email").value, document.getElementById("signPass").value, document.getElementById("userNameInput").value);
  })
    
  goBackSignInBtn.addEventListener("click", eventA); 
}

if(signInBtn) {
  eventA();
} else {
  eventB();
}
*/


function resetPassword(email) {
  // send email for password reset
  //console.log(email);
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    //
    console.log("Email for password reset has been sent!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


let signUpBtn = document.getElementById("signUpBtn");
function handleSignUp() {
  
  let [emailInp, nameInp, passInp] = [document.getElementById("email-up"), document.getElementById("userNameInput"), document.getElementById("signPass-up")];
  
  
  signUpBtn.addEventListener("click", () => {
    let valid = true;
    
    if(valid) {
      signUp(emailInp.value, passInp.value, nameInp.value);
    }
  })
  
}

function handleSignIn() {
  let [emailInp, passInp] = [document.getElementById("email-in"), document.getElementById("signPass-in")];
  
  let valid = true;
  
  document.getElementById("signInBtn").addEventListener("click", () => {
    let valid = true;
    
    if(valid) {
      signIn(emailInp.value, passInp.value);
    }
    
  })
  
}

function handlePasswordReset() {
  document.getElementById("passwordResetBtn").addEventListener("click", () => {
    let emailInp = document.getElementById("forgotEmail");
    
    let valid = true;
    if(valid) {
      resetPassword(emailInp.value);
      addMessage("Mr. Psyduck", "E-mail for password reset has been sent!", "res/psyduck.png")
      //console.log("Email for password reset has been send!");
    }
    
  })
}

handleSignUp();
handleSignIn();
handlePasswordReset();

function handleData() {
  document.getElementById("addAnimeSaveBtn").addEventListener("click", () => {
    user.data = settings.data;
    update(userRef, user);
  })
  document.getElementById("prompt-proceed").addEventListener("click", () => {
    user.data = settings.data;
    update(userRef, user);
  })
}

function handleProfileEdit() {
  let profileEdit = document.getElementById("profileEdit"),
  profileSave = document.getElementById("profileSave"),
  changeNavPfp = document.getElementById("changeNavPfp"),
  profileName = document.getElementById("profileName"),
  pfpElm = document.getElementById("pfp"),
  navPfpInput = document.getElementById("nav_pfp_input");
  
  let isProfileChanged = false;
  
  
  
  profileEdit.addEventListener("click", () => {
    fadeOutElm(profileEdit);
    fadeInElm(profileSave);
    fadeInElm(changeNavPfp);
    
    profileEdit.style.display = "none";
    profileSave.style.display = "block";
    profileName.contentEditable = true;
    profileName.classList.add("editable");
    
    navPfpInput.addEventListener("change", () => {
        const file = navPfpInput.files[0];
       if(file) {
        //profileName.innerHTML = "hel"
         const fileReader = new FileReader();
         fileReader.onload = e => {
          pfpElm.src = e.target.result;
          isProfileChanged = true;
         // settings.user.pfp = settings.users.guest[settings.user.name].pfp = e.target.result;
          //saveSettings();
         }
        fileReader.readAsDataURL(file);
       }
    
     })
    
   /* navPfpInput.addEventListener("change", () => {
      let PFP = document.getElementById("pfp").files[0];
      if(PFP != undefined) {
      //const user = userCredential.user;
        const pfpRef = stRef(storage, `pfp/${user.name}`);
          uploadBytes(pfpRef, PFP).then(snapshot => {
        // Uploaded
      })
    }*/
       /* const file = navPfpInput.files[0];
       if(file) {
         const fileReader = new FileReader();
         fileReader.onload = e => {
          pfpElm.setAttribute('src', e.target.result); 
      //settings.user.pfp = user.pfp = e.target.result;
          saveSettings();
         }
        fileReader.readAsDataURL(file);
       }*/
    
     //})
    
  })
  
  profileSave.addEventListener("click", () => {
      
      profileName.contentEditable = false;
      profileName.classList.remove("editable");
      fadeOutElm(profileSave);
      fadeOutElm(changeNavPfp);
      fadeInElm(profileEdit);
      
      
      //imageToUri(document.getElemeprofileName
      let pArr = profileName.innerText.split("\\");
      let newName = pArr[0];
      let oldName = settings.user.name;
      
      user.name = newName;
      settings.user.name = newName;
      //document.querySelector("wlUserNameElm").innerHTML = newName;
      
      if(pArr[1]) {
        settings.user.pfp = user.pfp = pfpElm.src = pArr[1];
      } else {
        let file = navPfpInput.files[0];
        if(file) {
          const pfpRef = stRef(storage, `pfp/${user.name}`);
          uploadBytes(pfpRef, file).then(snapshot => {
            //readData();
            if(newName != oldName) {
              deleteObject(stRef(storage, `pfp/${oldName}`)).then(() => {
              
              }).catch(() => {
              
              })
              getDownloadURL(stRef(storage, `pfp/${newName}`)).then(url => {
                user.pfp = url;
              })
            }
        //  log("pfp uploaded")
        // Uploaded
          })
        }
        //document.write(JSON.stringify(navPfpInput.files[0]));
        //settings.user.pfp = user.pfp = pfpElm.src = "https://firebasestorage.googleapis.com/v0/b/mal0577.appspot.com/o/pfp%2FGojo.jpg";
      }
      
      /*navPfpInput.addEventListener("change", () => {
        let file = navPfpInput.files[0];
        if(file) {
          const fileReader = new FileReader();
          fileReader.onload = e => {
            pfpElm.setAttribute("src", e.target.result);
          }
        }
      })*/
      /*if(PFP != undefined) {
      //const user = userCredential.user;
        const pfpRef = stRef(storage, `pfp/${user.name}`);
          uploadBytes(pfpRef, PFP).then(snapshot => {
        // Uploaded
        })
      }*/
      
      
      profileName.innerHTML = newName;
      document.querySelector("#wlUserNameElm").innerHTML = newName;
      saveSettings();
      updateProfile(auth.currentUser, { displayName: newName })
      update(userRef, user);
      
      
  })
  
  
}


function signOut() {
  auth.signOut();
  settings.user = null;
  settings.data = {main: [], ecchi: []};
  saveSettings();
}
//signOut();

//auth.signOut();
let userRef = null,
user = {
  name: "",
  data: {
    main: [],
    ecchi: []
  },
},
uid = null,
userObj = null,
userData = null;

let searchBar = document.getElementById("searchBar");

onAuthStateChanged(auth, (USER) => {
  if (USER && USER.emailVerified) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user 
    //if(USER.emailVerified) {
      userObj = USER;
      uid = userObj.uid;
      userRef = ref(database, uid);
      
      readData();
      handleData();
      handleProfileEdit();
   // }
      document.getElementById("rearrangeSaveBtn").addEventListener("click", () => { rSave(false) });
      
      document.getElementById("JSONSaveBtn").addEventListener("click", () => {
        let data = JSON.parse(editor.getValue());
        if(settings.ecchi) {
          
          settings.user.data = user.data = data;
        //  saveSettings();
        //  filter();
         //update(userRef, user);
          //updateDetails(settings.data);
          
        } else {
          settings.user.data.main = user.data.main = data.main;
        }
        
        saveSettings();
        filter();
        update(userRef, user);
        updateDetails(settings.data);
        
        let JSONPage = document.getElementById("JSONPage");
        //JSONPage.classList.remove("showPage-type2");
        showNavBar();
        JSONPage.classList.add("hidePage-type2");
        addMessage("JSON File Saved", "Your Data has been saved", "res/json.png", true);
        
      })
      
      searchBar.addEventListener("input", () => {
        let val = searchBar.value;
        let init = val.split("{")[0];
        if(init == "/changePass" && val.slice(-1) == "}") {
          user.passcode = settings.user.passcode = encryptPass(val.split("{")[1].slice(0, -1));
          update(userRef, user);
          searchBar.value = "";
        }
      })
      
    //handlePage();
    
    
    
  } else {
    // User is signed out
    //document.getElementById("signInForm").style.display = "grid";
    
    searchBar.addEventListener("input", () => {
        let val = searchBar.value;
        let init = val.split("{")[0];
        if(init == "/changePass" && val.slice(-1) == "}") {
          settings.user.passcode = settings.users.guest[settings.user.name].passcode = encryptPass(val.split("{")[1].slice(0, -1));
          saveSettings();
          searchBar.value = "";
        }
      })
    
    let loader = document.getElementById("loader"),
    signInPage = document.getElementById("signInPage");
    //signUpPage = document.getElementById("signUpPage");
    loader.classList.remove("showPage");
    loader.classList.add("hidePage");
    
    if(!stgs.guest && !document.getElementById("signUpPage").classList.contains("showPage")) {
      signInPage.classList.remove("hidePage");
      signInPage.classList.add("showPage");
      //signUpPage.classList.add("showPage");
    }
    if(settings.guest) {
      handlePage()
    }
    
    document.getElementById("rearrangeSaveBtn").addEventListener("click", () => { rSave(true) });
    
    document.getElementById("JSONSaveBtn").addEventListener("click", () => {
      
      let data = JSON.parse(editor.getValue());
      if(settings.ecchi) {
        settings.user.data = settings.data = data;
      } else {
        settings.user.data.main = settings.data.main = data.main;
      }
      settings.users.guest[settings.user.name].data = settings.data;
      saveSettings();
      filter();
      updateDetails(settings.data);
      
      let JSONPage = document.getElementById("JSONPage");
      //JSONPage.classList.remove("showPage-type2");
      showNavBar();
      JSONPage.classList.add("hidePage-type2");
      addMessage("JSON File Saved", "Your Data has been saved", "res/json.png", true);
      
    })
    
    //document.getElementById("loader").classList.add("fadeOut");
    console.log("user is signed out")
  }
});

function handlePage() {
  let logPage = document.getElementById("logPage");
  let welcomeCont = document.getElementById("welcomeCont");
  let mainCont = document.getElementById("main-container");
  welcomeCont.classList.add("fadeOut");
  
  mainCont.style.display = "block";
  
  //if(user.data != undefined && user.data.main) {
  /*settings.user = {
    name: user.name,
    pfp: user.pfp
  };*/
  //settings.data = user.data;
  
  //updateAnimeCard(settings.data.main);
  //updateDetails(settings.data);
  //log(user)
  //document.getElementById("pfp").src = user.pfp;
  //document.getElementById("profileName").innerHTML = user.name;
  fadeInElm(document.getElementById("profileEdit"));
  //updateProfile();
  filter();
  
}


function readData() {
  onValue(userRef, data => {
    let t = data.val();
  
    user.name = t.name;
    user.data = t.data;
    user.pfp = t.pfp;
    user.passcode = t.passcode;
    
    let animeData = data.val().data;
    if(animeData != undefined) {
      if(animeData.main == undefined) {
        animeData.main = [];
      } if(animeData.ecchi == undefined) {
        animeData.ecchi = [];
      }
    } else {
      animeData = {main: [], ecchi: []}
    }
    
    settings.data = animeData;
    saveSettings();
    filter();
    updateDetails(settings.data);
    
    //log(JSON.stringify(settings))
    
    if(user.data == undefined) {
      user.data = {
        main: [],
        ecchi: []
      }
    } else {
      if(user.data.main == undefined) {
        user.data.main = [];
      } 
      if(user.data.ecchi == undefined) {
        user.data.ecchi = [];
      }
    }
    
    settings.user = user;
    document.getElementById("profileName").innerHTML = user.name;
    document.querySelector("#wlUserNameElm").innerHTML = user.name;
    document.getElementById("pfp").src = user.pfp;
    //handlePage();
    
  //})
    
  /*getDownloadURL(stRef(storage, `pfp/${user.name}`)).then(url => {
    document.getElementById("pfp").src = url;
    user.pfp = url;
    settings.user.pfp = url;
    //update(userRef, user);
    //document.getElementById("pfp").src = url;
  }).catch(error => {
    let url = defaultPfp;
    if(user.pfp) url = user.pfp;
    document.getElementById("pfp").src = url;
   //update(userRef, user);
    //user.pfp = url;
    //settings.user.pfp = url;
    //document.getElementById("pfp").src = url;
  })*/
  
  })
  //log(user)
  handlePage();
  
  //console.log(user)
}

function rSave(guest) {
  let type;
  document.getElementById("rMain").classList.contains("rActive") ? type = "main" : type = "ecchi";
  
  let elms = document.getElementById("rearrangeList").getElementsByClassName("rearrangeAnimePageItems");
  let newData = [];
  Object.entries(elms).forEach(([newIdx, elm]) => {
    let oldIdx = elm.title;
    newData[newIdx] = settings.data[type][oldIdx];
  })
  
  settings.data[type] = newData;
  animeReIndexing(type);
  settings.user.data = settings.data;
  
  if(guest) {
    settings.users.guest[settings.user.name].data = settings.data;
  } else {
    user.data = settings.data;
    update(userRef, user);
  }
  
  saveSettings();
  updateAnimeCard(settings.data.main);
  filter();
  
  document.getElementById("rearrangeAnimePage").classList.add("hidePage-type2");
  document.getElementById("rearrangeList").innerHTML = "";
}

function addAnimeToDb(arr, main=true) {
  main ? user.data.main.push(arr) : user.data.ecchi.push(arr);
  update(userRef, user);
}

/*let searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", () => {
  let val = searchBar.value.toLowerCase();
  if(val === `\\reset`) {
    //log("ye")
    //signOut();
  }
})*/
/*function saveAnimeDataToDb() {
  user.data = settings.data;
  update(userRef, user);
}*/
/*document.getElementById("rearrangeSaveBtn").addEventListener("click", () => {
  user.data = settings.data;
  update(userRef, user);
})*/

document.getElementById("signOutBtn").addEventListener("click", () => {
  log(settings.guest);
  if(settings.guest) {
    settings.pMode = false;
    settings.guest = false;
    settings.ecchi = false;
    saveSettings();
  } else {
    signOut();
    settings.ecchi = false;
    settings.pMode = false;
    saveSettings();
  }
  window.location.reload();
  //signOut();
  //window.location.reload();
});

//setTimeout(() => {
  /*addAnimeToDb(
        [7, "Steins;Gate", 2011, "December 2022", 51, "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg"], false
    );*/
  //console.log("timeout")
  
  //signUp("dada543@gmail.com", "akaimochiyu", "DonDejvo");
  //log("done")
//}, 5000)


}
