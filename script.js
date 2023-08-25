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
        showModal('Thank you for your message!', 'success');
        console.log('SUCCESS!');
      }, function(error) {
        showModal('Something went wrong.. Try again', 'error');
        console.log('FAILED...', error);
      });
      
    });
    });

    function showModal(message, type) {
      const modal = document.getElementById('contact-modal');
      const modalText = document.getElementById('modal-text');
    
      modalText.textContent = message;

      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    }

    $(document).ready(function() {
      $('.close').click(function() {
        $('#contact-modal').modal('hide'); 
      });
    });

    