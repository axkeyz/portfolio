// Hamburg menu
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

// Main menu change in colour
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

// Skill tree
function run (){

    var div = document.createElement("div");  //create new div
    div.classList.add("col-span-4");
    div.innerHTML = "Backend";
    // div.addEventListener("click", run);       //bind click to new div
    this.appendChild(div);                    //append the new div to clicked div
    this.classList.remove("col-span-4");
    this.classList.add("col-span-1");
    // this.removeEventListener("click", run);   //remove the original click event
    
  }
document.getElementById("skill-tree").addEventListener("click", run);  //bind the initial click event