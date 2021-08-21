"use strict"

const Beez = (function () {
    const data = {};

    const events = {};

    const methods = {};

    const initialize = function () {};

    return {init: initialize};
})();

document.addEventListener('DOMContentLoaded', function () {
    Beez.init();

}, false);

window.addEventListener('load', () => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        drag: false,
        mouseDrag: false,
        pullDrag: false,
        touchDrag: false,
        responsiveClass: true,
        autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});

function despliegue(id) {
    setTimeout(() => {
        document
            .getElementById(id)
            .scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }, 500);
}

let animation_nav = document.querySelector('.menu-fixed');
let animation_start = document.querySelector('.start');

function showScroll() {
    let scrollTop = document.documentElement.scrollTop;

    let height_animation = animation_start.offsetTop;
    if (height_animation < scrollTop) {
        animation_nav.style.opacity = 1;
    } else {
        animation_nav.style.opacity = 0;
    }
}

window.addEventListener('scroll', showScroll);

$(document).ready(function () {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash)
                .offset()
                .top
        }, 500, "linear");
    });
});

// get video element id
var vidClip1 = document.getElementById("videoCap1");
var vidClip2 = document.getElementById("videoCap2");
var vidClip3 = document.getElementById("videoCap3");
var vidClip4 = document.getElementById("videoCap4");
var vidClip5 = document.getElementById("videoCap5");
var vidClip6 = document.getElementById("videoCap6");
var vidClip7 = document.getElementById("videoCap7");

// play video event
function playVid1() {
    vidClip1.play();
}

function playVid2() {
    vidClip2.play();
}

function playVid3() {
    vidClip3.play();
}

function playVid4() {
    vidClip4.play();
}

function playVid5() {
    vidClip5.play();
}

function playVid6() {
    vidClip6.play();
}

function playVid7() {
    vidClip7.play();
}

// pause video event
function pauseVid1() {
    vidClip1.pause();
}

function pauseVid2() {
    vidClip2.pause();
}

function pauseVid3() {
    vidClip3.pause();
}

function pauseVid4() {
    vidClip4.pause();
}

function pauseVid5() {
    vidClip5.pause();
}

function pauseVid6() {
    vidClip6.pause();
}

function pauseVid7() {
    vidClip7.pause();
}

// toggle button class on click
$('button').on('click', function () {
    $('.first, .second').toggle();
});

// toggle button class when finished
vidClip1.onended = function (e) {
    $('.first, .second').toggle();
};

vidClip2.onended = function (e) {
    $('.first, .second').toggle();
};

vidClip3.onended = function (e) {
    $('.first, .second').toggle();
};

vidClip4.onended = function (e) {
    $('.first, .second').toggle();
};

vidClip5.onended = function (e) {
    $('.first, .second').toggle();
};

vidClip6.onended = function (e) {
    $('.first, .second').toggle();
};

vidClip7.onended = function (e) {
    $('.first, .second').toggle();
};
