// Theme configuration and management
const themeConfig = {
  // Theme storage key
  STORAGE_KEY: 'portfolio-theme',

  // Available themes
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
  },

  // Default theme
  DEFAULT: 'system',
};

// Theme Manager Class
class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || themeConfig.DEFAULT;
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupMediaQuery();
    this.createThemeToggle();
  }

  getStoredTheme() {
    return localStorage.getItem(themeConfig.STORAGE_KEY);
  }

  setStoredTheme(theme) {
    localStorage.setItem(themeConfig.STORAGE_KEY, theme);
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? themeConfig.THEMES.DARK
      : themeConfig.THEMES.LIGHT;
  }

  getActiveTheme() {
    if (this.currentTheme === themeConfig.THEMES.SYSTEM) {
      return this.getSystemTheme();
    }
    return this.currentTheme;
  }

  applyTheme(theme) {
    const activeTheme = theme === themeConfig.THEMES.SYSTEM 
      ? this.getSystemTheme() 
      : theme;
    
    document.documentElement.setAttribute('data-theme', activeTheme);
    this.updateToggleIcon(theme);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    this.setStoredTheme(theme);
    this.applyTheme(theme);
  }

  toggleTheme() {
    const themes = Object.values(themeConfig.THEMES);
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.setTheme(themes[nextIndex]);
  }

  setupMediaQuery() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      if (this.currentTheme === themeConfig.THEMES.SYSTEM) {
        this.applyTheme(this.currentTheme);
      }
    });
  }

  createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle theme');
    toggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    toggle.addEventListener('click', () => this.toggleTheme());

    // Insert into navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.appendChild(toggle);
    }
  }

  updateToggleIcon(theme) {
    const toggle = document.querySelector('.theme-toggle ion-icon');
    if (!toggle) return;

    const icons = {
      light: 'sunny-outline',
      dark: 'moon-outline',
      system: 'contrast-outline',
    };

    toggle.setAttribute('name', icons[theme] || icons.system);
  }
}

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
  });
} else {
  window.themeManager = new ThemeManager();
}

// Export for use in other files if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ThemeManager, themeConfig };
}
