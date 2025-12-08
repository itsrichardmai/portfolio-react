import React, { useEffect, useRef } from 'react';

const skillsData = [
  'Python',
  'JavaScript',
  'React',
  'Node.js',
  'Java',
  'Git',
  'MongoDB',
  'PostgreSQL',
  'DSA',
  'System Design',
  'HTML',
  'CSS'
];

const Skills = () => {
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
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card fade-in" key={index}>
              <div className="skill-name">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
