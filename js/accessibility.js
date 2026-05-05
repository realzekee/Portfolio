// Accessibility enhancements

/**
 * Keyboard navigation helper
 */
class KeyboardNavigationHelper {
  constructor() {
    this.focusableElements = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    
    this.init();
  }

  init() {
    this.addEscapeKeyHandler();
    this.addTabTrapForModals();
    this.addSkipLinks();
  }

  addEscapeKeyHandler() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close modals
        const activeModal = document.querySelector('.modal-container.active');
        if (activeModal) {
          const closeBtn = activeModal.querySelector('[data-modal-close-btn]');
          if (closeBtn) closeBtn.click();
        }

        // Close sidebar on mobile
        const activeSidebar = document.querySelector('.sidebar.active');
        if (activeSidebar && window.innerWidth < 1024) {
          const sidebarBtn = document.querySelector('[data-sidebar-btn]');
          if (sidebarBtn) sidebarBtn.click();
        }

        // Close select dropdown
        const activeSelect = document.querySelector('[data-select].active');
        if (activeSelect) {
          activeSelect.classList.remove('active');
        }
      }
    });
  }

  addTabTrapForModals() {
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      const activeModal = document.querySelector('.modal-container.active');
      if (!activeModal) return;

      const focusableContent = activeModal.querySelectorAll(this.focusableElements);
      const firstFocusable = focusableContent[0];
      const lastFocusable = focusableContent[focusableContent.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    });
  }

  addSkipLinks() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
}

/**
 * ARIA live region announcer
 */
class AriaAnnouncer {
  constructor() {
    this.createLiveRegion();
  }

  createLiveRegion() {
    if (document.getElementById('aria-live-region')) return;

    const liveRegion = document.createElement('div');
    liveRegion.id = 'aria-live-region';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
  }

  announce(message, priority = 'polite') {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
      liveRegion.setAttribute('aria-live', priority);
      liveRegion.textContent = '';
      setTimeout(() => {
        liveRegion.textContent = message;
      }, 100);
    }
  }
}

/**
 * Focus management
 */
class FocusManager {
  constructor() {
    this.lastFocusedElement = null;
    this.init();
  }

  init() {
    this.trackFocus();
    this.addFocusStyles();
  }

  trackFocus() {
    document.addEventListener('focus', (e) => {
      this.lastFocusedElement = e.target;
    }, true);
  }

  addFocusStyles() {
    // Add visible focus indicator
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    });

    document.addEventListener('mousedown', () => {
      document.body.classList.remove('user-is-tabbing');
    });
  }

  saveFocus() {
    this.savedFocus = document.activeElement;
  }

  restoreFocus() {
    if (this.savedFocus) {
      this.savedFocus.focus();
    }
  }
}

/**
 * Color contrast checker (for development)
 */
class ContrastChecker {
  checkContrast(foreground, background) {
    const getLuminance = (color) => {
      const rgb = color.match(/\d+/g).map(Number);
      const [r, g, b] = rgb.map((val) => {
        val = val / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return {
      ratio: ratio.toFixed(2),
      passAAA: ratio >= 7,
      passAA: ratio >= 4.5,
      passAALarge: ratio >= 3,
    };
  }
}

/**
 * Initialize accessibility features
 */
const initAccessibility = () => {
  window.keyboardNav = new KeyboardNavigationHelper();
  window.ariaAnnouncer = new AriaAnnouncer();
  window.focusManager = new FocusManager();

  // Add accessibility attributes to dynamic content
  enhanceAccessibility();
};

/**
 * Enhance accessibility of existing elements
 */
const enhanceAccessibility = () => {
  // Add ARIA labels to buttons without text
  document.querySelectorAll('button:not([aria-label])').forEach((btn) => {
    if (!btn.textContent.trim()) {
      const icon = btn.querySelector('ion-icon');
      if (icon) {
        const iconName = icon.getAttribute('name');
        btn.setAttribute('aria-label', iconName.replace('-outline', '').replace('-', ' '));
      }
    }
  });

  // Add role to navigation
  const navbar = document.querySelector('.navbar');
  if (navbar && !navbar.getAttribute('role')) {
    navbar.setAttribute('role', 'navigation');
    navbar.setAttribute('aria-label', 'Main navigation');
  }

  // Add landmarks
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && !sidebar.getAttribute('role')) {
    sidebar.setAttribute('role', 'complementary');
    sidebar.setAttribute('aria-label', 'Profile information');
  }

  // Add main landmark
  const mainContent = document.querySelector('.main-content');
  if (mainContent && !mainContent.getAttribute('id')) {
    mainContent.setAttribute('id', 'main-content');
    mainContent.setAttribute('role', 'main');
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccessibility);
} else {
  initAccessibility();
}

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    KeyboardNavigationHelper,
    AriaAnnouncer,
    FocusManager,
    ContrastChecker,
  };
}
