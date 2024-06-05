// Scroll to top button

const scrollToTopBtn = document.getElementById("scrollToTopBtn");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const shouldShowButton = scrollTop > 1000 && scrollTop < lastScrollTop;

  scrollToTopBtn.style.display = shouldShowButton ? "block" : "none";

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

scrollToTopBtn.addEventListener("click", scrollToTop);

// Lazy loading Off-screen Images

const images = document.querySelectorAll(".lazy");

const options = {
  root: null, // Observe the entire viewport
  threshold: 0.1, // Load image when 50% or more is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      image.src = image.dataset.src;
      image.classList.remove("lazy"); // Optional: remove the lazy class
      observer.unobserve(image); // Stop observing the loaded image
    }
  });
});

images.forEach(image => observer.observe(image));

// Rotates Element
const rotateLogo = document.getElementById('rotate-logo');

function logoRotate() {
  const degrees = 360;
  const currentRotation = rotateLogo.style.transform? parseFloat(rotateLogo.style.transform.match(/-?\d+/)) : 0;
  const newRotation = currentRotation <= 3600? degrees + currentRotation : 0;
  rotateLogo.style.transform = `rotate(${newRotation}deg)`;
};

rotateLogo.addEventListener("click", logoRotate);

