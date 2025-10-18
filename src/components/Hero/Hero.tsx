import { Check, Clock } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern}>
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •
        π = 3.14159... • ∫ ∑ √ ∞ α β γ θ • x² + y² = r² • sin cos tan • ∂ ∇ ∆ • a² + b² = c² •

      </div>

      <div className={styles.container}>
        <br/>
        <br/>
        <div className={styles.superTitle}>Welcome to IMPACT ACADEMY</div>
        <h1 className={styles.mainTitle}>"The Genius You Are"</h1>

        <div className={styles.infoBox}>
          <h2 className={styles.infoBoxTitle}>Special Caring for MATHEMATICS</h2>

          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <Check className={styles.checkIcon} size={24} />
              <span className={styles.infoText}>IIT FOUNDATION Tuitions (4th to 10th & 6th to 10th Classes)</span>
            </li>
            <li className={styles.infoItem}>
              <Check className={styles.checkIcon} size={24} />
              <span className={styles.infoText}>INTER MPC (100% Pass Rate)</span>
            </li>
            <li className={styles.infoItem}>
              <Check className={styles.checkIcon} size={24} />
              <span className={styles.infoText}>SPECIAL BATCHES for 10th</span>
            </li>
          </ul>

          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton} onClick={() => {
              document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Enroll Now
            </button>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className={styles.phoneInput}
              pattern="[0-9]{10}"
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomBanner}>
        
        <Clock className={styles.bannerIcon} size={28} />
        <span className={styles.bannerText}>Morning Batches: 5:30 AM to 9:00 AM</span>
      </div>
    </section>
  );
};

export default Hero;
