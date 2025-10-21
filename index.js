// NAVIGATION ---- NAVIGATION

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active', 'bg-blue-600');
    if (link.getAttribute('href').includes(currentPage) || 
        (currentPage === '' && link.getAttribute('data-page') === 'home')) {
      link.classList.add('active', 'bg-blue-600');
    }
  });
}

// Call on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// HEADER ---- HEADER 

// get the time and date as per requirement, add it to the html document
const time = document.getElementById('time')
if (time) {
  const date = Date.now()
  time.innerText = date
}

// FORM VALIDATION ---- FORM VALIDATION

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Validation rules
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    let isValid = true;

    // Clear all error messages
    nameError.textContent = '';
    nameError.classList.add('hidden');
    emailError.textContent = '';
    emailError.classList.add('hidden');
    subjectError.textContent = '';
    subjectError.classList.add('hidden');
    messageError.textContent = '';
    messageError.classList.add('hidden');
    successMessage.classList.add('hidden');

    // Validate Full Name
    if (fullNameInput.value.trim() === '') {
      nameError.textContent = 'Full name is required.';
      nameError.classList.remove('hidden');
      isValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Email is required.';
      emailError.classList.remove('hidden');
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email (e.g., name@example.com).';
      emailError.classList.remove('hidden');
      isValid = false;
    }

    // Validate Subject
    if (subjectInput.value.trim() === '') {
      subjectError.textContent = 'Subject is required.';
      subjectError.classList.remove('hidden');
      isValid = false;
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Message is required.';
      messageError.classList.remove('hidden');
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = 'Message must be at least 10 characters long.';
      messageError.classList.remove('hidden');
      isValid = false;
    }

    return isValid;
  }

  // Handle form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Show success message
      successMessage.classList.remove('hidden');
      
      // Reset form
      contactForm.reset();
      
      // Optional: Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 5000);
    }
  });
}
