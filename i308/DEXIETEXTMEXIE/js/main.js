/**
 * Created by Josh Lane on .
 N215 N320
 */

var db = new Dexie("PeopleFromTheFutureDatabase");

db.version(1).stores({
    people: "++id,name,age"
});
db.version(2).stores({
    people: "++id,name,age",
    equipment: "++id,name"
});

var fry = {
    name: "Frank Farnsworth",
    age: "23",
    employment: "Delivery Boy"
};
db.people.add(fry);

//get all the people;
db.people.each(function(person){
    console.log(person)
});

//get one person
db.people.get(10).then(function(person){
    console.log("single ", person)
});

//get a range of peeps
db.people.where("id").between(10,13).each(function(person){
    console.log("range ", person)
});

//do an update..
db.people.get(10).then(function(person){
    //modify object's properties
    //Do NOT change the id..
    person.hp = 100;
    person.name = "Dr.Dave";
    //replae the old object with this new one
    db.people.put(person);
    console.log(person)
});