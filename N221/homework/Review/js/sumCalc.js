/**
 * Created by Josh Lane on 2/25/2015.
 * N221
 */


//Html part
//we would need to link javascript file to our html file
//then we would need to create an input tag with an id of lets say "input"
//then we would need to create an input tag with a button type with an onclick that whenever it is clicked a function
//is called when name that function "getInput()"

//JavaScript part
//first we need to create a function with the same name as the function being called when we click our submit button
//when that function is called we want our values to show up in the console so...
//we need to make a variable that will go get our numbers that we entered in lets name that variable "userInput"
// then we need to make a variable for our sum that will help later and that should be = to "0"0
//we know that the "sum" variable cannot go in the loop that we will create in a min because the loop will only show the last
//number in the index
//then we need to put our numbers that we got from our "userInput" and we need to put them in an array
//we also want our numbers to be in different indexes not all in the same index like this[1456789,] we want them to be
//separated by commas so when ever the computer sees a comma javascript will say hey that's its own separate number
//so we need to make a variable that im going to name "arrayOfValues" and have that = userInput.split(",") that
//line of code will separate all of our comma separated numbers into their own individual indexes.
//now we need a loop that will take the variables in our array and add them together
//that should look like this:
/*
for(var i = 0; i < arrayOfValues.length; i++){

 }
 */
//now we need to make a variable inside of our loop that im naming "itemAtIndex" this variable needs
// to = parseFloat(arrayOfValues[i]) that will make sure not to concatenate our numbers but instead add them together
//now we are going to use our sum variable and add it to our itemAtIndex so every time the loop cycles the new
// value is stored into the sum variable so it will look like: "sum+= itemAtIndex"
//all that's left now is to put two console.logs() down and have show the the total of sum and the other show the
//average of sum
//when it is all finished it will look something like this:

function getInput(){
    var userInput = document.getElementById("input").value;
    var sum = 0;
    var arrayOfValues = userInput.split(",");
    for(var i = 0; i < arrayOfValues.length; i++){
        var itemAtIndex = parseFloat(arrayOfValues[i]);
        sum += itemAtIndex;
    }
    console.log("Total: " + sum);
    console.log("Average of Total: " + sum / arrayOfValues.length);
}

function getInput1() {
    var userInput = document.getElementById("input").value;
    var sum = 0;
    var arrayOfValues = userInput.split(",");
    for (var i = 0; i < arrayOfValues.length; i++) {
        var itemAtIndex = parseFloat(arrayOfValues[i]);
        sum += itemAtIndex;
    }
    console.log("Total: " + sum);
    console.log("Average of Total: " + sum / arrayOfValues.length);
    var reset= document.getElementById("input");
    reset.value = ""
}