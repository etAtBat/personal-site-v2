$(document).ready(function () {

  //scrolling to any part of the page from navigation bar
  var navHeight = $(".navbar-header").height(); 

  $('.topnav a').click(function(){

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 500);
    return false;
  });

});