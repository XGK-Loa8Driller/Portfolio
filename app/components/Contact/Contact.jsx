'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // honeypot
  });
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@johndoe.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', website: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.infoSide}>
            <div className={styles.emailBox}>
              <div>
                <p className={styles.emailLabel}>Email</p>
                <p className={styles.emailAddress}>hello@johndoe.com</p>
              </div>
              <button onClick={handleCopy} className={styles.copyButton} id="copy-btn" aria-label="Copy email">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className={styles.location}>
              <p>Available Worldwide · Remote</p>
            </div>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} id="contact-github" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" className={styles.socialLink} id="contact-linkedin" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className={styles.socialLink} id="contact-twitter" aria-label="X (Twitter)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
            </div>
          </div>
          <div className={styles.formSide}>
            <form onSubmit={handleSubmit} className={styles.form} id="contact-form">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className={styles.honeypot}
                id="contact-honeypot"
              />
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  id="contact-name"
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  id="contact-email"
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  id="contact-message"
                />
              </div>
              <button 
                type="submit" 
                className={styles.submitButton} 
                disabled={status === 'sending'}
                id="contact-submit"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <div className={`${styles.toast} ${styles.toastSuccess}`} id="toast-success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className={`${styles.toast} ${styles.toastError}`} id="toast-error">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
