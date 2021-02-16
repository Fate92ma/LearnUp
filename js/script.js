$(document).ready(function () { // Start Coding Here

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Menu

    $(".container section").css("top", $("header").innerHeight());

    $(".menu").click(function () {
        $(".container section").toggleClass("list__view");
        $(".container section nav, .container section div").toggleClass("nav__view");
    });

    // On Scroll

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 400) {
            $("header").addClass("shadow");
            $(".top i").fadeIn();

        } else {
            $("header").removeClass("shadow");
            $(".top i").fadeOut();
        }

    });

    // Smooth Scroll

    $('.container section nav a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Home

    $("#home").css("paddingTop", $("header").innerHeight());

    // Courses

    $('#mixedSlider').multislider({
        duration: 1000,
        interval: 3000
    });

    // Adjust Elements to the same height

    var maxHeight = 0;

    $(".ms-item figure").each(function () {

        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }

    });

    $(".ms-item figure").height(maxHeight);

    // Back to top

    $('.top i').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

}); // End Code

// Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}