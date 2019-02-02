/**
 * Created by Josh Lane on 2/9/2015.
 * N221
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//define variables to exist across function cells
//that will define our x and y location of our circle
var x = 400;
var y= 300;

animate();

function animate(){
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(x < 400){
        ctx.fillStyle = "#FF0000";
    } else if(x > 400){
        ctx.fillStyle = "#0000FF";
    }
    //draw red circle
    fillCircle(x, y, 55);
    requestAnimationFrame(animate);
}

//called when the user clicks 'left'
function goLeft(){
    x -= 20
}
//called when the user clicks'right'
function goRight(){
    x += 20
}

//--------Utility Functions--------------
function fillCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}