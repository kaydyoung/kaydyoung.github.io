const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle(".dark-theme");  }); // Added a period before the theme ?? Maybe thats what it needed
