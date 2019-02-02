/**
 * Created by Josh Lane on 1/28/2015.
 * N221
 */
//gets us access to the canvas in code
var canvas=document.getElementById("myCanvas");
//gets us something to draw on
var ctx=canvas.getContext("2d");


//------Drawing Some Rectangles-----
//(x coodinate ,y coordinate,width,height)

//changing our fill
ctx.fillStyle="#FF0000"; //begins a red fill
ctx.fillRect(100,7, 200,30);

ctx.fillStyle="#00FF00"; //begins a green fill
ctx.fillRect(150,57,200,30);

ctx.fillStyle="#0000FF"; //begins a blue fill
ctx.fillRect(200,117,200,30);

ctx.strokeStyle="#FF0000";//stroke color is red
ctx.lineWidth=5;
ctx.strokeRect(200,117,200,30);

ctx.strokeStyle="#00FF00";//stroke color is green
ctx.strokeRect(100,7,300,30);

ctx.strokeStyle="#0000FF";//stroke color is blue
ctx.strokeRect(150,57,200,30);


//------Drawing Some Lines------
//(x coordinate, y coordinate)

ctx.strokeStyle="#FFFFFF";//color is white
ctx.moveTo(200,0); //does not draw, but the next "LineTo" will start will start at 200,0
//your lines always need to start with a "moveTo"
ctx.lineTo(200,100);//draws a line straight down
ctx.lineTo(400,0);
ctx.lineTo(200,0);
ctx.stroke();

ctx.strokeStyle="#000099";//color is green
ctx.moveTo(300,300);
ctx.lineTo(350,350);
ctx.lineTo(450,350);
ctx.lineTo(500,300);
ctx.stroke();


//------Drawing a circle-------

ctx.strokeStyle="#FF0000";
ctx.beginPath();
ctx.arc(300,300,20,0,Math.PI * 2);
ctx.closePath();
ctx.fill();

ctx.fillStyle="#FF00FF";//color is blue
fillCircle(0,0,150);

ctx.fillStyle=("#000000");
fillCircle(20,20,40);

//-------Clearing the Canvas-----



//--------util Functions---------

function fillCircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius,0,Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}


