/**
 * Created by Josh Lane on .
 N215 N320
 */
function setBindings(){
    $(".form").hide();
    $(".login").click(function(){
        $(".form").hide();
        $("#login").show();

        $(".emailLogin").val("");
        $(".passwordLogin").val("");

        $(".emailLoginError").html("");
        $(".passLoginError").html("");

        $(".emailLogin").css("border","none");
        $(".passwordLogin").css("border","none");
    });
    $(".signup").click(function(){
        $(".form").hide();
        $("#sign").show();

        $(".emailSignup").val("");
        $(".fNameSignup").val("");
        $(".lNameSignup").val("");
        $(".passwordSignup").val("");
        $(".confirmSignup").val("");

        $(".emailSignupError").html("");
        $(".fNameSignupError").html("");
        $(".lNameSignupError").html("");
        $(".passSignupError").html("");
        $(".confSignupError").html("");

        $(".emailSignup").css("border","none");
        $(".fNameSignup").css("border","none");
        $(".lNameSignup").css("border","none");
        $(".passwordSignup").css("border","none");
        $(".confirmSignup").css("border","none");
    });
    $(".loginButton").click(function(event){
        event.preventDefault();

        var emailLogin = document.querySelector(".emailLogin");
        var passwordLogin = document.querySelector(".passwordLogin");

        var str = emailLogin.value;
        var strAt = str.indexOf("@");
        var strDot = str.indexOf(".",strAt);

        var loginValid = true;

        $(".emailLoginError").html("");
        $(".passLoginError").html("");
        $(".emailLogin").css("border","none");
        $(".passwordLogin").css("border","none");

        if(emailLogin.value == "" || strAt < 0 || strDot < 0){
            loginValid = false;
            if(emailLogin.value == ""){
                $(".emailLogin").css("border","2px solid red");
                $(".emailLoginError").html("Please enter a valid email");
            }else if(strAt < 0){
                $(".emailLogin").css("border","2px solid red");
                $(".emailLoginError").html("A valid email must have a @ symbol present");
            }else if(strDot < 0){
                $(".emailLogin").css("border","2px solid red");
                $(".emailLoginError").html("A valid email must have a . after @ symbol present");
            }
        }
        if(passwordLogin.value == "" || passwordLogin.value.length != 8){
            loginValid = false;
            if(passwordLogin.value == ""){
                $(".passLoginError").html("Please enter in a Password");
                $(".passwordLogin").css("border","2px solid red");
            }else if(passwordLogin.value.length != 8){
                $(".passLoginError").html("Your password be 8 character in Length");
                $(".passwordLogin").css("border","2px solid red");
            }
        }
        if(loginValid){
            $(".modalBG").css("display","flex");
            Service.loginUser(emailLogin.value,function(data){
                swal({title: "Success!",text: "You are now logged in!"},function() {
                    var dbFName = data.f_name;
                    var dbLName = data.l_name;
                    $(".login .log").html("Welcome " + dbFName + " Log Out ");
                    $(".login").attr("class", "logout");

                    $(".settings .set").html("Settings ");
                    $(".settings i").addClass("fa fa-gear");

                    $(".signup").html("");

                    $(".logout").click(function () {
                        var clear = Service.clearUserDB();
                        clear;

                        $(".logout .log").html("Log In ");
                        $(".logout").attr("class", "login");

                        $(".settings .set").html("");
                        $(".settings i").attr("class", "");

                        $(".signup").html("Sign Up");

                    });
                    $(".settings").click(function () {
                        $(".form").hide();
                        $("#settings").show();
                    });
                    $(".edit").click(function () {
                        $(".form").hide();
                        $("#edit").show();

                        $(".fNameEditError").html("");
                        $(".lNameEditError").html("");

                        $(".fNameEdit").css("border", "none");
                        $(".lNameEdit").css("border", "none");

                        $(".fNameEdit").val(dbFName);
                        $(".lNameEdit").val(dbLName);

                    });
                })
            })
        }
    });

    $(".signUpButton").click(function(event){
        event.preventDefault();

        var email = document.querySelector(".emailSignup");
        var fName = document.querySelector(".fNameSignup");
        var lName = document.querySelector(".lNameSignup");
        var password = document.querySelector(".passwordSignup");
        var confirm = document.querySelector(".confirmSignup");

        var str = email.value;
        var strAt = str.indexOf("@");
        var strDot = str.indexOf(".",strAt);

        var signupValid = true;

        $(".emailSignupError").html("");
        $(".fNameSignupError").html("");
        $(".lNameSignupError").html("");
        $(".passSignupError").html("");
        $(".confSignupError").html("");
        $(".emailSignup").css("border","none");
        $(".fNameSignup").css("border","none");
        $(".lNameSignup").css("border","none");
        $(".passwordSignup").css("border","none");
        $(".confirmSignup").css("border","none");

        if(email.value == "" || strAt < 0 || strDot < 0){
            signupValid = false;
            if(email.value == ""){
                $(".emailSignup").css("border","2px solid red");
                $(".emailSignupError").html("Please enter a valid email");
            }else if(strAt < 0){
                $(".emailSignup").css("border","2px solid red");
                $(".emailSignupError").html("A valid email must have a @ symbol present");
            }else if(strDot < 0){
                $(".emailSignup").css("border","2px solid red");
                $(".emailSignupError").html("A valid email must have a . after @ symbol present");
            }
        }
        if(fName.value == "" || !isNaN(fName.value)){
            signupValid = false;
            if(fName.value == ""){
                $(".fNameSignupError").html("Please enter in your First Name");
                $(".fNameSignup").css("border","2px solid red");
            }else if(!isNaN(fName.value)){
                $(".fNameSignupError").html("Your First name is not a number");
                $(".fNameSignup").css("border","2px solid red");
            }
        }
        if(lName.value == "" || !isNaN(lName.value)){
            signupValid = false;
            if(lName.value == ""){
                $(".lNameSignupError").html("Please enter in your First Name");
                $(".lNameSignup").css("border","2px solid red");
            }else if(!isNaN(lName.value)){
                $(".lNameSignupError").html("Your First name is not a number");
                $(".lNameSignup").css("border","2px solid red");
            }
        }
        if(password.value == "" || password.value.length != 8){
            signupValid = false;
            if(password.value == ""){
                $(".passSignupError").html("Please enter in a Password");
                $(".passwordSignup").css("border","2px solid red");
            }else if(password.value.length != 8){
                $(".passSignupError").html("Your password be 8 character in Length");
                $(".passwordSignup").css("border","2px solid red");
            }
        }
        if(confirm.value == "" || confirm.value != password.value || confirm.value.length !=8){
            signupValid = false;
            if(confirm.value == ""){
                $(".confSignupError").html("Please re-enter in your password");
                $(".confirmSignup").css("border","2px solid red");
            }else if(confirm.value != password.value){
                $(".confSignupError").html("Your password should match your password above");
                $(".confirmSignup").css("border","2px solid red");
            }else if(confirm.value.length !=8){
                $(".confSignupError").html("A password should be 8 characters in length");
                $(".confirmSignup").css("border","2px solid red");
            }
        }
        if(signupValid){
            $(".modalBG").css("display","flex");
            Service.addUser(fName.value,lName.value,email.value,password.value,function(flag){
                console.log(flag);
                if(flag){
                    sweetAlert("Oops.. The email you registered with is already been used","error")
                }else{
                    swal({title: "Success!",text: "You are now logged in!"},function(){
                        var dbFName = Service.getUserInfo().f_name.charAt(0).toUpperCase() + Service.getUserInfo().f_name.slice(1)

                        var dbLName = Service.getUserInfo().l_name;
                        $(".login .log").html("Welcome " + dbFName + " Log Out ");
                        $(".login").attr("class","logout");

                        $(".settings .set").html("Settings ");
                        $(".settings i").addClass("fa fa-gear");

                        $(".signup").html("");

                        $(".logout").click(function(){
                            var clear = Service.clearUserDB();
                            clear;

                            $(".logout .log").html("Log In ");
                            $(".logout").attr("class","login");

                            $(".settings .set").html("");
                            $(".settings i").attr("class","");

                            $(".signup").html("Sign Up");

                        });
                        $(".settings").click(function(){
                            $(".form").hide();
                            $("#settings").show();
                        });
                        $(".edit").click(function(){
                            $(".form").hide();
                            $("#edit").show();

                            $(".fNameEditError").html("");
                            $(".lNameEditError").html("");

                            $(".fNameEdit").css("border","none");
                            $(".lNameEdit").css("border","none");

                            $(".fNameEdit").val(dbFName);
                            $(".lNameEdit").val(dbLName);

                        });
                        $(".editButton").click(function(event){
                            event.preventDefault();

                            var fNameEdit = document.querySelector(".fNameEdit");
                            var lNameEdit = document.querySelector(".lNameEdit");

                            var editValid = true;

                            $(".fNameEditError").html("");
                            $(".lNameEditError").html("");
                            $(".fNameEdit").css("border","none");
                            $(".lNameEdit").css("border","none");

                            if(fNameEdit.value == "" || !isNaN(fNameEdit.value)){
                                editValid = false;
                                if(fNameEdit.value == ""){
                                    $(".fNameEditError").html("Please enter in your First Name");
                                    $(".fNameEdit").css("border","2px solid red");
                                }else if(!isNaN(fNameEdit.value)){
                                    $(".fNameEditError").html("Your First name is not a number");
                                    $(".fNameEdit").css("border","2px solid red");
                                }
                            }
                            if(lNameEdit.value == "" || !isNaN(lNameEdit.value)){
                                editValid = false;
                                if(lNameEdit.value == ""){
                                    $(".lNameEditError").html("Please enter in your Last Name");
                                    $(".lNameEdit").css("border","2px solid red");
                                }else if(!isNaN(lNameEdit.value)){
                                    $(".lNameEditError").html("Your Last name is not a number");
                                    $(".lNameEdit").css("border","2px solid red");
                                }
                            }
                            if(editValid){
                                Service.addUser(fNameEdit.value,lNameEdit.value,Service.getUserInfo().email,Service.getUserInfo().password,function(){

                                });
                                $(".modalBG").css("display","flex");
                            }
                        });
                    })
                }
            })
        }
    });
}
$(document).ready(function(){
 setBindings();
});