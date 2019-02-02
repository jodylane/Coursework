/**
 * Created by Josh Lane on 2/11/2015.
 * N221
 */
var name1="John";
var name2="Emily";
var name3="Rebecca";

var myArray= [5,4,3,2,1];
console.log( myArray[0] );//value presented in console 5
console.log( myArray[2] );//value presented in console 3
console.log( myArray[3] );//value presented in console 2
console.log( myArray[22] );//value presented in console undefined because there are not 22 indexes in the array

//modifying an array
console.log("Before Modifying Array:");
console.log(myArray);

//changing the array
myArray[0] = 0;
myArray[3] = 39;

//after modifying
console.log("After Modifying Array:");
console.log(myArray);

//using some array methods and properties
console.log("the length of the array: " + myArray.length);

//add something into the array
myArray.push(72);
console.log(myArray);

//remove something from the array gets rid of of first index
myArray.shift();
console.log(myArray);