$(document).ready(function(){ 
    //slider;
    $('.banner-slider').slick({
    autoplay: true,
    autoplaySpeed: 1800, 
    dots: true,
   
    arrows:false,

    });


   //venobox;

    $('.venobox').venobox(); 

        //team-slider;
    $('.team-slider').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
       slidesToShow:4,
        arrows:false,
    
        });

 //team-slider;
 $('.testi-slider').slick({
    autoplay: true,
    autoplaySpeed: 1800, 
    dots: true,
    slidesToShow:2,
    arrows:false,

    });
//patner-slider;
$('.patner-slider').slick({
    autoplay: true,
    autoplaySpeed: 1800, 
    dots: false,
   slidesToShow:5,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
    centerMode:true,
    centerPadding:'0px',

    });
 //counter;
  
 $('.counter').counterUp({
    delay: 10,
    time: 1000
});



});     






