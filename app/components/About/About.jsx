import styles from './About.module.css';

export default function About() {
  const metrics = [
    { number: '3+', label: 'Major Projects' },
    { number: '4', label: 'Certifications' },
    { number: '1', label: 'Internship' },
    { number: '7.97', label: 'Current CGPA' }
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        
        <div className={styles.content}>
          <p className={styles.paragraph}>
            I'm an Electronics and Communication Engineering student at St. Joseph's College of Engineering, driven by a deep passion for embedded systems, digital electronics, and hardware-software integration. What started as a simple curiosity about how electronic systems operate has evolved into a strong commitment to building practical, real-world solutions.
          </p>
          <p className={styles.paragraph}>
            My expertise lies in embedded systems development, featuring hands-on experience with microcontrollers, sensors, and communication interfaces. During my internship at Data Patterns, I gained invaluable exposure to defense and aerospace electronics. Proficient in C, C++, Verilog, and Java, I thrive at the fascinating intersection of hardware and software.
          </p>
          <p className={styles.paragraph}>
            Outside of my coursework, I'm constantly building projects — ranging from anti-drone defense systems to AI-powered railway inspection platforms. I'm a firm believer in learning by doing, always looking to push the boundaries of what can be achieved with embedded technology and computer vision.
          </p>
        </div>

        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <span className={styles.metricNumber}>{metric.number}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
