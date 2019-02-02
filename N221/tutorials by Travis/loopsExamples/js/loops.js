/**
 * Created by Josh Lane on 2/11/2015.
 * N221
 */
var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext('2d');
/*
for(i=0; i<10; i++){
    ctx.fillStyle="rgba(0,0,0,.5)";
    fillCircle(i*20, i*20, 20);
}
 console.log("end of loop1");
*/
ctx.fillStyle="rgba(0,0,0,.25)";
ctx.strokeStyle="#0000FF";
for(var i = 0; i<10; i++){
    ctx.strokeRect(i*20,i*20,i*20,i*20);
    ctx.fillRect(i*20,i*20,i*20,i*20)
}
console.log("end of loop1");

//i is short for iterand (which is the variable that increases by one each loop)
//i++ is the same thing as i += 1 which is the same thing as i = i + 1
//for(before the loop starts; when the loop starts or before the loop iteration; at the end of each loop;)
//second arguement **must** evaluate to true for the loop to run, if false the loop exits
//(i<5;) this part of the arguement the number on the right is the number of times the loop will run
//after the loop exits in this case once the loop gets to 5 or more the loop will stop but the 'stored' value of i
//will still be the number of times the loop ran so because we started off with i being 0 the loop ran 5 times to make
// the second arguement true so 4<5 but when it reaches 5; 5<5 is not a true statement so because of the i++ the stored
//value of i is 5 but the loop ends because of the false arguement
for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log("end of loop2");
//while loop
var i = 0
while(i < 6){
    console.log(i);
    if(i > 2){
        break;//this will end the loop before it normally would
    }
    i++;//with out this you will create an ifinite loop which will break your page
}
console.log("end of loop3");
function fillCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}