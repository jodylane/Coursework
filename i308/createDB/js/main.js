/**
 * Created by Josh Lane on 1/1912016.
I308
 */



    //program to open a databse, create a clouds table, and insert two rows of clouds.
//step one open the database
var db = window.openDatabase("database", "1.0", "Demo", 200000);
//step two create a transaction
    db.transaction(function(tx){
        tx.executeSql('DROP TABLE IF EXISTS clouds');
        tx.executeSql("CREATE TABLE IF NOT EXISTS clouds"
        + "(id INT PRIMARY KEY NOT NULL,"
        + "type TEXT NOT NULL, location TEXT, nickname TEXT);");
        //tx.executeSql("DELETE FROM clouds")
        tx.executeSql("INSERT INTO clouds (id, type, location, nickname) VALUES (1, 'Cirrus','New York', 'Happy')");
        tx.executeSql("INSERT INTO clouds (id, type, location, nickname) VALUES (2, 'nimbus','Indianapolis','Fluffy')");
    },
    onError
    )
    function onError(err){
        console.log("Error processing SQL: " + err.message)
    }
