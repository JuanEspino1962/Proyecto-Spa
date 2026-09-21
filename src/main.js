// GlowQueen Application Logic
import './scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });
  }

  // Smooth hover effects for buttons
  const buttons = document.querySelectorAll('button, .btn-book, .btn-signup');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
    });
  });
});
