var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1 
        },
        640: {
            slidesPerView: 2 
        },
        768: {
            slidesPerView: 3 
        },
        1024: {
            slidesPerView: 4 
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
});

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);