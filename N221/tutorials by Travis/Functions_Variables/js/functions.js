/**
 * Created by Josh Lane on 1/22/2015.
 * N221
 */
var timesClicked = 0;
function getInput(){

    timesClicked = timesClicked + 1;
    console.log("Times Clicked:" + timesClicked)

    var userInput= document.getElementById("firstInput").value;
    console.log("The user's name is:" + userInput);
    greeter(userInput, "Great Person")
}
function greeter(name, title){
    console.log(title + " " + name + ", Welcome to the future..");
}
greeter("Fry", "Loser");

