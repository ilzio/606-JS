$(document).ready(function() { 



// se tiver mostrado, nao faz nada 

$('.fade-in').on('click', function(){ 
	element = $(this);
	element.fadeIn();
	alert('o click esta funcionando!')


});

$('.fade-out').on('click', function(){
	element = $(this);
	element.fadeOut();

});

$('.fade-toggle').on('click', function(){
	element = $(this);
	element.fadeToggle();

});


$('.fade-in').on('click', function(){ 
	$('.alvo').fadeIn();
	alert('o click esta funcionando para o alvo tambem!')


});

$('.fade-out').on('click', function(){
	$('.alvo').fadeOut();

});

$('.fade-toggle').on('click', function(){
	$('.alvo').fadeToggle();

});

$('.alvo').on('click', function(){
	$('span').fadeIn();

});

$('.tab').on('click', function(){
	$(this).next().slideToggle(); // pega o elemento sucessivo do this -> como o onlick e o .tab, o seguinte daquele que a gente clica! nao filho

	});



$('.tab').on('click', function(){
	//seleciona um filho com uma classe especificada, mas se tem mas de um? 
$(this).children('.tab-alvo').slideToggle(); 

});

$('.tab').on('click', function(){
	//seleciona um filho com uma classe especificada, mas se tem mas de um? se for neto??? tem que usar outra coisa, children e so filho direto
$(this).children('.tab-alvo').slideToggle(); 

});

$('.tab').on('click', function(){
	//seleciona um filho com uma classe especificada, find!!
$(this).find('.tab-alvo').slideToggle(); 

});


})