'use strict';

const productSlides = document.querySelectorAll('.slider-products__item');
const buttonPrev = document.querySelector('.slider-products__button--prev');
const buttonNext = document.querySelector('.slider-products__button--next');
const radioControls = document.querySelectorAll('.slider-products__control-input');
const servicesControls = document.querySelectorAll('.slider-services__control');
const servicesSlides = document.querySelectorAll('.slider-services__slide');


const showCurrentSlide = () => {
  for (let slide of productSlides) {
    slide.classList.remove(productClassName);
  }
  productSlides[currentSlide].classList.add(productClassName);
};


const refreshControls = () => {
  for (let control of radioControls) {
    control.checked = false;
  }
  radioControls[currentSlide].checked = true;
};

const resetSlider = () => {
  for (let control of servicesControls) {
    control.classList.remove(activeControlClassName);
  }
  for (let slide of servicesSlides) {
    slide.classList.remove(activeSlideClassName);
  }
};

const setClasses = (i) => {
  servicesControls[i].classList.add(activeControlClassName);
  servicesSlides[i].classList.add(activeSlideClassName);
};


buttonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  currentSlide = Math.abs(currentSlide - 1) % productSlides.length;
  refreshControls();
  showCurrentSlide();

});


buttonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  currentSlide = (currentSlide + 1) % productSlides.length;
  refreshControls();
  showCurrentSlide();
});


radioControls.forEach((control, i) => {
  control.addEventListener('click', () => {
    currentSlide = i;
    refreshControls();
    showCurrentSlide();
  });
});

const productClassName = 'slider-products__item--active';
const activeControlClassName = 'slider-services__control--active';
const activeSlideClassName = 'slider-services__slide--active';
let currentSlide = 0;

productSlides[0].classList.add(productClassName);
servicesControls[0].classList.add(activeControlClassName);
servicesSlides[0].classList.add(activeSlideClassName);

servicesControls.forEach((control, i) => {
  control.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetSlider();
    setClasses(i);
  });
});




const mapPopup = document.querySelector('.map-popup');
const openMapElement = document.querySelector('.contacts__map-image');
const closeMapElement = document.querySelector('.map-popup__close');

const mapPopupOpen = (evt) => {
  evt.preventDefault();
  mapPopup.classList.add('map-popup--show');
};

const mapPopupClose = (evt) => {
  evt.preventDefault();
  mapPopup.classList.remove('map-popup--show');
};

openMapElement.addEventListener('click', mapPopupOpen);
closeMapElement.addEventListener('click', mapPopupClose);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('map-popup--show') || feedbackPopup.classList.contains('feedback-popup--show')) {
      mapPopupClose(evt);
      feedbackPopupClose(evt);
    }
  }
});





const feedbackPopup = document.querySelector('.feedback-popup');
const feedbackForm = document.querySelector('.feedback-popup__form');
const feedbackOpenElement = document.querySelector('.button--contacts');
const feedbackCloseElement = document.querySelector('.feedback-popup__close');
const feedbackLogin = document.querySelector('#customer-name');
const feedbackEmail = document.querySelector('#customer-email');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

const feedbackPopupOpen = (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.add('feedback-popup--show');

  if (storage) {
    feedbackLogin.value = storage;
    feedbackEmail.focus();
  } else {
    feedbackLogin.focus();
  }
};

const feedbackPopupClose = (evt) => {
  evt.preventDefault();
  feedbackPopup.classList.remove('feedback-popup--show');
  feedbackPopup.classList.remove('feedback-popup--error');
};

feedbackOpenElement.addEventListener('click', feedbackPopupOpen);
feedbackCloseElement.addEventListener('click', feedbackPopupClose);

feedbackForm.addEventListener('submit', (evt) => {
  if (!feedbackLogin.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove('feedback-popup--error');
    feedbackForm.offsetWidth == feedbackForm.offsetWidth;
    feedbackPopup.classList.add('feedback-popup--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', feedbackLogin.value);
    }
  }
});




const cartPopup = document.querySelector('.cart-popup');
const cartLink = document.querySelector('.checkout-block__link--cart');
const buyButtons = document.querySelectorAll('.button--buy');

buyButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    cartLink.classList.add('.checkout-block__link--active');
  });
});
