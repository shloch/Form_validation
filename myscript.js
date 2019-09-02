const form = document.querySelector("#myform");
form.addEventListener("submit", e => {
    const flashDiv = document.querySelector("#flash");
    flashDiv.innerHTML = "GOOD JOB, FORM Valid";
    e.preventDefault();
});

//email

let email = document.getElementById("email");
email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I need an e-mail, BELLAAA");
    } else {
        email.setCustomValidity("");
    }
});

//email confirmation
let email_confirm = document.querySelector("#email2");
email_confirm.addEventListener("input", function(event) {
    if (email_confirm.validity.typeMismatch) {
        email_confirm.setCustomValidity("I need an e-mail, BELLAAA");
    } else if (email.value != email_confirm.value) {
        email_confirm.setCustomValidity("EMAILS must match like ERU, BELLAAA");
    } else {
        email_confirm.setCustomValidity("");
    }
});