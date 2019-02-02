/**
 * Created by Josh Lane on .
 N215 N320
 */

function dbDone(userInfo){
    $("#info").removeAttr("disabled");
    $("#info").attr("enabled");

    var name = userInfo.f_name.charAt(0).toUpperCase() + userInfo.f_name.slice(1)


    $("#info").click(function(){
        var info = Service.getUserInfo();
        console.log("userInfo ", info)
    });
}
function init(){
    $("#login").click(function(){
        console.log("hello");

        Service.checkLogin("todd@todd.com","hello",dbDone);
    });

}

$(document).ready(function(){
    init();

});