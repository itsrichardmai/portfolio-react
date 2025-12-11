import React, { useEffect, useRef } from 'react';

const experienceData = [
  {
    date: '2021 - Present',
    title: 'Software Developer',
    company: 'Freelancer | Self-Employed',
    description: 'Developed and maintained full-stack applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  },
  {
    date: '2022 - 2025',
    title: 'Software Engineer Entry-> Junior -> Mid-Level',
    company: 'Duba Company llc',
    description: 'Architected and implemented full‑stack web applications and scalable hosting for 25+ restaurant locations, improving system availability to 99.9% and reducing deployment time by 70% through automated infrastructure and centralized data management.'
  },
  {
    date: '2020 - 2021',
    title: 'Software Development Intern',
    company: 'Pennsylvannian National Scholars Program',
    description: 'Assisted in developing web applications, learned industry best practices, and gained hands-on experience with modern development tools. Contributed to team projects and enhanced coding skills through mentorship and collaboration.' 
  }
];

const Experience = () => {
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
      id="experience" 
      ref={sectionRef}
      className="relative z-10 min-h-auto flex items-center justify-center px-[5%] py-24"
    >
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="font-display text-5xl mb-12 text-center text-black dark:text-white opacity-0 translate-y-8 transition-all duration-700 fade-in">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-[1px] bg-black dark:bg-gray-800"></div>
          
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="mb-12 pl-12 relative opacity-0 translate-x-8 transition-all duration-700 fade-in"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-4px] top-0 w-[9px] h-[9px] rounded-full bg-black dark:bg-white"></div>
              
              <div className="text-gray-600 dark:text-gray-400 text-sm mb-2 tracking-widest">{exp.date}</div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{exp.title}</h3>
              <div className="text-gray-600 dark:text-gray-400 mb-4 italic">{exp.company}</div>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;