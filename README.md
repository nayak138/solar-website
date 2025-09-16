# SolarTech - Solar Energy Website

A modern, responsive website for a solar energy company built with pure HTML, CSS, and JavaScript. Perfect for GitHub Pages hosting.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, mobile navigation
- **Contact Form**: Functional contact form with validation
- **SEO Friendly**: Semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript
- **GitHub Pages Ready**: No build process required

## Sections

- **Hero Section**: Eye-catching introduction with key statistics
- **Services**: Residential solar, commercial solar, and energy storage
- **Benefits**: Why choose solar energy
- **Testimonials**: Customer reviews and ratings
- **Contact**: Contact form and company information
- **Footer**: Links and social media

## Getting Started

### Option 1: Download and Use Locally

1. Download the ZIP file from v0
2. Extract the files to your desired directory
3. Open `index.html` in your web browser

### Option 2: GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 3: Using GitHub CLI

\`\`\`bash
# Create a new repository
gh repo create solar-website --public

# Clone the repository
git clone https://github.com/yourusername/solar-website.git
cd solar-website

# Add your files and commit
git add .
git commit -m "Initial commit: Solar website"
git push origin main

# Enable GitHub Pages
gh api repos/:owner/:repo/pages -X POST -f source.branch=main -f source.path=/
\`\`\`

## Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization. Edit the `:root` section in `styles.css`:

\`\`\`css
:root {
  --primary: #059669;      /* Main brand color */
  --secondary: #10b981;    /* Accent color */
  --foreground: #475569;   /* Text color */
  --background: #ffffff;   /* Background color */
  /* ... other variables */
}
\`\`\`

### Content
- Edit `index.html` to update text content, images, and contact information
- Replace placeholder images with your own solar panel photos
- Update company name, contact details, and social media links

### Fonts
The website uses Google Fonts (Space Grotesk and DM Sans). To change fonts:
1. Update the Google Fonts link in the `<head>` section
2. Update the font-family declarations in CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images with placeholder system
- Minimal JavaScript for fast loading
- CSS animations for smooth interactions
- Responsive images for different screen sizes

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please open an issue in the GitHub repository.
