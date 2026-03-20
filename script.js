// Ensure DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  
  const modal = document.getElementById("languageModal");
  const buttons = document.querySelectorAll(".lang-btn");

  const savedLang = localStorage.getItem("lang");

  if (!savedLang) {
    modal.classList.remove("hidden");
  } else {
    changeLanguage(savedLang);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const lang = this.dataset.lang;
      localStorage.setItem("lang", lang);
      changeLanguage(lang);
      modal.classList.add("hidden");
    });
  }); 
  
  // Elements
  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav'); 

  // Safety: if elements repeated across pages, query first found
  // Toggle mobile nav
  function toggleMobileNav(open) {
    if (!mainNav) return;
    if (open === undefined) mainNav.classList.toggle('mobile-open');
    else if (open) mainNav.classList.add('mobile-open');
    else mainNav.classList.remove('mobile-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      toggleMobileNav();
    });
  }

  // Ensure hamburger visibility initial state
  if (hamburger) hamburger.classList.remove('visible');

  // Close mobile nav on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) toggleMobileNav(false);
  });
  
});
