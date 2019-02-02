/**
 * Created by Josh Lane on .
 N215 N320
 */
function setBindings(){
    //$(".form").hide();
    //$(".login").click(function(){
    //    $(".form").hide();
    //    $("#login").show();
    //    $(".emailLoginError").html("");
    //    $(".passwordLoginError").html("");
    //    $(".emailLogin").css("border","none");
    //    $(".passwordLogin").css("border","none");
    //});
    //$(".signup").click(function(){
    //    $(".form").hide();
    //    $("#sign").show();
    //    $(".emailSignupError").html("");
    //    $(".fNameSignupError").html("");
    //    $(".lNameSignupError").html("");
    //    $(".passSignupError").html("");
    //    $(".confSignupError").html("");
    //    $(".emailSignup").css("border","none");
    //    $(".fNameSignup").css("border","none");
    //    $(".lNameSignup").css("border","none");
    //    $(".passwordSignup").css("border","none");
    //    $(".confirmSignup").css("border","none");
    //});
    //$(".settings").click(function(){
    //    $(".form").hide();
    //    $("#settings").show();
    //});
    //$(".edit").click(function(){
    //    $(".form").hide();
    //    $("#edit").show();
    //    $(".fNameEditError").html("");
    //    $(".lNameEditError").html("");
    //    $(".fNameEdit").css("border","none");
    //    $(".lNameEdit").css("border","none");
    //});
    //$(".editButton").click(function(event){
    //    event.preventDefault();
    //
    //    var fNameEdit = document.querySelector(".fNameEdit");
    //    var lNameEdit = document.querySelector(".lNameEdit");
    //
    //    var editValid = true;
    //
    //    $(".fNameEditError").html("");
    //    $(".lNameEditError").html("");
    //    $(".fNameEdit").css("border","none");
    //    $(".lNameEdit").css("border","none");
    //
    //    if(fNameEdit.value == "" || !isNaN(fNameEdit.value)){
    //        editValid = false;
    //        if(fNameEdit.value == ""){
    //            $(".fNameEditError").html("Please enter in your First Name");
    //            $(".fNameEdit").css("border","2px solid red");
    //        }else if(!isNaN(fNameEdit.value)){
    //            $(".fNameEditError").html("Your First name is not a number");
    //            $(".fNameEdit").css("border","2px solid red");
    //        }
    //    }
    //    if(lNameEdit.value == "" || !isNaN(lNameEdit.value)){
    //        editValid = false;
    //        if(lNameEdit.value == ""){
    //            $(".lNameEditError").html("Please enter in your First Name");
    //            $(".lNameEdit").css("border","2px solid red");
    //        }else if(!isNaN(lNameEdit.value)){
    //            $(".lNameEditError").html("Your First name is not a number");
    //            $(".lNameEdit").css("border","2px solid red");
    //        }
    //    }
    //    if(editValid){
    //        $(".modalBG").css("display","flex");
    //    }
    //});
    //$(".loginButton").click(function(event){
    //    event.preventDefault();
    //
    //    var emailLogin = document.querySelector(".emailLogin");
    //    var passwordLogin = document.querySelector(".passwordLogin");
    //
    //    var str = emailLogin.value;
    //    var strAt = str.indexOf("@");
    //    var strDot = str.indexOf(".",strAt);
    //
    //    var loginValid = true;
    //
    //    $(".emailLoginError").html("");
    //    $(".passLoginError").html("");
    //    $(".emailLogin").css("border","none");
    //    $(".passwordLogin").css("border","none");
    //
    //    if(emailLogin.value == "" || strAt < 0 || strDot < 0){
    //        loginValid = false;
    //        if(emailLogin.value == ""){
    //            $(".emailLogin").css("border","2px solid red");
    //            $(".emailLoginError").html("Please enter a valid email");
    //        }else if(strAt < 0){
    //            $(".emailLogin").css("border","2px solid red");
    //            $(".emailLoginError").html("A valid email must have a @ symbol present");
    //        }else if(strDot < 0){
    //            $(".emailLogin").css("border","2px solid red");
    //            $(".emailLoginError").html("A valid email must have a . after @ symbol present");
    //        }
    //    }
    //    if(passwordLogin.value == "" || passwordLogin.value.length != 8){
    //        loginValid = false;
    //        if(passwordLogin.value == ""){
    //            $(".passwordLogin").html("Please enter in a Password");
    //            $("passwordLogin").css("border","2px solid red");
    //        }else if(passwordLogin.value.length != 8){
    //            $("passwordLogin").html("Your password be 8 character in Length");
    //            $("passwordLogin").css("border","2px solid red");
    //        }
    //    }
    //    if(loginValid){
    //        $(".modalBG").css("display","flex");
    //    }
    //});
    //
    //$(".signUpButton").click(function(event){
    //    event.preventDefault();
    //
    //    var email = document.querySelector(".emailSignup");
    //    var fName = document.querySelector(".fNameSignup");
    //    var lName = document.querySelector(".lNameSignup");
    //    var password = document.querySelector(".passwordSignup");
    //    var confirm = document.querySelector(".confirmSignup");
    //
    //    var str = email.value;
    //    var strAt = str.indexOf("@");
    //    var strDot = str.indexOf(".",strAt);
    //
    //    var signupValid = true;
    //
    //    $(".emailsignupError").html("");
    //    $(".fNameSignupError").html("");
    //    $(".lNameSignupError").html("");
    //    $(".passSignupError").html("");
    //    $(".confSignupError").html("");
    //    $(".emailSignup").css("border","none");
    //    $(".fNameSignup").css("border","none");
    //    $(".lNameSignup").css("border","none");
    //    $(".passwordSignup").css("border","none");
    //    $(".confirmSignup").css("border","none");
    //
    //    if(email.value == "" || strAt < 0 || strDot < 0){
    //        signupValid = false;
    //        if(email.value == ""){
    //            $(".emailSignup").css("border","2px solid red");
    //            $(".emailsignupError").html("Please enter a valid email");
    //        }else if(strAt < 0){
    //            $(".emailSignup").css("border","2px solid red");
    //            $(".emailsignupError").html("A valid email must have a @ symbol present");
    //        }else if(strDot < 0){
    //            $(".emailSignup").css("border","2px solid red");
    //            $(".emailsignupError").html("A valid email must have a . after @ symbol present");
    //        }
    //    }
    //    if(fName.value == "" || !isNaN(fName.value)){
    //        signupValid = false;
    //        if(fName.value == ""){
    //            $(".fNameSignupError").html("Please enter in your First Name");
    //            $(".fNameSignup").css("border","2px solid red");
    //        }else if(!isNaN(fName.value)){
    //            $(".fNameSignupError").html("Your First name is not a number");
    //            $(".fNameSignup").css("border","2px solid red");
    //        }
    //    }
    //    if(lName.value == "" || !isNaN(lName.value)){
    //        signupValid = false;
    //        if(lName.value == ""){
    //            $(".lNameSignupError").html("Please enter in your First Name");
    //            $(".lNameSignup").css("border","2px solid red");
    //        }else if(!isNaN(lName.value)){
    //            $(".lNameSignupError").html("Your First name is not a number");
    //            $(".lNameSignup").css("border","2px solid red");
    //        }
    //    }
    //    if(password.value == "" || password.value.length != 8){
    //        signupValid = false;
    //        if(password.value == ""){
    //            $(".passSignupError").html("Please enter in a Password");
    //            $("passwordSignup").css("border","2px solid red");
    //        }else if(password.value.length != 8){
    //            $("passSignupError").html("Your password be 8 character in Length");
    //            $("passwordSignup").css("border","2px solid red");
    //        }
    //    }
    //    if(confirm.value == "" || confirm.value != password.value || confirm.value.length !=8){
    //        signupValid = false;
    //        if(confirm.value == ""){
    //            $(".confSignupError").html("Please re-enter in your password");
    //            $(".confirmSignup").css("border","2px solid red");
    //        }else if(confirm.value != password.value){
    //            $(".confSignupError").html("Your password should match your password above");
    //            $(".confirmSignup").css("border","2px solid red");
    //        }else if(confirm.value.length !=8){
    //            $(".confSignupError").html("A password should be 8 characters in length");
    //            $(".confirmSignup").css("border","2px solid red");
    //        }
    //    }
    //    if(signupValid){
    //        $(".modalBG").css("display","flex");
    //    }
    //});
    $(".button").click("click", function(event){
        event.preventDefault();
        //references
        var email = document.querySelector(".email");


        //homework Lane_errorCheck
        var mother = document.querySelector(".mother");
        var sister = document.querySelector(".sister");
        var father = document.querySelector(".father");
        var ssn = document.querySelector(".ssn");
        var confirm = document.querySelector(".confirm");
        //fixes @ . with in an email
        var str = email.value;
        var strAt = str.indexOf("@");
        var strDot = str.indexOf(".",strAt);

        //fixes all - / . placed in SSN
        var dash1 = ssn.value.replace("-","");
        ssn.value = dash1;
        var dash2 = ssn.value.replace("-","");
        ssn.value = dash2;
        var slash1 = ssn.value.replace("/","");
        ssn.value = slash1;
        var slash2 = ssn.value.replace("/","");
        ssn.value = slash2;
        var dot1 = ssn.value.replace(".","");
        ssn.value = dot1;
        var dot2 = ssn.value.replace(".","");
        ssn.value = dot2;

        //fixes all - / . placed in confirm SSN
        var dash3 = confirm.value.replace("-","");
        confirm.value = dash3;
        var dash4 = confirm.value.replace("-","");
        confirm.value = dash4;
        var slash3 = confirm.value.replace("/","");
        confirm.value = slash3;
        var slash4 = confirm.value.replace("/","");
        confirm.value = slash4;
        var dot3 = confirm.value.replace(".","");
        confirm.value = dot3;
        var dot4 = confirm.value.replace(".","");
        confirm.value = dot4;

        //determines if validation is succesful or not
        var signupValid = true;

        //clears out all errors and styling after every submit check
        $(".emailError").html("");
        $(".motherError").html("");
        $(".sisterError").html("");
        $(".fatherError").html("");
        $(".ssnError").html("");
        $(".confError").html("");
        $(".email").css("border","none");
        $(".mother").css("border","none");
        $(".sister").css("border","none");
        $(".father").css("border","none");
        $(".ssn").css("border","none");
        $(".confirm").css("border","none");


        //sort multiple problems into one check makes signup variable false and does something specific for specific checks for all inputs
        if(email.value == "" || strAt < 0 || strDot < 0){
            signupValid = false;
            if(email.value == ""){
                $(".email").css("border","2px solid red");
                $(".emailError").html("Please enter a valid email");
            }else if(strAt < 0){
                $(".email").css("border","2px solid red");
                $(".emailError").html("A valid email must have a @ symbol present");
            }else if(strDot < 0){
                $(".email").css("border","2px solid red");
                $(".emailError").html("A valid email must have a . after @ symbol present");
            }
        }
        if(mother.value == "" || !isNaN(mother.value)){
            signupValid = false;
            if(mother.value == ""){
                $(".motherError").html("Please enter in your Mothers Name");
                $(".mother").css("border","2px solid red");
            }else if(!isNaN(mother.value)){
                $(".motherError").html("Your Mothers name is not a number");
                $(".mother").css("border","2px solid red");
            }
        }
        if(sister.value == "" || !isNaN(sister.value)){
            signupValid = false;
            if(sister.value == ""){
                $(".sisterError").html("Please enter in your Sisters Name");
                $(".sister").css("border","2px solid red");
            }else if(!isNaN(sister.value)){
                $(".sisterError").html("Your Sisters name is not a number");
                $(".sister").css("border","2px solid red");
            }
        }
        if (father.value == "" || !isNaN(father.value)){
            signupValid = false;
            if(father.value == ""){
                $(".fatherError").html("Please enter in your Fathers Name");
                $(".father").css("border","  2px solid red");
            }else if(!isNaN(father.value)){
                $(".fatherError").html("Your Fathers name is not a number");
                $(".father").css("border","  2px solid red");
            }
        }
        if(ssn.value == "" || ssn.value.length != 9 || isNaN(ssn.value)){
            signupValid = false;
            if(ssn.value == ""){
                $(".ssnError").html("Please enter in a valid SSN");
                $(".ssn").css("border","2px solid red");
            }else if(ssn.value.length != 9){
                $(".ssnError").html("A SSN should be 9 characters in length");
                $(".ssn").css("border","2px solid red");
            }else if(isNaN(ssn.value)){
                $(".ssnError").html("A SSN is a number");
                $(".ssn").css("border","2px solid red");
            }
        }
        if(confirm.value == "" || ssn.value != confirm.value || confirm.value.length != 9){
            signupValid = false;
            if(ssn.value != confirm.value){
                $(".confirm").css("border","2px solid red");
                $(".confError").html("Your SSN does not match the SSN above");
            }else if(confirm.value == ""){
                $(".confirm").css("border","2px solid red");
                $(".confError").html("Please re-enter your SSN");

            }else if(confirm.value.length != 9){
                $(".confError").html("A SSN should be 9 characters in length");
                $(".confirm").css("border","2px solid red");
            }
        }
        //passed validation displays modal
        if(signupValid){
            $(".modalBG").css("display","flex");
        }
    });
    //click function to exit modal
    $(".modalExit").click(function(){
        $(".modalBG").css("display","none");
    })
}
$(document).ready(function(){
    setBindings()
})