/**
 * Created by BAM on 3/12/2015.
 */

var holder= document.querySelector("#holder");
console.log(holder);

for(var i=0;i<20;i++){
    var newBox=document.createElement("div");
    newBox.className="box";
    newBox.innerHTML=i;
    holder.appendChild(newBox)
}