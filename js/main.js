$(function(){

   $('.top__slider').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true
   })

   $('.reviews__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      dots: true,
   //  fade: true
   })

});