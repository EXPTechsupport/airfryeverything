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
//When the DOM is ready it will run the "spinpage" funtion
$( document ).ready(function() {
    spinpage()
});

//This is the spinpage funtion
function spinpage(){
    var spin = 0;
//setInterval funtion calls an annomonus funtion which does all the "work"
//"#welcome" calls the div id "welcome"
    var name = setInterval(function () {
        $("#welcome").css({'transform' : 'rotate('+ spin +'deg)'});
        spin += 15;
        if(spin == 360) {
            clearInterval(name);
            spin==0;
            $("#welcome").css({'transform' : 'rotate('+ spin +'deg)'});
        }   
    }, 250);

}
