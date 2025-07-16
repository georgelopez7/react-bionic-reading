import React from 'react';

import { IconProps } from './icon.interface';

export const Icon = ({ name, size = 16 }: IconProps) => {
  const iconStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  switch (name) {
    case 'enabled':
      return (
        <svg data-testid="icon-enabled" style={iconStyle} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case 'disabled':
      return (
        <svg data-testid="icon-disabled" style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
      );
    default:
      return null;
  }
};