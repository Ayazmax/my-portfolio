# Mohomed Ayaz - Portfolio

A modern, interactive portfolio website built with React, featuring smooth animations and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean and professional design with gradient backgrounds and glass effects
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Performance Optimized**: Fast loading times and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Styled Components** - CSS-in-JS for component styling
- **Framer Motion** - Animation library for smooth transitions
- **React Icons** - Beautiful icon library
- **React Intersection Observer** - For scroll-based animations

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Hero section with animated text
│   ├── About.js           # About section with stats
│   ├── Skills.js          # Skills and expertise
│   ├── Projects.js        # Project showcase
│   ├── Experience.js      # Work experience timeline
│   ├── Contact.js         # Contact form and info
│   ├── Footer.js          # Footer with social links
│   └── LoadingScreen.js   # Initial loading screen
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient combinations throughout the site
- **Glass Morphism**: Modern glass effect on cards and navigation
- **Smooth Transitions**: Elegant animations between sections
- **Interactive Cards**: Hover effects and animations on project cards
- **Timeline Design**: Professional experience timeline layout
- **Skill Progress Bars**: Animated skill proficiency indicators

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mohomed-ayaz-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- **Hero Section** (`src/components/Hero.js`): Update name, titles, and description
- **About Section** (`src/components/About.js`): Update bio, stats, and personal details
- **Skills Section** (`src/components/Skills.js`): Update skills and proficiency levels
- **Projects Section** (`src/components/Projects.js`): Add your own projects
- **Experience Section** (`src/components/Experience.js`): Update work experience
- **Contact Section** (`src/components/Contact.js`): Update contact information

### Adding Your Profile Image

1. **Prepare your image**: 
   - Remove the white background (make it transparent)
   - Save as PNG format
   - Recommended size: 300x300 pixels or larger

2. **Add to project**:
   - Place your image in the `public` folder
   - Name it `mohomed-ayaz-profile.png`
   - The image will automatically appear in the About section

3. **Alternative naming**: If you prefer a different filename, update the `src` attribute in `src/components/About.js`:
   ```jsx
   <ProfileImage 
     src="/your-image-name.png" 
     alt="Mohomed Ayaz - Software Engineer"
   />
   ```

### Styling

The project uses CSS custom properties for easy theming. Update the variables in `src/index.css`:

```css
:root {
  --primary-color: #8b5cf6;
  --secondary-color: #f59e0b;
  --accent-color: #10b981;
  /* ... other variables */
}
```

### Images

Replace placeholder images with your own:
- Profile photo in the About section (see instructions above)
- Project screenshots in the Projects section
- Add your own images to the `public` folder

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Responsive navigation with hamburger menu
- Adaptive layouts for different screen sizes
- Touch-friendly interactive elements

## 🎯 Performance

- Optimized bundle size
- Lazy loading for better performance
- Smooth scrolling and animations
- Efficient re-renders with React hooks

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Mohomed Ayaz - contact@mohomedayaz.com

Project Link: [https://github.com/yourusername/mohomed-ayaz-portfolio](https://github.com/yourusername/mohomed-ayaz-portfolio)

---

Made with ❤️ by Mohomed Ayaz 