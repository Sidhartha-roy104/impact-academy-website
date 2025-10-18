import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Bell } from 'lucide-react';
import styles from './Navbar.module.css';
import NoticeBoard from '../NoticeBoard/NoticeBoard';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNoticeBoardOpen, setIsNoticeBoardOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleNoticeBoard = () => {
    setIsNoticeBoardOpen(!isNoticeBoardOpen);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.brand} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <GraduationCap className={styles.logo} size={32} />
          <span className={styles.brandName}>IMPACT ACADEMY</span>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.navLinksOpen : ''}`}>
          <button className={styles.navLink} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Home
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('about')}>
            About
          </button>

          <button className={styles.navLink} onClick={() => scrollToSection('features')}>
            Features
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('programs')}>
            Programs
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('results')}>
            Results
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('contact')}>
            Contact
          </button>
          <button className={styles.noticeButton} onClick={toggleNoticeBoard}>
            <Bell size={18} />
            <span>Notices</span>
          </button>
          <button
            className={styles.ctaButton}
            onClick={() => scrollToSection('programs')}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Notice Board Modal */}
      {isNoticeBoardOpen && (
        <div className={styles.noticeModal} onClick={() => setIsNoticeBoardOpen(false)}>
          <div className={styles.noticeModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.noticeModalHeader}>
              <h2>Important Notices</h2>
              <button 
                className={styles.closeButton}
                onClick={() => setIsNoticeBoardOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className={styles.noticeModalBody}>
              <NoticeBoard />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
