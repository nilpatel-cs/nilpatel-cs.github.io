//script code for navigation menu
/*menu logic*/
var script = document.createElement('script');
script.src = "//code.jquery.com/jquery-3.5.1.slim.min.js";
script.type = 'text/javascript';




var menu = document.querySelector(".menu-btn");
menu.addEventListener("click", () => menu.classList.contains("active") ? closeMenu() : openMenu());
closeMenu();


/* Open when someone clicks on the span element */
function openMenu() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menu").style.height = "100%";
    menu.classList.add("active");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeMenu() {
   
    document.getElementById("menu").style.width = "0%";
    document.getElementById("menu").style.height = "0%";
    menu.classList.remove("active");
}

/*modal code*/ 

var email = document.getElementById("email");
var tooltip = document.getElementById("tooltip");

email.addEventListener("mouseover", function () {
    tooltip.style.visibility = "visible";
});
email.addEventListener("mouseleave", function () {
    tooltip.style.visibility = "hidden";
    tooltip.innerHTML = "Click to copy email!";
});
email.addEventListener("click", function () {
    var promise = navigator.clipboard.writeText("nilpatel.cs@gmail.com");
    promise.then(
        function () {
            tooltip.innerHTML = "Copied!";
        },
        function () {
            tooltip.innerHTML = "Cannot copy, please copy manually";
            email.style.cursor = "text";
        }
    );
});

