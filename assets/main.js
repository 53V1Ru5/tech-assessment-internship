
// Get references to the form and background elements
const form = document.forms.submitForm;
const container = document.querySelector('.container');

// Function to handle form submission
function validForm(event) {
    // Prevent the form from submitting and page reloading
    event.preventDefault();

    // Remove the background image
    container.style.backgroundImage = 'none';

    // Change the background color to your desired color
    container.style.backgroundColor = '#FF0000'; // Example: changing to red color

    // Perform any additional actions or validations here

    // Submit the form
    form.submit();
}

// Add an event listener to the form's submit event
form.addEventListener('submit', validForm);