var menuVisible = false; 
function hamburgMenu() {
    var x = document.getElementById("navigation-menu");

    if (! menuVisible) {
        x.classList.remove("hidden"); 
    } else {
        x.classList.add("hidden");
    }

    menuVisible = !menuVisible;
}