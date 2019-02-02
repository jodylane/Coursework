/**
 * Created by Josh Lane on .
 N215 N320
 */

var map, marker, userLocation, db;
//setup DB

db = new Dexie("LocationDB");
db.version(1).stores({locations: "++id,postion"});
db.open();

//called when map is ready
function initMap(){
    //this is where we create the google map

    map = new google.maps.Map(document.getElementById("map"),{
            center:{lat: -34.397, lng: 150.644},
            zoom: 8
        }
    );
    //can i geolocate this device?
    if(navigator.geolocation){
        //if I can geolocate
        navigator.geolocation.getCurrentPosition(function(position){

            //store the location of this user
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //center on the user location
            map.setCenter(userLocation);

            //place a marker that the
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

$("#savePosition").click(function(){
    //create an object and save it into our locationsobject store
    var memoryData = {
        title: $("#txtMemoryName").val(),
        position: { lat: marker.position.lat(), lng: marker.position.lng()}
    }
    //puts into memory store
    db.locations.add(memoryData);
    //redirect back to the main page
    window.location.assign("index.html")

})