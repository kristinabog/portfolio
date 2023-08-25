document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('about-me-btn');
    const navLinks = document.querySelectorAll(".navbar-nav li a");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarToggler = document.querySelector(".navbar-toggler");

    button.addEventListener('click', () => {
      const target = document.querySelector(button.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });

    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        if (window.innerWidth < 992) {
          navbarCollapse.classList.remove("show");
          navbarToggler.classList.add("collapsed");
        }
      });
    });

    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const serviceID = 'service_43riwii';
      const templateID = 'template_untqwta';
      const publicKey = '0iDmWLq5E7kOFNs_U';
  
      emailjs.init(publicKey);
  
      emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
          console.log('SUCCESS!');
        }, function(error) {
          console.log('FAILED...', error);
        });
    });
    });