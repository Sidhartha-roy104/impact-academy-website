import { Target, BookOpen, TrendingUp, Users } from 'lucide-react';
import styles from './Features.module.css';

const features = [
  {
    icon: Target,
    title: 'Focused Approach',
    description: 'Specialized mathematics coaching with personalized attention to each student.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Complete foundation building from class 4th to intermediate level.',
  },
  {
    icon: TrendingUp,
    title: '100% Pass Rate',
    description: 'Proven track record with exceptional results in INTER MPC examinations.',
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Special batches designed for individual attention and better learning outcomes.',
  },
];

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={36} />
                </div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
