import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center relative z-10 px-[5%]">
      <div className="text-center">
        <div className="text-base font-light tracking-[3px] uppercase mb-4 text-gray-400">
          Software Developer
        </div>
        <h1 className="font-display text-7xl font-bold mb-6 leading-tight text-black dark:text-white">
          Richard Mai
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[600px] mx-auto mb-12">
          Building elegant solutions with clean code. Specializing in automation, bot, 
          website and mobile app development for iOS and Android. Lifelong student in 
          exploring technologies.
        </p>
        <div className="flex gap-6 justify-center">
          <a 
            href="/resume.pdf"
            download="Richard_Mai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 no-underline font-medium transition-all duration-300 text-base tracking-wider border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-transparent hover:text-black dark:hover:bg-transparent dark:hover:text-white"
          >
            Download CV
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 no-underline font-medium transition-all duration-300 text-base tracking-wider border-2 border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
