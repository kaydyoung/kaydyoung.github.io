//Toggle Dark
function toggleDark() {
  var img = document.getElementById("modeimage");
  //if user toggles to dark mode, select dark class
  if (document.body.classList.toggle("dark")){
    img.src = "assets/images/sun.svg"
  } else {
    img.src = "assets/images/moon.svg" 
    }
}


//Saving Preferences
function onload() {
  if (document.body.classList.toggle("dark")){
    window.localStorage.setItem("mode", dark);
  } else {
    window.localStorage.setItem("mode", light);
  }
}


onload(window.localStorage.getItem("mode"));
