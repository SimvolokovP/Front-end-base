const burger = document.querySelector('.btn__burger');
const menu = document.querySelector('.menu');
const body = document.body;
const menuItems = menu.querySelectorAll('a');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu--active');
        body.classList.remove('stop-scroll');
        burger.classList.remove('burger--active');
    })
})