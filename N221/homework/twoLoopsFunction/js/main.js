/**
 * Created by Josh Lane on 3/22/2015.
 * N221
 */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle="#000000";
ctx.fillRect(0,0,canvas.width,canvas.height);


ctx.lineWidth = 10;
ctx.strokeStyle = '#000000';
ctx.fillStyle="#FFFFFF";

for (var i = 0; i < 9; i++) {
    //square column 1
    ctx.fillRect(-5, 605 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(-5, 605 - 66.7 * i, 66.7, 66.7);
    //square column 2
    ctx.fillRect(61.7, 671.7 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(61.7, 671.7 - 66.7 * i, 66.7, 66.7);
    //square column 3
    ctx.fillRect(128.4, 738.4 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(128.4, 738.4 - 66.7 * i, 66.7, 66.7);
    //square column 4
    ctx.fillRect(195.1, 805.1 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(195.1, 805.1 - 66.7 * i, 66.7, 66.7);
}
for (var i = 0; i < 5; i++) {
    //square column 5
    ctx.fillRect(261.8, 605 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(261.8, 605 - 66.7 * i, 66.7, 66.7);
    //square column 6
    ctx.fillRect(328.5, 671.7 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(328.5, 671.7 - 66.7 * i, 66.7, 66.7);
    //square column 7
    ctx.fillRect(395.2, 738.4 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(395.2, 738.4 - 66.7 * i, 66.7, 66.7);
    //square column 8
    ctx.fillRect(461.9, 805.1 - 66.7 * i, 66.7, 66.7);
    ctx.strokeRect(461.9, 805.1 - 66.7 * i, 66.7, 66.7);
}

