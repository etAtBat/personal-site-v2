$(document).ready(function () {

  console.log('jQuery online');
  
  /**********
    functionality for the navigation bar
  ***********/
  
  $('.topnav').on('mouseover', function () {
    $(this).toggleClass('active', '')
  });

  $('.topnav').on('mouseout', function () {
    $(this).toggleClass('active', '');
  });

  //scrolling to any part of the page from navigation bar
  var navHeight = $(".navbar-header").height(); 

  $('.topnav a').click(function(){
    console.log($($(this).attr('href')));
    console.log($($(this).attr('href')).offset().top)
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 500);
    return false;
  });


});