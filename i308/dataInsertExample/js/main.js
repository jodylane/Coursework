/**
 * Created by Josh Lane on .
 N215 N320
 */

var db = window.openDatabase("database", "1.0", "Demo", 200000);

//create the base design
db.transaction(
    function (tx) {
        tx.executeSql("DROP TABLE IF EXISTS insults");
        tx.executeSql("CREATE TABLE IF NOT EXISTS insults (type TEXT NOT NULL, description TEXT)");
    },
    onError
);
showInsults();
function addInsult() {
//get the data
    var type = document.querySelector("#txtType").value;
    var desc = document.querySelector("#txtDesc").value;
//clean up the data


//insert the data

    db.transaction(
        function (tx) {
            tx.executeSql("INSERT INTO insults (type, description) VALUES (?,?)",[type, desc]);
        },
        onError,
        insultAdded
    )
}
//called when the data is inserted clear out inputs
function insultAdded(){
    document.querySelector("#txtType").value = "";
    document.querySelector("#txtDesc").value = "";
    showInsults
}

function showInsults(){
    db.transaction(
        function(tx){
            tx.executeSql("SELECT * FROM insults",[], function(tx,results){
                document.querySelector("#rows").innerHTML = "";
                for(var i = 0;i < results.rows.length;i++){
                    rows.innerHTML += "<div>" + results.rows[i].type + ": " + results.rows[i].description + "</div>"
                }
                })
    }
    )
}

function onError(err) {
    console.log("Error Processing SQL: " + err.message);
}