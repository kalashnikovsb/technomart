'use strict';

const productSlides = document.querySelectorAll('.slider-products__item');
const buttonPrev = document.querySelector('.slider-products__control--prev');
const buttonNext = document.querySelector('.slider-products__control--next');
const radioControls = document.querySelectorAll('.slider-products__radio-input');


const showCurrentSlide = () => {
  for (let slide of productSlides) {
    slide.classList.remove(className);
  }
  productSlides[currentSlide].classList.add(className);
};


const refreshControls = () => {
  for (let control of radioControls) {
    control.checked = false;
  }
  radioControls[currentSlide].checked = true;
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

const className = 'slider-products__item--active';
let currentSlide = 0;

productSlides[0].classList.add(className);
