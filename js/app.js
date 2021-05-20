let index = 0;
const customerNames = ["Sarah", "Z", "Esther", "Sandra"];
const customerTestimonials = [
    'Janice is awesome. Janice is awesome. Janice is awesome. Janice is awesome. Janice is awesome. Janice is awesome. Janice is awesome.',
    'Andrea rocks. Andrea rocks. Andrea rocks. Andrea rocks. Andrea rocks. Andrea rocks.',
    'Rhonda is awesome. Rhonda is awesome. Rhonda is awesome. Rhonda is awesome. Rhonda is awesome. Rhonda is awesome. Rhonda is awesome. Rhonda is awesome.',
    'Semra rocks. Semra rocks. Semra rocks. Semra rocks. Semra rocks. Semra rocks. Semra rocks. Semra rocks.'
];
const customerCount = customerNames.length - 1;

// Run this function after the page is loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello, webpage!");
    document.getElementById("customer-name").textContent = customerNames[index];
    document.getElementById("customer-text").textContent = customerTestimonials[index];
    
    
});

function prevButton() {
    if (index == 0) index = customerCount;
    else index--;
    document.getElementById("customer-name").textContent = customerNames[index];
    document.getElementById("customer-text").textContent = customerTestimonials[index];
    document.getElementById("customer-img").setAttribute("src", './img/customer-' + index + '.jpg');
}

function nextButton() {
    if (index == customerCount) index = 0;
    else index++;
    document.getElementById("customer-name").textContent = customerNames[index];
    document.getElementById("customer-text").textContent = customerTestimonials[index];
    document.getElementById("customer-img").setAttribute("src", './img/customer-' + index + '.jpg');
}


var menu = document.querySelector(".menu")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".xIcon")
var menuIcon = document.querySelector(".menuIcon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)