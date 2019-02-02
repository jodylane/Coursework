/**
 * Created by Josh Lane on 4/5/2015.
 * N221
 */

var myDiv = document.getElementById("myDiv");
myDiv.style.width = "100px";
myDiv.style.height = "100px";
myDiv.style.backgroundColor = "#000000";

window.addEventListener("click",function(){
    console.log("original width "+myDiv.style.width);
    var numericalWidth = parseInt(myDiv.style.width.replace("px","")*1.1);
    console.log("number value width "+numericalWidth);
    var pixelWidth = numericalWidth + "px";
    console.log("new number value width "+pixelWidth);
    myDiv.style.width = pixelWidth;
    myDiv.style.height = pixelWidth;
});
