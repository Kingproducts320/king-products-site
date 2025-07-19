// common.js

// Hamburger menu toggle
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Header hide on scroll down, show on scroll up
let prevScrollPos = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;

  if (currentScrollPos <= 0) {
    header.style.top = '0';
  } else if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
});
