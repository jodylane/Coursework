/**
 * Created by Josh Lane on .
 N215 N320
 */
//this will add click events to buttons that we put inside this function
function setBindings() {
 //this is a boolean for when the menu is displayed.
 var menuDisplayed = false;

 //this is the click listener for the menu to display
 $(".logo").click(function(e){
  if(menuDisplayed){
   $(".content-wrapper").animate({
    left: "0"
   }, 500, function(){
    menuDisplayed = false;
   });
  }else{
   $(".content-wrapper").animate({
    left: "20%"
   }, 500, function(){
    menuDisplayed = true;
   });
  }
 });

 $(".guide").click(function(){
  $(".guide").css("display", "none");
 });

 $(".login").click(function(){
  console.log('login');
 });

 $(".signup").click(function(){
  console.log('sign up');
 });
}

$(document).ready(function(){
 setBindings();
});