# Contributing to Portfolio

Thank you for your interest in contributing! This document provides guidelines for contributing to this portfolio project.

## 📋 How to Contribute

### Reporting Issues

- Check if the issue already exists before creating a new one
- Use clear and descriptive titles
- Include screenshots if applicable
- Describe the expected vs actual behavior

### Submitting Changes

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Test your changes locally
5. Commit with clear messages (`git commit -m "Add: feature description"`)
6. Push to your branch (`git push origin feature/your-feature-name`)
7. Open a Pull Request

## 🎨 Code Style

### HTML
- Use semantic HTML5 elements
- Include proper alt text for images
- Keep nesting minimal and readable

### CSS
- Use CSS custom properties (variables) for colors and common values
- Follow existing naming conventions
- Keep selectors specific but not overly complex
- Add comments for complex styles

### JavaScript
- Use modern ES6+ syntax
- Keep functions small and focused
- Add comments for complex logic
- Follow the existing code style

## ✅ Before Submitting

- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices or responsive mode
- [ ] Ensure no console errors
- [ ] Run linters if available (`npm run lint:js`)
- [ ] Format code (`npm run format`)
- [ ] Update documentation if needed

## 🚀 Development Setup

```bash
# Clone the repository
git clone https://github.com/realzekee/Portfolio.git
cd Portfolio

# Start local server
python -m http.server 8080
# or
npm start

# Open in browser
# Navigate to http://localhost:8080
```

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for changes to existing features
- `Remove:` for deleted code/files
- `Docs:` for documentation changes
- `Style:` for formatting changes

Example: `Add: dark mode toggle functionality`

## 🤔 Questions?

Feel free to open an issue for any questions or suggestions!

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
