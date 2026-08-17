'use client';

import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('aditya.k31206@gmail.com');
    alert('Email copied to clipboard!');
    window.location.href = 'mailto:aditya.k31206@gmail.com';
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.availabilityBadge}>
          <span className={styles.pulseDot}></span>
          <span>Available for work</span>
        </div>
        
        <h1 className={styles.title}>Aditya K</h1>
        
        <p className={styles.subtitle}>
          ECE student passionate about embedded systems, UAV design, and computer vision — building real-world engineering solutions from hardware to software.
        </p>
        
        <div className={styles.buttonRow}>
          <a href="#projects" className={styles.primaryButton}>
            View Projects
          </a>
          <a href="/Aditya_K_Resume.pdf" className={styles.secondaryButton} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
        
        <div className={styles.socialRow}>
          <a href="https://github.com/GK-Loa8Driller" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/aditya-k" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mailto:aditya.k31206@gmail.com" onClick={handleCopyEmail} className={styles.socialIcon} aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
