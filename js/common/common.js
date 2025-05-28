// common.js

// Language toggle function
function toggleLanguage() {
    const isChecked = document.getElementById('langToggle').checked;
    console.log("Language toggle clicked. Checked:", isChecked);

    if (isChecked) {
        window.location.href = 'home_si.html';
    } else {
        window.location.href = 'index.html';
    }
}

// Hamburger menu toggle for small screens
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}
4