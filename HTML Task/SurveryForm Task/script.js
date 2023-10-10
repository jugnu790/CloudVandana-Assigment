// Get the form and popup elements
const form = document.getElementById('survey-form');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup-content');
const popupList = document.querySelector('#popup-list');
const popupClose = document.querySelector('#popup-close');

// Add an event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Validate the form fields
  if (!validateForm()) {
    return;
  }

  // Show the popup
  popup.style.display = 'block';

  // Populate the popup list with the selected values
  popupList.innerHTML = '';
  for (const input of form.elements) {
    if (input.type === 'checkbox') {
      if (input.checked) {
        popupList.innerHTML += `<li>${input.name}: ${input.value}</li>`;
      }
    } else if (input.type !== 'submit' && input.type !== 'reset') {
      popupList.innerHTML += `<li>${input.name}: ${input.value}</li>`;
    }
  }
});

// Add an event listener to the popup close button
popupClose.addEventListener('click', function() {
  // Hide the popup
  popup.style.display = 'none';

  // Reset the form
  form.reset();
});

// Validate the form fields
function validateForm() {
  // Check if all the required fields are filled in
  for (const input of form.elements) {
    if (input.required && input.value === '') {
      alert('Please fill in all the required fields');
      return false;
    }
  }

  // Check if the email address is valid
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailInput = form.querySelector('input[type="email"]');
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address');
    return false;
  }

  // If all the fields are valid, return true
  return true;
}
