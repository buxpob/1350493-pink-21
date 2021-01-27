var navMainBox = document.querySelector('.main-nav__box');
var navMainList = document.querySelector('.main-nav__list');
var navMainToggle = document.querySelector('.main-nav__toggle');

navMainBox.classList.remove('main-nav__box--nojs');
navMainList.classList.remove('main-nav__list--nojs');
navMainToggle.classList.remove('main-nav__toggle--nojs');

navMainToggle.addEventListener('click', function () {
  if (navMainList.classList.contains('main-nav__list--closed')) {
    navMainList.classList.remove('main-nav__list--closed');
    navMainList.classList.add('main-nav__list--opened');
    navMainBox.classList.remove('main-nav__box--closed');
    navMainBox.classList.add('main-nav__box--opened');
  } else {
    navMainList.classList.add('main-nav__list--closed');
    navMainList.classList.remove('main-nav__list--opened');
    navMainBox.classList.add('main-nav__box--closed');
    navMainBox.classList.remove('main-nav__box--opened');
  }
});
