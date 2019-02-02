/**
 * Created by Josh Lane on 1/21/2015.
 * N221
 */
//definition
//arguments

var timesClicked=0//has been pulled to script-level scope

//since it is at the top and has been defined before the function the function will find it and run it
//try to keep var at the top
//since var cant live inside or below a function place all var at the top of your script
//verify this function is being called with console.log()

function getInput(){

    //scope!
    //variable dies if it is defined inside a functions scope{} or below the function

    timesClicked=timesClicked +1;
    console.log("Times Clicked:" + timesClicked);

    //console.log("giberish")

    var userInput= document.getElementById("firstInput").value;
    console.log("The user's name is "+ userInput);

    greeter(userInput, "The Lord of Flies");
}

function greeter(name, title) {

//everything inside of the curly brackets is a code block
//or a chunk of related commands
    //return title + " " + name + ", Welcome to the future.."; //function stops here.
    // return basically will not allow my console.log to display because the function is not reading this line of code

    console.log(title + " " + name + ", Welcome to the future..");
}

//the use of functions
//calling, invoking, running, using
//name of functions +()
//var firstGreeting = greeter("Fry", "Loser"); this only works with returnb

greeter("Fry", "Loser");
//console.log(firstGreeting); this only works with return
greeter("Luke", "Jedi");
