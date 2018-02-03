
$(document).ready(function() {


//formulario seleciona de aonde vem o valor com o metodo get mandando
// a requisicao para a pagina indicada com o cep como valor "data" (pode ser qualquer coisa)

$('#form').on('submit', function(evento) {
  evento.preventDefault();
  var cep = $('#cep').val();
console.log('o cliente quer consultar o cep ' + cep + 'por favor');

  $.ajax({
    url: 'https://viacep.com.br/ws/' + cep + '/json',
    type: 'GET',
    success: succeso
    });

});

function succeso(data) {
  console.log(data);
  var alvo = $('#resultados');

  var tr = '<tr>';
  $('.labels td').each(function(){
    label = $(this).html();
    tr += '<td>'+data[label]+'</td>';
    console.log(data[label]);
  });
  tr += '</tr>';
  alvo.append(tr);
};

});
