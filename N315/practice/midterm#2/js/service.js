/**
 * Created by Josh Lane on .
 N215 N320
 */
var Service = (function(){
    var urlDB = k;
    var api = "apiKey=";
    var _getInfo = function (f_name,l_name,email,callback){
        var user = {};
        var myPromise = $.ajax({
            url: urlDB + api,
            type: "GET",
            contentType: "application/json"
        });
        myPromise.then(function(data){

        })
    };

})();