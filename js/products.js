// Show "Page Up" button when user scrolls down
const pageUpBtn = document.getElementById("pageUpBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    pageUpBtn.style.display = "block";
  } else {
    pageUpBtn.style.display = "none";
  }
};

// Scroll to top when button clicked
pageUpBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
