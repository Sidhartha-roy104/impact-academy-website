import { Trophy, GraduationCap, Star, Calendar } from 'lucide-react';
import styles from './Results.module.css';

const stats = [
  {
    icon: Trophy,
    value: '100%',
    label: 'INTER MPC Pass Rate',
  },
  {
    icon: GraduationCap,
    value: '500+',
    label: 'Students Coached',
  },
  {
    icon: Star,
    value: '95%+',
    label: 'Students Score Above 90%',
  },
  {
    icon: Calendar,
    value: '10+',
    label: 'Years of Excellence',
  },
];

const Results = () => {
  return (
    <section className={styles.results} id="results">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Results</h2>
          <div className={styles.subheading}>Proven Track Record of Excellence</div>
          <p className={styles.description}>
            Our students consistently achieve outstanding results, reflecting our commitment to quality education.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} />
                </div>
                <div className={styles.value}>{stat.value}</div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
