// Performance optimizations

/**
 * Preload critical resources
 */
const preloadCriticalResources = () => {
  // Preload critical fonts
  const fonts = [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
  ];

  fonts.forEach((font) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = font;
    document.head.appendChild(link);
  });
};

/**
 * Defer non-critical CSS
 */
const deferNonCriticalCSS = () => {
  const links = document.querySelectorAll('link[rel="stylesheet"][data-defer]');
  links.forEach((link) => {
    link.media = 'print';
    link.onload = function () {
      this.media = 'all';
    };
  });
};

/**
 * Optimize third-party scripts
 */
const optimizeThirdPartyScripts = () => {
  // Add intersection observer for iframes (like maps)
  const iframes = document.querySelectorAll('iframe[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const iframeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          if (iframe.dataset.src) {
            iframe.src = iframe.dataset.src;
            iframe.removeAttribute('data-src');
          }
          iframeObserver.unobserve(iframe);
        }
      });
    });

    iframes.forEach((iframe) => iframeObserver.observe(iframe));
  }
};

/**
 * Add performance marks
 */
const addPerformanceMarks = () => {
  if ('performance' in window && 'mark' in performance) {
    performance.mark('app-init-start');
    
    window.addEventListener('load', () => {
      performance.mark('app-init-end');
      performance.measure('app-init', 'app-init-start', 'app-init-end');
      
      // Log performance metrics
      const perfData = performance.getEntriesByName('app-init')[0];
      if (perfData) {
        console.log(`App initialization took: ${perfData.duration.toFixed(2)}ms`);
      }
    });
  }
};

/**
 * Prefetch important navigation pages
 */
const prefetchPages = () => {
  // Prefetch data files that might be used
  const prefetchUrls = [
    './data/projects.js',
    './data/skills.js',
    './data/personal.js',
  ];

  prefetchUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Service Worker registration (for PWA support - optional)
 */
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Uncomment when service worker is ready
      // navigator.serviceWorker
      //   .register('/sw.js')
      //   .then((registration) => {
      //     console.log('ServiceWorker registered:', registration);
      //   })
      //   .catch((error) => {
      //     console.log('ServiceWorker registration failed:', error);
      //   });
    });
  }
};

/**
 * Monitor connection quality and adjust accordingly
 */
const adaptToConnection = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    
    // Reduce animations on slow connections
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      document.body.classList.add('reduce-motion');
    }
    
    // Listen for connection changes
    connection.addEventListener('change', () => {
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        document.body.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
      }
    });
  }
};

/**
 * Initialize all performance optimizations
 */
const initPerformanceOptimizations = () => {
  preloadCriticalResources();
  deferNonCriticalCSS();
  optimizeThirdPartyScripts();
  addPerformanceMarks();
  prefetchPages();
  registerServiceWorker();
  adaptToConnection();
};

// Run optimizations as early as possible
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPerformanceOptimizations);
} else {
  initPerformanceOptimizations();
}

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    preloadCriticalResources,
    deferNonCriticalCSS,
    optimizeThirdPartyScripts,
    addPerformanceMarks,
    prefetchPages,
    registerServiceWorker,
    adaptToConnection,
  };
}
