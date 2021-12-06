// On scroll change navbar colour
window.onscroll = function() {changeNavColour()};
var navbar = document.getElementById("full-nav");
var sticky = navbar.offsetTop;

function changeNavColour() {
    if (window.pageYOffset > (sticky+30)) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}		
