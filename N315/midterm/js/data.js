/**
 * Created by Josh Lane on .
 N215 N320
 */
var Service = (function () {
    var api = "apiKey=1W55dyW9GCJvfcDfCPObckfhpWgvE03G";
    var mUrl = "https://api.mlab.com/api/1/databases/speakman/collections/speakers?";
    var _getData = function (fName, lName, email,callback) {
        console.log(fName, lName, email);
        var user = {};
        var myPromise = $.ajax({
            url: mUrl + "q={'email': '" + email + "', 'f_name': '" + fName + "', 'l_name': '" + lName + "'}&fo=true" + "&" + api,
            type: "GET",
            contentType: "application/json"
        })
        myPromise.then(function (data){
            user = data;
            callback(user)
        })
    };
    var _postInfo = function(){
        var obj = {};
        obj.f_name = "Todd";
        obj.l_name = "Shelton";
        obj.email = "todd@yahoo.com";
        var myPromise2 = $.ajax({
            url: mUrl + api,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(obj)
        })
        myPromise2.then(function(data){
            console.log(data);
        })
    }

    return {
        getData: _getData,
        //getInfo: _getInfo,
        postInfo: _postInfo
    }
})();

