/* в этот файл добавляет скрипты*/
// burger-menu

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

// hero-slider

const prev = document.querySelector('.hero__button--prev');
const next = document.querySelector('.hero__button--next');
const cards = document.querySelectorAll('.hero__container');
const buttons = document.querySelectorAll('.hero__button-pagination');

const maxCount = cards.length - 1;
let currentSlide = 0;

const setActiveCard = (i) => {
  cards.forEach((card) => card.classList.remove('hero__container--active'));
  cards[i].classList.add('hero__container--active');
  buttons.forEach((button) => button.classList.remove('hero__button-pagination--active'));
  buttons[i].classList.add('hero__button-pagination--active');
};

prev.setAttribute('disabled', '');

function onBackClick() {
  if (currentSlide === 0) {
    return;
  }

  currentSlide = currentSlide - 1;

  if (currentSlide === 0) {
    prev.setAttribute('disabled', '');
  }

  if (currentSlide !== maxCount) {
    next.removeAttribute('disabled');
  }

  setActiveCard(currentSlide);
}

function onUpClick() {
  if (currentSlide === maxCount) {
    return;
  }

  currentSlide = currentSlide + 1;

  if (currentSlide === maxCount) {
    next.setAttribute('disabled', '');
  }
  if (currentSlide !== 0) {
    prev.removeAttribute('disabled');
  }

  setActiveCard(currentSlide);
}

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    currentSlide = i;
    setActiveCard(currentSlide);
  });
});

prev.addEventListener('click', onBackClick);
next.addEventListener('click', onUpClick);


// slider

const slider = document.querySelector('.form__slider');
const inputMin = document.querySelector('.form__input--min');
const inputMax = document.querySelector('.form__input--max');
const inputs = [inputMin, inputMax];

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  step: 1,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  range: {
    'min': 0,
    'max': 1000
  }
});

slider.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value = values[handle];
});
