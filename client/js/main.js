$(document).ready(function () {

  /**********
    functionality for the navigation bar
  ***********/
  
  // $('.topnav').on('mouseover', function () {
  //   $(this).toggleClass('selected', '')
  // });

  // $('.topnav').on('mouseout', function () {
  //   $(this).toggleClass('selected', '');
  // });

  //scrolling to any part of the page from navigation bar
  var navHeight = $(".navbar-header").height(); 

  $('.topnav a').click(function(){
    // console.log($($(this).attr('href')));
    // console.log($($(this).attr('href')).offset().top)
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - navHeight
    }, 500);
    return false;
  });

  //need fake fixed background position as fixed does not work with iphones
  var $window = $(window);
  var $bigImageText = $(".large-image-text");
  var $bigImageTextTop = $($bigImageText).offset().top;

  $window.on("scroll", function() {
    $bigImageText.attr("top", $bigImageTextTop - $window.scrollTop())
  });

});