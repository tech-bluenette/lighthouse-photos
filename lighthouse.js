// 1. Wrap link in image tag
  // 2. Show only one image at a time; 
  // 3. rotate images using fadein/fadeout every couple of seconds


// CLIENT ID d403150a12f3461a88d3b6cf928b46e3
// CLIENT SECRET 45b095aff0854d919cc7a0395f1ca2c2
// WEBSITE URL https://github.com/tech-bluenette/lighthouse-photos
// REDIRECT URI  https://github.com/tech-bluenette

$(document).ready(function() {
    
    var url = "https://api.instagram.com/v1/tags/lighthouse/media/recent?access_token=220041863.f59def8.6c6165821a5d4d2bb41bb31fd9db4f90&callback=?";
    


    var lighthousePhotoRetriever = function(data) {
        var instagrams = data.data;
        for(var i=0; i < instagrams.length; i++) {
            var photo = instagrams[i]; 
          $('#photos-list').append("<li><img src='"+photo.images.low_resolution.url+"'></li>");
        }       
    }
    
    
    $('#load').click(function() {
        $.getJSON(url, lighthousePhotoRetriever);        
    });


});


 