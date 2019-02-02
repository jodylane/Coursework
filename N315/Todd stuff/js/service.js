/**
 * Created by Josh Lane on .
 N215 N320
 */

var Service = (function(){
    var _dbURL = "https://api.mongolab.com/api/1/databases/dwspeakersite/collections/speakers?";
    var _apiKey = "apiKey=1W55dyW9GCJvfcDfCPObckfhpWgvE03G";
    var _loginUser = function(username,password){


        var myPromise = $.ajax({
            url: _dbURL + "q={'email': '" + username + "', 'password': '" + password + "'}&fo=true" + "&" + _apiKey,
            type: "GET",
            contentType: "application/json"
        });
        myPromise.then(function(value){
            if(value != null){
                console.log("this is in my database");
                console.log(value);
                $(".loginForm").css("display", "none");
                $(".modalBG").css("display", "none");
                $(".modalBG2").css("display", "flex");
                $(".success").css("display", "flex");
            }else if(value == null){
                $(".modalBG2").css("display", "flex");
                $(".noDB").css("display", "flex");
                console.log("this isnt in my database");
                console.log(value);

            }
        });
        //this is just  a check for testing
    };
    var _addUser = function(firstName,lastName,signupEmail,signupPass){
        var obj = {};
        obj.f_name = firstName.value;
        obj.l_name = lastName.value;
        obj.email = signupEmail.value;
        obj.password = signupPass.value;
        obj.role = "user";
        var myPromise2 = $.ajax({
            url: _dbURL + _apiKey,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(obj)
        });
        myPromise2.then(function(value2){
            if(value2 != null){
                console.log("this is in my database");
                console.log(value2);
                $(".signupForm").css("display", "none");
                $(".modalBG").css("display", "none");
                $(".modalBG2").css("display", "flex");
                $(".success").css("display", "flex");
            }else if(value2 == null){
                console.log("this isnt in my database");
                console.log(value2);
            }
        })
    };
    return{
        loginUser: _loginUser,
        addUser: _addUser
    }
})();