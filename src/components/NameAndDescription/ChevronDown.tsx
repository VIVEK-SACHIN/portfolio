import React from 'react';
import './ChevronDown.css';

interface ChevronDownProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional custom class name
   */
  className?: string;
  /**
   * Optional custom icon size
   */
  size?: number;
  /**
   * Optional custom color
   */
  color?: string;
}

/**
 * A reusable animated chevron down icon component
 */
const ChevronDown: React.FC<ChevronDownProps> = ({
  onClick,
  className = '',
  size = 24,
  color = 'currentColor',
}) => {
  return (
    <div 
      className={`chevronDown ${className}`}
      onClick={onClick}
      role="button"
      aria-label="Scroll down"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="chevronDown__icon"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
};

export default ChevronDown;
