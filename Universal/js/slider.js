const slider = document.querySelector('.swiper-container');

let swiper = new Swiper(slider, {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    loop: true,
  });