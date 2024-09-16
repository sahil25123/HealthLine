// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
  
    hamburgerMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburgerMenu.classList.toggle('active');
    });
  });
  