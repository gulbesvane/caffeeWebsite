//This is a function to check if all the required fields of the contact form are filled in. Email format is being validated by HTML5. 
function validateForm(){
    var name = document.getElementById("form-name").value;
    var email = document.getElementById("form-email").value;
    var message = document.getElementById("form-message").value;

    let inputElements = [name, email, message];
    let formFilled = false;
    let fieldsFilled = 0;

    for(i=0; i<inputElements.length; i++){
        if(inputElements[i]==""){
            document.getElementById(`${i}`).style.color = "red";
            document.getElementById(`${i}`).innerHTML=`This field is mandatory`;
            break
        }
        else if(inputElements[i]!=""){
            fieldsFilled++;
            // document.getElementById(`${i}`).style.color = "#242424";
            document.getElementById(`${i}`).innerHTML= "";
        }
        if(fieldsFilled==inputElements.length){
            formFilled= true;
        }
    if(formFilled){
            hideForm();
            showResponse(name);
        }
    }
}

//Hide the form if form has been filled and sent off
function hideForm(){
	document.getElementById("form").style.display = "none";
}

//Style the response text appropriate to the screen size
function showResponse(name){
    let responseStyleDesktop = " text-align: center; padding: 30px; margin: 5vh;"
    let responseStyleSmaller = " text-align: center; padding: 30px; margin: 0;"

    if ( window.innerWidth > 991) {      
        document.getElementById("placeholder-text").style = responseStyleDesktop;
      } 
    else {
        document.getElementById("placeholder-text").style = responseStyleSmaller;
      }
    document.getElementById("placeholder-name").style.textAlign = "center";
    document.getElementById("placeholder-name").innerHTML=`Hi ${name}!`;
    document.getElementById("placeholder-text").innerHTML=`Thank you for your message! <br> We will get in touch with you as soon as possible.`;
}