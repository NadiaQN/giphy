$(document).ready(function() {
  var dibujarGifs = function(data) {
    var gif = '';
    var url = '';
    data.forEach(function(element) {
      gif = element.images.downsized_large.url;
      url = element.bitly_gif_url;
      $('#elementos').append(armarTemplate(gif, url));
    });
  };
  
  function armarTemplate(gif, url) {
    var t = '<div class="elemento"><img src="' + gif + '"/><a href="' + url + '">Ver más</a></div>';
    return t;
  }

  function ajaxGif(gif) {
    $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search',
      type: 'GET',
      datatype: 'json',
      data: {
        q: gif,
        api_key: '6XpLoSjn8MU0baozGCmNrByEMBZMJQ2g'
      }
    })
      .done(function(response) {
        console.log(response);
        dibujarGifs(response.data);
      })
      .fail(function() {
        console.log(error);
      });
  }
  $('#buscar-gif').click(function(event) {
    console.log('Entro');
    $('#elementos').empty();
    var gif = $('#gif-text').val();
    ajaxGif(gif);
  });
});
