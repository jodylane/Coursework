/**
 * Created by Josh Lane on .
 N215 N320
 */
//open database
var db = window.openDatabase("quotes", "1.0", "Demo", 200000);
//setup the database

db.transaction(
    function (tx) {
        //to drop tables for debugging not for production
        //tx.executeSql("DROP TABLE IF EXISTS tag");
        //tx.executeSql("DROP TABLE IF EXISTS quote");
        //tx.executeSql("DROP TABLE IF EXISTS quote_tag ");
        tx.executeSql("CREATE TABLE IF NOT EXISTS quote(author TEXT NOT NULL, quote TEXT, year NUMBER)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS tag(name TEXT NOT NULL UNIQUE)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS quote_tag(quote_id NUMBER REFERENCES quotes(rowid), tag_id NUMBER REFERENCES tags(rowid), PRIMARY KEY (quote_id, tag_id))");
    },
    onError
)
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