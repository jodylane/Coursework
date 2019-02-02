/**
 * Created by Josh Lane on .
 N215 N320
 */
//setup
$(".page").hide();

//response functions
function deleteCat(catId){
    //delete cat with this catID
    runQuery("DELETE FROM cats WHERE rowid=?",[catId],catDeleted);
    //where the cat is deleted
    function catDeleted(){
        //refresh cats Page
        showCatsPage()
    }
}
function showCatPage(catId){
    //hide all pages
    $(".page").hide();
    //show only the cats listing page
    $("#catPage").show();

    runQuery("SELECT * FROM cats WHERE rowid=?",[catId],onCatRetrieved);
    //when the cat's info has been fetched because hes a dog get it

    function onCatRetrieved(tx,results){
        //get the cat entry
        var cat = results.rows[0];
        //feed cat dat into template
        $("#catPage .catName").html(cat.nickname);
        $("#catPage .catType").html(cat.type);
        $("#catPage .catAge").html(cat.age);
        $("#catPage .catDesc").html(cat.description);
    }
}
function showCatsPage(){
    runQuery("SELECT rowid, * FROM cats", [], onCatsRetrieved);
    //when the cats have been pulled
    function onCatsRetrieved(tx, results){
        //hid all pages
        $(".page").hide();
        //show only the cats listing page
        $("#catsPage").show();
        //clean out old data in the cats page
        $("#catsPage").html("");
        //iterate through each cat
        $.each(results.rows,function(index,cat){
            //for each cat
            //build html to display cat
            var catInfo = "<span onclick='showCatPage(" + cat.rowid + ")'>" + cat.nickname + "</span> - ";
            catInfo += "<span onclick='showEditCatPage(" + cat.rowid + ")'>edit</span> - ";
            catInfo += "<span onclick='deleteCat(" + cat.rowid + ")'>delete</span>";
            catInfo += "<br/>";
            //appends the html to the cats page
            $("#catsPage").append(catInfo);
        })
    }
}

function showEditCatPage(catId){
    //hide old pages
    $(".page").hide();
    //show the edit page
    $("#editCatPage").show();
    //get the cat info from the database
    runQuery("SELECT *, rowid FROM cats WHERE rowid=?", [catId],onCatRetrieved);
    //when the cat info is pulled from the database
    function onCatRetrieved(tx, results){
        //place the cat info into the text fields
        //pull the cat into its own variable
        var cat = results.rows[0];
        $("#editCatPage .catId").val(catId);
        $("#editCatPage .txtCatName").val(cat.nickname);
        $("#editCatPage .txtCatAge").val(cat.age);
        $("#editCatPage .txtCatType").val(cat.type);
        $("#editCatPage .txtCatDesc").val(cat.description);
    }
}
//when the update button is clicked
$("#editCatPage .updateCat").click(function () {
    //gather the data
    var catId = $("#editCatPage .catId").val();
    var catName = $("#editCatPage .txtCatName").val();
    var catAge = $("#editCatPage .txtCatAge").val();
    var catType = $("#editCatPage .txtCatType").val();
    var catDescription = $("#editCatPage .txtCatDesc").val();
    //run the query to update this cat
    runQuery("UPDATE cats SET nickname=?, age=?, type=?, description=? WHERE rowid=?",[catName, catAge, catType, catDescription, catId], catUpdated);

    function catUpdated(){
        showCatsPage();

    }
})
function showAddCatPage() {
    //hide every single page
    //console.log("hello")
    $(".page").hide();
    //show only our cats page
    $("#addCatPage").show();
    //when the add button is clicked
    $("#addCatPage .addCat").click(function(){
        //create portion of crud
        //gather up the data
        var catName = $("#addCatPage .txtCatName").val();
        var catAge = $("#addCatPage .txtCatAge").val();
        var catType = $("#addCatPage .txtCatType").val();
        var catDesc = $("#addCatPage .txtCatDesc").val();

        //record portion of CRUD
        //add this to the database
        runQuery("INSERT INTO cats(nickname, age, type, description) VALUES (?,?,?,?)",[catName,catAge,catType,catDesc])
        //clear out the input fields
        $("#addCatPage .txtCatName").val("");
        $("#addCatPage .txtCatAge").val("");
        $("#addCatPage .txtCatType").val("");
        $("#addCatPage .txtCatDesc").val("");
    })

}
