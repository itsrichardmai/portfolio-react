import React, { useState, useEffect } from 'react';
import './index.css';

import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize dark mode
  useEffect(() => {
    // Add 'dark' class to html for Tailwind dark mode
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    } else {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div 
      className="App" 
      style={{ 
        backgroundColor: theme === 'dark' ? '#000000' : '#ffffff',
        minHeight: '100vh'
      }}
    >
      <ParticleBackground />
      <Navigation toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;