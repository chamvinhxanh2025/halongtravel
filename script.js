$(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("#header").addClass("scrolled");
      } else {
        $("#header").removeClass("scrolled");
      }

      // Parallax background effect
      let scrollTop = $(this).scrollTop();
      $(".hero").css("background-position", "center " + scrollTop * 0.4 + "px");
    });