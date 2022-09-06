function navigation() {
    var x = document.getElementById("navbar");
    if (x.className === "nav-wrapper") {
      x.className += " responsive";
    } else {
      x.className = "nav-wrapper";
    }
}