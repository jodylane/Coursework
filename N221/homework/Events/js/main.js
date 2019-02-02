/**
 * Created by Josh Lane on 3/27/2015.
 * N221
 */

for (var i = 0; i < 5; i ++){
    //make div
    var newDiv= document.createElement('div');

    //add click listener via code
    //click, mouseover, mouseout,mousedown, mouseup
    newDiv.addEventListener('mouseover',onMouseOver);
    newDiv.addEventListener('mouseout',onMouseOut);
    newDiv.addEventListener('click',onMouseClick);

    //add the div to root of the body
    document.body.appendChild(newDiv);
}
function onMouseClick(event){
    event.target.remove()
};

function onMouseOver(event){
    event.target.style.width="200px";
    event.target.style.height="200px";
};

function onMouseOut(event){
    event.target.style.width="100px";
    event.target.style.height="100px";

};