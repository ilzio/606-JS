// www.youmightnotneedjquery.com


                            // funcoes nativas para strings

// document.location.href -> mostra url do site
// document.location.href.endsWith('.html') -> verifica se o url acaba com .html
// t.indexOf('o') -> da o index do caractere comecando de 0, cuidado pq se retornar 0 = falso
// t.match() -> faz verificacao de string baseado em expressoes regulares, retorna true/false PODE USAR regex101.com

// t.replace('o que voce quer substituir', 'com que o que voce quer substituir')
// com expressoes regulares -> t.replace('/t/g', 'x') os 't' viram 'x' /g é global

// t = "ciao, ciao, ciao" / t.split(',') -> divide uma string baseado no caractere especificado, retornando um array com elementos (datas, enderecos email)

// t.substring(0, 3) -> tras 3 caracteres depois da posicao 0;

                                // funcoes nativas para numeros

// n.toFixed(4) adiciona 4 zeros depois do valor da variavel

// Math.ceil(n); arredonda o numero para a maior unidade , Math.floor() va pra baixo





// (function() {
// alert('suca');
// })();


document.querySelector('#twitter').addEventListener('keydown', function(event) {
  // console.log(this.value);
  caracteres = this.value.length;
  console.log(caracteres);
  console.log(event.key, event.keyCode);
  codigo = event.keyCode;

  if (codigo != 8 && codigo != 46 && codigo != 37 && codigo != 39 && codigo != 38 && codigo != 40) {
    if (caracteres < 140 ) {
      document.getElementById('twitter-count').innerHTML = 140 - caracteres;
    } else {
      event.preventDefault();
    }
  }





});
