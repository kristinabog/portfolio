document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('about-me-btn');

    // Scrolling down to the 'about me' section when clicked on about-me-btn
    button.addEventListener('click', () => {
      const target = document.querySelector(button.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
    });