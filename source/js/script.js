/* в этот файл добавляет скрипты*/
// menu

const navList = document.querySelector('.main-nav');
const navToggle = document.querySelector('.js-toggle-button');

navToggle.addEventListener('click', () => {
  if (navList.classList.contains('main-nav--closed')) {
    navList.classList.remove('main-nav--closed');
    navList.classList.add('main-nav--opened');
  } else {
    navList.classList.add('main-nav--closed');
    navList.classList.remove('main-nav--opened');
  }
});

// hero

const back = document.querySelector('.hero__button--back');
const up = document.querySelector('.hero__button--up');
const cards = document.querySelectorAll('.hero__container');

const maxCount = cards.length - 1;
let currentSlide = 0;

const setActiveCard = (i) => {
  cards.forEach((card) => card.classList.remove('hero__container--active'));
  cards[i].classList.add('hero__container--active');
};

back.setAttribute('disabled', '');

function onBackClick() {
  if (currentSlide === 0) {
    return;
  }

  currentSlide = currentSlide - 1;

  if (currentSlide === 0) {
    back.setAttribute('disabled', '');
  }

  if (currentSlide !== maxCount) {
    up.removeAttribute('disabled');
  }

  setActiveCard(currentSlide);
}

function onUpClick() {
  if (currentSlide === maxCount) {
    return;
  }

  currentSlide = currentSlide + 1;

  if (currentSlide === maxCount) {
    up.setAttribute('disabled', '');
  }
  if (currentSlide !== 0) {
    back.removeAttribute('disabled');
  }

  setActiveCard(currentSlide);
}

back.addEventListener('click', onBackClick);
up.addEventListener('click', onUpClick);
