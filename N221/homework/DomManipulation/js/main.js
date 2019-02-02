/**
 * Created by Josh Lane on 3/9/2015.
 * N221
 */
    //get a reference to the nav list
var nav = document.getElementById("nav");
console.log(nav);


var navRefTwo = document.querySelector("#nav");

var birds = document.getElementsByClassName("bird");

for(var i = 0; i < birds.length; i++){
    birds[i].style.color= "#0000FF";
}
birds[0].style.fontWeight="bold";
birds[1].style.margin= "40px";
birds[1].style.backgroundColor= "#00FF00";
birds[2].style.fontStyle="italic";

var ydiv = document.getElementById("ydiv");
ydiv.innerHTML = "no really why?";
//adding things to dom
var newBird = document.createElement("li");
newBird.innerHTML ="NEW LIFE!";
newBird.style.color ="#FFAAAA";
newBird.className="bird";
nav.appendChild(newBird);

//removing things dom
nav.remove()