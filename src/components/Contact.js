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
              }, index * 200);
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
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative z-10 min-h-auto flex items-center justify-center px-[5%] py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl mb-12 text-white opacity-0 translate-y-8 transition-all duration-700 fade-in">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed opacity-0 translate-y-8 transition-all duration-700 fade-in">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out through any of the channels below.
          </p>
          <div className="flex justify-center gap-8 mt-12 opacity-0 translate-y-8 transition-all duration-700 fade-in">
            <a 
              href="#" 
              className="text-white no-underline text-lg tracking-widest transition-all duration-300 hover:opacity-60 hover:-translate-y-1"
            >
              EMAIL
            </a>
            <a 
              href="https://github.com/itsrichardmai" 
              className="text-white no-underline text-lg tracking-widest transition-all duration-300 hover:opacity-60 hover:-translate-y-1"
            >
              GITHUB
            </a>
            <a 
              href="#" 
              className="text-white no-underline text-lg tracking-widest transition-all duration-300 hover:opacity-60 hover:-translate-y-1"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
