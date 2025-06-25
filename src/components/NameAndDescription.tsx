import React from 'react';
import './NameAndDescription.css';
import { FaGithub, FaDownload } from 'react-icons/fa';
interface NameAndDescriptionProps {
  name?: string;
  description?: string;
}

export const NameAndDescription: React.FC<NameAndDescriptionProps> = ({
  name="Vivek",
  description="genius",
}) => {
  return (
    <div className="name-and-description">
    <h2 className="developer-title">KING OF BASKETBALL</h2>
    <span className="Hello">Hey, I'm <span className="gradientTxt">{name}</span></span>
    <p>{description}</p>
    <div className="buttons-container">
      <button className="action-button github-button">
        <FaGithub size={20} />
        <span>GitHub Profile</span>
      </button>
      <button className="action-button download-button">
        <FaDownload size={20} />
        <span>Download CV</span>
      </button>
    </div>
    </div>
  );
};

// CSS styles
NameAndDescription.displayName = 'NameAndDescription';

export default NameAndDescription;