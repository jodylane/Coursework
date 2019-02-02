/**
 * Created by Josh Lane on 2/9/16.
 */

//this will add click events to buttons that we put inside this function
function setBindings() {
    //this is a boolean for when the menu is displayed.
    var menuDisplayed = false;

    //this is the click listener for the menu to display
    $(".logo").click(function (e) {
        if (menuDisplayed) {
            $(".content-wrapper").animate({
                left: "0"
            }, 500, function () {
                menuDisplayed = false;
            });
        } else if(window.innerWidth >= "700") {
            $(".content-wrapper").animate({
                left: "20%"
            }, 500, function () {
                menuDisplayed = true;
            });
        } else if (window.innerWidth <= "700" ) {
            console.log(window.innerWidth + "i ran once");
            $(".content-wrapper").animate({
                left: "30%"
            }, 500,function () {
                menuDisplayed = true;
            });

        }
    });



    $(".guide").click(function () {
        $(".guide").css("display", "none");
    });
    if (window.innerWidth <= "800") {
        //console.log(window.innerWidth + "i ran once");
        $(".reply i").remove();
        $(".reply").append("<i class='fa fa-reply replyIc'></i>");

    } else if (window.innerWidth >= "800") {
        //console.log(window.innerWidth + "i ran once2");
        $(".reply i").remove();
        $(".reply").prepend("<i class='fa fa-reply replyIc'></i>");

    }
    window.addEventListener("resize", function () {
        if (window.innerWidth <= "800") {
            //console.log(window.innerWidth);
            $(".reply i").remove();
            $(".reply").append("<i class='fa fa-reply replyIc'></i>");
        } else if (window.innerWidth >= "800") {
            //console.log(window.innerWidth);
            $(".reply i").remove();
            $(".reply").prepend("<i class='fa fa-reply replyIc'></i>")
        }
    });



    $(".login").click(function () {
        //console.log('login');
        $(".modalBG").css("display", "flex");
        $(".loginForm").css("display", "flex");
        $(".success").css("display", "none");
        $(".fail").css("display", "none");
        $(".noDB").css("display", "none");

        $("input").val("");
        $("#error .err").remove();
        $(".error .err").remove();

    });



    $(".signup").click(function () {
        $(".modalBG").css("display", "flex");
        $(".signupForm").css("display", "flex");
        $(".success").css("display", "none");
        $(".fail").css("display", "none");
        $(".noDB").css("display", "none");
        $("input").val("");
        $("#error .err").remove();
        $(".error .err").remove();
        //console.log('sign up');
    });



    $(".modalExit").click(function () {
        $(".modalBG").css("display", "none");
        $(".signupForm").css("display", "none");
        $(".loginForm").css("display", "none");
    });
    $(".modalExit2").click(function () {
        $(".modalBG2").css("display", "none");
        $(".success").css("display", "none");
        $(".fail").css("display", "none");
        $(".noDB").css("display", "none");
    });



    $("#submitSignupButton").click(function(event){
        var firstName = document.querySelector("#firstName");
        var lastName = document.querySelector("#lastName");
        var signupEmail = document.querySelector("#email");
        var signupPass = document.querySelector("#password");
        var conPass = document.querySelector("#confPass");

        $(".error .err").remove();

        var signupValid = true;

        if(firstName.value == "" || !isNaN()){
            signupValid == false;
            $(".error").append("<p class='err'>Please enter a valid first name.</p>");


        }
        if(lastName.value == "" || !isNaN(lastName.value)){
            signupValid = false;
            $(".error").append("<p class='err'>Please enter a valid last name.</p>");
        }
        var str = signupEmail.value;
        var strAt = str.indexOf("@");
        var strDot = str.indexOf(".",strAt);
        if(signupEmail.value == "" || strAt < 0 || strDot < 0){
            signupValid = false;
            $(".error").append("<p class='err'>Please enter a valid email.</p>");

        }
        if(signupPass.value == ""){
            signupValid = false;
            $(".error").append("<p class='err'>Please enter a valid Password.</p>");

        }
        if(conPass.value == "" || conPass.value != signupPass.value){
            signupValid = false;
            $(".error").append("<p class='err'>Password does not match your password above.</p>");
            //console.log(signupValid);
        }

        if(!signupValid){

            event.preventDefault();
            //console.log("failed")
            $(".modalBG2").css("display", "flex");
            $(".fail").css("display", "flex");
        }
        if(signupValid){
            event.preventDefault();
            Service.addUser(firstName,lastName,signupEmail,signupPass,dbDone);
        }
    })
    $(".toddSubmit").click("click",function(event){
        event.preventDefault();
        var password = document.querySelector("#password");
        var confPass = document.querySelector("#confPass").value;
        var passLength = password.value.length;
        var confPassLength = confPass.length;
        if(passLength < 8){
            password.val("");
            $("")
        }
    })


    $("#submitLoginButton").click(function(event){
        var loginEmail = document.querySelector("#logEmail");
        var loginPass = document.querySelector("#logPass");
        $("#error .err").remove();
        var logstr = loginEmail.value;
        var logstrAt = logstr.indexOf("@");
        var logstrDot = logstr.indexOf(".",logstrAt);
        var loginValid = true;
        if(loginEmail.value == "" || logstrAt < 0 || logstrDot < 0){
            loginValid = false;
            $("#error").append("<p class='err'>Please enter a valid email.</p>");
        }
        if(loginPass.value == ""){
            loginValid = false;
            $("#error").append("<p class='err'>Please enter a valid Password.</p>");
        }
        if(!loginValid){
            event.preventDefault();
            $(".modalBG2").css("display", "flex");
            $(".fail").css("display", "flex");
        }
        if(loginValid){

            Service.loginUser(loginEmail.value.toLowerCase(), loginPass.value.toLowerCase(), dbDone);
            console.log(loginEmail.value + " " + loginPass.value)
        }
    })
    function dbDone(userInfo){
        $(".signupForm").css("display", "none");
        $(".loginForm").css("display", "none");
        $(".modalBG").css("display", "none");
        $(".modalBG2").css("display", "flex");
        $(".success").css("display", "flex");
        var name = userInfo.f_name.charAt(0).toUpperCase() + userInfo.f_name.slice(1);
        console.log("dbDone ",name);
        var info = Service.getUserInfo();
        console.log("userInfo ", info);

    }

}

$(document).ready(function () {

    setBindings();


});







