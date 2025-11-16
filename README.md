# Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and contact information.

## 🚀 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid
- **JavaScript (ES6+)** - Vanilla JS for interactions
- **Ionicons** - Icon library

## 📁 Project Structure

```
Portfolio/
├── assets/
│   ├── icons/          # SVG icons for services
│   ├── images/         # Portfolio images and avatars
│   └── logos/          # Site branding assets
├── css/
│   └── style.css       # Main stylesheet with CSS variables
├── js/
│   └── script.js       # Interactive functionality
└── index.html          # Main HTML file
```

## 🎨 Features

- **Responsive Design** - Optimized for all device sizes
- **Single Page Application** - Smooth navigation between sections
- **Project Filtering** - Filter portfolio projects by category
- **Contact Form** - Integrated contact form
- **Mobile-Friendly** - Collapsible sidebar for mobile devices

## 🛠️ Setup & Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Running Locally

#### Option 1: Using Python

```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

Then open `http://localhost:8080` in your browser.

#### Option 2: Using Node.js

```bash
npx http-server -p 8080
```

#### Option 3: Using VS Code Live Server

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Direct File Access

You can also open `index.html` directly in your browser, though some features may require a web server.

## 📝 Customization

### Updating Personal Information

Edit `index.html` to update:
- Name and title in the sidebar
- Contact information (email, phone, location)
- Social media links
- About me section
- Skills and percentages
- Projects and links

### Changing Colors

Edit CSS custom properties in `css/style.css`:

```css
:root {
  --orange-yellow-crayola: hsl(45, 100%, 72%);
  --vegas-gold: hsl(45, 54%, 58%);
  /* Add your custom colors */
}
```

### Adding New Projects

Add project items in the portfolio section:

```html
<li class="project-item" data-filter-item data-category="web development">
  <a href="YOUR_PROJECT_URL" target="_blank">
    <h3 class="project-title">Project Name</h3>
    <p class="project-category">Category</p>
  </a>
</li>
```

## 🌐 Sections

1. **About** - Introduction and services offered
2. **Resume** - Education, experience, and skills
3. **Portfolio** - Project showcase with filtering
4. **Contact** - Location map and contact form

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use.

## 📄 License

Copyright © 2025 Zeke. All rights reserved.

## 🔗 Links

- **GitHub:** [realzekee](https://github.com/realzekee)
- **Twitter:** [@RealZekee](https://x.com/RealZekee)
- **Instagram:** [@realzekee](https://www.instagram.com/realzekee)

## 🐛 Known Issues

- Contact form currently redirects to Google Forms
- No dark/light theme toggle (planned)
- Images are not optimized (WebP conversion planned)

## 🎯 Planned Improvements

- [ ] Dark/Light theme toggle
- [ ] Enhanced SEO metadata
- [ ] Image lazy loading
- [ ] Performance optimizations
- [ ] Project modal previews
- [ ] Typing animations
- [ ] Analytics integration
