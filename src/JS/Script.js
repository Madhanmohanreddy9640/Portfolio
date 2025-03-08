import React, { useEffect, useState } from 'react';
import "boxicons/css/boxicons.min.css";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true); 

  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    // Menu icon toggle
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    // Scroll behavior for sticky header and active nav links
    const handleScroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
          });
        }
      });

      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // ScrollReveal setup
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
    ScrollReveal().reveal(
      '.home-img,.services-container,.portfolio-box,.contact form',
      { origin: 'bottom' }
    );
    ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
  }, []);

  useEffect(() => {
    // Typed.js initialization
    new Typed('.multiple-text', {
      strings: ['BSC Student at YVU', 'Frontend Developer'],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 900,
      loop: true,
    });
  }, []);

  // Preloader logic
  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsPreloading(false); // Hide preloader after 2.5 seconds
    }, 2500);

    return () => clearTimeout(preloaderTimer); // Cleanup timeout on unmount
  }, []);

  if (isPreloading) {
    return (
      <div className="preloader">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
          <span>MS</span>
        </div>
      </div>
    );
  }
};

export default App;
