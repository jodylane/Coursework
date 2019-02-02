/**
 * Created by Josh Lane on .
 N215 N320
 */

var map, marker, userLocation, db;

db = new Dexie("projectTwo");
db.version(1).stores({locations: "++id,location,time"});
db.open();


//list all of my drawings
listDrawings();
console.log(window.innerWidth);

//create map on my location
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
            showLocations();
        });
    };
};


function showLocations() {
    var markers = [];
    var oneMarker = [];

    db.locations.reverse().limit(6).each(function (locate) {
        //console.log(locate)
        marker = new google.maps.Marker({
            position: locate.location,
            map: map,
            title: locate.title,
            animation: google.maps.Animation.DROP
        });

        markers.push(marker);//this line is what pushes all markers into an array to hide markers

        marker.addListener("click", function () {
            setMapOnAll(null);//this line is what hides all markers
            marker = new google.maps.Marker({//this line was hides
                position: locate.location,
                map: map,
                title: locate.title,
                animation: google.maps.Animation.DROP
            });

            oneMarker.push(marker);
            showDrawing(locate.id)
        });

        $(".showMarker").click(function () {
            setMapOnAll(null);
            oneMarker = [];
            setMapOnAll(map);
        });
    });

    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        };
        for (var j = 0; j < oneMarker.length; j++) {
            oneMarker[j].setMap(map);
        };
    };
};

//list all the drawings on the right hand side..
function listDrawings() {
    //get the reference to the HTML element that will list the drawings..
    var drawingListingDiv = $("#drawingListing");

    //clear out the old content
    drawingListingDiv.html("");
    db.locations.reverse().limit(5)
        .each(function (drawing) {
            var drawingDate = new Date(drawing.time);
            drawingListingDiv.append("<li onclick='showDrawing(" + drawing.id + ")'>Made on: " + drawingDate.getMonth() + " / " + drawingDate.getDate() + " " + drawingDate.getHours() + "</li>");
        });

};

function showDrawing(id) {
    db.locations.get(id)
        .then(function (result) {
            var cvEl = document.createElement("img");
            cvEl.src = result.pixelData;
            $("#drawingShowcase").html(cvEl);
        });
};