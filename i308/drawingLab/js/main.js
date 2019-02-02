/**
 * Created by Josh Lane on .
 N215 N320
 */

var db,sketchController;
var drawingColor = "#000";

//setup the database
db = new Dexie("paintings");
db.version(1).stores({drawings: "++id,time"});
db.open();
listDrawings();
//call the init function right away
init();
function init(){
    //make it so we can draw on the sketchpad canvas
    sketchController = $("#sketchpad").sketch().data("sketch");
    //add event listeners to drawing tools
    $("#colorpicker").on("input", setDrawingColor);
    $("#sizepicker").on("input", setDrawingSize);
}

//drawing tool event handlers
function setDrawingColor(event){
    sketchController.color = this.value;
}
function setDrawingSize(event){
    sketchController.size = this.value;
}

$("#btnSave").click(function(){
    //get a reference to our canvas
    var canvas = document.getElementById("sketchpad");

    //make the object to put into our object store
    var drawingData = {
        time: Date.now(),
        pixelData: canvas.toDataURL()
    }

    //add that drawing to that datastore
    db.drawings.add(drawingData).then(listDrawings);

});

//list all the drawings on the right hand side..
function listDrawings (){
    //get the reference to the HTML element that will list the drawings..
    var drawingListingDiv = $("#drawingListing");

    //clear out the old content
    drawingListingDiv.html("");

    db.drawings.each(function(drawing){
        var drawingDate = new Date(drawing.time);
        drawingListingDiv.append("<li onclick='showDrawing(" + drawing.id + ")'>" + drawingDate.getMonth() + " / " + drawingDate.getDate() + " " + drawingDate.getHours() + "</li>");
    })
}

function showDrawing(id){
    db.drawings.get(id)
    .then(function(result){
            var cvEl = document.createElement("img");
            cvEl.src = result.pixelData;
            $("#drawingShowcase").html(cvEl)
        })
}