import React, { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and responsive design.',
    tech: ['React', 'Node.js', 'MongoDB'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.',
    tech: ['Python', 'React', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts.',
    tech: ['JavaScript', 'API Integration', 'Chart.js'],
    liveLink: '#',
    githubLink: '#'
  }
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card fade-in" key={project.id}>
              <div className="project-image">
                {String(project.id).padStart(2, '0')}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">
                    VIEW PROJECT →
                  </a>
                  <a href={project.githubLink} className="project-link">
                    GITHUB →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
