
// add sticky nav
const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

// close hamburger menu
function hideMenu(){
let menuOpen = document.querySelector('#check').checked;

if(menuOpen = true){
  document.querySelector('#check').checked = false;
  }
}

window.addEventListener("scroll", hideMenu);
