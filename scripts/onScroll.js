// On scroll change navbar colour

function changeNavColour() {
    var navbar = document.getElementById("full-nav");
    var sticky = navbar.offsetTop;
    // if y coordinate is more than location of navbar+30 pixels, then add sticky class to navbar
    if (window.pageYOffset > (sticky+30)) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
}	

window.addEventListener("scroll", () => { 
    changeNavColour();
  });
