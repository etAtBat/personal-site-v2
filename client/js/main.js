$(document).ready(function () {

  //makes navbar stick to the top of the page and detach itself by detecting scroll
  $(window).scroll(function(){
    if(($('.content-container').offset().top - $(window).scrollTop()) - $('.navigation-bar').height() <= 0) {
      $('.navigation-bar').css({
        'position' : 'fixed',
        'z-index' : 2,
        'top' : 0
      });
      $('.content-container').css({
        'margin-top' : $('.navigation-bar').height()
      });
    } else {
      $('.navigation-bar').css({
        'position' : 'static',
        'z-index' : 2,
        'top' : 'auto'
      });
      $('.content-container').css({
        'margin-top': 0
      })
    }
  });

  //toggling the navigation list
  $('.menu-icon').on('click', function () {
    $('.main-navigation').toggleClass('open');
  });

  //toggling effect on portfolio entries
  $('.portfolio-link').hover(function () {
    $(this).next().toggleClass('portfolio-entry-hover');
  });


  //scrolling to any part of the page from navigation bar
  var navHeight = $(".navigation-bar").height(); 

  $('.main-navigation a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 500);
    return false;
  });

   $('.mail-icon-background a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 1600);
    return false;
  });

  $('.section-title a').click(function(){
    $('html, body').animate({
         scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 300);
     return false;
  });

  $('.about-title a').click(function(){
    $('html, body').animate({
         scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 400);
     return false;
  });


});