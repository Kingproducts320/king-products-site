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

// These updates are for work navigation bar in smaller display and windows. These updates are update on 7/19/2025
let prevScrollPos = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  const currentScrollPos = window.scrollY;

  // Always show the header when at top of page
  if (currentScrollPos <= 0) {
    header.style.top = '0';
  }
  // Show header if scrolling up
  else if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  }
  // Hide header if scrolling down
  else {
    header.style.top = `-${header.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
});

