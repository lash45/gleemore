(function ($) {

    "use strict";

        // PRE loader
        // $(window).load(function(){
        //   $('.preloader').fadeOut(1000); // set duration in brackets    
        // });


        //Navigation Section
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

// $(window).scroll(function(){
//   if($('.navbar').offset().top>100){
// $('.navbar').removeClass("fixed-top top-nav");
//   }
// })


        $(window).scroll(function() {
          if ($(".navbar").offset().top > 100) {
            $(".fixed-top").addClass("top-nav");
              } else {
                $(".fixed-top").removeClass("top-nav");
              }
        });


// $(window).scroll(function(){

//   if ($('.navbar').offset().top() > 30){
//     $('.fixed-top').slideDown();
//   }else{
//     $('.fixed-top').slideUp();
//   }
// });

 


$('body').scrollspy({ target: '.navbar-collapse' })


var gear_purple = document.querySelector(".gear_purple");
TweenMax.to(gear_purple, 1, {rotation:360, repeat:-1, ease:Linear.easeNone});
var gear_black = document.querySelector(".gear_black");
TweenMax.to(gear_black, 1.5, {rotation:360, repeat:-1, ease:Linear.easeNone});
var gear_red = document.querySelector(".gear_red");
TweenMax.to(gear_red, 2, {rotation:360, repeat:-1, ease:Linear.easeNone});
var gear_green = document.querySelector(".gear_green");
TweenMax.to(gear_green, 1, {rotation:360, repeat:-1, ease:Linear.easeNone});
var gear_gray = document.querySelector(".gear_gray");
TweenMax.to(gear_gray, 3, {rotation:-360, repeat:-1, ease:Linear.easeNone});
var gear_blue = document.querySelector(".gear_blue");
TweenMax.to(gear_blue, 0.5, {rotation:360, repeat:-1, ease:Linear.easeNone});
        
 new WOW({mobile:true}).init();


})(jQuery);
