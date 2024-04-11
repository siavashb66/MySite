// Get the button element
const scrollToTopBtn = document.querySelector(".scroll-to-top");

// Function to show/hide the button based on scroll position
window.onscroll = function() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    scrollToTopBtn.classList.remove("d-none");
  } else {
    scrollToTopBtn.classList.add("d-none");
  }
};

// Function to scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
