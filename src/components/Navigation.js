import React from 'react';

const Navigation = ({ toggleTheme, theme }) => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 dark:bg-black/90 backdrop-blur-lg z-[1000] border-b border-gray-800 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-[5%] py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="RM Logo" className="h-10 w-auto" />
        </div>
        <ul className="flex gap-8 items-center list-none">
          <li>
            <a 
              href="#about" 
              className="text-white dark:text-white no-underline font-normal text-[0.95rem] tracking-wider transition-opacity duration-300 hover:opacity-60"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="text-white dark:text-white no-underline font-normal text-[0.95rem] tracking-wider transition-opacity duration-300 hover:opacity-60"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-white dark:text-white no-underline font-normal text-[0.95rem] tracking-wider transition-opacity duration-300 hover:opacity-60"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="text-white dark:text-white no-underline font-normal text-[0.95rem] tracking-wider transition-opacity duration-300 hover:opacity-60"
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-white dark:text-white no-underline font-normal text-[0.95rem] tracking-wider transition-opacity duration-300 hover:opacity-60"
            >
              Contact
            </a>
          </li>
          <li>
            <button 
              className="bg-transparent border-2 border-white cursor-pointer rounded-full text-lg transition-all duration-300 flex items-center justify-center w-[42px] h-[42px] p-0 hover:bg-white hover:rotate-180 group"
              onClick={toggleTheme}
            >
              <svg 
                className="w-[22px] h-[22px] transition-all duration-300 text-white group-hover:text-black" 
                viewBox="0 0 24 24" 
                fill={theme === 'light' ? 'currentColor' : 'none'}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9 21h6M12 3a6 6 0 0 0-6 6c0 2.5 1.5 4.5 3 6v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1c1.5-1.5 3-3.5 3-6a6 6 0 0 0-6-6z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;