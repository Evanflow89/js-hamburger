const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const hamburgerMenu = document.getElementById("hamburgerM")

openMenu.addEventListener("click", function () {
    hamburgerMenu.style.display = "block";

});


closeMenu.addEventListener("click", function () {
    hamburgerMenu.style.display = "none";

});
