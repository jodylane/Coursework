/**
 * Created by Josh Lane on 2/22/2015.
 * N221
 */

//basic Canvas stuff
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

//ready to draw

//make the ball to draw

var balls=[];

for(var i=0;i<4;i++){
    var aBall = new ball(Math.random()*400, Math.random()*300, 25, "#999966", 1, 1);
    balls.push(aBall);
    console.log(aBall);
}
update();
function update(){
    //clear  the canvas

    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for (var i= 0;i < balls.length;i++){
        //draw our ball

        ctx.fillStyle = balls[i].color;
        fillCircle(balls[i].x, balls[i].y, balls[i].radius);

        //update ball location

        balls[i].x += balls[i].velocityX;

        if (balls[i].x > 400){
            balls[i].x = 400;
            balls[i].velocityX *= -1.1;
        }else if(balls[i].x<0){
            balls[i].x=0;
            balls[i].velocityX*=-1.2;
        }

        balls[i].y += balls[i].velocityY;

        if (balls[i].y > 300){
            balls[i].y = 300;
            balls[i].velocityY *= -1.1;
        }else if(balls[i].y<0){
            balls[i].y=0;
            balls[i].velocityY*=-1.2;
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
