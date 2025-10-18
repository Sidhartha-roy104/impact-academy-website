import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import styles from './ContactUsW.module.css';

const ContactUsW = () => {
  const phoneNumber = "+919703098506"; // Replace with your actual WhatsApp number
  const message = "Hi! I'm interested in learning more about Impact Academy courses. Could you please provide me with more details?";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:madanachary99@gmail.com?subject=Inquiry about Impact Academy', '_blank');
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Contact Us</h2>
          <div className={styles.subheading}>Get in Touch for More Details</div>
          <p className={styles.description}>
            Have questions about our courses? Need more information? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MessageCircle size={32} />
              </div>
              <h3>WhatsApp</h3>
              <p>Quick responses and instant support</p>
              <button className={styles.whatsappButton} onClick={handleWhatsAppClick}>
                <MessageCircle size={20} />
                Chat on WhatsApp
              </button>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Phone size={32} />
              </div>
              <h3>Phone</h3>
              <p>Call us for immediate assistance</p>
              <button className={styles.phoneButton} onClick={handlePhoneClick}>
                <Phone size={20} />
                Call Now
              </button>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Mail size={32} />
              </div>
              <h3>Email</h3>
              <p>Send us detailed inquiries</p>
              <button className={styles.emailButton} onClick={handleEmailClick}>
                <Mail size={20} />
                Send Email
              </button>
            </div>
          </div>

          <div className={styles.contactDetails}>
            <div className={styles.detailsCard}>
              <h3>Contact Information</h3>
              <div className={styles.detailItem}>
                <Phone className={styles.detailIcon} size={20} />
                <div>
                  <strong>Phone:</strong>
                  <span>{phoneNumber}</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <Mail className={styles.detailIcon} size={20} />
                 <div>
                   <strong>Email:</strong>
                   <span>madanachary99@gmail.com</span>
                 </div>
              </div>
              <div className={styles.detailItem}>
                <MapPin className={styles.detailIcon} size={20} />
                <div>
                  <strong>Address:</strong>
                  <span>Exicecolony, near raithubazar, Hanamkonda, Telangana 506001</span>
                </div>
              </div>
              <div className={styles.detailItem}>
                <Clock className={styles.detailIcon} size={20} />
                <div>
                  <strong>Hours:</strong>
                  <span>Mon - Sat: 6:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className={styles.quickActions}>
              <h3>Quick Actions</h3>
              <button className={styles.primaryAction} onClick={handleWhatsAppClick}>
                <Send size={20} />
                Get Course Details
              </button>
              <button className={styles.secondaryAction} onClick={handleWhatsAppClick}>
                <MessageCircle size={20} />
                Ask Questions
              </button>
            </div>
          </div>
        </div>

        <div className={styles.whatsappBanner}>
          <div className={styles.bannerContent}>
            <MessageCircle className={styles.bannerIcon} size={32} />
            <div className={styles.bannerText}>
              <h4>Need Immediate Help?</h4>
              <p>Click below to start a WhatsApp conversation with our team</p>
            </div>
            <button className={styles.bannerButton} onClick={handleWhatsAppClick}>
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsW;
