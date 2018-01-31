$(document).ready(function() { 


$('.each li').each(function(){
	console.log($(this));
})




function eachF(){
	elemento= $(this); //cada elemento
	cor = elemento.text(); //ou elemento.html() so input tem val!!!!!!!
	$(this).css('color', cor); //adiciona a cor ao elemento
}

	$('.each li').each(eachF); //executa a funcao para cada elemento dos elementos selecionados

	console.log( $('.each li').length);

// segundo script

cumprimento = $('.each li').length;


if (cumprimento = $('.each li').length % 3 == 0) {
	$('.each li').css({'float': 'left', 
						'width': '33.333%'
						});
} else if (cumprimento = $('.each li').length % 4 == 0) {
	$('.each li').css({'float': 'left', 
						'width': '20%'
						});
} else if (cumprimento = $('.each li').length % 5 == 0) {
	$('.each li').css({'float': 'left', 
						'width': '50%'
						});
}



// tercero script                            "para cada" elemento precisa de each e this!!!

// minha versao

// function eachX() {
// 	elemento = $(this);
// largura = elemento.attr('data-width') + '%';
// $(this).width(largura); 
// $(this).css('float', 'left'); 
// $(this).css('margin', 0); 
// }

// $('.lista *').each(eachX);


// manera mais rapida de fazer, menos codigo!!

$('.lista *').each(function() {
	
largura = $(this).data('width') + '%';
altura = $(this).data('height') + 'px';
$(this).width(largura); 
$(this).css('float', 'left'); 
$(this).css('margin', 0); 

$(this).height(altura); 

// $(this).css({
// 	'width': largura ,
// 	'height': height,
// 	'float': 'left',
// 	'margin': 0

// });


});

// $('.lista *').each(function() {
	
// altura = $(this).data('height') + 'px';
// $(this).width(altura); 

// });



})