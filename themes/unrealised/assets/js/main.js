// SW.JS PGA
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(function(registration) {
            //console.log('Service Worker Registered');
        });

    navigator.serviceWorker
        .ready
        .then(function(registration) {
            //console.log('Service Worker Ready');
    });
}

// Netlify AJAX Forms
if(document.querySelector("form")){
    const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('contactform');
    let formcontainer = document.getElementById('contactformcontainer');
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => formcontainer.innerHTML = ":)").catch((error) =>
        alert(error))
    }

    document.querySelector("form").addEventListener("submit", handleSubmit);
}

// Navigation tab
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("tabbed");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
}

// Hamburg menu
// var menuVisible = false; 
// function hamburgMenu() {
//     var x = document.getElementById("navigation-menu");

//     if (! menuVisible) {
//         x.classList.remove("hidden"); 
//     } else {
//         x.classList.add("hidden");
//     }

//     menuVisible = !menuVisible;
// }

// // Main menu change in colour
// // var homeImg = document.querySelector("#home-img");
// // var windowHeight = window.innerHeight;

// // if(homeImg){
// //     document.addEventListener("scroll", getScrollPosition);

// //     function getScrollPosition(){
// //         var sectionPosition = homeImg.getBoundingClientRect();
// //         var positionTop = sectionPosition.top * -1 + 30;
    
// //         if(positionTop > windowHeight){
// //             document.getElementById("site-logo").style.color = "#000";
// //             document.getElementById("search-toggler").style.stroke = "#000";
// //             document.getElementById("menu-toggler").style.stroke = "#000";
// //             document.getElementById("dark-mode-toggler").style.stroke = "#000";
// //             document.getElementById("searchInput").style.color = "#000";
// //             document.getElementById("searchResults").style.color = "#000";
// //         }else{
// //             document.getElementById("site-logo").style.color = "#fff";
// //             document.getElementById("search-toggler").style.stroke = "#fff";
// //             document.getElementById("menu-toggler").style.stroke = "#fff";
// //             document.getElementById("dark-mode-toggler").style.stroke = "#fff";
// //             document.getElementById("searchInput").style.color = "#fff"
// //             document.getElementById("searchResults").style.color = "#fff"
// //         }
// //     }
// // }

// // Skill tree
// var techStacks = document.getElementsByClassName("tech");
// var techStackName = document.getElementById("stack-name");
// var techStackExplanation = document.getElementById("stack-explanation");
// var techStackExplanations = {
//     "ubuntu": "Ubuntu: Linux Server",
//     "windows": "Windows Server", 
//     "mysql": "MySQL", 
//     "mssql": "Microsoft SQL Server (MSSQL)",
//     "html": "HTML", 
//     "css": "CSS",
//     "js": "JavaScript (JS)", 
//     "php": "PHP", 
//     "python": "Python", 
//     "bootstrap": "Bootstrap",
//     "tailwind": "Tailwind",
//     "alpinejs": "AlpineJS", 
//     "vuejs": "VueJS",
//     "jquery": "JQuery",
//     "wordpress": "Wordpress",
//     "laravel": "Laravel",
//     "flask": "Flask:",
//     "hugo": "Hugo (Static Site Generation)",
//     "godot": "Godot",
//     "rstudio": "R/RStudio"
// };
// var techStackBranch = {
//     "ubuntu": ["mysql", "php", "python"],
//     "windows": ["mssql", "php", "python"],
//     "mysql": ["ubuntu", "php", "python"],
//     "mssql": ["windows", "php", "python"],
//     "css": ["tailwind", "bootstrap"],
//     "js": ["alpinejs", "vuejs", "jquery"],
//     "php": ["ubuntu", "windows", "mysql", "mssql", "wordpress", "laravel"],
//     "python": ["ubuntu", "windows", "mysql", "mssql", "flask"],
//     "tailwind": ["css"],
//     "bootstrap": ["css"],
//     "alpinejs": ["js"],
//     "vuejs": ["js"],
//     "jquery": ["js"],
//     "wordpress": ["ubuntu", "windows", "mysql", "php"],
//     "laravel": ["ubuntu", "windows", "mysql", "mssql", "php"],
//     "flask": ["ubuntu", "mysql", "mssql", "python"],
//     "hugo": ["html", "css", "js"]
// }
// var previousStack;

// // Add the event listeners for the stacks
// for (var i = 0; i < techStacks.length; i++) {
//     techStacks[i].addEventListener('click', getTechStacks);
//     techStacks[i].addEventListener('mouseenter', getTechStacks);
// }

// function getTechStacks (){
//     // Get the id
//     id = techStackExplanations[this.id];

//     // Branching style stacks
//     var stackBranches = techStackBranch[this.id];

//     if(previousStack && previousStack[0] !== this.id){
//         for(var i=0; i < previousStack.length; i++){
//             document.getElementById(previousStack[i]).style = null;
//         }
//     }

//     if(stackBranches){ // Get related stacks
//         var currentStack = [this.id];
//         for(var i=0; i < stackBranches.length; i++){
//             currentStack.push(stackBranches[i]);
//             document.getElementById(stackBranches[i]).style.opacity=100;
//         }
//     }

//     if(currentStack == null){ // Get 
//         currentStack = [this.id];
//     }

//     this.style.opacity = 100;

//     previousStack = currentStack;
    
//     // Change the explanation of the stack
//     techStackName.innerHTML = id;
    
// }

// window.addEventListener('keydown', function(event) {
//     if ((event.code === 80 || event.code === "KeyP")&& (event.ctrlKey || event.metaKey) && !event.altKey && (!event.shiftKey || window.chrome || window.opera)) {
//         // event.preventDefault();
//         window.location.replace("http://www.w3schools.com");
//         console.log("pressed");
//         return;
//     }
// }, true);