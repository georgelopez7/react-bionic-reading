import React from "react";

export const SplitForBionicText = (
  word: string
): { bold: string; rest: string } => {
  const half = Math.ceil(word.length / 2);
  return {
    bold: word.slice(0, half),
    rest: word.slice(half),
  };
};

export const ApplyBionicText = (text: string): React.ReactNode => {
  const trimmedText = text.trim();
  if (!trimmedText) return <></>;

  const words = trimmedText.split(/\s+/);

  return (
    <>
      {words.map((word, index) => {
        const { bold, rest } = SplitForBionicText(word);
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
