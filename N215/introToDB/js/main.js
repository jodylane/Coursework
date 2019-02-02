/**
 *
 *
 **/
$(document).ready(function(){
    init();
});

function init(){
    $("getData").click(function(){
        $.post("php/nav.php")
    });
};