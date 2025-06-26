import React from 'react';
import styles from './ExperienceItem.module.css';
import { LucideCalendar } from 'lucide-react';

interface ExperienceItemProps {
  item: {
    title: string;
    company: string;
    period: string;
    responsibilities: string[];
  };
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemContent}>
        <LucideCalendar className={styles.calendarIcon} />
        <div>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <p className={styles.company}>{item.company}</p>
          <p className={styles.period}>{item.period}</p>
          <ul className={styles.responsibilities}>
            {item.responsibilities.map((responsibility, index) => (
              <li key={index} className={styles.responsibilityItem}>
                <span className={styles.bulletPoint}></span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;