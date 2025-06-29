import './NameAndDescription.css';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { nameAndDescriptionData } from '../../config/vivek';
import { useEffect, useState, useCallback } from 'react';
import ChevronDown from './ChevronDown';

export const NameAndDescription = () => {
  const [firstName, setFirstName] = useState('');
useEffect(() => {
    const getFirstName = nameAndDescriptionData.name.split(' ')[0];
    setFirstName(getFirstName);
  }, [nameAndDescriptionData.name]);
  const scrollToExpertise = useCallback(() => {
    const expertiseSection = document.getElementById('expertise');
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="name-and-description">
      <h2 className="developer-title">{nameAndDescriptionData.title}</h2>
      <span className="Hello">Hey, I'm <span className="gradientTxt">{firstName}</span></span>
      <p>{nameAndDescriptionData.summary}</p>
      <div className="buttons-container">
        <a 
          href={nameAndDescriptionData.githubUrl} 
          className="action-button github-button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <FaGithub size={20} />
          <span>GitHub Profile</span>
        </a>
        <a 
          href={nameAndDescriptionData.cvUrl} 
          className="action-button download-button"
          target="_blank"
          rel="noopener noreferrer"
          download
          style={{ textDecoration: 'none' }}
        >
          <FaDownload size={20} />
          <span>Download CV</span>
        </a>
      </div>
      <ChevronDown 
        onClick={scrollToExpertise}
        className="scroll-down-indicator"
        aria-label="Scroll to expertise section"
      />
    </div>
  );
};

// CSS styles
NameAndDescription.displayName = 'NameAndDescription';

export default NameAndDescription;