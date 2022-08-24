let header = document.querySelector('.header');
let toggle = document.querySelector('.header__button-toggle');

header.classList.remove('header--nojs');

toggle.addEventListener('click', function () {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');
  } else {
    header.classList.add('header--closed');
    header.classList.remove('header--opened');
  }
});
