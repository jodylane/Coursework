/**
 * Created by Josh Lane on .
 N215.
 */
$(document).ready(function(){
    $('nav a').click(function(e){
        e.preventDefault();
        var idWithSection = e.currentTarget.id + "Section";
        console.log(e.currentTarget.id)
        console.log(idWithSection)
        $('html body').animate({scrollTop: $('#' + idWithSection).offset().top},1000)
    })
})