  /**
 * Created by Josh Lane on .
 N215 N320
 */

 var db = new Dexie("UpadatesDB");

  db.version(1).stores({
      updates: "++id,username,time"
  });
  db.open();

  listRecentUpdates();
  $("#btnAddUpdate").click(function(){
      var username = $("#updateInputBox .userName").val();
      var message = $("#updateInputBox .message").val();

      //validation

      //clear out the feed back
      $("#feedback").html("");

      if(username == ""){
          //display error message
          $("#feedback").html("Please enter a username");
          //leave function
          return;
      }
      if(message == ""){
          //display error message
          $("#feedback").html("Please enter a message");
          //leave function
          return;
      }

      //our data is okay
      var update = {
          username: username,
          message: message,
          time: Date.now()
      };
      //add the update
      db.updates
          .add(update)
          .then(listLastMinutesUpdates);

      //clear out the input fields
       $("#updateInputBox .userName").val("");
       $("#updateInputBox .message").val("");
  });

  function listRecentUpdates(){
      //get a ref to the place to list the updates..
      var updateListDiv = $("#updateList");

      //clear out the old List
      updateListDiv.html("");

      //get my three most recent updates, in reverse order
      db.updates.reverse().limit(3)
          .each(function(update){
              updateListDiv.append("<p>" + update.username + " : " + update.message + "</p>");
          })
  }
  function listLastMinutesUpdates(){
      //get a ref to the place to list the updates..
      var updatesListDiv = $("#updateList");

      //clear out the old list
      updatesListDiv.html("");

      //query for all the updates in the last minute..
      db.updates.where("time").between(Date.now() - (60 * 1000), Date.now())
          .each(function(update){
              updatesListDiv.append("<p>" + update.username + " : " + update.message + "</p>")
          })
  }