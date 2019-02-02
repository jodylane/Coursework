/**
 * Created by Josh Lane on .
 N215 N320
 */

var Service = (function(){
    var _dbURL = "https://api.mongolab.com/api/1/databases/dwspeakersite/collections/speakers?";
    var _apiKey = "apiKey=1W55dyW9GCJvfcDfCPObckfhpWgvE03G";
    var _userInfo = {};
    var _loginUser = function(username,password,callback){
        var myPromise = $.ajax({
            url: _dbURL + "q={'email': '" + username + "', 'password': '" + password + "'}&fo=true" + "&" + _apiKey,
            type: "GET",
            contentType: "application/json"
        });
        myPromise.then(function(value){
            if(value != null){
                _userInfo = value;
                callback(value)
            }else if(value == null){
                $(".modalBG2").css("display", "flex");
                $(".noDB").css("display", "flex");
            }
        });
        //this is just  a check for testing
    };
    var _addUser = function(firstName,lastName,signupEmail,signupPass,callback){
        var _obj = {};
        _obj.f_name = firstName.value.toLowerCase();
        _obj.l_name = lastName.value.toLowerCase();
        _obj.email = signupEmail.value;
        _obj.password = signupPass.value;
        _obj.role = "user";
        var myPromise2 = $.ajax({
            url: _dbURL + _apiKey,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(_obj)
        });
        myPromise2.then(function(value2){
            if(value2 != null){
                _userInfo = value2;
                callback(value2);
            }
        })
    };
    var _getUserInfo = function(){
        return _userInfo;
    };
    return{
        loginUser: _loginUser,
        addUser: _addUser,
        getUserInfo: _getUserInfo
    }
})();