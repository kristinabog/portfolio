document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('about-me-btn');
    const navbar = document.getElementById("navbarNav");

    button.addEventListener('click', () => {
      const target = document.querySelector(button.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });

    document.addEventListener("click", function (event) {
      if (!navbar.contains(event.target)) {
        if (navbar.classList.contains("show")) {
          navbar.classList.remove("show"); 
        }
      }
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