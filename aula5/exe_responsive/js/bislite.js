$(document).ready(function() {

  $('.menu-toggle').on('click', function(){
    $('.full-navigation').fadeIn(); //so os uls filhos de navigation
  });

  $('.clase-navigation').on('click', function(){
    $('.full-navigation').fadeOut(); //so os uls filhos de navigation
  });

});
