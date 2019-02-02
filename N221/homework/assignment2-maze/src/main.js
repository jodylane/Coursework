//Created by Josh Lane 1/29/15.
//N221
//

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//pay no heed to this code
//or you can if you want
var imageOne = new Image();
imageOne.onload = function() { ctx.drawImage(imageOne, 10, 10); };
imageOne.src = 'img/maze.png';

var imageTwo = new Image();
imageTwo.onload = function() { ctx.drawImage(imageTwo, 200, 10); solveMazes();};
imageTwo.src = 'img/maze2.png';

//--------- YOUR DRAWING CODE HERE -----------
function solveMazes() {
	//SOLVE THE MAZES
	//here's some.. starter code?
	ctx.strokeStyle = "#00FF00";
	ctx.beginPath();
	ctx.moveTo(65,10);
	ctx.lineTo(65,40);
	ctx.lineTo(35,40);
	ctx.lineTo(35,20);
	ctx.lineTo(15,20);
	ctx.lineTo(15,50);
	ctx.lineTo(70,50);
	ctx.lineTo(70,70);
	ctx.lineTo(50,70);
	ctx.lineTo(50,85);
	ctx.lineTo(70,85);
	ctx.lineTo(70,100);
	ctx.lineTo(35,100);
	ctx.lineTo(35,85);
	ctx.lineTo(17,85);
	ctx.lineTo(17,130);
	ctx.lineTo(50,130);
	ctx.lineTo(50,115);
	ctx.lineTo(80,115);
	ctx.lineTo(80,100);
	ctx.lineTo(100,100);
	ctx.lineTo(100,130);
	ctx.lineTo(85,130);
	ctx.lineTo(85,150);
	ctx.stroke();
	ctx.strokeStyle="#0000FF";
	ctx.beginPath();
	ctx.moveTo(255,10);
	ctx.lineTo(255,20);
	ctx.lineTo(245,20);
	ctx.lineTo(250,35);
	ctx.lineTo(290,35);
	ctx.lineTo(285,47);
	ctx.lineTo(235,47);
	ctx.lineTo(230,53);
	ctx.lineTo(235,58);
	ctx.lineTo(250,58);
	ctx.lineTo(293,127);
	ctx.lineTo(288,129);
	ctx.lineTo(278,129);
	ctx.lineTo(263,105);
	ctx.lineTo(233,105);
	ctx.lineTo(233,145);
	ctx.lineTo(253,145);
	ctx.lineTo(253,155);
	ctx.stroke();
}