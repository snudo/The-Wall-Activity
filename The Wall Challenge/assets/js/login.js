/*
    *DOCU: This function submits the wall challenge dashboard
    *Triggered: document.getElementById("log_in_form").addEventListener("submit", function(event){
    *Last Updated: October 30, 2022
    *Author: Stan Bernie Nudo
*/
document.getElementById("log_in_form").addEventListener("submit", function(event){
    event.preventDefault();

    let login_form = this;
    let login_form_inputs = login_form.querySelectorAll(".form_inputs");

    /*Loop through login inputs and validate values*/
    for (let index = 0; index < login_form_inputs.length; index++) {
        (!login_form_inputs[index].value.length) ? login_form_inputs[index].classList.add("input_error") : login_form_inputs[index].classList.remove("input_error");
    }

    /*Condition if input are successfully filled up*/
    if(!login_form.querySelectorAll(".input_error").length){
        login_form.reset();
        window.location.href = "/views/dashboard.html"
    }
});