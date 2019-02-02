/**
 * Created by Josh Lane on 4/20/2015.
 * N221
 */
    //references
var left = document.querySelector("#left");
var middle = document.querySelector("#middle");
var right = document.querySelector("#right");

//colors
var red = "rgb(255 ,0, 0)";
var blue = "rgb(0, 0, 255)";
var green = "rgb(0, 255, 0)";
var cyan = "rgb(0, 255, 255)";
var yellow = "rgb(255, 255, 0)";
var magenta = "rgb(255, 0, 255)";

//array of target colors
var noMagenta = [cyan,yellow];
var noCyan = [magenta,yellow];
var noYellow = [cyan,magenta];

//starting colors for left, middle, and right boxes
left.style.backgroundColor = red;
middle.style.backgroundColor = red;
right.style.backgroundColor = magenta;

//listener for left and middle cycles
left.addEventListener("click",leftCycle);
middle.addEventListener("click",middleCycle);

//function that cycles left div colors: red green blue

var color1 = 1;
var color2 = 1;

function leftCycle(event){

    color1 ++;
    if(color1 == 1){
        event.target.style.backgroundColor = red;
    }else if(color1 == 2){
        event.target.style.backgroundColor = green;
    }else{
        color1 = 0;
        event.target.style.backgroundColor = blue;
    };
    rightCycle();
};
//function that cycles middle div colors: red green blue
function middleCycle(event){

    color2 ++;
    if(color2 == 1){
        event.target.style.backgroundColor = red;
    }else if(color2 == 2){
        event.target.style.backgroundColor = green;
    }else{
        color2=0;
        event.target.style.backgroundColor = blue;
    };
    rightCycle();

}
//function that cycles through color depending on what left div and middle div colors are
function rightCycle(){

    console.log(color1, color2, right.style.backgroundColor);
    if(color1 == 0 && color2 == 1 && right.style.backgroundColor == magenta){
        right.style.backgroundColor = colorPicker();
    }else if(color1 == 1 && color2 == 0 && right.style.backgroundColor == magenta){
        right.style.backgroundColor = colorPicker();
    }else if(color1 == 2 && color2 == 1 && right.style.backgroundColor == yellow){
        right.style.backgroundColor = colorPicker();
    } else if(color1 == 1 && color2 == 2 && right.style.backgroundColor == yellow){
        right.style.backgroundColor = colorPicker();
    }else if(color1 == 0 && color2 == 2 && right.style.backgroundColor == cyan){
        right.style.backgroundColor = colorPicker();
    } else if(color1 == 2 && color2 == 0 && right.style.backgroundColor == cyan){
        right.style.backgroundColor = colorPicker();
    };
 };

function colorPicker(){
    if(color1 == 0 && color2 == 1 && right.style.backgroundColor == magenta){
        var picker = Math.floor(Math.random() * 2);
        return noMagenta[picker];
    }else if(color1 == 1 && color2 == 0 && right.style.backgroundColor == magenta){
        var picker = Math.floor(Math.random() * 2);
        return noMagenta[picker];
    }else if(color1 == 2 && color2 == 1 && right.style.backgroundColor == yellow){
        var picker = Math.floor(Math.random() * 2);
        return noYellow[picker];
    } else if(color1 == 1 && color2 == 2 && right.style.backgroundColor == yellow){
        var picker = Math.floor(Math.random() * 2);
        return noYellow[picker];
    }else if(color1 == 0 && color2 == 2 && right.style.backgroundColor == cyan){
        var picker = Math.floor(Math.random() * 2);
        return noCyan[picker];
    } else if(color1 == 2 && color2 == 0 && right.style.backgroundColor == cyan){
        var picker = Math.floor(Math.random() * 2);
        return noCyan[picker];
    };
};


