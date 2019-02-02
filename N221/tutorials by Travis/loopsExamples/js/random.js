/**
 * Created by Josh Laneon 2/11/2015.
 * N221
 */
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

var randX;//random x location
var randY;//random y location
var randR;//random radius location

for(var i=0; i<100; i++){
    randX = Math.random() * 800;
    randY = Math.random() * 600;
    randR = Math.random() * 80;

    if(Math.random() < .33){
        ctx.fillStyle = "rgba(255,0,0," + Math.random() + ")";
    }else if(Math.random() < .66){
        ctx.fillStyle = "rgba(0,255,0," + Math.random() + ")";
    }else{
        ctx.fillStyle = "rgba(0,0,255," + Math.random() + ")";
}
    if (Math.random()<.5){

    }else{
        ctx.fillRect(randX,randY,randR,randR)
    }


   // ctx.fillStyle = "rgba(0,0,0,.25)";
    fillCircle(randX,randY,randR)
}
//=======util function=========
function fillCircle(x, y, radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
}