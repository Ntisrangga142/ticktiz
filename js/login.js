const form = document.querySelector("form");
const email = form.querySelector("#email");
const pass  = form.querySelector("#pass");

const emailRegex = /^.+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s]).{8,}$/;


function getLocal(){
    const dataJson = localStorage.getItem("User");
    return JSON.parse(dataJson);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("Email:", email.value);
    console.log("Pass:", pass.value);

    if (!passRegex.test(pass.value) && !emailRegex.test(email.value)) {
        alert("Email tidak valid dan Password");
        return;
    }

    const data = getLocal();

    if ( data.email === email.value && data.pass === pass.value) {
        window.location.href = "./profile.html";
        return;
    } else {
        alert('User not found!')
    }

    }
);
