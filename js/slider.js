var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    clearInterval(interval);
    setInt();
};

function currentSlide(n) {
    showSlides(slideIndex = n);
    clearInterval(interval);
    setInt();
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};
var interval;

function setInt() {
    interval = setInterval(function plusSlides() {
        showSlides(slideIndex += 1)
    }, 4000);
};
setInt();

function pres(n) {
    if (n == 1) {
        pic_1.style.display = "block";
    }
    else if (n == 2) {
        pic_2.style.display = "block";
    }
    else if (n == 3) {
        pic_3.style.display = "block";
    }
    else if (n == 4) {
        pic_4.style.display = "block";
    }
    else if (n == 5) {
        pic_5.style.display = "block";
    }
}

function none(n) {
    if (n == 1) {
        pic_1.style.display = "none";
    }
    else if (n == 2) {
        pic_2.style.display = "none";
    }
    else if (n == 3) {
        pic_3.style.display = "none";
    }
    else if (n == 4) {
        pic_4.style.display = "none";
    }
    else if (n == 5) {
        pic_5.style.display = "none";
    }
}