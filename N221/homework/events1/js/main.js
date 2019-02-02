/**
 * Created by Josh Lane on 3/25/2015.
 * N221
 */

//setup

for (var i = 0; i < 20; i ++){
    //make div
    var newDiv= document.createElement('div');

    //add click listener via code
    //click, mouseover, mouseout,mousedown, mouseup
    newDiv.addEventListener('click',handleClick);
    newDiv.style.opacity=1;

    //add the div to root of the body
    document.body.appendChild(newDiv);
}


//event handler
//all events have access to one arguementand which is typically called an event or sometimes to abriviated "e"
//the event arguement is pretty much metadata about the event **it has useful properties like
//target, current target
function handleClick(event){
    event.target.innerHTML = "You Clicked Me.";
    event.target.style.opacity-= .1;
    event.target.style.backgroundColor=randomizeColor();
}
function randomizeColor(){
    var r = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    return ("rgb(" + r + "," + g + "," + b + ")");
};
