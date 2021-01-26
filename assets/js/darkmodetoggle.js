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

document.getElementsByClassName('.btn__background').onClick(function() {
  document.getElementsByClassName('.container').toggleClass('color');
  document.getElementsByClassName('.btn__background').toggleClass('color');
  document.getElementsByClassName('.btn__face').toggleClass('move');
    document.getElementsByClassName('.btn__animation').toggleClass(function(){
      return $(this).is('.move-reverse, .move') ? 'move-reverse move' : 'move';
    })
});

/*
$('.btn__background').on('click', function() {
  $('.container').toggleClass('color');
  $('.btn__background').toggleClass('color');
  $('.sun-box').toggleClass('move');
  $('.moon-box').toggleClass('move');

  $('.btn__face').toggleClass('move');
  $('.btn__eye-left, .btn__eye-right').toggleClass(function(){
    return $(this).is('.open, .close') ? 'open close' : 'close';
  });
  $('.btn__mouth').toggleClass('close');

  $('.btn__animation').toggleClass(function(){
    return $(this).is('.move-reverse, .move') ? 'move-reverse move' : 'move';
  })});
*/
