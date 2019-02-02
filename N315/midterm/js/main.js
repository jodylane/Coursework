/**
 * Created by Josh Lane on .
 N215 N320
 */

function setBindings(){

    $("#get").click("click",function(){

        Service.getData("Josh","Lane","josh@yahoo.com",dbDone);
    });


function dbDone(data){
    console.log("callback",data);
    $("#post").removeAttr("disabled");
    $("#post").attr("enabled");
    $("#post").click("click",function(){
        Service.postInfo();
    })
}
}
$(document).ready(function(){
    setBindings();

});