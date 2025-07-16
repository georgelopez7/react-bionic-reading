import React from 'react';

export const ParseBionicText = (text: string): React.ReactNode => {
  if (!text) return null;
  const trimmedText = text.trim();
  if (!trimmedText) return null;

  const words = trimmedText.split(/\s+/);

  return (
    <span>
      {words.map((word, index) => {
        const half = Math.ceil(word.length / 2);
        const bold = word.slice(0, half);
        const rest = word.slice(half);
        return (
          <span key={index} className="mr-1">
            <strong>{bold}</strong>{rest}{' '}
          </span>
        );
      })}
    </span>
  );
};
