

$(document).ready(function() {
    
    var url = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=220041863.f59def8.6c6165821a5d4d2bb41bb31fd9db4f90&callback=?";
    


    var lighthousePhotoRetriever = function(data) {
        var instagrams = data.data;
        $('#photos-list').append("<li>" + instagrams[0].images.low_resolution.url + "</li>");

    }
    
    
    $('#load').click(function() {
        $.getJSON(url, lighthousePhotoRetriever);        
    });
});

   // var movieResponseHandler = function(data) {
   //      var movies = data.movies;
   //      for(var i=0; i <= movies.length; i++) {
   //          var movie = movies[i];   
   //          $('#movies-list').append("<li>" + movie.title + "</li>");