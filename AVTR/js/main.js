$(function(){
    $('.slider').slick({
        slidesToShow: 4,
        dots: false,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="images/arrowLeft.svg" alt="arrow">',
        autoplay: true,
        autoplaySpeed: 2000,

        nextArrow: '<img class="arrow arrow-right" src="images/arrowRight.svg" alt="arrow">',

        responsive: [
            {
                breakpoint: 751,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});