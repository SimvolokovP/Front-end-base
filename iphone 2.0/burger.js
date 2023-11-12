const burgerBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__list');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('header__list--active');
});