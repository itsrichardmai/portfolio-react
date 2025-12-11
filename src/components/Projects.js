import React, { useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Duba Karaoke SPA',
    description: 'A full-stack React website. The site features a modern black and yellow theme, comprehensive menu system, karaoke room bookings, photo gallery, and email-based reservation system.',
    image: '/projects/project1.jpg', // Add your image here
    tech: ['React', 'Node.js', 'ViteJS', 'TailwindCSS', 'GH-Pages'],
    liveLink: 'https://itsrichardmai.github.io/DubaKaraokePub2/',
    githubLink: 'https://github.com/itsrichardmai/DubaKaraokePub2'
  },
  {
    id: 2,
    title: 'CDA Task Management System',
    description: 'Developed Python-based legal automation suite using Selenium, BeautifulSoup, and Pandas, reducing court case research from 45 to 9 minutes (80% efficiency gain) for California law firms. Automated California Superior Court case research workflow, extracting structured data from 10,000+ documents with 97% accuracy using web scraping, regex parsing, and data validation',
    image: '/projects/project2.jpg', // Add your image here
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'Requests', 'VSC', 'Github'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Crypto Trading Dashboard',
    description: 'A full-stack cryptocurrency platform with real-time prices, paper trading, news integration, and interactive charts powered by CoinGecko API. User authentication & routing implemented. [work in progress]: additional algorithmic & ai features',
    image: '/projects/project3.jpg', 
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'CoinGecko API', 'NewsAPI', 'N8N', 'Recharts', 'Vercel'],
    liveLink: 'https://crypto-dashboard-git-main-richard-mais-projects.vercel.app/',
    githubLink: 'https://github.com/itsrichardmai/crypto-dashboard'
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
      className="relative z-10 min-h-auto flex items-center justify-center px-[5%] py-24 bg-white dark:bg-black"
    >
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="font-display text-5xl mb-12 text-center text-black dark:text-white opacity-0 translate-y-8 transition-all duration-700 fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-all duration-500 opacity-0 translate-y-8 fade-in hover:border-black dark:hover:border-white hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  {project.githubLink && project.githubLink !== '#' && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveLink && project.liveLink !== '#' && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors group-hover:border-black dark:group-hover:border-white"
                    >
                      {tech}
                    </span>
                  ))}
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