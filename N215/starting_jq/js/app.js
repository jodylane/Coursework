//this is when the document is ready and all element TAGS have been READ
$(document).ready(function(){
    bindClickEvent();
});
//this is my function that adds the click listener to the navigation
function bindClickEvent(){
    $("span").click(function(e){
        var btnID = this.id;

        //this is how you access an id
        //alert("my id is " + this.id);

        //this is how you access an class
        //alert("my id is " + this.className);

        alert("my id is " + btnID);

    });
};