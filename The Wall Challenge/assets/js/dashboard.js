var post_element_selected   = ""; /*Set variable for post element*/
var replied_post_button     = ""; /*Set variable for post button*/

document.addEventListener("click", function(event){
    (event.target && event.target.classList == "reply_post") ? event.target.closest(".delete_reply_container").nextElementSibling.classList.toggle("hidden") : ""; /*This function opens the selected reply input if clicked*/
    (event.target && event.target.classList == "delete_post") ? event.target.closest("li").remove() : ""; /*Delete or remove the selected post or reply*/
    (event.target && event.target.classList == "submit_reply_button") ? sendMessage(event.target) : ""; /*This function triggers the and validates the reply and post input and submits the form when succeeded*/
});

document.getElementById("submit_reply_form").addEventListener("submit", function(event){
    event.preventDefault();
    submitPostForm(post_element_selected, replied_post_button, this);
});

/*
    DOCU: This function triggers the and validates the reply and post input and submits the form when succeeded
    *Triggered: (event.target && event.target.classList == "submit_reply_button") ? sendMessage(event.target) : "";
    *Last Updated Date: October 30, 2022
    *@Author: Stan Bernie Nudo
*/
function sendMessage(reply_button){
    let reply_textarea = reply_button.previousElementSibling;
    if(reply_textarea.value.trim("").length){ /*validates reply and post input*/
        reply_textarea.classList.remove("input_error");

        post_element_selected = reply_textarea;
        replied_post_button = reply_button.getAttribute("id");

        document.getElementById("submit_post_button").click(); /*Triggers submit when reply or post input is ok*/
    }else{
        reply_textarea.classList.add("input_error");
    }
}

/*
    DOCU: This submits the post and reply form
    *Triggered: document.getElementById("submit_reply_form").addEventListener("submit", function(event){
    *Last Updated Date: October 30, 2022
    *@Author: Stan Bernie Nudo
*/
function submitPostForm(post_element, post_buton_id, post_form){
    let cloned_post = document.getElementById("clone_post").cloneNode(true);
    let post_value_container = document.createElement("p");
    let post_name_container = document.createElement("span");

    post_value_container.textContent = post_element.value;
    post_name_container.textContent = (post_buton_id) ? "Posted By: Anonymous" : "Replied By: Anonymous";
    cloned_post.prepend(post_name_container);
    cloned_post.prepend(post_value_container);
    cloned_post.id = new Date().getTime();

    if(post_buton_id){ /*If post button reply has id of post_button append it post thread else on reply thread*/
        document.getElementById("post_message_list").append(cloned_post);
    }else{
        post_element.closest(".reply_input_container").nextElementSibling.append(cloned_post);
        post_element.closest(".reply_input_container").classList.add("hidden");
    }

    /*Reset forms and global variables*/
    post_element.value      = "";
    post_element_selected   = "";
    replied_post_button     = "";
    post_form.reset();
}