/**
 * Created by Josh Lane on .
 N215 N320
 */
//hide all pages and show post time line which is also the home page
$(".page").hide();
$("#index").show();
//force post timeline on first change
runQuery("SELECT rowid, * FROM post", [], function (tx, result) {
    $("#index").html("");
    $("#index").html("<h2>Post Time-line</h2>");
    //loops through all of our posts info and display it
    $.each(result.rows, function (index, post) {

        $("#index").append("<div class='post'><div> Username: " + post.username + "<br/> Email: " + post.email + "<br/>Message: " + post.msg + "</div><br/><span onclick='addComment(" + post.rowid + ")'>comment</span><br/>");

    });
});
//setup the tag inputs
$("#addPost .txtTags").tagsInput();
$("#editPost .txtTags").tagsInput();

//adds a post
function addPost() {
    $(".page").hide();
    $("#addPost").show();

    $("#addPost .addPostBtn").click(function () {

        //get the post data from the user
        var email = $("#addPost .email").val();
        var username = $("#addPost .username").val();
        var msg = $("#addPost .msg").val();
        var tags = $("#addPost .txtTags").val().split(",");
        //insert the data into the database except for the tags
        runQuery("INSERT INTO post (username,msg,email) VALUES (?,?,?)", [username, msg, email], function (tx, result) {
            //get the id of the post we just added
            var postID = result.insertId;

            //now we loop through all of our tags
            $.each(tags, function (index, tag) {
                //query the database for a tag with this text..
                runQuery("SELECT rowid, name FROM tag WHERE name=?", [tag], function (tx, result) {

                    if (result.rows.length == 0) {
                        //we didnt get anything back from the database so now we need to insert
                        //that tag into the database
                        runQuery("INSERT INTO tag(name) VALUES (?)", [tag], function (tx, result) {
                            runQuery("INSERT INTO post_tag (post_id,tag_id) VALUES (?,?)", [postID, result.insertId])
                        })
                    } else {
                        //we got something back from the database
                        //insert an association between that returned tag row, and our new post
                        runQuery("INSERT INTO post_tag(post_id,tag_id) VALUES(?,?)", [postID, result.rows[0].rowid]);
                    }
                    ;
                });//ends the single tag check
            });//ends the tags loop

            //clear out the data
            $("#addPost .email").val("");
            $("#addPost .username").val("");
            $("#addPost .msg").val("");
            $("#addPost .txtTags").importTags("");
        });
    });
};

//show all tags
function showTags() {
    $(".page").hide();
    $("#tags").show();

    runQuery("SELECT rowid, * FROM tag", [], function (tx, result) {
        $("#tags").html("");
        $("#tags").html("<h2>Tags</h2>");
        //loops through all of our tag info
        $.each(result.rows, function (index, tag) {
            //add a div to the page that displays the tage name and also
            //run a function when it is clicked and pass the tagID into that function
            $("#tags").append("<div class='alignLeft' onclick='listPostsWithTag(" + tag.rowid + ")'>" + tag.name + "</div>");
        });
    });
};

