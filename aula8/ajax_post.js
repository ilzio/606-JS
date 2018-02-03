// var posts;

$(document).ready(function() {
//pega todos os posts
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    success: function(data) {
      // pegar todos os posts e os titulos e criar divs, h1 e p para dar um formato

      data.forEach(function(post) { //variavel post e como se fosse o this
        var html = '<div class="post" style="background-color:blue" data-id="' + post.id + '">';
        html += '<h2 class="post-title">' + post.title + '</h2>'
        html += '<p class="post-body">' + post.body + '</p>'
        html += '</div>';
        $('.posts').append(html);
      })
    }


  });


//pega so um array
  // $.ajax({
  //   //retorna um objeto, nao um array que nem o outro
  //   url: 'https://jsonplaceholder.typicode.com/posts/1',
  //   type: 'GET',
  //   success: function(data) {
  //     var html = '<div class="post" style="background-color:red">'
  //     html += '<h2 class="post-title">' + data.title + '</h2>'
  //     html += '<p class="post-body">' + data.body + '</p>'
  //     html += '</div>';
  //     $('.posts').append(html);
  //
  //   }
  // });

//pega todos os comentarios do post 1
  // $.ajax({
  //   //retorna um array
  //   url: 'https://jsonplaceholder.typicode.com/posts/1/comments',
  //   type: 'GET',
  //   success: function(data) {
  //     // pegar todos os comentarios do post 1
  //
  //     data.forEach(function(comment) { //variavel comment e como se fosse o this
  //       var html = '<div class="post-comment" style="background-color:lightgrey; border: solid black 2px;">';
  //       html += '<p class="comment-name">' + '<strong> nome : </strong> ' + comment.name + '</p>'
  //       html += '<p class="comment-email">' + '<strong> email : </strong> ' + comment.email + '</p>'
  //       html += '<p class="comment-email">' + '<strong> comentario : </strong> ' + comment.body + '</p>'
  //       html += '</div>';
  //       $('.post').eq(0).append(html);
  //
  //
  //     })
  //     //onlcick comentarios
  //     // $('.trigger').on('click', function() {
  //     //   $('.post-comment').slideToggle()
  //     // });
  //
  //   }
  //
  //
  //   // clicar sobre o post
  //
  // });

//mostra so o post e os comentarios

$(document).on('click', '.post', function(){ //para conteudo gerado dinamicamente, o .post nao existe !
  posthtml = $(this); //pega o conteudo html do elemento clidado e o guarda na variavel
  idpost = $('.post').data('id'); //pega o id do post
  console.log(idpost);
  console.log('https://jsonplaceholder.typicode.com/posts/' + idpost + '/comments');

  $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/' + idpost + '/comments',
    type: 'GET',
    success: function(data) {
            $('.posts').html(""); //apaga o conteudo dos posts
            $('.posts').append(posthtml);
            console.log(data);

            data.forEach(function(thispost) { //variavel comment e como se fosse o this
              console.log(html);
              var html = '<div class="post-comment" style="background-color:lightgrey; border: solid black 2px;">';
              html += '<p class="comment-name">' + '<strong> nome : </strong> ' + thispost.name + '</p>'
              html += '<p class="comment-email">' + '<strong> email : </strong> ' + thispost.email + '</p>'
              html += '<p class="comment-email">' + '<strong> comentario : </strong> ' + thispost.body + '</p>'
              html += '</div>';
              $('.post').append(html);

          });

          var certinha = '<div class="target" style="background-color:red"><h1> Clicar para voltar </h1>'
          $('.post').before(certinha);
          $('.target').on('click', function(){
            $('.posts').html(""); //apaga o conteudo dos posts

            $.ajax({
              url: 'https://jsonplaceholder.typicode.com/posts',
              type: 'GET',
              success: function(data) {
                // pegar todos os posts e os titulos e criar divs, h1 e p para dar um formato

                data.forEach(function(post) { //variavel post e como se fosse o this
                  var html = '<div class="post" style="background-color:blue" data-id="' + post.id + '">';
                  html += '<h2 class="post-title">' + post.title + '</h2>'
                  html += '<p class="post-body">' + post.body + '</p>'
                  html += '</div>';
                  $('.posts').append(html);
                })
              }


            });
          })

    }
})



  });

});
