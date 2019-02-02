/**
 * Created by Josh Lane on 3/4/2015.
 * N221
 */

var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

ctx.fillStyle="#000000";
ctx.fillRect(0,0,canvas.width,canvas.height);

var balls=[];

for(var i=0;i<21;i++){
    var aBall = new ball(Math.random()*1300, Math.random()*800, 25, "#FFFFFF", Math.random()*10, Math.random()* 10);
    balls.push(aBall);
    console.log(aBall);
}
update();
function update(){
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for (var i= 0;i < balls.length;i++){
        //draw our ball

        ctx.fillStyle = balls[i].color;
        fillCircle(balls[i].x, balls[i].y, balls[i].radius);

        //update ball location

        balls[i].x += balls[i].velocityX;

        if (balls[i].x > 1300){
            balls[i].x = 1300;
            balls[i].velocityX *= -1;
        }else if(balls[i].x<0){
            balls[i].x=0;
            balls[i].velocityX*=-1;
        }

        balls[i].y += balls[i].velocityY;

        if (balls[i].y > 800){
            balls[i].y = 800;
            balls[i].velocityY *= -1;
        }else if(balls[i].y<0){
            balls[i].y=0;
            balls[i].velocityY*=-1;
        }
    }
    //to draw again

    requestAnimationFrame(update);
};

function ball(aX,aY,aRadius,aColor,aVelocityX,aVelocityY){
    this.x=aX;
    this.y=aY;
    this.radius=aRadius;
    this.color=aColor;
    this.velocityX=aVelocityX;
    this.velocityY=aVelocityY;
}
//util function
function fillCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
};
