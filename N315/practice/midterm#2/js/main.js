/**
 * Created by Josh Lane on .
 N215 N320
 */

function setBindings(){
    $("#get").click("click", function(){
        Service.getInfo("Josh","Lane","josh@yahoo.com", dbDone);
    });
    function dbDone(info){
        $("#post").removeAttr("disabled");
        $("#post").attr("enabled");
        $("#post").click("click",function(){

        });
        console.log(info);
    };
};
$(document).ready(function(){
   setBindings;
});