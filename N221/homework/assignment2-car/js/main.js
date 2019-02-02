/**
 * Created by Josh Lane on 1/29/2015.
 * N221
 */
//gets us access to the canvas in code
var canvas=document.getElementById("myCanvas");
//gets us something to draw on
var ctx=canvas.getContext("2d");

//-----Rectangles and squares----
//body of car
ctx.fillStyle="#1a466a";
ctx.fillRect(50,200,600,125);
ctx.fillRect(140,115,400,210);
ctx.fillStyle="#9bd1fb";
ctx.fillRect(415,130,115,65);

//------Lines------
//------circles-------
//tires
ctx.fillStyle="#1d1d1d";
fillCircle(500,320,50);
fillCircle(200,320,50);
//rims
ctx.fillStyle="#979797";
fillCircle(500,320,30);
fillCircle(200,320,30);

function fillCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}

//-------Clearing the Canvas-----

//ctx.clearRect(0,0,canvas.width,canvas.height);