/**
 * Created by Josh Lane on .
 N215 N320
 */

//application level variables

//application setup
$(".page").hide();

$("#index").show();

//setup the tag inputs
$("#addQuote .txtTags").tagsInput();
$("#editQuote .txtTags").tagsInput();

//add quote page

function showAddQuote(){
    $(".page").hide();
    $("#addQuote").show();
}
$("#addQuote .btnAdd").click("click",function(){
    //get the data from the user
    var author = $("#addQuote .txtAuthor").val();
    var quote = $("#addQuote .txtQuote").val();
    var year = $("#addQuote .txtYear").val();
    var tags = $("#addQuote .txtTags").val().split(",");

    //insert the data to the database.. except for the tags.

   runQuery("INSERT INTO quote (author, quote, year) VALUES (?,?,?)",[author, quote, year], onQuoteAdded);

    function onQuoteAdded(tx,result){
        //get the ID of the quote we just inserted
        var quoteID = result.insertId;

        //now loop through all of our tags
        $.each(tags, function (index,tag){
            //query the database for a tag with this text..
            runQuery("SELECT rowid, name FROM tag WHERE name=?",[tag], function (tx, result) {

                if(result.rows.length == 0){
                    //we didn't get something back from our query..

                    //that means this tag doesnt exist.
                    //lets insert that tag..
                    runQuery("INSERT INTO tag (name) VALUES (?)", [tag], function (tx,result){
                        runQuery("INSERT INTO quote_tag (quote_id, tag_id) VALUES (?,?)", [quoteID,result.insertId])
                    })

                }else{
                    //we did get something back from our query..

                    //insert an association between that returned tag row, and our new quote..
                    runQuery("INSERT INTO quote_tag(quote_id,tag_id) VALUES (?,?)",[quoteID, result.rows[0].rowid])

                }
            })//end single tag check select

        })//end tag loop

        //clear out the data
        $("#addQuote .txtAuthor").val("");
        $("#addQuote .txtQuote").val("");
        $("#addQuote .txtYear").val("");
        $("#addQuote .txtTags").importTags("");

    }
});

//show tags page..
function showTags(){
    $(".page").hide();
    $("#tags").show();


    //get all the tag info from the database
    runQuery("SELECT rowid, * FROM tag",[], displayTags);
    //this function runs when we have gotten all the tag info from the database
    function displayTags(tx,result){
        $("#tags").html("");
        $("#tags").html("<h2>Tags</h2>");
        //loop through all of our tag info
        $.each(result.rows, function (index, tag) {
            //add a div to the page that displays the tag name and also
            // it will run a function when it is clicked. Pass the tagId into that function
            $("#tags").append("<div class='alignLeft' onclick='listQuotesWithTag(" + tag.rowid + ")'>" + tag.name + "</div>")
        })
    }

}
//this function will find all quotes with this tag
function listQuotesWithTag(tagId){
    $(".page").hide();
    $("#quotes").show();

    runQuery("SELECT quote.quote, quote.author, quote.year, quote.rowid FROM quote, quote_tag WHERE quote.rowid = quote_tag.quote_id AND quote_tag.tag_id = ?",[tagId],displayList);

    //called when we get a listing of quotes back
    function displayList(tx,result){
        $("#quotes").html("");
        $.each(result.rows, function(index,quote){

            $("#quotes").append(quote.quote + " - " + quote.author + " - " + quote.year);
            $("#quotes").append("<br/><span onclick='deleteQuote(" + quote.rowid + ")'>delete</span>");
            $("#quotes").append("<br/><span onclick='editQuote(" + quote.rowid + ")'>edit</span>");

        });
    }
}

//edit quote functionality
function editQuote(quoteId){
    $(".page").hide();
    $("#editQuote").show();
    //get the quotes info
    runQuery("SELECT *, rowid FROM quote WHERE quote.rowid=?",[quoteId],displayQuoteData);
    //display the data for editing
    function displayQuoteData(tx,results){
        var quoteInfo = results.rows[0]
        $("#editQuote .quoteid").val(quoteInfo.rowid);
        $("#editQuote .txtAuthor").val(quoteInfo.author);
        $("#editQuote .txtQuote").val(quoteInfo.quote);
        $("#editQuote .txtYear").val(quoteInfo.year);
    }
    //get the tags related to that quote..
    runQuery("SELECT tag.name, tag.rowid FROM tag, quote_tag, quote WHERE tag.rowid=quote_tag.tag_id AND quote.rowid=?",[quoteId],displayTagList);

    //write out the list of tags to the tag input
    function displayTagList(tx,result){
        //clean out any old tags
        $("#editQuote .txtTags").importTags("");
        $.each(result.rows,function(index,tag){
            $("#editQuote .txtTags").addTag(tag.name);
        })
    }
}
$("#editQuote .btnEdit").click(function(){
    //get the data
    var quoteId = $("#editQuote .quoteid").val();
    var author = $("#editQuote .txtAuthor").val();
    var quote = $("#editQuote .txtQuote").val();
    var year = $("#editQuote .txtYear").val();
    var tags = $("#editQuote .txtTags").val().split(",");

    //update the data
    runQuery("UPDATE quote SET author = ?, quote = ?, year = ? WHERE rowid=?",[author,quote,year,quoteId]);

    //to update the tags in a slightly destructive manner
    //step one delete all the tag associations already present
    runQuery("DELETE FROM quote_tag WHERE quote_id=?",[quoteId],function(){
        //step two insert all the tags again by cheating
        $.each(tags, function (index,tag){
            //query the database for a tag with this text..
            runQuery("SELECT rowid, name FROM tag WHERE name=?",[tag], function (tx, result) {

                if(result.rows.length == 0){
                    //we didn't get something back from our query..

                    //that means this tag doesnt exist.
                    //lets insert that tag..
                    runQuery("INSERT INTO tag (name) VALUES (?)", [tag], function (tx,result){
                        runQuery("INSERT INTO quote_tag (quote_id, tag_id) VALUES (?,?)", [quoteId,result.insertId])
                    })

                }else{
                    //we did get something back from our query..

                    //insert an association between that returned tag row, and our new quote..
                    runQuery("INSERT INTO quote_tag(quote_id,tag_id) VALUES (?,?)",[quoteId, result.rows[0].rowid])

                }
            });//end single tag check select

        });//end tag loop

        //show the tags page again
        showTags();
    });


});
//deletes both the quote and the link between the quote and the tag
function deleteQuote(quoteId){
    //get rid of the link between the quote and the tag
    runQuery("DELETE FROM quote_tag WHERE quote_tag.quote_id = ?", [quoteId],whenAssociationDeleted);
    //once the association is deleted, get rid of the quote..
    function whenAssociationDeleted(){
        //query to kill quote
        runQuery("DELETE FROM quote WHERE rowid=?",[quoteId]);
        //show tags page
        showTags()
    }
}