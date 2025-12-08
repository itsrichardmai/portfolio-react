import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-subtitle">Software Developer</div>
        <h1 className="hero-title">Richard Mai</h1>
        <p className="hero-description">
          Building elegant solutions with clean code. Specializing in automation tasks, 
          Telegram/Discord bot development, website development, and mobile app development 
          for iOS & Android.
        </p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
