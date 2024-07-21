

   // Smooth scroll for navigation links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Basic form validation
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    var form = e.target;
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      alert('Please fill out all required fields correctly.');
    }
    form.classList.add('was-validated');
  });
  