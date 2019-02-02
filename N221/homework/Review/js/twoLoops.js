/**
 * Created by Josh Lane on 2/26/2015.
 * N221
 */

//html part
//you need to have a canvas tag with height and width dimensions also it needs to have an id

//javascript part
// you need create variable that links to canvas
//then create a variable that draws on the canvas
//then you need select a fill style to give your canvas background a black color
//then you need to make a fill rect that has canvas.width and canvas.height this will place a
// square the entire area of the canvas and color it black
// the you need to make a line width to increase the width of your stroke around the squares
//you then need to select a stroke style to give that a color
//then you need to make a function and place two loop inside them
//I put 4 squares and strokes in each loop for it draw out
//each square will loop upwards the first loop of squares will be the tallest and will decrease
// by one square block every time it moves to create a stair case looking effect
//squares should be white and strokes should be black
//so squares and strokes will sit on top of one another and move up and stop when the loop ends
// each loop will have a different length i gave my first loop a length of 8 and my second a length of 4
//so the first column of squares and strokes will display 8 squares and strokes the next column of
// squares and strokes will display 7 squares and strokes and so on
// to make the strokes and squares appear like they are shrinking make the y position of the starting strokes and squares
// loop bigger as they move over a column change the x position

//for instructor sorry if my pseudo code  seems like it doesn't make sense.  It made enough sense to me that I could
// write out the code. I wrote code out in all of my js files to show you what I was trying to say in the end
//to help you kind of follow what I was saying or trying to say
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle="#000000";
ctx.fillRect(0,0,canvas.width,canvas.height);


ctx.lineWidth = 10;
ctx.strokeStyle = '#000000';
ctx.fillStyle="#FFFFFF";

for (var i = 0; i < 9; i++) {
 //square column 1
 ctx.fillRect(-5, 605 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(-5, 605 - 66.7 * i, 66.7, 66.7);
 //square column 2
 ctx.fillRect(61.7, 671.7 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(61.7, 671.7 - 66.7 * i, 66.7, 66.7);
 //square column 3
 ctx.fillRect(128.4, 738.4 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(128.4, 738.4 - 66.7 * i, 66.7, 66.7);
 //square column 4
 ctx.fillRect(195.1, 805.1 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(195.1, 805.1 - 66.7 * i, 66.7, 66.7);
 }
 for (var i = 0; i < 5; i++) {
 //square column 5
 ctx.fillRect(261.8, 605 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(261.8, 605 - 66.7 * i, 66.7, 66.7);
 //square column 6
 ctx.fillRect(328.5, 671.7 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(328.5, 671.7 - 66.7 * i, 66.7, 66.7);
 //square column 7
 ctx.fillRect(395.2, 738.4 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(395.2, 738.4 - 66.7 * i, 66.7, 66.7);
 //square column 8
 ctx.fillRect(461.9, 805.1 - 66.7 * i, 66.7, 66.7);
 ctx.strokeRect(461.9, 805.1 - 66.7 * i, 66.7, 66.7);
 }

