// home.js

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(img => img.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 10000);
    showSlide(0);
});
