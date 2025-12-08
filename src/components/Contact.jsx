import React, { useEffect, useRef } from 'react';

const Contact = () => {
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
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <p className="contact-text fade-in">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to  part of your vision. Feel free to reach out through any of the channels below.
          </p>
          <div className="contact-links fade-in">
            <a href="#" className="contact-link">
              EMAIL
            </a>
            <a href="https://github.com/itsichardmai" className="contact-link">
              GITHUB
            </a>
            <a href="#" className="contact-link">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
