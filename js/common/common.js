// common.js

// Hamburger menu toggle for small screens
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// Hide header on scroll down, show on scroll up
let prevScrollPos = window.scrollY;
const header = document.querySelector('header'); // Use the actual <header> element

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    // Always show header at top
    if (currentScrollPos <= 0) {
        header.style.top = '0';
    }
    // Show header when scrolling up
    else if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
    }
    // Hide header when scrolling down
    else {
        header.style.top = `-${header.offsetHeight}px`;
    }

    prevScrollPos = currentScrollPos;
});
