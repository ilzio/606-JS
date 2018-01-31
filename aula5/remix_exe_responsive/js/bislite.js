$(document).ready(function() {

  $(window).on('resize', function() { //quando a janela for redimensionada, o problema e'com o estilo que precisa ser limpada
  // largura = $(window).width()
      if ($(window).width() > 1010) {
      $('.navigation ul').removeAttr('style'); //remove o attributu style porque o jquery adiciona ele no codigo html!
    }
  })

  // faz aparecer/desaparecer menu (o next element) com o slidetoggle

  $('.menu-toggle').on('click', function() {
    // $(this).next().slideToggle();
    // // $('.navigation ul').slideToggle(); //todos os uls
    $('.navigation > ul').slideToggle(); //so os uls filhos de navigation

  });

  // aparecem os filhos

  $('.navigation .has-child').on('click', function(event) { //event e so un nome qualquer, prevenir o padrao do evento que aconteceu, nesse caso porque precisamos de anular o clic do a
    event.preventDefault();
    $(this).find('.submenu').slideToggle();

  });

  // util so nos layouts de uma unica pagina
  //
  // $('nav a').on('click', function(){
  //   $('.menu-toggle').fadeOut();
  // });









});
