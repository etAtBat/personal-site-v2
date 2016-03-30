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

  //scrolling to any part of the page from navigation bar
  var navHeight = $(".navigation-bar").height(); 

  $('.main-navigation a').click(function(){
    console.log('clicked')
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 500);
    return false;
  });


});