
// change nav display

function showLinks() {
  var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickNav()};

// Get the navbar
var navbar = document.getElementById("myLinks");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {  
  if (window.pageYOffset >= sticky) {   
    navbar.classList.add("sticky") 
  } else {   
    navbar.classList.remove("sticky"); 
  }
}
