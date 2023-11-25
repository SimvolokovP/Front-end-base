window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }
  
      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    const someFunc = (instance) => {
      if (instance) {
        instance.on('slideChange', function (e) {
          console.log('*** mySwiper.activeIndex', instance.activeIndex);
        });
      }
    };
  
    resizableSwiper(
      '(max-width: 1280px)',
      '.slider-1',

      {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 3,
        freeMode: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          544: {
            slidesPerView: 1,
          }
        }
      },
      someFunc
    );
  });