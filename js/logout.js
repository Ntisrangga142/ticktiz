const logOut = document.querySelector(".log-out");

logOut.addEventListener("click", function ()  {
    localStorage.removeItem('User');
    window.location.href = "../index.html";

}
)

document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.dropdown > button');
    const menu = document.querySelector('.dropdown-menu');


    function toggleMenu () {
            menu.classList.toggle('hidden');
        }
        // Event listener untuk hamburger button
        button.addEventListener('click', function(e) {
            toggleMenu();
        });

        // Tutup menu saat klik di luar
        document.addEventListener('click', function(e) {
            if (!button.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
}   

);