import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainers__swiper', {
  slidesPerView: '4',
  spaceBetween: 40,
  scrollbar: {
    el: '.trainers__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.trainers__slider-btn--next',
    prevEl: '.trainers__slider-btn--prev',
  },
});
