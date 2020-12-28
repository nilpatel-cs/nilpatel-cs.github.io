var script = document.createElement('script');
script.src = "//code.jquery.com/jquery-3.5.1.slim.min.js";
script.type = 'text/javascript';
const left = document.getElementById("leftArrow");
const right = document.getElementById("rightArrow");
var i = 0;
var path = new Array();
path[0] = "images/certificates/coursera.jpg";
path[1] = "images/certificates/coursera1.jpg";
path[2] = "images/certificates/coursera2.jpg";
path[3] = "images/certificates/coursera3.jpg";
path[4] = "images/certificates/coursera4.jpg"; 
path[5] = "images/certificates/hackerrank.png";
path[6] = "images/certificates/hackerrank1.png";

const certificate = document.getElementById("certificates");
const mobileCertificate = document.getElementById("mobileCertificates"); 


function nextImage() {
    if (i < path.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
        mobileCertificate.src = path[i];
        certificate.src=path[i];
}

setInterval(nextImage, 5000);

certificate.addEventListener("mouseenter", function (event) {
    left.style.visibility = "visible";
    right.style.visibility = "visible";
});

certificate.addEventListener("mouseleave", function (event) {
    left.style.visibility = "hidden";
    right.style.visibility = "hidden";
});

left.addEventListener("mouseenter", function (event) {
    left.style.visibility = "visible";
    right.style.visibility = "visible";
    left.style.opacity = ".8";

});
right.addEventListener("mouseenter", function (event) {
    left.style.visibility = "visible";
    right.style.visibility = "visible";
    right.style.opacity = ".8";
});
left.addEventListener("mouseleave", function (event) {
    left.style.opacity = ".3";
    left.style.visibility = "hidden";
    right.style.visibility = "hidden";
});
right.addEventListener("mouseleave", function (event) {
    right.style.opacity = ".3";
    left.style.visibility = "hidden";
    right.style.visibility = "hidden";
});

left.addEventListener("click", function (event) {
    if (i - 1 >= 0) {
        i -= 1;
    }
    else {
        i = path.length - 1;
    }
    certificate.src = path[i];    
});
right.addEventListener("click", function (event) {

    if (i + 1 <= path.length-1) {
        i +=1 ;
    }
    else {
        i = 0;
    }
    certificate.src = path[i];    
});