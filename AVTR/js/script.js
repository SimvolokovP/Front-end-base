const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const body = document.body;
const navItems = nav?.querySelectorAll('a');

burger?.addEventListener('click' , () => {
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--active')
    nav.classList.toggle('menu--visible')
}
);

navItems.forEach (el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger.classList.remove('burger--active')
        nav.classList.remove('menu--visible')
    }
    )
})


$(".menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
});