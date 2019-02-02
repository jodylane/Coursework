/**
 * Created by Josh Lane on .
 N215 N320
 */

var Service = (function () {
    var _userInfo = {};
        var _checkLogin = function(username, password,callback){
            var _dbURL = "https://api.mongolab.com/api/1/databases/dwspeakersite/collections/speakers?";
            var _apiKey = "apiKey=1W55dyW9GCJvfcDfCPObckfhpWgvE03G";
            $.ajax({
                url: _dbURL + "q={'email': '" + username + "', 'password': '" + password + "'}&fo=true" + "&" + _apiKey,
                type: "GET",
                contentType: "application/json"
            }).done(function(data){
                _userInfo = data;
                console.log("data ",data);
                callback(data);
            });

         };
    var _getUserInfo = function(){
        return _userInfo;
    };
    return{
        checkLogin: _checkLogin,
        getUserInfo: _getUserInfo
    }
})();