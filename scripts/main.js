var slides = document.querySelectorAll(".slideshow > div");
var ref = document.querySelectorAll("a");

var currentIndex = 0;
var maxIndex = slides.length - 1;

function hide(id1, id2) {
    var a = document.getElementById(id1);
    var b = document.getElementById(id2);
    a.style.display = "none";
    b.classList.add("active");
    a.classList.remove("active");
    a.classList.add("removed");
}

