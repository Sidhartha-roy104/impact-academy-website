import { Phone, MapPin, Clock } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Contact Us</h2>
          <div className={styles.subheading}>Get in Touch</div>
          <p className={styles.description}>
            Have questions about our programs? Want to enroll your child? We're here to help you every step of the way.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <Phone size={32} />
            </div>
            <h3 className={styles.contactTitle}>Call Us</h3>
            <div className={styles.contactDetails}>
              <a href="tel:9703098506" className={styles.phoneNumber}>9703098506</a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <MapPin size={32} />
            </div>
            <h3 className={styles.contactTitle}>Visit Us</h3>
            <div className={styles.contactDetails}>
            Exicecolony, near raithubazar, Hanamkonda,<br />
            Telangana 506001
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconWrapper}>
              <Clock size={32} />
            </div>
            <h3 className={styles.contactTitle}>Timing</h3>
            <div className={styles.contactDetails}>
              <strong>Morning Batch:</strong><br />
              5:30 AM - 9:00 AM<br /><br />
              <strong>Contact Hours:</strong><br />
              10:00 AM - 8:00 PM
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomSection}>
          <div className={styles.brandName}>Impact Academy</div>
          <div className={styles.tagline}>"The Genius You Are"</div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Impact Academy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
