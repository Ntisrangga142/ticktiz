const logOut = document.querySelector(".dropdown-menu > div:nth-child(1) > button");

logOut.addEventListener("click", function ()  {
    localStorage.removeItem('User');
    window.location.href = "../index.html";

}
)