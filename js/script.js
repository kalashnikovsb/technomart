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


