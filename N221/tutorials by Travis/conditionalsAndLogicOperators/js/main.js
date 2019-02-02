/**
 * Created by Josh Lane on 2/4/2015.
 * N221
 */

    //some vars for us to work with
var a = 5;
var b = 12;
var c = 5;

//do the logical check,to store in a variable
var resultOne = a < b;//true
console.log(resultOne);


//to check for an equality double = signs like this ==
//the ONLY time you will see a single = is when you are storing
// a value in a variable
var resultTwo = a == b;
console.log("is a equal to b: " + resultTwo);


//where ever you see an ! you can read it as 'not' in code
// this checks to see if the two values do ' not' equal each other
var resultThree = a != b;
console.log("a is not equal to b: " + resultThree);

//you dont need to use the var keyword because they are already defined
a = 5;
c = 5;

//code blocks are lines of code inside the curly brackets that we have
//seen so far inside of functions
//function (x){result get cheese }
//if statements cascade so if the arguement isnt true then it moves on to the next line until it has found a true
//statement
if (a > c){//this code block runs if the condition are true inside
    //so this boolean will only run if the arguement inside the paranthesis are true
    console.log("you need exact change.");
}else if (a < c){
    console.log("you dont have enough money.")
}else{// this code will run if the condition before it is false
    //also the else must run on the closing line of the if statement

    console.log("thank you for having exact change.");
}

a = 2;//is your self cause were poor
b = 12;// is your rich friend
c = 4;// this guy who has some money but not quite enough
var costOfMovie = 6;
if (b >= 2*costOfMovie){//if 'b' can cover 'a', you can go
    //this is called NESTING CONDITIONALS
    if(c + a >= costOfMovie){//if 'a' gives his money to 'c', you can go
        //NOTE THE INDENTATION
        //javascript doesnt require it but
        //its good programming practice
        console.log("Were going to a movie!!")
    }else{//if 'a' doesnt give his money to 'c' you cant go
        console.log("Sorry,still no movie..")
    }
}else{//if 'b' cant cover himself and 'a' you cant go
    console.log("Sorry, no movie..")
}

//logical operators
//example of logical operators
if((b >= 2*costOfMovie)&&(c + a >= costOfMovie)){
    console.log("Were going to a movie!!")
}else{
    console.log("Sorry, no movie..")
}
//pseudocode is the idea of code written in english before you write the actual code
// so our problem up above is that 'a' and 'c' dont have enough money to go see a movie
// but if 'a' gives his money to 'c' and 'b' covers 'a' everyone can go see the movie.

//&& can be read as and
//true && true makes the if statement true
//true && false make the if statement false
//false && false makes the if statement false

//|| can be read as or
//true || true makes the if statement true
//true || false make the if statement true
//false || false makes the if statement false
