var link = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");

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
