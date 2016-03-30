$(document).ready(function () {

  //makes navbar stick to the top of the page and detach itself by detecting scroll
  $(window).scroll(function(){
    if(($('.container').offset().top - $(window).scrollTop()) - $('.navigation-bar').height() <= 0) {
      $('.navigation-bar').css({
        'position' : 'fixed',
        'z-index' : 2,
        'top' : 0
      });
      $('.container').css({
        'margin-top' : $('.navigation-bar').height()
      });
    } else {
      $('.navigation-bar').css({
        'position' : 'static',
        'z-index' : 0,
        'top' : 'auto'
      });
      $('.container').css({
        'margin-top': 0
      })
    }
  });

  //scrolling to any part of the page from navigation bar
  var navHeight = $(".navbar-header").height(); 

  $('.topnav a').click(function(){

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 500);
    return false;
  });


});