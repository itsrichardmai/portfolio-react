import React from 'react';

const Navigation = ({ toggleTheme }) => {
  return (
    <nav>
      <div className="container">
        <div className="logo">RM</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme}>
              Toggle Theme
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
