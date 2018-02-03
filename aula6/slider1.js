$(document).ready(function() {
  // alert('ops');
  slider_now = 0;
  slider_imgs = $('.slide').length - 1;
  largura = $('.slider').width();
  // alert(largura);
  // alert(slider_now);
  // alert(slider_imgs);

  $('.slide').width(largura);


  $(window).on('resize', function() {
    largura = $('.slider').width();
    $('.slide').width(largura);
  });
//criar bullets
  $('.slider').append('<ul class="slider-bullets"></ul>');
  for (i = 0; i <= slider_imgs; i++) {
    $('.slider-bullets').append('<li class="slider-bullet"></li>')
  }
  $('.slider-bullet').eq(0).addClass('is-active');

  $('.button-left').on('click', left);

   function left() {
    // alert(largura);
    // alert(slider_now);
    // alert(slider_imgs);
    largura = $('.slider').width();
    $('.slide').width(largura);
    if (slider_now == 0) {
      slider_now = slider_imgs;
    } else {
      slider_now = slider_now - 1;
    }
    $('.slider-imgs').css('left', -(largura*slider_now));
    $('.slider-bullet').removeClass('is-active');
      $('.slider-bullet').eq(slider_now).addClass('is-active');
  };

function right () {
  largura = $('.slider').width();
  $('.slide').width(largura);
  if (slider_now == slider_imgs) {
    slider_now = 0;
  } else {
    slider_now = slider_now + 1;
  }
  $('.slider-imgs').css('left', -(largura*slider_now));
  $('.slider-bullet').removeClass('is-active');
    $('.slider-bullet').eq(slider_now).addClass('is-active');


}

  $('.button-right').on('click', function (){
    right();


  });
    // alert(largura);
    // alert(slider_now);
    // alert(slider_imgs);



//bullets

$('.slider-bullet').on('click', function() {
  var bullet_index = $(this).index();
  $('.slider-imgs').css('left', -(largura*bullet_index));
  $('.slider-bullet').removeClass('is-active');
  $(this).addClass('is-active');



//atualizar posicao do

});
});
