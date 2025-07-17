import React from "react";

export const ApplyBionicText = (text: string): React.ReactNode => {
  const trimmedText = text.trim();
  if (!trimmedText) return <></>;

  const words = trimmedText.split(/\s+/);

  return (
    <>
      {words.map((word, index) => {
        const half = Math.ceil(word.length / 2);
        const bold = word.slice(0, half);
        const rest = word.slice(half);
        return (
          <span key={index}>
            <strong>{bold}</strong>
            {rest}{" "}
          </span>
        );
      })}
    </>
  );
};
