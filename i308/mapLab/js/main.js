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

            //show saved location
            showLocations();
        })
    }
}
function showLocations(){
    //stub
    var markers = [];
    var oneMarker = [];
    db.locations.reverse().limit(6).each(function(location) {
        marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.title,
            animation: google.maps.Animation.DROP
        })
        console.log(marker.title)
        markers.push(marker);//this line is what pushes all markers into an array to hide markers

        marker.addListener("click",function(){
            setMapOnAll(null);//this line is what hides all markers
            marker = new google.maps.Marker({//this line was hides
                position: location.position,
                map: map,
                title: location.title,
                animation: google.maps.Animation.DROP
            })
            oneMarker.push(marker);

            console.log(oneMarker)
        })
        $(".showMarker").click(function () {
            setMapOnAll(null)
            oneMarker = [];
            console.log(oneMarker)
            setMapOnAll(map)

        })
    })
        function setMapOnAll(map) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
            for (var j = 0; j < oneMarker.length; j++) {
                oneMarker[j].setMap(map);
            }
        }
}
