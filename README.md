# Richard Mai - Portfolio (React Version)

A modern, component-based React portfolio with smooth animations and theme toggle.

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.jsx  # Top navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills grid
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Experience.jsx  # Experience timeline
│   │   ├── Contact.jsx     # Contact section
│   │   ├── Footer.jsx      # Footer
│   │   └── ParticleBackground.jsx  # Animated background
│   ├── styles/
│   │   └── App.css         # All CSS styles
│   ├── App.jsx             # Main app component
│   └── index.js            # Entry point
└── package.json            # Dependencies

```

## 🎨 Features

- **Component-Based**: Each section is a separate, reusable component
- **Easy to Edit**: Update content by modifying data arrays in components
- **Smooth Animations**: Fade-in effects with Intersection Observer
- **Theme Toggle**: Dark/Light mode with localStorage persistence
- **Particle Animation**: Interactive background effect
- **Responsive Design**: Works on all devices

## 🚀 Getting Started

### Installation

```bash
cd portfolio-react
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder.

## ✏️ How to Edit Content

### Update Skills

Edit `src/components/Skills.jsx`:

```javascript
const skillsData = [
  'Python',
  'JavaScript',
  // Add or remove skills here
];
```

### Update Projects

Edit `src/components/Projects.jsx`:

```javascript
const projectsData = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    liveLink: 'https://...',
    githubLink: 'https://github.com/...'
  },
  // Add more projects here
];
```

### Update Experience

Edit `src/components/Experience.jsx`:

```javascript
const experienceData = [
  {
    date: '2022 - Present',
    title: 'Your Title',
    company: 'Company Name',
    description: 'Description of your role'
  },
  // Add more experience here
];
```

### Update Contact Info

Edit `src/components/Contact.jsx` and update the email, GitHub, and LinkedIn links.

### Change Colors/Theme

Edit `src/styles/App.css` and modify the CSS variables:

```css
:root {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  /* Modify colors here */
}
```

## 📦 Dependencies

- React 18+
- react-dom

## 🎯 Benefits of React Version

1. **Modular**: Each component is independent
2. **Maintainable**: Easy to find and update specific sections
3. **Scalable**: Add new sections without touching existing code
4. **Data-Driven**: Content separated from presentation
5. **Reusable**: Components can be reused across projects

## 🛠️ Next Steps

- Connect to a CMS (Contentful, Sanity, etc.)
- Add a contact form with backend
- Integrate analytics
- Add more animations
- Deploy to Vercel/Netlify

---

Built with ❤️ using React
