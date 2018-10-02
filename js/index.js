$(document).ready(function () {
    $('.review').slick({
        speed: '600',
        autoplay: 'true',
        autoplaySpeed: '6000',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    var buttons = document.getElementsByClassName("card__buy-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", popupShow);
    }
});

function scrollToWomen() {
    $(window).scrollTo($("#women"), 500, {
        offset: {
            top: -$(".nav-section").height(),
            left: -0
        }
    });
}

function scrollToMen() {
    $(window).scrollTo($("#men"), 500, {
        offset: {
            top: -$(".nav-section").height(),
            left: -0
        }
    });
}

function scrollToBackpacks() {
    $(window).scrollTo($("#backpacks"), 500, {
        offset: {
            top: -$(".nav-section").height(),
            left: -0
        }
    });
}

function scrollToReviews() {
    $(window).scrollTo($("#reviews"), 500, {
        offset: {
            top: -$(".nav-section").height(),
            left: -0
        }
    });
}

function popupShow() {
    $(".popup-screen").toggleClass("hide");
}
