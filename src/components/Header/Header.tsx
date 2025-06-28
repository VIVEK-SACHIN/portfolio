import React, { useEffect, useState } from 'react';
import { nameAndDescriptionData } from '../../config/vivek';
import './Header.css';

interface HeaderProps {
  name: string;
  links: {
    about: string;
    projects: string;
    contact: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ name, links }) => {
  const [nameInitials, setNameInitials] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const getNameInitials = nameAndDescriptionData.name.split(' ')[0].split('')[0] + nameAndDescriptionData.name.split(' ')[1].split('')[0];
    setNameInitials(getNameInitials);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <span className="header-name">
          {isMobile ? nameInitials : nameAndDescriptionData.name}
        </span>
        <nav className="header-nav">
          <a href={links.about}>About</a>
          <a href={links.projects}>Projects</a>
          <a href={links.contact}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
