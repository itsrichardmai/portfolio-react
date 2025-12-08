import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="about-grid">
          <div className="about-text fade-in">
            <p>
              I'm a software developer specializing in automation tasks, Telegram/Discord 
              bot development, website development, and mobile app development for iOS & Android. 
              My approach combines technical expertise with practical solutions that streamline 
              workflows and enhance user experiences.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying current with emerging 
              technologies. From building custom bots to crafting responsive web applications, 
              I deliver solutions tailored to your specific needs.
            </p>
          </div>
          <div className="stats fade-in">
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">12</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
