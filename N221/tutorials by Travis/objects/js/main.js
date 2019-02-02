/**
 * Created by Josh Lane on 2/21/2015.
 * N221
 */

//Problem
    var height= 23;
    var color = "#FF0000";
    var weight= 10;
    var numLegs= 5;
    var bodyColor="#000000";
    var isAdjustable= true;
//solution
//object syntax is {}
//with name: value pairs inside seperated by commmas
var someChair ={
    height: 23,
    color: "#FF0000",
    weight: 10,
    numLegs: 5,
    bodyColor:"#000000",
    isAdjustable: true
};

//showing the whole object
console.log(someChair);

//singular properties
//DOT operator
console.log("Old Color: " + someChair.color);

//properties work just like normal variables
//lets change the someChairs color
someChair.color="#0000FF";
console.log("New Color: " + someChair.color);

//problem having to make multiple similar objects
var someChair2 ={
    height: 23,
    color: "#FF0000",
    weight: 10,
    numLegs: 5,
    bodyColor:"#000000",
    isAdjustable: true
};
//another way to make object is an object constructor
//solution to making lots of the same type of object
console.log("starting object constructor section");
//works as a template for an object
function chair(){
    this.color="#FF0000";
    this.weight=40;
    this.numLegs=3;
    this.bodyColor="#000000";
    this.isAdjustable=false;
};

//ways not to make a new object with an object constructor
//just calling the function
chair();

//ways to make an objecct with an object constructor
//use the NEW keyword
var aChair=new chair();
console.log(aChair);
//solution to overiding default values is passing in arguements to the function constructor
function Truck(aHeight,aColor,aWeight,numWheels){
    this.color=aColor;
    this.weight=aWeight;
    this.numWheels=numWheels;
    loadCapacity=250;
};
//using object constructor with arguements
var firstTruck= new Truck(20,"#FF0000",700,53);
conosole.log(firstTruck);

var secomdTruck= new Truck(20,"#FF0000",700,53);
conosole.log(firstTruck);