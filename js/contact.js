// Contact form handler
class ContactForm {
  constructor() {
    this.form = document.querySelector('[data-form]');
    this.formInputs = document.querySelectorAll('[data-form-input]');
    this.formBtn = document.querySelector('[data-form-btn]');
    
    if (this.form) {
      this.init();
    }
  }

  init() {
    // Add input event listeners
    this.formInputs.forEach(input => {
      input.addEventListener('input', () => this.validateForm());
    });

    // Add submit event listener
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  validateForm() {
    let isValid = true;

    // Check if all required fields are filled
    this.formInputs.forEach(input => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
      }
    });

    // Enable/disable submit button
    if (this.formBtn) {
      this.formBtn.disabled = !isValid;
    }

    return isValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      this.showMessage('Please fill in all required fields.', 'error');
      return;
    }

    // Get form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);

    // Show loading state
    this.setLoading(true);

    try {
      // For now, we'll use Formspree or similar service
      // Replace 'YOUR_FORM_ID' with actual Formspree form ID
      const formAction = this.form.getAttribute('action');
      
      if (formAction && formAction.includes('formspree')) {
        const response = await fetch(formAction, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
          this.form.reset();
          this.formBtn.disabled = true;
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        // Fallback: open mailto link
        const subject = encodeURIComponent('Portfolio Contact Form');
        const body = encodeURIComponent(
          `Name: ${data.fullname}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
        );
        window.location.href = `mailto:realzekee@gmail.com?subject=${subject}&body=${body}`;
        this.showMessage('Opening email client...', 'info');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.showMessage('Failed to send message. Please try again or email directly.', 'error');
    } finally {
      this.setLoading(false);
    }
  }

  setLoading(isLoading) {
    if (this.formBtn) {
      const btnText = this.formBtn.querySelector('span');
      const btnIcon = this.formBtn.querySelector('ion-icon');
      
      if (isLoading) {
        this.formBtn.disabled = true;
        if (btnText) btnText.textContent = 'Sending...';
        if (btnIcon) btnIcon.setAttribute('name', 'hourglass-outline');
      } else {
        if (btnText) btnText.textContent = 'Send Message';
        if (btnIcon) btnIcon.setAttribute('name', 'paper-plane');
      }
    }
  }

  showMessage(message, type = 'info') {
    // Create or get message element
    let messageEl = this.form.querySelector('.form-message');
    
    if (!messageEl) {
      messageEl = document.createElement('div');
      messageEl.className = 'form-message';
      this.form.insertBefore(messageEl, this.formBtn);
    }

    // Set message content and type
    messageEl.textContent = message;
    messageEl.className = `form-message form-message--${type}`;
    messageEl.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
      messageEl.style.display = 'none';
    }, 5000);
  }
}

// Initialize contact form when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
  });
} else {
  new ContactForm();
}

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ContactForm;
}
