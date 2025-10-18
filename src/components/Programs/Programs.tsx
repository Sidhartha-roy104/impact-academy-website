import { Check } from 'lucide-react';
import styles from './Programs.module.css';

const programs = [
  {
    title: 'THINKERS Program',
    tagline: 'Building Young Minds',
    description: 'Foundation program for elementary students to develop mathematical thinking.',
    targetClasses: 'Class 4th to 7th',
    features: ['Basic concept building', 'Mental math techniques', 'Problem-solving skills', 'Interactive learning'],
    tags: ['Early Start'],
  },
  {
    title: 'IIT FOUNDATION Tuitions',
    tagline: 'Strong Mathematical Base',
    description: 'Comprehensive mathematics coaching for middle and high school students.',
    targetClasses: 'Class 4th to 10th & 6th to 10th',
    features: ['CBSE & State Board syllabus', 'Regular tests & assessments', 'Doubt clearing sessions', 'Worksheet practice'],
    tags: ['Popular'],
  },
  {
    title: 'SPECIAL BATCHES for 10th',
    tagline: 'Board Exam Excellence',
    description: 'Intensive coaching program designed for Class 10th board examination success.',
    targetClasses: 'Class 10th Only',
    features: ['Board exam pattern focus', 'Previous year papers', 'Score improvement strategies', 'Intensive practice sessions'],
    tags: ['Board Focus'],
  },
  {
    title: 'INTER MPC',
    tagline: '100% Pass Guarantee',
    description: 'Advanced mathematics coaching for Intermediate Mathematics, Physics, Chemistry students.',
    targetClasses: 'Inter 1st & 2nd Year',
    features: ['Complete MPC coverage', '100% pass rate record', 'JEE/EAMCET preparation', 'Concept-based learning'],
    tags: ['100% Pass'],
  },
];

const Programs = () => {
  return (
    <section className={styles.programs} id="programs">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Programs</h2>
          <div className={styles.subheading}>Choose Your Path to Mathematical Excellence</div>
          <p className={styles.description}>
            Specialized programs designed for every level - from building foundations to achieving
            board exam excellence and beyond.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((program, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.tags}>
                  {program.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <div className={styles.tagline}>{program.tagline}</div>
                <div className={styles.targetClasses}>{program.targetClasses}</div>
              </div>
              <p className={styles.cardDescription}>{program.description}</p>
              <ul className={styles.features}>
                {program.features.map((feature, i) => (
                  <li key={i} className={styles.feature}>
                    <Check className={styles.checkIcon} size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
