/**
 * Created by Josh Lane on 1/20/2015.
 * N221
 */
//comments
/* I wish Bethesda
would hurry up
and come out
with Elder Scrolls Online
 */
console.log("hello world!");
//variables

//numbers
var myAge = 19;
var pi = 3.14159;

//strings
var myName = "Josh Lane";//string literals
var whereILive = 'Greenwood';
var myFavoriteQuote = '"Screw you guys Im going home"-...Eric Cartman';

//booleans
var likesBlue = true;

//break the variable
//variable rules
//variables cant start with a number but can contain a number
//variables cant have spaces
//only valid characters are letters,numbers,and _
var one_Hundred = false;//camelCasing

//do some things with variables
//string concatenation
//is when you add two or more strings together
var aName = "Darius the Great";
var aPlace = "Dallas, Texas";
//note that any time I use the word Variable I do NOT use the word VAR
//everytime you use the word VAR you wipe out the old value of that variable
var aSentence = "I found "+aName +" in "+aPlace+".";
console.log(aSentence);

//Math!
var a = 10;
var b = 2;

var added = a + b;  //12
var subtracted = a - b;  //8
var multiplied = a * b;  //20
var divided = a / b;  //5
var modulus = a % b;  // remainder...0
var anotherMod = 5 % 3;  //2

//adding, subtracting the same values
//do not need to use the keyword VAR because they are defined already above
a = 10;
b = 2;

a + 2;//does calculation but doesnt store the answer
a = a + 2;
//a is now a stored value of 12 so all a values going down from this point is a
a += 2;//this is the same thing as a = a + 2;
//if we do this same equation again as we have just done above a's new stored value is 14 a values....
// ...before this point are still the same so the previous number is still 12
a -= 5;// a is now 9
a -= 4;// a is now 5
a *= .5;// a is now 2.5