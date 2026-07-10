// Solstice Advisory — site interactions
document.addEventListener('DOMContentLoaded', () => {
  /* Mobile nav toggle */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav after a link is chosen
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* FAQ accordion — only one panel open at a time */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* Contact form — front-end validation + submit feedback */
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = 'Please fill in every required field before sending.';
        status.dataset.state = 'error';
        return;
      }

      const name = form.querySelector('#name').value.trim();

      status.textContent = `Thanks, ${name.split(' ')[0]} — your message has been received. We'll reply within one business day.`;
      status.dataset.state = 'success';
      form.reset();
    });
  }

  /* Footer year */
  const yearEl = document.querySelector('#current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
