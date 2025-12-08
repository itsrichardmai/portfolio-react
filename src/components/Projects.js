import React, { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Duba Karaoke SPA',
    description: 'A full-stack React website. The site features a modern black and yellow theme, comprehensive menu system, karaoke room bookings, photo gallery, and email-based reservation system.',
    tech: ['React', 'Node.js', 'ViteJS', 'TailwindCSS', 'GH-Pages'],
    liveLink: 'https://itsrichardmai.github.io/DubaKaraokePub2/',
    githubLink: 'https://github.com/itsrichardmai/DubaKaraokePub2'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and analytics dashboard.',
    tech: ['Python', 'React', 'PostgreSQL'],
    liveLink: 'https://itsrichardmai.github.io/DubaKaraokePub2/',
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
      id="projects" 
      ref={sectionRef}
      className="relative z-10 min-h-auto flex items-center justify-center px-[5%] py-24 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="font-display text-5xl mb-12 text-center text-white opacity-0 translate-y-8 transition-all duration-700 fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group border border-gray-800 overflow-hidden transition-all duration-500 ease-out relative cursor-pointer bg-black/50 backdrop-blur-sm opacity-0 translate-y-8 fade-in hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              {/* Project Image */}
              <div className="relative w-full h-64 bg-gradient-to-br from-black to-gray-900 flex items-center justify-center text-white font-display text-6xl overflow-hidden group-hover:scale-110 transition-transform duration-500">
                {String(project.id).padStart(2, '0')}
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 relative z-20 transition-all duration-500 group-hover:-translate-y-2">
                <h3 className="font-display text-2xl mb-4 text-white group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 border border-gray-800 text-sm tracking-wider text-gray-400 group-hover:border-white/20 group-hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink}
                    className="text-white no-underline text-sm tracking-widest transition-opacity duration-300 hover:opacity-60"
                  >
                    VIEW PROJECT →
                  </a>
                  <a 
                    href={project.githubLink}
                    className="text-white no-underline text-sm tracking-widest transition-opacity duration-300 hover:opacity-60"
                  >
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
