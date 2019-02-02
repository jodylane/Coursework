/**
 * Created by Josh Lane on 2/11/2015.
 * N221
 */
/*var myArray = [2,4,6,8,10,17];
for (i = 0; i < myArray.length; i++){
    var itemAtIndex = myArray[i];
    console.log(itemAtIndex);
}*/
var myArray = ["Spock", "Kirk", "McCoy", "Luffy"];
var thingsToLookFor = "McCoy";
var found = false;
for (var i = 0; i < myArray.length; i++){
    var itemAtIndex = myArray[i];
    if(itemAtIndex == thingsToLookFor){
        found = true;
        break;
    }
}
console.log("found: " + found);






//runs when the button is clicked
function onButtonClick(){

    //gets the string inside of the id
    var inputValue= document.getElementById("txtInput").value;

    //turn that into an array
    //assume user is using comma seperated string
    var arrayOfValues=inputValue.split(",");

    console.log(arrayOfValues);
    var myArray = ["Spock", "Kirk", "McCoy", "Luffy"];
    var thingsToLookFor = "McCoy";
    var found = false;
    for (var i = 0; i < myArray.length; i++){
        var itemAtIndex = myArray[i];
        if(itemAtIndex == thingsToLookFor){
            found = true;
            break;
        }
    }
    console.log("found: " + found);











    /*  //to sum
      var sum=0;
      //loop through the array of input
      for(var i = 0; i<arrayOfValues.length; i++){
          //get the item from the array and stored in a variable
          var itemAtIndex= arrayOfValues[i];
          //we need to parseFloat() an item in the index to turn string data into numerical data
          sum +=parseFloat(itemAtIndex);//adds current value of sums
      }
      console.log(sum);*/

}