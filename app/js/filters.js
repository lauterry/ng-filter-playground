angularMovieApp.filter('stars', function(){

    return function(count){
        var stars = '';

        if(count && typeof(count) === 'number'){
            for(var i = 0 ; i < count ; i++){
                stars = stars + '\u2605';
            }
            return stars
        } else {
            return count;
        }
    }

});