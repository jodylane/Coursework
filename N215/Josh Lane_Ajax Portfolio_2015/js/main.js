/**
 * Created by Josh Lane on 9/16/2015.
 N320.
 */
    //this == the element that is clicked.
    //event.target == this

    //AJAX in a file from the folder 'pages'
    //with the name (textInsideTheLink) + ".html"

$(document).ready(function(){
    $("body").velocity({opacity:0, delay:350});
    $("body").velocity({opacity:1, delay:450});
    loadPage()
});

function loadPage(){
    $(".navLink").click(function(){
            $.get("pages/" + this.innerHTML + ".html", function(data){
            $("#content").html(data)
                }
        )}
)};

function changePage() {
    $("#content").velocity({ right: 200, opacity: 0 }, { delay:350});
    $("#content").velocity({ right: 0, opacity: 1, delay:450 });
};



















