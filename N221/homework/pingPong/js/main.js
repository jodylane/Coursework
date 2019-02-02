/**
 * Created by Josh Lane on 4/30/2015.
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var balls=[];

for(var i=0;i<1;i++){
    var aBall = new ball(Math.floor(Math.random()*800), Math.floor(Math.random()*600), 10, "#FFFFFF", 1, 1);
    balls.push(aBall);
    console.log(aBall);
};
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

        if (balls[i].x > 800){
            balls[i].x = 800;
            balls[i].velocityX *= -1;
        }else if(balls[i].x<0){
            balls[i].x=0;
            balls[i].velocityX*=-1;
        }

        balls[i].y += balls[i].velocityY;

        if (balls[i].y > 600){
            balls[i].y = 600;
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
};

function fillCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
};