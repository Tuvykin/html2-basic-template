/* в этот файл добавляет скрипты*/

let navList = document.querySelector('.main-nav');
let navToggle = document.querySelector('.js-toggle-button');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('main-nav--closed')) {
    navList.classList.remove('main-nav--closed');
    navList.classList.add('main-nav--opened');
  } else {
    navList.classList.add('main-nav--closed');
    navList.classList.remove('main-nav--opened');
  }
});
