/**
 * Created by Josh Lane on 2/26/2015.
 * N221
 */
//alright so we want to make a function that when ever "Snoopy", "Garfield", and "Darth" are called
//we want to address them as "Your highness" and everyone else will simply be greeted "Hello" followed by there name

//html part
//we would need to link javascript file to our html file
//then we would need to create an input tag with an id of lets say "input"
//then we would need to create an input tag with a button type with an onclick that whenever it is clicked a function
//is called when name that function "getInput()"

//javaScript part
//first we need to create a function with the same name as the function being called when we click our submit button
//when that function is called we want whatever name we put in that isn't "Darth", "Garfield", or "Snoopy" to show
// up in the console so...
//we need to make a variable that will go get our names that we entered in lets name that variable "userInput"
//now we to make 1 if condition saying that if userInput = "Darth" if true show us in the console "Your highness"
//but if our first if statement is false move to the next one and ask if userInput = "Garfield" if true show
// us in the console "Your highness"
//if our second if statement is false move to the next statement and ask if userInput = "Snoopy" if true show
//us in the console "Your highness"
//if our third statement is false then we are just going to default that it is some other name and we are just going
//to say hello with that persons name and have that display in the console
//it should look like this when its done or something similar
/*
function getInput() {
 var userInput = document.getElementById("input").value;
     if (userInput == "Darth" || userInput == "darth") {
         console.log("Your highness");
     }
     else if (userInput == "Garfield" || userInput == "garfield") {
         console.log("Your highness");
     }
     else if (userInput == "Snoopy" || userInput == "snoopy") {
         console.log("Your highness");
     } else {
         console.log("Hello " + userInput);
     }
 }
 */
