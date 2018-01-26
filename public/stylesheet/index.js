/*eslint-env jquery*/

$(document).ready(function () {
  $("#button_1").on("click", function () {
    $('html, body').animate({
      scrollTop: $("#intro_bg").offset().top
    }, 2000);
  });

  $(window).scroll(function () {
    $('.hideme').each(function () {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 2500);
      }
    }); 
  });
    
  $('.card').hover(
    function() {
        $(this).animate({ 'zoom': 1.2 }, 500);
        $(this).css( {'box-shadow': '0 14px 30px 0 rgba(140,	190,	190, 0.8)'});
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 500);
        $(this).css({'box-shadow':'0 8px 20px 0 rgba(0, 0, 0, 0.19)'});
    });
  
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
  
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav div ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


