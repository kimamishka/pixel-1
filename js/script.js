//СЛАЙДЕР

// CHANGE ARROWS
$(document).ready(function () {
   $('.slider').slick({
      prevArrow: "<img src='img/slider/left.png' class='prev' alt='1'>",
      nextArrow: "<img src='img/slider/right.png' class='next' alt='2'>",
      dots: false,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4000, //4s
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',


      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});

//ВСПЛЫВАЮЩЕЕ ОКНО

$(document).ready(function ($) {
   //открытие окна с фэйд эффектом
   $('.popup-open').click(function () {
      $('.popup-fade').fadeIn();
      return false;
   });
   // Клик по ссылке "Закрыть".
   $('.popup-close').click(function () {
      $(this).parents('.popup-fade').fadeOut();
      return false;
   });
   /*
      // Закрытие по клавише Esc.
      $(document).keydown(function (e) {
         if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
         }
      });
   */
   // Клик по фону, но не по окну.
   $('.popup-fade').click(function (e) {
      if ($(e.target).closest('.popup').length == 0) {
         $(this).fadeOut();
      }
   });
});


