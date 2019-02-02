/**
 * Created by Josh Lane on 7/14/2015.
 */

//Getting our References
var formRef = document.querySelector("#myForm");
var txtFirstName = document.querySelector("#firstName");
var txtLastName = document.querySelector("#lastName");
var txtAddress = document.querySelector("#address");
var txtPhone = document.querySelector("#phone");
var txtEmail = document.querySelector("#email");
var txtMessage = document.querySelector("#message");
var txtFeedBack = document.querySelector("#feedBack");
var errorDivs = document.getElementsByClassName("error");
var emailSend = document.querySelector("#send");
var image = document.querySelector("#moveUp");

//Listen for our Form Validation
formRef.addEventListener("submit",onFormSubmit);

function onFormSubmit(event){
 var isValid = true;

 //clear out feedback div
 txtFeedBack.innerHTML = "";


 //clear out error div
 for(var i = 0;i < errorDivs.length;i++){
  errorDivs[i].innerHTML = "";
 };

 //checking for Validity
 //there shouldn't be any empty text fields or letters or numbers where they shouldn't be use...isNaN...
 //First Name
 if(txtFirstName.value == ""|| !isNaN(txtFirstName.value)){
  isValid = false;
  txtFeedBack.innerHTML += "<p>Please enter a valid first name.</p>";
  txtFirstName.nextElementSibling.innerHTML = "Please enter a valid first name.";
 };
 //Last Name
 if(txtLastName.value == "" || !isNaN(txtLastName.value)){
  isValid = false;
  txtFeedBack.innerHTML += "<p>Please enter a valid last name.</p>";
  txtLastName.nextElementSibling.innerHTML = "Please enter a valid last name.";
 };
 //Address
 if(txtAddress.value == ""){
  isValid = false;
  txtFeedBack.innerHTML += "<p>Please enter a valid address.</p>";
  txtAddress.nextElementSibling.innerHTML = "Please enter a valid address.";
 };
 //Phone
 //to fix phone issues regarding special characterization use by users
 //for "-" character
 var dash1 = txtPhone.value.replace("-","");
 txtPhone.value = dash1;
 var dash2 = txtPhone.value.replace("-","");
 txtPhone.value = dash2;
 //for "(" character
 var leftParanthetical = txtPhone.value.replace("(","");
 txtPhone.value = leftParanthetical;
 //for ")" character
 var rightParanthethical = txtPhone.value.replace("(","");
 txtPhone.value = rightParanthethical;
 //for " " character
 var space1 = txtPhone.value.replace(" ","");
 txtPhone.value = space1;
 var space2 = txtPhone.value.replace(" ","");
 txtPhone.value = space2;
 //for . character
 var dot1 = txtPhone.value.replace(".","");
 txtPhone.value = dot1;
 var dot2 = txtPhone.value.replace(".","");
 txtPhone.value = dot2;
 if(txtPhone.value == "" || isNaN(txtPhone.value) || txtPhone.value.length != 10) {
  isValid = false;
  txtFeedBack.innerHTML += "<p>Please enter a valid 10-digit phone number.</p>";
  txtPhone.nextElementSibling.innerHTML = "Please enter a valid 10-digit phone number.";
 }
 //Email
 //str: "example@example.com"

 var str = txtEmail.value;
 var num = str.indexOf("@");
 var num2 = str.indexOf(".",num);
 if(txtEmail.value == "" || !isNaN(txtEmail.value) || num < 0 || num2 < 0){
  isValid = false;
  txtFeedBack.innerHTML += "<p>Please enter a valid email.</p>";
  txtEmail.nextElementSibling.innerHTML = "please enter a valid email."
 }
 //Message
 if(txtMessage.value == "" || !isNaN(txtMessage.value)){
  isValid = false;
  txtFeedBack.innerHTML += "<p>Please er a valid message.</p>";
  txtMessage.nextElementSibling.innerHTML = "Please enter a valid message."
 };

 //stops event from doing what it would normally do
 if(!isValid){
  event.preventDefault();
 };
 if(isValid){
  copier();
 }

};
function copier(){
 var firstName = txtFirstName.value;
 var lastName = txtLastName.value;
 var address = txtAddress.value;
 var phone = txtPhone.value;
 var email = txtEmail.value;
 var message = txtMessage.value;
 emailSend.innerHTML = "<br><p>Please copy and paste the following into outlook email message box and send it to Indy'sAffordableServices@yahoo.com</p><br>"
 emailSend.innerHTML += "First Name: " + firstName + "<br>";
 emailSend.innerHTML += "Last Name: " + lastName + "<br>";
 emailSend.innerHTML += "Address: " + address + "<br>";
 emailSend.innerHTML += "Phone: " + phone + "<br>";
 emailSend.innerHTML += "Email: " + email + "<br>";
 emailSend.innerHTML += "Message: " + message + "<br>";
 emailSend.style.height = 100+ "%";
 emailSend.style.width= 100 + "%";
 image.style.marginTop=  -200 + "px";
}