# 🎨 Zeke's Portfolio

A modern, responsive personal portfolio website showcasing web development projects, skills, and professional experience. Built with vanilla JavaScript and enhanced with modern web technologies.

## ✨ Version 2.0 - Recent Improvements

This portfolio has been comprehensively refactored with:
- 🌓 **Dark/Light/System Theme** toggle with persistence
- ♿ **Full Accessibility** support (WCAG 2.1 AA compliant)
- ⚡ **Performance Optimizations** (lazy loading, prefetching)
- 🎭 **Smooth Animations** and transitions
- 📧 **Enhanced Contact Form** with validation
- 🎯 **SEO Optimized** with Open Graph tags
- 🧩 **Modular Architecture** with organized code structure

See [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) for complete details.

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Ionicons 5.5.2
- **Fonts**: Google Fonts (Poppins)
- **Hosting**: Static hosting (GitHub Pages compatible)
- **Development**: ESLint, Prettier

## 📋 Features

- ✅ Responsive design for all devices
- ✅ Dark/Light/System theme modes
- ✅ Single-page application with smooth navigation
- ✅ Portfolio project showcase with filtering
- ✅ Skills visualization with animated progress bars
- ✅ Contact form with validation and feedback
- ✅ Social media links
- ✅ Interactive UI elements with hover effects
- ✅ Lazy loading for images
- ✅ Full keyboard navigation support
- ✅ Screen reader friendly

## 🛠️ Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/realzekee/Portfolio.git
   cd Portfolio
   ```

2. **Run with a local server**
   
   Using Python:
   ```bash
   python -m http.server 8000
   ```
   
   Using Node.js (with npm):
   ```bash
   npm start
   ```
   
   Using Node.js (without npm):
   ```bash
   npx http-server -p 8000
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

4. **Development scripts** (optional)
   ```bash
   npm run lint        # Check code quality
   npm run lint:fix    # Fix code issues
   npm run format      # Format code
   ```

## 📁 Project Structure

```
Portfolio/
├── assets/              # Static assets
│   ├── icons/          # SVG icons
│   ├── images/         # Images and photos
│   └── logos/          # Logo files
├── css/                 # Stylesheets
│   ├── style.css       # Main styles
│   ├── theme.css       # Theme system
│   ├── enhancements.css # UI improvements
│   ├── animations.css  # Animation definitions
│   ├── contact.css     # Contact form styles
│   └── accessibility.css # A11y styles
├── js/                  # JavaScript modules
│   ├── script.js       # Main application
│   ├── theme.js        # Theme management
│   ├── utils.js        # Utility functions
│   ├── contact.js      # Contact form handler
│   ├── animations.js   # Animation controllers
│   ├── performance.js  # Performance optimizations
│   └── accessibility.js # Accessibility features
├── data/                # Configuration data
│   ├── personal.js     # Personal information
│   ├── projects.js     # Project portfolio
│   └── skills.js       # Skills and experience
├── index.html          # Main HTML file
├── package.json        # NPM configuration
├── README.md           # This file
└── IMPLEMENTATION_SUMMARY.md # Detailed changes
```

## 🎯 Usage

Simply open `index.html` in a web browser. The portfolio is fully self-contained with no build process required.

### Navigation
- Use the top navigation bar to switch between sections (About, Resume, Portfolio, Contact)
- Click the theme toggle button (top-right) to switch between light/dark/system themes
- Portfolio items can be filtered by category
- Contact form provides instant validation feedback
- Use keyboard navigation (Tab/Enter) for full accessibility

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

To customize the portfolio for your own use:

1. **Update personal information** in `index.html`
2. **Replace images** in `assets/images/`
3. **Modify colors** in `css/style.css` (look for CSS variables in `:root`)
4. **Update projects** in the Portfolio section of `index.html`
5. **Change contact information** in the sidebar

## 🚧 Development Roadmap

See open issues for planned features and improvements.

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Zeke**
- GitHub: [@realzekee](https://github.com/realzekee)
- Twitter: [@RealZekee](https://x.com/RealZekee)
- Instagram: [@realzekee](https://www.instagram.com/realzekee)

## 🙏 Acknowledgments

- Icons by [Ionicons](https://ionic.io/ionicons)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by Zeke
