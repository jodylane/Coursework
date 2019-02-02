/**
 * Created by Josh Lane on .
 N215 N320
 */
//open database
var db = window.openDatabase("posts", "1.0", "Demo", 200000);
//setup the database

db.transaction(
    function (tx) {
        ////to drop tables for debugging not for production
        //tx.executeSql("DROP TABLE IF EXISTS tag");
        //tx.executeSql("DROP TABLE IF EXISTS post");
        //tx.executeSql("DROP TABLE IF EXISTS post_tag ");
        //tx.executeSql("DROP TABLE IF EXISTS comment_post ");
        //tx.executeSql("DROP TABLE IF EXISTS comment ");
        tx.executeSql("CREATE TABLE IF NOT EXISTS post(username TEXT NOT NULL, msg TEXT, email TEXT)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS tag(name TEXT NOT NULL UNIQUE)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS post_tag(post_id NUMBER REFERENCES post(rowid), tag_id NUMBER REFERENCES tag(rowid), PRIMARY KEY (post_id, tag_id))");
        tx.executeSql("CREATE TABLE IF NOT EXISTS comment(note TEXT NOT NULL,username TEXT,email TEXT)");
        tx.executeSql("CREATE TABLE IF NOT EXISTS comment_post(comment_id NUMBER REFERENCES comment(rowid), post_id NUMBER REFERENCES  post(rowid),PRIMARY KEY (post_id, comment_id))");

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