/**
 * Created by Josh Lane on 2/12/2015.
 * N221
 */
    //my canvas stuff
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
//position x will change but y will stay the same so it should have a concrete value?
//there is an array of 10 values that will create a loop of circles

var positionX=0;

ctx.fillStyle="rgba(255,0,0,1)";

for(var i=0;i<10;i++){
    console.log(fillCircle(positionX,200,30));
    positionX+=80;
}

function fillCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}