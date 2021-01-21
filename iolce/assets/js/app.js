"use strict";

// Dark mode 
var button_mobile = document.querySelector(".menu__darkbtn");
button_mobile.addEventListener("click", dark);

var attribute = localStorage.getItem("data-theme");

if (attribute == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");

} else {
    document.documentElement.setAttribute("data-theme", "light");
}

function dark() {
    var update = document.documentElement.getAttribute("data-theme");
    if (update == "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
        button_mobile.innerHTML = "Dark mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
        button_mobile.innerHTML = "Light mode";
    }
}

// Burger menu 

let navButton = document.querySelector(".menu__burger");
navButton.addEventListener("click", toggleNavigation);

function toggleNavigation() {
    if (document.body.hasAttribute("data-menu")) {
        document.body.removeAttribute("data-menu");
    } else {
        document.body.setAttribute("data-menu", true);
    }
}

// Inject year in copyright

let year = new Date().getFullYear();
document.querySelector(".copyright").innerHTML = "Aude Schaff © " + year + "-" + (year + 1);



/*

let btnAdd = document.querySelector(".time");
let btnRem = document.querySelector(".clear");

btnAdd.addEventListener("click", add);
btnRem.addEventListener("click", remove);


function add() {
    let time = new Date();
    let now = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    let element = document.createElement("p");
    element.innerHTML = "Vous avez cliqué sur le bouton à " + now;
    document.body.append(element);
}

function remove() {
    let el = document.querySelector("p");
    el.remove();
};
*/