$(window).scroll(function () {
    var $infoDetail = $('.infodetail');
    if ($infoDetail.length) {
      var transferOffset = $infoDetail.offset().top;
      var scrollPos = $(window).scrollTop();
      if (scrollPos >= transferOffset) {
        $('.nav-top').fadeIn();
      } else {
        $('.nav-top').fadeOut();
      }
    }
  });