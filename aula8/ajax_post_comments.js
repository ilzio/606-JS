// var posts;

$(document).ready(function() {


  $.ajax({

    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    success: function(data) {

      data.forEach(function(post) { //variavel post e como se fosse o this

        var html = '<div class="post">';
        html += '<h2 class="post-title">' + post.title + '</h2>'
        html += '<p class="post-body">' + post.body + '</p>'
        html += '</div>';
        $('.posts').append(html);
      })
    }


  });
});
