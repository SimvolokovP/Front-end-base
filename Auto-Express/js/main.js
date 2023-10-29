$(function(){
    $('.slider__inner').slick({
        
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 660,
              settings: {
                
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    })

    
});

$(".hero, .service").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
});