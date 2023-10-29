$(function(){
    $('.hero__slider').slick({
        arrows: false,
        dots: true,
        fade: true
    });
});


$(function(){
    $('.slider__items').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    });
});

$(".menu,.hero__info").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
});