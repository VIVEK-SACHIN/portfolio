import './NameAndDescription.css';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { nameAndDescriptionData } from '../../config/vivek';
import { useEffect, useState } from 'react';

export const NameAndDescription = () => {
  const [firstName, setFirstName] = useState('');
useEffect(() => {
    const getFirstName = nameAndDescriptionData.name.split(' ')[0];
    setFirstName(getFirstName);
    console.log(getFirstName);
  }, [nameAndDescriptionData.name]);
  return (
    <div className="name-and-description">
    <h2 className="developer-title">{nameAndDescriptionData.title}</h2>
    <span className="Hello">Hey, I'm <span className="gradientTxt">{firstName}</span></span>
    <p>{nameAndDescriptionData.summary}</p>
    <div className="buttons-container">
      <button className="action-button github-button">
        <FaGithub size={20} />
        <span>GitHub Profile</span>
      </button>
      <a 
        href={nameAndDescriptionData.cvUrl} 
        className="action-button download-button"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <FaDownload size={20} />
        <span>Download CV</span>
      </a>
    </div>
    </div>
  );
};

// CSS styles
NameAndDescription.displayName = 'NameAndDescription';

export default NameAndDescription;