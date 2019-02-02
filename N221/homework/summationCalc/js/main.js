/**
 * Created by Josh Lane on 3/22/2015.
 * N221
 */
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