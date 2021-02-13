/* Toggles Text to be Light or Dark Mode

function toggleDark() {
  var mode = "";
  //if user toggles to dark mode, select dark class
  if (document.body.classList.toggle("dark")){
    mode = "Light Mode"
  } else {
    mode = "Dark Mode"
    }
      //Mode will be the text inside the button: dark or light
      document.getElementById("btn-toggle").innerHTML = mode; 
    }
*/

//Try to toggle image
function toggleDark() {
  var img = document.getElementById("modeimage");
  //if user toggles to dark mode, select dark class
  if (document.body.classList.toggle("dark")){
    img.src = "assets/images/sun.png"
    console.log(img);
  } else {
    img.src = "assets/images/moon.png";
    console.log(img);
    }
}


/* Saving Preferences */

const theme = document.getElementById("btn-toggle").innerHTML;

window.localStorage.setItem("pref", theme);

console.log(theme);

//window.localStorage.getItem("pref");
