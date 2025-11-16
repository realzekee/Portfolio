'use strict';

// Import utility functions (if utils.js is loaded before this script)

// Sidebar functionality
const initSidebar = () => {
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
};

// Testimonials modal functionality
const initTestimonialsModal = () => {
  const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
  const modalContainer = document.querySelector('[data-modal-container]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const overlay = document.querySelector('[data-overlay]');

  if (!modalContainer || !modalCloseBtn || !overlay) return;

  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text]');

  const testimonialsModalFunc = () => {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  // Add click event to all modal items
  testimonialsItem.forEach((item) => {
    item.addEventListener('click', function () {
      const avatar = this.querySelector('[data-testimonials-avatar]');
      const title = this.querySelector('[data-testimonials-title]');
      const text = this.querySelector('[data-testimonials-text]');

      if (avatar && modalImg) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }
      if (title && modalTitle) {
        modalTitle.innerHTML = title.innerHTML;
      }
      if (text && modalText) {
        modalText.innerHTML = text.innerHTML;
      }

      testimonialsModalFunc();
    });
  });

  // Add click event to modal close button and overlay
  modalCloseBtn.addEventListener('click', testimonialsModalFunc);
  overlay.addEventListener('click', testimonialsModalFunc);
};

// Portfolio filter functionality
const initPortfolioFilter = () => {
  const select = document.querySelector('[data-select]');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-selecct-value]');
  const filterBtn = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-filter-item]');

  if (!select || !selectValue) return;

  // Filter function
  const filterFunc = (selectedValue) => {
    filterItems.forEach((item) => {
      if (selectedValue === 'all') {
        item.classList.add('active');
      } else if (selectedValue === item.dataset.category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  // Custom select dropdown
  select.addEventListener('click', function () {
    this.classList.toggle('active');
  });

  // Add event to all select items
  selectItems.forEach((item) => {
    item.addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      select.classList.toggle('active');
      filterFunc(selectedValue);
    });
  });

  // Add event to all filter buttons for large screen
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) {
        lastClickedBtn.classList.remove('active');
      }
      this.classList.add('active');
      lastClickedBtn = this;
    });
  });
};

// Page navigation functionality
const initPageNavigation = () => {
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  navigationLinks.forEach((navLink, navIndex) => {
    navLink.addEventListener('click', function () {
      const clickedPage = this.innerHTML.toLowerCase();

      pages.forEach((page, pageIndex) => {
        if (clickedPage === page.dataset.page) {
          page.classList.add('active');
          navigationLinks[pageIndex].classList.add('active');

          // If the clicked navigation link is "Portfolio", show all projects
          if (clickedPage === 'portfolio') {
            const projectItems = document.querySelectorAll('.project-item');
            projectItems.forEach((item) => item.classList.add('active'));
          }

          // Smooth scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          page.classList.remove('active');
          navigationLinks[pageIndex].classList.remove('active');
        }
      });
    });
  });
};

// Initialize all functionality when DOM is ready
const init = () => {
  initSidebar();
  initTestimonialsModal();
  initPortfolioFilter();
  initPageNavigation();
};

// Run initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}