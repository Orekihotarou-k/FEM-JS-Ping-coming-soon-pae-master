const form = document.querySelector("form");
const email = document.getElementById("mail");
const errorMessage = document.querySelector(".error-msg");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = email.value;

    if (value === ""){
        email.classList.add("error");
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Whoops! It looks like you forgot to add your email";
    } else {
        validateEmail()
    }
})

function validateEmail(){
    let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(valid)){
        errorMessage.innerHTML = "";
    } else {
        email.classList.add("error");
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Please provide a valid email address";
    }
}





