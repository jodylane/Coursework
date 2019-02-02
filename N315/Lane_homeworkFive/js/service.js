/**
 * Created by Josh Lane on .
 N215 N320
 */
var Service = (function(){
    var _dbURL = "https://api.mongolab.com/api/1/databases/dwspeakersite/collections/speakers?";
    var _apiKey = "apiKey=1W55dyW9GCJvfcDfCPObckfhpWgvE03G";
    var _userInfo = {};
    var _loginUser = function(username,callback){
        $.ajax({
            url: _dbURL + 'q={"email": "' + username + '"}&fo=true&' + _apiKey,
            type: 'GET',
            contentType: "application/json"
        }).done(function(data){
            callback(data);
        })
    };
    var _addUser = function(firstName,lastName,emailAddress,password,callback){
        var obj = {
            "f_name": firstName,
            "l_name": lastName,
            "email": emailAddress,
            "password": password,
            "role": "user"
        };
        console.log("first ",firstName," last ",lastName," email ",emailAddress," password ",password );
        console.log(firstName);
        _checkUser(emailAddress,function(flag,result){
            if(flag){
                callback(flag);
            }else{
                $.ajax({
                    url:_dbURL + _apiKey,
                    type: "POST",
                    data: JSON.stringify(obj),
                    contentType: "application/json"
                }).done(function(data){
                    _userInfo = data;
                    console.log("data", _userInfo);
                    callback(flag)
                })
            }
        })

    };
    var _clearUserDB = function(){
        _userInfo = "";
    };

    var _checkUser = function(email,checkUserCallback){
        $.ajax({
            url: _dbURL + 'q={"email": "' + email + '"}&fo=false&c=true&' + _apiKey,
            type: "GET",
            contentType: "application/json"
        }).done(function(data){
            var flag = true;

            if(data == 0){
                flag = false
            }else{
                flag = true
            }
            checkUserCallback(flag,data);
        })
    };
    var _getUserInfo = function(){
        return _userInfo
    };
    return{
        loginUser: _loginUser,
        addUser: _addUser,
        getUserInfo: _getUserInfo,
        clearUserDB: _clearUserDB
    }
})();
