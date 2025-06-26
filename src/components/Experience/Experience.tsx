import React from 'react';
import styles from './Experience.module.css';
import ExperienceItem from './ExperienceItem';
import { LucideBriefcase, LucideGraduationCap } from 'lucide-react';
import type { ExperienceProps } from './types';

const Experience: React.FC<ExperienceProps> = ({ activeTab, onTabChange, items }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${styles.container} ${isVisible ? styles.animateOnScroll : ''}`}
    >
      <div className={styles.tabContainer}>
        <span
          className={`${styles.tabButton} ${activeTab === 'experience' ? styles.activeTab : ''}`}
          onClick={() => onTabChange('experience')}
        >
          <LucideBriefcase className={styles.tabIcon} />
          Experience
          {activeTab === 'experience' && <div className={styles.activeIndicator}></div>}
        </span>
        <span
          className={`${styles.tabButton} ${activeTab === 'education' ? styles.activeTab : ''}`}
          onClick={() => onTabChange('education')}
        >
          <LucideGraduationCap className={styles.tabIcon} />
          Education
          {activeTab === 'education' && <div className={styles.activeIndicator}></div>}
        </span>
      </div>

      <div className={styles.content}>
        {activeTab === 'experience' && (
          <div className={styles.experienceList}>
            {items.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        )}
        
        {activeTab === 'education' && (
          <div className={styles.educationContent}>
            {/* Education content would go here */}
            <p className={styles.comingSoon}>Education details coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;