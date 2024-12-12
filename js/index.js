const swiper = new Swiper('.swiper-container', {
  loop: true, // Infinite loop
  autoplay: {
    delay: 3000, // Change slides every 3 seconds
    disableOnInteraction: false, // Continue autoplay after user interaction
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send the data to a server or perform other actions
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  fetch('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    // Handle response
    console.log('Form submitted successfully');
  })
  .catch(error => {
    // Handle errors
    console.error('Error submitting form:', error);
  });

  // Reset the form
  form.reset();
});

// JavaScript to toggle the menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
