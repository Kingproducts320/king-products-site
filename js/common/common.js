// common.js



// Hamburger menu toggle for small screens
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Hide Header on Scroll Down, Show on Scroll Up
let lastScrollY = window.scrollY;
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.top = '-100px'; // hide
    } else {
        // Scrolling up
        header.style.top = '0'; // show
    }
    lastScrollY = window.scrollY;
});
