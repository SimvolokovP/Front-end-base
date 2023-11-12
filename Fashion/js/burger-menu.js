const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.menu');
const body = document.body;
const navItems = menu.querySelectorAll('a');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('stop-scroll');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger--active');
        menu.classList.toggle('menu--active');
        body.classList.toggle('stop-scroll');
    })
})