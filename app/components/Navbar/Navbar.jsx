'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#top" className={styles.logo} onClick={closeMobileMenu}>
          AK
        </a>

        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.navLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Aditya_K_Resume.pdf"
            download
            className={styles.resumeButton}
            id="desktop-resume-btn"
          >
            Resume
          </a>
        </div>

        <button
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          id="mobile-menu-toggle"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={styles.mobileNavLink}
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Aditya_K_Resume.pdf"
              download
              className={styles.mobileResumeButton}
              onClick={closeMobileMenu}
              id="mobile-resume-btn"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
