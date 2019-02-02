/**
 * Created by Josh Lane on 2/11/2015.
 * N221
 */
    //canvas stuff
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

//arrays to store the last few positions of the mouse
var positionX=[];
var positionY=[];

//initialize the arrays to have zeroes in them
for(var i=0; i<90;i++){
    positionX[i]=0
    positionY[i]=0
}

//trust me on the name and position of the word event
function mouseMoved(event){
    //clear Canvas
    ctx.clearRect(0,0,1300,600);
    //push our current postion into the array
    positionX.push(event.offsetX);
    positionY.push(event.offsetY);

    positionX.shift();
    positionY.shift();

    ctx.fillStyle="rgba(255,0,0,1)";

    for(var i=0;i<positionX.length;i++){
        ctx.fillStyle="rgba(0,0,255,1)";
        fillCircle(positionX[i],positionY[i],i/6)
    }
}

//---------util function------------
function fillCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}