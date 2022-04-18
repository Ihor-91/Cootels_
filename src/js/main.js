import $ from "jquery";

import "../scss/main.scss";
import "../index.html";

// burgerMenu
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".nav__burger");
  let links = menu.find(".nav__item-link");
  //   let overlay = menu.find(".header__menu");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  // overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-active");

    if (menu.hasnClass(" burger-active")) {
      $("body").scss("hidden");
    } else {
      $("body").scss("visible");
    }
  }

  // функция toggleMenu должна выглядеть так
  // function toggleMenu() {
  //   menu.toggleClass("mobileMenu-visible"); // понятный класс, что бы мы понимали что оно делает, тебе нужно будет поправить стили под этот класс
  //
  //   // этот кусок кода говорит нам что когда мобильное меню открыто в мы блокируем скролл в body и обратно включаем его когда меню закрыто (свойства scss так как у тебя его попросто не существует это ошибка)
  //   if (menu.hasClass("mobileMenu-visible")) {
  //     $("body").css("overflow", "hidden");
  //   } else {
  //     $("body").css("overflow", "visible");
  //   }
  // }
}

burgerMenu(".header__menu");
