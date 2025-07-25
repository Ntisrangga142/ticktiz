
const form = document.querySelector("form");
const email = form.querySelector("#email");
const pass  = form.querySelector("#pass");

const emailRegex = /^.+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s]).{8,}$/;

function setLocal(newEmail, newPass){
    const newUser = { email: newEmail, pass: newPass };
    localStorage.setItem("User", JSON.stringify(newUser));
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (passRegex.test(pass.value) && emailRegex.test(email.value)) {
        setLocal(email.value, pass.value)
        window.location.href = "./login.html";
    } else {
        alert("Email tidak valid dan Password");
    }

    }
);
