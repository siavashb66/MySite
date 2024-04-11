// Scroll to top button

var mybutton = document.getElementById("scrollToTopBtn");
var lastScrollTop = 0;

window.onscroll = function() {
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 1000) {
    if (scrollTop > lastScrollTop){
      // downscroll code
      mybutton.style.display = "none";
    } else {
      // upscroll code
      mybutton.style.display = "block";
    }
  } else {
    mybutton.style.display = "none";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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
