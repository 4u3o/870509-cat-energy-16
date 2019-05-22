var link = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");
var staticMap = document.querySelector(".map__static");
var pin = document.querySelector(".map__pin");
var yaMap = document.querySelector(".map__js");

if (yaMap.classList.contains("map__js--disabled")) {
  yaMap.classList.remove("map__js--disabled");
  pin.classList.add("map__pin--disabled");
  staticMap.classList.add("map__pin--disabled");
}

link.classList.remove("page-header__toggle--hidden");
menu.classList.remove("main-nav--opened");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (link.classList.contains("page-header__toggle--opened")) {
    link.classList.remove("page-header__toggle--opened");
    menu.classList.remove("main-nav--opened");
  } else {
    link.classList.add("page-header__toggle--opened");
    menu.classList.add("main-nav--opened");
  }
});

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
    evt.preventDefault();
    if (menu.classList.contains("main-nav--opened")) {
      link.classList.remove("page-header__toggle--opened");
      menu.classList.remove("main-nav--opened");
    }
  }
});
