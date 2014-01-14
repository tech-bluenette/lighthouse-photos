
  
  var url = "https://api.instagram.com/v1/tags/lighthouse/media/recent?access_token=220041863.f59def8.6c6165821a5d4d2bb41bb31fd9db4f90&callback=?";
  


  var lighthousePhotoRetriever = function(data) {
      var instagrams = data.data;
        for(var i=0; i < instagrams.length; i++) {
          var photo = instagrams[i]; 
          $('#slideshow').append("<img src='"+photo.images.low_resolution.url+"'>");
      }       
  }


function slideSwitch() {
  var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

  var $next =  $active.next().length ? $active.next()
      : $('#slideshow IMG:first');

  $active.addClass('last-active');
      
  $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
          $active.removeClass('active last-active');
      });
}

$(document).ready(function() {
    $.getJSON(url, lighthousePhotoRetriever);    

    $('#load').click(function() {
        setInterval( "slideSwitch()", 5000 );
    });    
});


 