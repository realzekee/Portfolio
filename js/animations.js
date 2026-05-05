// Lazy loading for images
class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.config = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01,
    };
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => this.onIntersection(entries),
        this.config
      );
      this.images.forEach((img) => this.observer.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadAllImages();
    }
  }

  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.loadImage(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  loadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;

    img.src = src;
    img.removeAttribute('data-src');
    img.classList.add('loaded');
  }

  loadAllImages() {
    this.images.forEach((img) => this.loadImage(img));
  }
}

// Fade-in animation for elements on scroll
class ScrollAnimations {
  constructor() {
    this.elements = document.querySelectorAll('.animate-on-scroll');
    this.config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => this.onIntersection(entries),
        this.config
      );
      this.elements.forEach((el) => this.observer.observe(el));
    }
  }

  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        this.observer.unobserve(entry.target);
      }
    });
  }
}

// Progress bar animation on scroll
class SkillsAnimator {
  constructor() {
    this.skillBars = document.querySelectorAll('.skill-progress-fill');
    this.config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window && this.skillBars.length > 0) {
      const skillsSection = document.querySelector('.skill');
      if (skillsSection) {
        this.observer = new IntersectionObserver(
          (entries) => this.onIntersection(entries),
          this.config
        );
        this.observer.observe(skillsSection);
      }
    }
  }

  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.animateSkills();
        this.observer.unobserve(entry.target);
      }
    });
  }

  animateSkills() {
    this.skillBars.forEach((bar, index) => {
      setTimeout(() => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 50);
      }, index * 100);
    });
  }
}

// Smooth reveal animation for sections
class SectionReveal {
  constructor() {
    this.sections = document.querySelectorAll('article[data-page]');
    this.init();
  }

  init() {
    // Add initial class to all sections
    this.sections.forEach((section) => {
      if (!section.classList.contains('active')) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
      }
    });

    // Observe for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          this.revealSection(mutation.target);
        }
      });
    });

    this.sections.forEach((section) => {
      observer.observe(section, { attributes: true });
    });
  }

  revealSection(section) {
    if (section.classList.contains('active')) {
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  }
}

// Initialize all animations when DOM is ready
const initAnimations = () => {
  new LazyLoader();
  new ScrollAnimations();
  new SkillsAnimator();
  new SectionReveal();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LazyLoader, ScrollAnimations, SkillsAnimator, SectionReveal };
}
