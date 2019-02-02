/**
 * Created by Josh Lane on 1/29/2015.
 * N221
 */
//gets us access to the canvas in code
var canvas=document.getElementById("myCanvas");
//gets us something to draw on
var ctx=canvas.getContext("2d");


var x=0;
var y=0;
var z=0;
var w=0;

//runs the function alot behind the scenes so we dont have to deal with it
animate();

function animate(){
        //clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#FF00FF"; //begins a blue fill
    ctx.fillRect(y,x,z,w);
    ctx.fillStyle="#0000FF"; //begins a blue fill
    ctx.fillRect(y,x,x,y);
   // console.log(x);
   //console.log("GIBBERISH!!");

    //tries to run 30 times/sec
    requestAnimationFrame(animate);
}