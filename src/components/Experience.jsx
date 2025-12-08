import React, { useEffect, useRef } from 'react';

const experienceData = [
  {
    date: '2022 - Present',
    title: 'Software Developer',
    company: 'Tech Solutions Inc.',
    description: 'Developed and maintained full-stack applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.'
  },
  {
    date: '2021 - 2022',
    title: 'Junior Developer',
    company: 'Digital Innovations',
    description: 'Contributed to frontend development projects, implemented responsive designs, and participated in code reviews to ensure best practices.'
  },
  {
    date: '2020 - 2021',
    title: 'Software Development Intern',
    company: 'StartUp Labs',
    description: 'Assisted in developing web applications, learned industry best practices, and gained hands-on experience with modern development tools.'
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
    <section id="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Experience</h2>
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div className="timeline-item fade-in" key={index}>
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
