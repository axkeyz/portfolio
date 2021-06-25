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
    }
}

// Skill tree
var techStacks = document.getElementsByClassName("tech");
var techStackName = document.getElementById("stack-name");
var techStackExplanation = document.getElementById("stack-explanation");
var techStackExplanations = {
    "ubuntu": ["Ubuntu: Linux Server", ["Apache", "Networking", "Windows Subsystem for Linux (WSL)"]],
    "windows": ["Windows Server", ["Networking/Web Config"]],
    "mysql": ["MySQL", ["API Integration", "Backups", "Relationships", "Scheduling", "Structured Query"]],
    "mssql": ["Microsoft SQL Server (MSSQL)", ["API Integration", "Backups", "Relationships", "Scheduling", "Structured Query"]],
    "html": ["HTML", ["Dynamic & Static", "Speed & Optimisation", "SEO", "Website"]],
    "css": ["CSS", ["Bootstrap", "Tailwind"]],
    "js": ["JavaScript (JS)", ["AlpineJS", "AJAX", "JQuery", "Library Integration", "Vanilla", "VueJS"]],
    "php": ["PHP", ["API", "Backend", "CMS", "Laravel", "Wordpress", "Object-Orientated Programming (OOP)"]],
    "python": ["Python", ["API", "Backend", "Flask", "Object-Orientated Programming (OOP)"]],
    "bootstrap": ["Bootstrap: A CSS Framework"],
    "tailwind": ["Tailwind: A CSS Framework"],
    "alpinejs": ["AlpineJS: A Frontend JS Framework", ["API Integration", "DOM", "Other Library Integration"]],
    "vuejs": ["VueJS: A Frontend JS Framework", ["API integration", "DOM", "Other Library Integration"]],
    "jquery": ["JQuery", ["AJAX", "DOM"]],
    "wordpress": ["Wordpress: A CMS built with PHP", ["API Integration", "Plugin Development", "Theme Development", "Woocommerce"]],
    "laravel": ["Laravel: A PHP Framework", ["API Integration", "Blade Templating", "Livewire (AJAX)", "Custom CMS"]],
    "flask": ["Flask: A Python-based Microframework", ["API Integration", "Blueprints", "Scaling"]],
    "hugo": ["Hugo: Static Site Generation", ["Theme Development"]],
    "godot": ["Godot: An Awesome Open Source Game Engine", ["Used to develop my 2D games"]],
    "rstudio": ["R/RStudio: Statistical Software"]
};
var techStackBranch = {
    "css": ["tailwind", "bootstrap"],
    "js": ["alpinejs", "vuejs", "jquery"],
    "php": ["wordpress", "laravel"],
    "python": ["flask"],
    "tailwind": ["css"],
    "bootstrap": ["css"],
    "alpinejs": ["js"],
    "vuejs": ["js"],
    "jquery": ["js"],
    "wordpress": ["php"],
    "laravel": ["php"],
    "flask": ["python"],
}
var previousStack;

// Add the event listeners for the stacks
for (var i = 0; i < techStacks.length; i++) {
    techStacks[i].addEventListener('click', getTechStacks);
    techStacks[i].addEventListener('mouseenter', getTechStacks);
}

function getTechStacks (){
    // Get the id
    id = techStackExplanations[this.id];

    // Branching style stacks
    var stackBranches = techStackBranch[this.id];

    if(previousStack && previousStack[0] !== this.id){
        for(var i=0; i < previousStack.length; i++){
            document.getElementById(previousStack[i]).style = null;
        }
    }

    if(stackBranches){ // Get related stacks
        var currentStack = [this.id];
        for(var i=0; i < stackBranches.length; i++){
            currentStack.push(stackBranches[i]);
            document.getElementById(stackBranches[i]).style.opacity=100;
        }
    }

    if(currentStack == null){ // Get 
        currentStack = [this.id];
    }

    this.style.opacity = 100;

    previousStack = currentStack;
    
    // Change the explanation of the stack
    techStackName.innerHTML = id[0];

    if(id[1]){
        techStackExplanation.innerHTML = "&#68177; ";
        for(var i=0; i < id[1].length; i++){
            techStackExplanation.innerHTML += id[1][i] + " &#68177; ";
        }
    }else{
        techStackExplanation.innerHTML = null;
    }
    
}

window.addEventListener('keydown', function(event) {
    if ((event.code === 80 || event.code === "KeyP")&& (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)) {
        // event.preventDefault();
        console.log("pressed");
        return;
    }
}, true);