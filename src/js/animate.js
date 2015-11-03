$(function(){
 var shrinkHeader = 80;
 var lastScroll = 0;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    console.log(scroll)
    if (scroll > lastScroll){
     // Down scroll
     $('.header').addClass('shrink');
    } else {
      // Up scroll
      if (scroll <= shrinkHeader) {
        $('.header').removeClass('shrink');
      }
    }
    lastScroll = scroll
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});
