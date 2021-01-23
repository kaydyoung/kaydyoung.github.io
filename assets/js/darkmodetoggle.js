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

//Saving preferences
if (mode = "Light Mode") {
  localStorage.setItem("preffered-mode", "light");
} else {
  localStorage.setItem("preffered-mode", "dark")
  }
