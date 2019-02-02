/**
 * Created by Josh Lane on .
 N215 N320
 */

var db;
var request = window.indexedDB.open("myBooks",1);

request.onupgradeneeded = function(event){
    db = event.target.result;
    //create an objectStore for this database
    var objectStore = db.createObjectStore("books", {keyPath: "id", autoincrement: true});
    objectStore.createIndex("title", "title",{unique: true});
    objectStore.createIndex("author", "author",{unique: true});
};
request.onsuccess = function(event){
    db = event.target.result;
    var bookObjectStore = db.transaction("books", "readwrite").objectStore("books");
    bookObjectStore.add({title: "The Lord of the Rings", author: "JRR Tolkein", id: 2, pubDate: 1779});
    //bookObjectStore.add({title: "Harry Potter", author: "JK Rowling", id: 3, pubDate: 1989});

};