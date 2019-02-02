/**
 * Created by Josh Lane on .
 N215 N320
 */
/**
 * Created by Josh Lane on .
 N215 N320
 */



var sketchController, map, marker, userLocation, db;

db = new Dexie("projectTwo");
db.version(1).stores({locations: "++id,location,time"});
db.open();

listDrawings();
//call the init function right away
init();
function init() {

    //make it so we can draw on the sketchpad canvas
    sketchController = $("#sketchpad").sketch().data("sketch");
    //add event listeners to drawing tools
    $("#colorpicker").on("input", setDrawingColor);
    $("#sizepicker").on("input", setDrawingSize);
}

//drawing tool event handlers
function setDrawingColor(event) {
    sketchController.color = this.value;
}
function setDrawingSize(event) {
    sketchController.size = this.value;
}


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
    if (navigator.geolocation) {
        //if I can geolocate
        navigator.geolocation.getCurrentPosition(function (position) {

            //store the location of this user
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //center on the user location
            map.setCenter(userLocation);
            placeNewMarker();
        })
    }
}
function placeNewMarker(){
    marker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Click to position choice",
        draggable: true,
        animation: google.maps.Animation.DROP
    })
}

$("#btnSave").click(function () {
    if (navigator.geolocation) {
        //if I can geolocate
        navigator.geolocation.getCurrentPosition(function (position) {
            //get a reference to our canvas
            var canvas = document.getElementById("sketchpad");
            //make the object to put into our object store
            var drawingData = {
                time: Date.now(),
                pixelData: canvas.toDataURL(),
                location: {
                    lat: marker.position.lat(),
                    lng: marker.position.lng()
                }
            };
            console.log(marker.position.lat());
            //add that drawing to that datastore
            db.locations.add(drawingData).then(listDrawings);
            window.location.assign("index.html")
        })
    }
});



//list all the drawings on the right hand side..
function listDrawings() {
    //get the reference to the HTML element that will list the drawings..
    var drawingListingDiv = $("#drawingListing");

    //clear out the old content
    drawingListingDiv.html("");

    db.locations.each(function (drawing) {
        var drawingDate = new Date(drawing.time);
        drawingListingDiv.append("<li onclick='showDrawing(" + drawing.id + ")'>" + drawingDate.getMonth() + " / " + drawingDate.getDate() + " " + drawingDate.getHours() + "</li>");
    })
}

function showDrawing(id) {
    db.locations.get(id)
        .then(function (result) {
            var cvEl = document.createElement("img");
            cvEl.src = result.pixelData;
            $("#drawingShowcase").html(cvEl)
        })
}