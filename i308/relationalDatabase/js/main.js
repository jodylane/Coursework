/**
 * Created by Josh Lane on .
 N215 N320
 */
//first off, hide all the pages
$(".page").hide();
listOwners();
//show add owner function
function showAddOwner(){
    $(".page").hide();
    $("#addOwner").show();
}
//add owner function

$("#addOwner .btnAddOwner").click(function(){
    var ownerName = $("#addOwner .txtOwnerName").val();
    runQuery("INSERT INTO owners (name) VALUES (?)", [ownerName], listOwners);
});

//show all th owners in the db..
function listOwners(){
    $(".page").hide();
    $("#content").show();

    runQuery("SELECT name, rowid FROM owners", [], displayOwnerList);

    function displayOwnerList(tx, result){
        $("#content").html("");
        $.each(result.rows, function(index, owner){
            $("#content").append("<div onclick='showOwner(" + owner.rowid + ")'>" + owner.name + "</div>");
        })
    }
}
function showOwner(ownerId){
    $(".page").hide();
    $("#owner").show();
    //get the owner information..
    runQuery("SELECT *, rowid FROM owners WHERE rowid=?",[ownerId],displayOwner);
    function displayOwner(tx,result){
        //get the owner data
        var owner = result.rows[0];

        //clear out owner info
        $("#owner .ownerInfo").html("");

        //add new data to owner info
        $("#owner .ownerInfo").append("<div>" + owner.name + "</div>");

        //add a button to add a cat
        $("#owner .ownerInfo").append("<div class='center'><button onclick='showAddCat(" + owner.rowid + ")'>Add Cat</button></div>");
    }

    //selects all the cats
    runQuery("SELECT *, rowid FROM cats WHERE owner_id=?",[ownerId], displayOwnerCats);
    function displayOwnerCats(tx,result){
        $("#owner .petsListing").html("");

        //loop through each cat returned from the db
        $.each(result.rows,function(index,cat){
            $("#owner .petsListing").append("<div onclick='showCat(" + cat.rowid + ")'>" + cat.nickname + "</div>");
        })
    }

}
function showAddCat(ownerId){
    $(".page").hide();
    $("#addCat").show();

    $("#addCat .btnAddCat").unbind();
    $("#addCat .btnAddCat").bind("click", doAddCat);

    function doAddCat(){
        var catName = $("#addCat .txtCatName").val();
        var catType = $("#addCat .txtCatType").val();
        var catAge = $("#addCat .txtCatAge").val();
        var catDescription = $("#addCat .txtCatDescription").val();
        runQuery("INSERT INTO cats (nickname, type, age, description, owner_id) VALUES (?,?,?,?,?)",[catName, catType,catAge, catDescription, ownerId], catAdded);
        $("#addCat .txtCatName").val("");
        $("#addCat .txtCatAge").val("");
        $("#addCat .txtCatType").val("");
        $("#addCat .txtCatDescription").val("");
    }
    function catAdded(){
        showOwner(ownerId);
    }
}
function showCat(catId){
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