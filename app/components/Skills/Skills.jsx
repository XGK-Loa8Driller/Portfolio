import styles from './Skills.module.css';

const skillsData = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'Verilog', 'Java']
  },
  {
    category: 'Embedded Systems',
    skills: ['Microcontrollers', 'Sensors', 'Communication Interfaces', 'Hardware-Software Integration', 'Real-Time Systems']
  },
  {
    category: 'Tools & Platforms',
    skills: ['NVIDIA Jetson', 'YOLO', 'Flight Controllers (Radiolink F722)', 'ESC', 'Servos', 'Git']
  },
  {
    category: 'Domains',
    skills: ['Digital Electronics', 'Computer Vision', 'RF Detection', 'UAV Design', 'Aerospace Electronics']
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>Technologies and domains I work with across hardware and software.</p>
        </div>
        <div className={styles.grid}>
          {skillsData.map((group) => (
            <div key={group.category} className={styles.card} id={`skill-category-${group.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <div className={styles.pills}>
                {group.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
