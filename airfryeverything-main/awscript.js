/*
    Student Name: Andrew Wilks
    File Name: script.js
    Date: April 10, 2023
*/

//Hamburger menu function
function mainPage() {
    var work = document.getElementById("hideWork");
    var contact = document.getElementById("hideContact")
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}


var about = document.getElementById("hideAbout");
var work = document.getElementById("hideWork");
var hobbies = document.getElementById("hideHobbies");
var contact = document.getElementById("hideContact");

function showAbout() {
    if (about.style.display === "none") {
        about.style.display = "block";
        work.style.display = "none";
        hobbies.style.display = "none";
        contact.style.display = "none";

    } else {
        about.style.display = "none";
    }
}

function showWork() {
    if (work.style.display === "none") {
        work.style.display = "block";
        about.style.display = "none";
        hobbies.style.display = "none";
        contact.style.display = "none";
    } else {
        work.style.display = "none";
    }
}

function showHobbies() {
    if (hobbies.style.display === "none") {
        hobbies.style.display = "block";
        work.style.display = "none";
        about.style.display = "none";
        contact.style.display = "none";
    } else {
        hobbies.style.display = "none";
    }
}

function showContact() {
    if (contact.style.display === "none") {
        contact.style.display = "block";
        work.style.display = "none";
        hobbies.style.display = "none";
        about.style.display = "none";
    } else {
        contact.style.display = "none";
    }
}
