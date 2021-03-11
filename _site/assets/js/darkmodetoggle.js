//Toggle Dark
function toggleDark() {
  var img = document.getElementById("modeimage");
  //if user toggles to dark mode, select dark class
  if (document.body.classList.toggle("dark")){
    img.src = "assets/images/sun.svg"
    window.localStorage.setItem("mode", "dark")
  } else {
    img.src = "assets/images/moon.svg"
    window.localStorage.setItem("mode", "light")
    }
  //return window.localStorage.getItem("mode");
}


// Get the current theme from local storage 
var currentTheme = localStorage.getItem("mode");
console.log(currentTheme);

if (currentTheme === "dark") {
  document.body.classList.toggle("dark")
}

/*
// If the current local storage item can be found
if (currentTheme) {
  (document.body.classList.toggle(currentTheme))
}
  currentTheme = localStorage.setItem("mode", "dark")
  // Set the body data-theme attribute to match the local storage item
  document.body.classList.toggle(currentTheme);
// If the current theme is dark, check the theme toggle
  if (currentTheme == "dark") {
    document.body.classList.toggle("dark");
  }
}
*/
