// assets/js/contact-form.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formContainer = document.querySelector(".contact-form-container");
  const thankYouMessage = document.getElementById("thank-you-message");
  const errorMessage = document.getElementById("error-message");
  
  form.addEventListener("submit", submitFormWithAjax);
  
  function submitFormWithAjax(event) {
    event.preventDefault(); // Prevent default form submission

    // Add blur effect and disable form
    blurForm(true, "Sending...");
    
    // Collect form data
    const formData = new FormData(form);
    
    // Send the form data using fetch API
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse JSON if needed
      } else {
        return response.json().then(data => {
          // Handle specific error messages from Formspree
          const error = data.error || 'Form submission failed';
          throw new Error(error);
        });
      }
    })
    .then(data => {
      // Show thank you message and hide the form
      form.classList.add("hidden");
      thankYouMessage.classList.remove("hidden");
    })
    .catch(error => {
      console.error('Form submission error:', error);
      // Show error message and hide the form
      form.classList.add("hidden");
      errorMessage.classList.remove("hidden");
    });
  }
  
  // Function to add or remove blur effect and disable/enable form
  function blurForm(applyBlur, buttonLabel = "Sending...") {
    if (applyBlur) {
      form.classList.add("blurred");
      const submitButton = form.querySelector(".btn-submit");
      submitButton.textContent = buttonLabel;
      submitButton.disabled = true;
    } else {
      form.classList.remove("blurred");
      const submitButton = form.querySelector(".btn-submit");
      submitButton.textContent = "Send Message";
      submitButton.disabled = false;
    }
  }
  
  // Event listeners for "Send Another Message" and "Try Again" buttons
  thankYouMessage.addEventListener("click", (e) => {
    if (e.target.id === "send-another") {
      resetForm();
    }
  });
  
  errorMessage.addEventListener("click", (e) => {
    if (e.target.id === "try-again") {
      resetForm();
    }
  });
  
  // Function to reset the form to its initial state
  function resetForm() {
    // Hide messages and show the form
    thankYouMessage.classList.add("hidden");
    errorMessage.classList.add("hidden");
    form.classList.remove("hidden");
    
    // Remove blur effect and reset button
    blurForm(false);
    
    // Reset form fields
    form.reset();
  }
});
