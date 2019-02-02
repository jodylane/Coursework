/**
 * Created by Josh Lane on 2/5/2015.
 * N221
 */
//what day is it
//what food belongs to that day
//how much money do you have
//how much money does that food cost
// what else can you eat if you dont have enough money.
//fucntion to start when the user requests it/ clicks button
function decideFood() {
    //get the inputs
    //get values in the inputs, store them in the variable
    //get input for the day, store them in variable
    var day= document.getElementById("txtDay").value;
    //get amount of money store them in a variable
    var cash= document.getElementById("txtMoney").value;
    //check to make sure the user has enough money
    if(cash > 12) {
        //Based on what day it is output a different food if the user has enough money
        //if monday
        if (day == "Monday") {
            //eat buritos
            console.log("You should eat burritos");
        } else if (day == "Tuesday") {
            //eat tacos
            console.log("Tacos are the way to go.");
        } else if (day == "Wednesday") {
            //eat gyros
            console.log("Gosh, gyros are an unloved food group.");
        } else if (day == "Thursday") {
            //eat pizza
            console.log("Really you can never go wrong with pizza");
        } else if (day == "Friday") {
            //eat burgers
            console.log("Go with some boring burgers");
        }
    } else {
        //if you dont have enough money eat home made sandwich
        console.log("Perhaps you should pack your lunch today?");
    }
    document.getElementById("txtDay").value="";
    document.getElementById("txtMoney").value="";
}