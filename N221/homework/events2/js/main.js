/**
 * Created by Josh Lane on 4/5/2015.
 * N221
 */

var canvas,ctx;

var box = {
    x:10,
    y:10,
    size:70
};


window.addEventListener("keydown",function(event){
    console.log(event);

    //left
    if(event.keyCode == 37){
        box.x -=5;
    }

    if(event.keyCode == 39){
        box.x +=5;
    }

    if(event.keyCode == 38){
        box.y -=5;
    }

    if(event.keyCode == 40){
        box.y +=5;
    }

    drawBox(box.x,box.y,box.size)
})


function drawBox (x, y, size){
    //clear the stage
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //draw the box
    ctx.fillStyle="#000000";
    ctx.fillRect(x,y,size,size);
}


//wait for the document to load, setup
window.addEventListener("load", ready);

function ready(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    drawBox(box.x, box.y, box.size)
};