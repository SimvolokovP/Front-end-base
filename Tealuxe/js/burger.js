const burgerBtn = document.querySelector('.burger-btn');
const menu = document.querySelector('.header__list');
const body = document.body;
const closeBtn = document.querySelector('.btn--close');
const navItems = menu.querySelectorAll('a');


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('stop-scroll');
    
});

closeBtn.addEventListener('click', () => {
    burgerBtn.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    body.classList.remove('stop-scroll');
    
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        burgerBtn.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        body.classList.remove('stop-scroll');
        
    })
});