//Toggle Dark
function toggleTheme() {
  var img = document.getElementById("modeimage");
  //if user toggles to dark mode, select dark class
  if (document.body.classList.contains("dark")){
    turnOnTheme("light");
  } else {
    turnOnTheme("dark");
    }
  var currentTheme = localStorage.getItem("mode");
  console.log(currentTheme);

}

function turnOnTheme(themeName) {
  document.body.classList.toggle("dark");
  var img = document.getElementById("modeimage");
  if (themeName == "dark") {
    img.src = "assets/images/sun.svg"
  } else if (themeName == "light") {
    img.src = "assets/images/moon.svg"
  }
  window.localStorage.setItem("mode", themeName)
}
  
