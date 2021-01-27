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


/* Saving Preferences

const theme = document.getElementById("btn-toggle").innerHTML

window.localStorage.setItem("pref", theme);

window.localStorage.getItem("pref")
*/

/* Code to change dark mode button a different color */
document.getElementsByClassName('.btn__background').onClick(function() {
  document.getElementsByClassName('.container').toggleClass('color');
});
