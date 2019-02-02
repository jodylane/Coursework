/**
 * Created by Josh Lane on 4/20/2015.
 * N221
 */
    //get references to the dom elements
var desiredNameInput = document.querySelector("#myDesiredName");
var btnSubmit = document.querySelector("#submit");
var setNameElement = document.querySelector("#setName");

setNameElement.innerHTML = "I want to be..." + localStorage["nameIwanttobe"];

//listener to respond to when the button is clicked
btnSubmit.addEventListener("click",setName);

function setName(event){
    //local storage works off of key tags''
    //the name local storage is a reserved keyword that javascript uses
    //that stores values on the users file system
    //once you write localStorage["something"] = somevalue
    //it is saved to the users computer as (will persist across page loads)
    localStorage ["nameIwanttobe"] = desiredNameInput.value;
    setNameElement.innerHTML = "I want to be..." + localStorage["nameIwanttobe"];
};


//code for counter

//references
var counterFeedback = document.querySelector("#counterFeedback");
var counterBtn = document.querySelector("#btnCounter");
var currentTotal = 0;
var highScore = localStorage["highScore"];



//counter click handler
counterBtn.addEventListener("click",counterClicked);

function counterClicked(event){

    currentTotal ++;
    //show the value in the counter Feedback div

    if(currentTotal > highScore){
        highScore = currentTotal;
        localStorage["highScore"] = highScore;
    }
    if(highScore = undefined){
        highscore=0
    }
    counterFeedback.innerHTML = "Current: " + currentTotal.toString() + " High Score: " + highScore;
};