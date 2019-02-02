/**
 * Created by Josh Lane on .
 N215 N320
 */
//open database
var db = window.openDatabase("database", "1.0", "Demo", 200000);
//setup the database
runQuery("CREATE TABLE IF NOT EXISTS cats(nickname TEXT NOT NULL, type TEXT, age NUMBER, description TEXT)",[])
//db.transaction(
//    function (tx) {
//        tx.executeSql("CREATE TABLE IF NOT EXISTS cats(nickname TEXT NOT NULL, type TEXT, age NUMBER, description TEXT)")
//    },
//    onError
//)
//utility functions

//run query
function runQuery(query, parameters, successCallback) {
    db.transaction(
        function (tx) {
            tx.executeSql(query, parameters, successCallback)
        },
        onError
    )
}
//onError
function onError(err) {
    console.log("Error processsing SQL: " + err.message)
}