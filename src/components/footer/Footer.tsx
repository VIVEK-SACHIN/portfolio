import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} Aditya Yadav. Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;