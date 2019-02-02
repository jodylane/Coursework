/**
 * Created by Josh Lane on 4/10/2015.
 * N221
 */
//get references
var formRef = document.querySelector("#myForm");
var txtFirstName = document.querySelector("#firstName");
var txtLastName = document.querySelector("#lastName");
var txtAddress = document.querySelector("#address");
var txtCity = document.querySelector("#city");
var txtState = document.querySelector("#state");
var txtZip = document.querySelector("#zip");
var txtPhone = document.querySelector("#phone");
var txtEmail = document.querySelector("#email");
var txtFeedBack = document.querySelector("#feedBack");
var errorDivs = document.getElementsByClassName("error");


//listen for form validation.



formRef.addEventListener("submit",onFormSubmit);

function onFormSubmit (event){

    var isValid = true;

    //clear out feedback div
    txtFeedBack.innerHTML = "";

    //clear out error divs
    for(var i = 0;i < errorDivs.length; i++){
        errorDivs[i].innerHTML = "";
    };

    //how to check for validity
    //of course there should be something in the text field
    //also the first name showuld not be a number so in order to check for that use ...isNaN...

    if(txtFirstName.value == "" || !isNaN(txtFirstName.value)){

        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid first name.</p>";
        txtFirstName.nextElementSibling.innerHTML = "please enter a valid first name."
    };
    //Last Name
    if(txtLastName.value == "" || !isNaN(txtLastName.value)){

        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid last name.</p>";
        txtLastName.nextElementSibling.innerHTML = "please enter a valid last name."
    };
    //Address
    if(txtAddress.value == ""){

        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid address.</p>";
        txtAddress.nextElementSibling.innerHTML = "please enter a valid address."
    };
    //City
    if(txtCity.value == "" || !isNaN(txtCity.value)){

        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid city.</p>";
        txtCity.nextElementSibling.innerHTML = "please enter a valid city."
    };
    //State
    if(txtState.value == "" || !isNaN(txtState.value)){

        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid full name of your state.</p>";
        txtState.nextElementSibling.innerHTML = "please enter a valid state."
    };
    //Zip
    if(txtZip.value == "" || isNaN(txtZip.value) || txtZip.value.length != 5){

        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid 5-digit zip code.</p>";
        txtZip.nextElementSibling.innerHTML = "please enter a valid 5-digit zip code."
    };
    //phone
    //fixing Phone
    //for -
    var dash1 = txtPhone.value.replace("-","");
    txtPhone.value = dash1;
    var dash2 = txtPhone.value.replace("-","");
    txtPhone.value = dash2;
    //for(
    var leftP = txtPhone.value.replace("(","");
    txtPhone.value = leftP;
    //for)
    var rightP = txtPhone.value.replace(")","");
    txtPhone.value = rightP;
    //for " "
    var space1 = txtPhone.value.replace(" ","");
    txtPhone.value =space1;
    var space2 = txtPhone.value.replace(" ","");
    txtPhone.value =space2;
    //for .
    var dot1 = txtPhone.value.replace(".","");
    txtPhone.value =dot1;
    var dot2 = txtPhone.value.replace(".","");
    txtPhone.value =dot2;
    if(txtPhone.value == "" || isNaN(txtPhone.value) || txtPhone.value.length != 10){
        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid 10-digit phone number.</p>";
        txtPhone.nextElementSibling.innerHTML = "please enter a valid 10-digit phone number."
    };
    //email
    //str: "example@example.com"

    var str = txtEmail.value;
    var num = str.indexOf("@");
    var num2 = str.indexOf(".",num);

    if(txtEmail.value == "" || !isNaN(txtEmail.value) || num < 0 || num2 < 0){

        isValid = false;
        txtFeedBack.innerHTML += "<p>Please enter a valid email.</p>";
        txtEmail.nextElementSibling.innerHTML = "please enter a valid email."

    };

    //stops the event from doing what ever it does normally
    if(!isValid){
        event.preventDefault();
    };
};