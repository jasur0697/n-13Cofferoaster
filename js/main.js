var elMenuToggle = document.querySelector(".menu");
var elMenu = document.querySelector(".site-nav");

elMenuToggle.addEventListener("click", function () {
  elMenu.classList.toggle("site-nav__active");
});
