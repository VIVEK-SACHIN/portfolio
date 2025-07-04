import React from 'react';
import styles from './Contact.module.css';
import { LucidePhone, LucideMail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { nameAndDescriptionData } from '../../config/vivek';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.animateOnScroll} ${styles.animateSlideUp}`}>
          <div className={styles.header}>
            <LucidePhone className={styles.phoneIcon} />
            <h2 className={styles.heading}>Let's Connect</h2>
          </div>
          
          <div className={styles.linksContainer}>
            <a 
              href="mailto:skilladi123@gmail.com" 
              className={`${styles.linkCard} ${styles.cardHover}`}
              aria-label="Send email"
            >
              <div className={styles.linkContent}>
                <LucideMail className={`${styles.linkIcon} ${styles.bounceOnHover}`} />
                <span>E-mail</span>
              </div>
            </a>
            
            <a 
              href={nameAndDescriptionData.githubUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.linkCard} ${styles.cardHover}`}
              aria-label="Visit GitHub profile"
            >
              <div className={styles.linkContent}>
                <FaGithub className={`${styles.linkIcon} ${styles.bounceOnHover}`} />
                <span>GitHub</span>
              </div>
            </a>
            
            <a 
              href={nameAndDescriptionData.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.linkCard} ${styles.cardHover}`}
              aria-label="Visit LinkedIn profile"
            >
              <div className={styles.linkContent}>
                <FaLinkedin className={`${styles.linkIcon} ${styles.bounceOnHover}`} />
                <span>LinkedIn</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;