var calculator = {
    init: function(){
        console.log("sunset page");
        calculator.initMap();
    },
    initMap: function(){
        var startPos;
        var geoSuccess = function(position) {
            startPos = position;
            document.getElementById('startLat').innerHTML = startPos.coords.latitude;
            document.getElementById('startLon').innerHTML = startPos.coords.longitude;
            test(startPos.coords.latitude, startPos.coords.longitude);
        };
        var geoError = function(error) {
            console.log('Error occurred. Error code: ' + error.code);
            // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from location provider)
            //   3: timed out
        };
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

        calculator.getSunset();
    },
    getSunset: function(){
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log(position)
          calculator.do_something(position.coords.latitude, position.coords.longitude);
        });
    },
    do_something: function(lat, lon){
        var url= "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon+"&date=today&callback=mycallback";
        $.ajax({
            url: url,
            jsonp: 'mycallback',
            dataType: "jsonp",
            success: function(jsonp){
            console.log(jsonp);
            },
            error: function(e){
            console.log("normal fail");
            }
        });
    },
    test: function(lat, lon){
        var url= "https://api.sunrise-sunset.org/json?lat="+lat+"&lng="+lon+"&date=today&callback=mycallback";
        $.ajax({
            url: url,
            jsonp: 'mycallback',
            dataType: "jsonp",
            success: function(jsonp){
                console.log(jsonp);
            },
            error: function(e){
            console.log("normal fail");
            }
        });
    }
}
calculator.init();