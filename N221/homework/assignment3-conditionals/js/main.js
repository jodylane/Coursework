/**
 * Created by Josh Lane on 2/9/2015.
 * N221
 */

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function testIt() {
    var user1 = parseFloat(document.getElementById("firstInput").value);
    var user2 = parseFloat(document.getElementById("secondInput").value);
    if (user1 + user2 >= 10) {
        ctx.fillStyle = "#00FF00";
        console.log(fillCircle(100,100,55));
    } else if (user1 + user2 >= 5) {
        ctx.fillStyle = "#ffff00";
        console.log(fillCircle(100,100,55));
    } else {
        ctx.fillStyle = "#FF0000";
        console.log(fillCircle(100,100,55));
    }
}
function fillCircle(x,y,radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}