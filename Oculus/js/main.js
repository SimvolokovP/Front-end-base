$(".header__inner, .footer__inner").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
});

'use strict'

const tabBtns = document.querySelectorAll('.tab__btn');
const tabContent = document.querySelectorAll('.tab__content-item')

tabBtns.forEach(function(element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabBtns.forEach(function(item) {
        item.classList.remove('tab__btn-active')
    });

    tabContent.forEach(function(item) {
        item.classList.remove('tab__content-item--active')
    });
    
    tabTarget.classList.add('tab__btn-active');
    document.querySelector(`#${button}`).classList.add('tab__content-item--active');
};


const play = document.querySelector('.video__control');
const video = document.querySelector('.media');

play.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', 'controls');
    play.classList.add('video__control--hidden');
    
})

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');
const menuLink = document.querySelector('.header__link');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('header__list--active');
});

menuLink.addEventListener('click', () => {
    menu.classList.remove('header__list--active');
});