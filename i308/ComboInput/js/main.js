/**
 * Created by Josh Lane on .
 N215 N320
 */

//will store a reference to our db
var db;

//open the database
var request = window.indexedDB.open("ComboDB",1);

request.onupgradeneeded = function(event){
    //when we need to create the DB for the first time..
    db = event.target.result;

    //make an object store for the combos..
    var objectStore = db.createObjectStore("combos", {keyPath:"id",autoIncrement: true});

    //make an index we could query on..
    objectStore.createIndex("name", "name", {unique: true})
};
request.onsuccess = function(event){
    //store reference..
    db = event.target.result;

listData()
};

$("#btnSubmit").click(function(){
    //store data in an object
    var comboData = {};
    comboData.name = $("#txtName").val();
    comboData.number = $("#txtNumber").val();

    //start a transaction..
    var transaction = db.transaction("combos","readwrite");

    //specify which object store we want to put this object into..
    var objectStore = transaction.objectStore("combos");

    //actually add the object into the db..
    var request = objectStore.add(comboData);

    //when the data is added
    request.onsuccess = (function(event){
        //clear out the inputs
        $("#txtName").val("");
        $("#txtNumber").val("");

        //list the data
        listData();
    })
});
function listData(){
    //reset combos HTML to nothing..
    $("#combos").html("");

    //specify the object store we need to access
    var objectStore = db.transaction("combos").objectStore("combos");

    //start a cursor at the first entry in our combos object store..
    objectStore.openCursor().onsuccess = function (event) {
        //get a pointer to the current data..
        var cursor = event.target.result;

        //if were pointing to actual data..
        if(cursor){
            //displays this combo info
            $("#combos").append("<div>Combo number " + cursor.value.number + ": " + cursor.value.name + "</div>");

            //move to the next potential entry..
            cursor.continue();
        }

    }
}