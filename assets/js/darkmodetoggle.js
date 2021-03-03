//Toggle Dark
function toggleDark() {
  var img = document.getElementById("modeimage");
  //if user toggles to dark mode, select dark class
  if (document.body.classList.toggle("dark")){
    img.src = "assets/images/sun.svg"
    window.localStorage.setItem('mode', 'dark')
  } else {
    img.src = "assets/images/moon.svg"
    window.localStorage.setItem('mode', 'light')
    }
}
