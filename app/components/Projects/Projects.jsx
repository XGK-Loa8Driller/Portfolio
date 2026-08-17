'use client';

import Image from 'next/image';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'Raksha Tejas — Anti-Drone Sentinel Rover System',
    desc: 'Engineered a cutting-edge anti-drone defense system designed to detect, track, and respond to unauthorized UAV activity in real time. Built using a fusion of advanced sensors and embedded systems with RF signal detection and secure communication protocols.',
    tech: ['Embedded Systems', 'RF Detection', 'Sensors', 'C/C++'],
    image: '/project-taskmanager.jpg',
    demo: '#',
    source: '#'
  },
  {
    title: 'Ball Drone MkII — Omni-Directional Lightweight Drone',
    desc: 'Developed a spherical UAV engineered for extreme agility and true omnidirectional movement. Features a unique enclosed spherical architecture enabling seamless 360° motion with collision-resistant flight behavior.',
    tech: ['Radiolink F722', 'ESC', 'Servos', 'Li-Po', 'Flight Control'],
    image: '/project-ecommerce.jpg',
    demo: '#',
    source: '#'
  },
  {
    title: 'A.R.T.E.M.I.S. — Railway Track Monitoring System',
    desc: 'AI-powered railway inspection system fusing computer vision and vibration analytics to detect critical track failures. Leverages YOLO-based real-time object detection with IMU sensors, processed on NVIDIA Jetson Orin Nano for edge-level intelligence.',
    tech: ['NVIDIA Jetson', 'YOLO', 'Computer Vision', 'IMU', 'Python'],
    image: '/project-chatapp.jpg',
    demo: '#',
    source: '#'
  },
  {
    title: 'Data Patterns Internship — Embedded Systems Development',
    desc: 'Gained hands-on experience in defence and aerospace electronics development. Worked with embedded hardware, microcontrollers, sensors, and communication interfaces for real-time embedded systems and electronic system design.',
    tech: ['Microcontrollers', 'Sensors', 'Hardware Integration', 'Testing'],
    image: '/project-weather.jpg',
    demo: '#',
    source: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          From anti-drone defense systems to AI-powered railway inspection — here's what I've been building.
        </p>

        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                />
              </div>
              
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techPill}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.actions}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Live Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Source Code
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
