import styles from './About.module.css';
import impactPoster from '../../assests/impact_acd_poster.jpg';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={impactPoster}
            alt="Impact Academy Poster"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>About Impact Academy</h2>
          <div className={styles.subheading}>Mathematical Excellence</div>
          <p className={styles.paragraph}>
            At Impact Academy, we believe every student has the potential to be a genius in mathematics.
            Our mission is to unlock that potential through dedicated coaching and personalized care.
          </p>

          <div className={styles.subSection}>
            <h3 className={styles.subSectionHeading}>Why Choose Impact Academy?</h3>
            <p className={styles.subSectionParagraph}>
              Impact Academy has established itself as a premier mathematics coaching center, specializing
              in building strong foundations from elementary to intermediate levels. Our unique 'THINKERS'
              program nurtures young minds from class 4th onwards, ensuring students develop logical thinking
              and problem-solving skills early in their academic journey. With our special focus on INTER MPC
              students, we have achieved a remarkable 100% pass rate, helping students excel in their board
              examinations and competitive exams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
