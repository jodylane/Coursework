/**
 * Created by Josh Lane on 4/15/2015.
 * N221
 */

//get all of the elements on the page with the class of 'square'

var squares = document.getElementsByClassName('square');

for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", changeColor);
}

function changeColor(event) {
    event.target.style.backgroundColor = randomColor();
}

//the code below is fine if you're trying to debug it you've gone too far
function randomColor() {

    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    //create the string that is the ‘random color’
    var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

    return randomColor;
}