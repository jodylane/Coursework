/**
 * Created by Josh Lane on 1/22/2015.
 * N221
 */
var a=.2;
var b=100;
//begining of Multiplier page
function getInput(){
    var userInput = document.getElementById("firstInput").value;
    multiplier(userInput)
}
function multiplier(number){
    console.log(number * b)
}
//end of Multiplier page
//begining of Greeter Page
function getInput2(){

    var userInput2 = document.getElementById("secondInput").value;
    greeter(userInput2)
}



var count = 0;
function greeter(name){
    count++;
    console.log(count);
    console.log("Hello " + name);
}
//end of Greeter Page
//Begining of Tip Calculator







function getInput3(){
    var userInput3 = parseFloat(document.getElementById("thirdInput").value);
    totalBill(a*userInput3, userInput3)
}
function totalBill(tip, bill){
    console.log(tip+bill);
}
//End of Tip Calculator