// Show button when scrolling down
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top when button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("scrollTopBtn");
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
document.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Zombie movement on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const zombie = document.getElementById('zombie');
  const offset = scrollY * 0.05; 

  zombie.style.transform = `translateY(-${offset}px) translateX(${Math.sin(scrollY * 0.01) * 10}px)`;
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const menu = document.getElementById("main-menu");
  const logoArea = document.getElementById("logo-area");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
  const isMenuOpen = menu.classList.toggle("show");

  if (isMenuOpen) {
    logoArea.classList.add("hidden-logo");
  } else {
    logoArea.classList.remove("hidden-logo");
  }
});
  }
});