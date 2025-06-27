import './NameAndDescription.css';
import { FaGithub, FaDownload } from 'react-icons/fa';
import { nameAndDescriptionData } from '../../config/vivek';

export const NameAndDescription = () => {
  return (
    <div className="name-and-description">
    <h2 className="developer-title">{nameAndDescriptionData.title}</h2>
    <span className="Hello">Hey, I'm <span className="gradientTxt">{nameAndDescriptionData.name}</span></span>
    <p>{nameAndDescriptionData.description}</p>
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