import React from 'react';
import styles from './Footer.module.css';
import { nameAndDescriptionData } from '../../config/vivek';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} {nameAndDescriptionData.name}. Crafted with passion and code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;