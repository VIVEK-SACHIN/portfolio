import React from 'react';

interface HeaderProps {
  name: string;
  links: {
    about: string;
    projects: string;
    contact: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ name, links }) => {
  return (
    <header className="header">
      <div className="header-content">
        <span className="header-name">{name}</span>
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
