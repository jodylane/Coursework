/**
 * Created by Josh Lane on .
 N215 N320
 */
$(document).ready(function(){
    var menuDisplay = false;
    $(".logo").click(function(event){
        if(menuDisplay){
            $(".contentWrapper").animate({
                left: "0%"
            },1000, function(){
                menuDisplay = false;
            })
        }else{
            $(".contentWrapper").animate({
                left: "20%"
            },1000, function(){
                menuDisplay = true;
            })
        }
    })
    $(".guide").click(function(){
        $(".guide").css("display", "none");
    })
    //$(".menu").click(function(event){
    //    var nav = document.querySelector(".navBar");
    //    $(".menu-btn").toggleClass("active");
    //    $(nav).toggleClass("seen");
    //})
    //$(".subMenu").click(function(event){
    //    var down1 = document.querySelector("#arrow1");
    //    $(this).toggleClass("tap");
    //    $(down1).toggleClass("fa-sort-down");
    //    $(down1).toggleClass("fa-sort-up");
    //})
    //$(".subMenu2").click(function(event){
    //    var down2 = document.querySelector("#arrow2");
    //    $(this).toggleClass("tap");
    //    $(down2).toggleClass("fa-sort-down");
    //    $(down2).toggleClass("fa-sort-up");
    //})
})
