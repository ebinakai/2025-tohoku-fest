"use strict";

document.addEventListener("DOMContentLoaded", function () {
    console.debug("DOM fully loaded and parsed");
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.2,
        spaceBetween: 16,
        autoplay: false,
        loop: false,
        breakpoints: {
            320: {
                width: 280,
            },
            480: {
                width: 320,
            },
            640: {
                width: 480,
            },
            800: {
                width: 640,
            },
            1024: {
                width: 800,
            },
        },
    });

    const dialog = document.getElementById("modal-box");
    const img = document.getElementById("modal-image");
    dialog.addEventListener("click", (e) => {
        const rect = img.getBoundingClientRect();
        const clickedOutsideImage =
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom;

        if (clickedOutsideImage) {
            dialog.close();
        }
    });

    document.querySelectorAll(".zoomable").forEach((element) => {
        element.addEventListener("click", (e) => {
            console.debug("Zoomable image clicked");
            e.preventDefault();
            const src = element.getAttribute("data-large-src") || element.src;
            img.src = src;
            dialog.showModal();
        });
    });
});