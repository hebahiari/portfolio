'use client'

import { useEffect, useState } from 'react';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa';
import './MiniNav.css';
import { MdOutlineMail } from 'react-icons/md';
import { IoHome, IoPersonCircle } from 'react-icons/io5';

const MiniNav = () => {
  const [activeSection, setActiveSection] = useState('hero');  

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact'];

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.7,  
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className={`nav-item ${activeSection === 'hero' ? 'active' : ''}`}>
          <a 
            href="#hero" 
            className="nav-link" 
            onClick={() => handleLinkClick('hero')}  
          >
            <IoHome className='nav-icon' />
            <span className="link-text">home</span>
          </a>
        </li>

        <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
          <a 
            href="#about" 
            className="nav-link" 
            onClick={() => handleLinkClick('about')}
          >
            <IoPersonCircle className='nav-icon' />
            <span className="link-text">about</span>
          </a>
        </li>

        <li className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
          <a 
            href="#projects" 
            className="nav-link" 
            onClick={() => handleLinkClick('projects')}
          >
            <FaLaptopCode className='nav-icon' />
            <span className="link-text">projects</span>
          </a>
        </li>

        <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
          <a 
            href="#contact" 
            className="nav-link" 
            onClick={() => handleLinkClick('contact')}
          >
            <MdOutlineMail className='nav-icon' />
            <span className="link-text">contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MiniNav;
