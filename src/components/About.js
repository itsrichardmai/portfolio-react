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
              }, index * 150);
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
      id="about" 
      ref={sectionRef}
      className="relative z-10 min-h-screen flex items-center justify-center px-[5%] py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="font-display text-5xl mb-12 text-center text-white opacity-0 translate-y-8 transition-all duration-700 fade-in">
          About Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="opacity-0 translate-y-8 transition-all duration-700 fade-in">
            <p className="mb-6 text-gray-400 text-lg leading-relaxed">
              I am software engineer specializing in automation tasks, bot development, 
              website development and mobile development (iOS & Android). My approach combines 
              technical expertise with practical solutions that streamline workflows and 
              enhance user experiences. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying current with emerging 
              technologies. From building custom bots to crafting responsive web applications, 
              I deliver solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 fade-in">
            <div className="text-center p-8 border border-gray-800 transition-all duration-300 hover:-translate-y-2 bg-black/50 backdrop-blur-sm hover:bg-white/5 group">
              <div className="font-display text-4xl font-bold mb-2 text-white group-hover:text-white transition-colors">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors">Projects</div>
            </div>
            <div className="text-center p-8 border border-gray-800 transition-all duration-300 hover:-translate-y-2 bg-black/50 backdrop-blur-sm hover:bg-white/5 group">
              <div className="font-display text-4xl font-bold mb-2 text-white group-hover:text-white transition-colors">14</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors">Technologies</div>
            </div>
            <div className="text-center p-8 border border-gray-800 transition-all duration-300 hover:-translate-y-2 bg-black/50 backdrop-blur-sm hover:bg-white/5 group">
              <div className="font-display text-4xl font-bold mb-2 text-white group-hover:text-white transition-colors">5+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider group-hover:text-gray-300 transition-colors">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
