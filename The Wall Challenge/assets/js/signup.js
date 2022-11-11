document.getElementById("signup_form").addEventListener("submit", submitSignUp); /*This function submits and validates the signup form*/
document.getElementById("confirm_password_input").addEventListener("keyup", function(){ /* This function validates the password confirmation of the signup form*/
    comparePasswordInput(this);
});

/*
    *DOCU: This function validates the password confirmation of the signup form
    *Triggere: document.getElementById("confirm_password_input").addEventListener("keyup", function(){
    *Last Update Date: October 30, 2022 
    *@author: Stan Bernie Nudo
*/
function comparePasswordInput(confirm_password_input){
    (confirm_password_input.value.trim() != document.getElementById("password_input").value.trim() || !confirm_password_input.value.length)
        ? confirm_password_input.classList.add("input_error")
        : confirm_password_input.classList.remove("input_error");
}

/*
    *DOCU: This function submits and validates the signup form
    *Triggere: document.getElementById("signup_form").addEventListener("submit", submitSignUp);
    *Last Update Date: October 30, 2022 
    *@author: Stan Bernie Nudo
*/
function submitSignUp(event){
    event.preventDefault();

    let signup_form = this;
    let signup_form_inputs = signup_form.querySelectorAll(".form_inputs");

    /*Loop through signup inputs and validates the values*/
    for (let index = 0; index < signup_form_inputs.length; index++) {
        (!signup_form_inputs[index].value.length) ? signup_form_inputs[index].classList.add("input_error") : signup_form_inputs[index].classList.remove("input_error");
    }

    comparePasswordInput(signup_form.querySelector("#confirm_password_input"))

    if(!signup_form.querySelectorAll(".input_error").length){
        signup_form.reset();
        window.location.href = "/views/dashboard.html";
    }
}