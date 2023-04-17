/*
    Student Name: Andrew Wilks
    File Name: script.js
    Date: April 10, 2023
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("h-menu-links");
    var logo = document.getElementById("logo-title");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}
