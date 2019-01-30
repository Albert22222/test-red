

$(document).ready(function(){

  // $('.header-wrap-wrap').slick({
  //     arrows: true,
  //     dots: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     asNavFor: '.slider-bottom', 
  //     prevArrow: '<button class="slider-arrow slider-arrow_left"></button>',
  //     nextArrow: '<button class="slider-arrow slider-arrow_right"></button>',
  //     focusOnSelect: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           arrows: false,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           infinite: true,
  //           slidesToScroll: 1,
  //           arrows: false,
  //           dots: true
  //         }
  //       },
  //      ]
  // });

  $('.section-main_slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // asNavFor: '.section-main_slider-img',
      focusOnSelect: true
  });



  // var overBut1 = $('.overlay-button');
  // var overLay = $('.overlay');
  
  // overBut1.click(function(){
  //   overLay.addClass('overlay-dn');
  //   overBut1.addClass('overlay-button-dn');
  // });



});

