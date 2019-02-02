/**
 * Created by Josh Lane on 9/28/15.
 N215.
 */

$(document).ready(function(){
    $("span").click(function(){
        alert("This Elements ID is " + this.id)
    });
});

$(function(){
    $('progress').each(function(){
        var max = $(this).val();
        $(this).val(0).animate({value: max}, {duration: 2000, easing:'swing' });
    });
});