//this function will find all posts with shared tag..
function listPostsWithTag(tagId) {
    $(".page").hide();
    $("#posts").show();

    runQuery("SELECT post.username, post.msg, post.email, post.rowid FROM post, post_tag WHERE post.rowid = post_tag.post_id AND post_tag.tag_id = ?", [tagId], function (tx, result) {
        $("#posts").html("");
        $.each(result.rows, function (index, post) {
            console.log(post.rowid);
            //called when we get a list of posts back


            $("#posts").append("<div class='post'><div> Username: " + post.username + "<br/> Email: " + post.email + "<br/>Message: " + post.msg + "</div><br/><span onclick='deletePost(" + post.rowid + ")'>Delete</span> - <span onclick='editPost(" + post.rowid + ")'>Edit</span> - <span onclick='addComment(" + post.rowid + ")'>comment</span><br/>");
            runQuery("SELECT comment.note,comment.username,comment.email,comment.rowid FROM comment,comment_post WHERE comment.rowid = comment_post.comment_id AND comment_post.post_id =?", [post.rowid], function (tx, result) {
                $.each(result.rows, function (index, comment) {
                    $(".post").append("<br/>Comments By: " + comment.username + "<br/>Email: " + comment.email + "<br/>Comments : " + comment.note)
                })

            })
        });


    });//end comment_post association search

}
function editPost(postId) {
    $(".page").hide();
    $("#editPost").show();
    //get the quotes info
    runQuery("SELECT *, rowid FROM post WHERE post.rowid=?", [postId], displayQuoteData);
    //display the data for editing
    function displayQuoteData(tx, results) {
        var postInfo = results.rows[0];
        $("#editPost .postId").val(postInfo.rowid);
        $("#editPost .email").val(postInfo.email);
        $("#editPost .username").val(postInfo.username);
        $("#editPost .msg").val(postInfo.msg);

    }

    //get the tags related to that quote..
    runQuery("SELECT tag.name, tag.rowid FROM tag, post_tag, post WHERE tag.rowid=post_tag.tag_id AND post.rowid=?", [postId], function (tx, result) {
        //clean out any old tags
        $("#editPost .txtTags").importTags("");
        $.each(result.rows, function (index, tag) {
            $("#editPost .txtTags").addTag(tag.name);
        })
    });

    //write out the list of tags to the tag input

}
$("#editPost .btnEdit").click(function () {
    //get the data
    var postId = $("#editPost .postId").val();
    var email = $("#editPost .email").val();
    var username = $("#editPost .username").val();
    var msg = $("#editPost .msg").val();
    var tags = $("#editPost .txtTags").val().split(",");

    //update the data
    runQuery("UPDATE post SET username = ?, msg = ?, email = ? WHERE rowid=?", [username, msg, email, postId]);

    //to update the tags in a slightly destructive manner
    //step one delete all the tag associations already present
    runQuery("DELETE FROM post_tag WHERE post_id=?", [postId], function () {
        //step two insert all the tags again by cheating
        $.each(tags, function (index, tag) {
            //query the database for a tag with this text..
            runQuery("SELECT rowid, name FROM tag WHERE name=?", [tag], function (tx, result) {
                //console.log(result.rows.length)
                if (result.rows.length == 0) {
                    //we didn't get something back from our query..

                    //that means this tag doesnt exist.
                    //lets insert that tag..
                    runQuery("INSERT INTO tag (name) VALUES (?)", [tag], function (tx, result) {
                        runQuery("INSERT INTO post_tag (post_id, tag_id) VALUES (?,?)", [postId, result.insertId])
                    })

                } else {
                    //we did get something back from our query..

                    //insert an association between that returned tag row, and our new quote..
                    runQuery("INSERT INTO post_tag(post_id,tag_id) VALUES (?,?)", [postId, result.rows[0].rowid])

                }
            });//end single tag check select

        });//end tag loop

        //show the tags page again
        showTags();
    });


});
//deletes both the quote and the link between the quote and the tag
function deletePost(postId) {
    //get rid of the link between the quote and the tag
    runQuery("DELETE FROM post_tag WHERE post_tag.post_id = ?", [postId], function () {
        //query to kill quote
        runQuery("DELETE FROM post WHERE rowid=?", [postId]);
        //show tags page
        showTags()
    });
    //once the association is deleted, get rid of the quote..

}
function showPosts() {
    $(".page").hide();
    $("#index").show();
    runQuery("SELECT rowid, * FROM post", [], function (tx, result) {
        $("#index").html("");
        $("#index").html("<h2>Post Time-line</h2>");
        //loops through all of our posts info and display it
        $.each(result.rows, function (index, post) {

            $("#index").append("<div class='post'><div> Username: " + post.username + "<br/> Email: " + post.email + "<br/>Message: " + post.msg + "</div><br/><span onclick='addComment(" + post.rowid + ")'>comment</span><br/>");

        });
    });
}
//adds comment
function addComment(postId) {
    $(".page").hide();
    $("#addComment").show();
    $("#addComment .addCommentBtn").click(function () {
        //get the comment data from the user
        var email = $("#addComment .email").val();
        var username = $("#addComment .username").val();
        var note = $("#addComment .note").val();
        //insert the data into the database

        runQuery("INSERT INTO comment (note,username,email) VALUES(?,?,?)", [note, username, email], function (tx, result) {

            //now we insert the association between our post and our comment

            runQuery("INSERT INTO comment_post (comment_id,post_id) VALUES (?,?)", [result.insertId, postId]);

        });
        //clear out the inputs
        $("#addComment .email").val("");
        $("#addComment .username").val("");
        $("#addComment .note").val("");
    });
}
