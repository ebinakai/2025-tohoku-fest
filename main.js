"use strict";

document.addEventListener("DOMContentLoaded", function () {
    console.debug("DOM fully loaded and parsed");
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.2,        // 1枚+次の画像が少し見える
        spaceBetween: 16,          // スライド間の余白（px）
        centeredSlides: true,      // 現在のスライドを中央に
        autoplay: false,           // 自動スクロールなし
        loop: false,               // 無限ループもしない
        breakpoints: {
            320: {
                width: 320,
            },
            480: {
                width: 480,
            },
            640: {
                width: 640,
            },
            800: {
                width: 800,
            },
            1024: {
                width: 1024,
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