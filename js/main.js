var openNav = document.querySelector(".open_menu");
var closeNav = document.querySelector(".close_menu");
var navBar = document.querySelector(".nav_links");

openNav.addEventListener("click", () => {
    openNav.style.display = "none";
    closeNav.style.display = "block";
    navBar.style.opacity = "1";
    navBar.style.visibility = "visible";
    navBar.style.right = "-20px";
});

closeNav.addEventListener("click", () => {
    openNav.style.display = "block";
    closeNav.style.display = "none";
    navBar.style.opacity = "0";
    navBar.style.visibility = "hidden";
    navBar.style.right = "-50px";
});