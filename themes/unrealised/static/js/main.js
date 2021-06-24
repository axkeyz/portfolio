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

var homeImg = document.querySelector("#home-img");
var windowHeight = window.innerHeight;

if(homeImg){
    document.addEventListener("scroll", getScrollPosition);

    function getScrollPosition(){
        var sectionPosition = homeImg.getBoundingClientRect();
        var positionTop = sectionPosition.top * -1 + 30;
    
        if(positionTop > windowHeight){
            document.getElementById("site-logo").style.color = "#000";
            document.getElementById("search-toggler").style.stroke = "#000";
            document.getElementById("menu-toggler").style.stroke = "#000";
            document.getElementById("dark-mode-toggler").style.stroke = "#000";
            document.getElementById("searchInput").style.color = "#000";
            document.getElementById("searchResults").style.color = "#000";
        }else{
            document.getElementById("site-logo").style.color = "#fff";
            document.getElementById("search-toggler").style.stroke = "#fff";
            document.getElementById("menu-toggler").style.stroke = "#fff";
            document.getElementById("dark-mode-toggler").style.stroke = "#fff";
            document.getElementById("searchInput").style.color = "#fff"
            document.getElementById("searchResults").style.color = "#fff"
        }
    
        // document.querySelector(".svgClass").getSVGDocument().getElementById("search-toggler").setAttribute("fill", "red")
    }
}
