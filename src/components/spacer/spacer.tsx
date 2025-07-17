import React from "react";
import { ISpacerProps, ISpacerSize } from "./spacer.interface";

const sizeMap: Record<ISpacerSize, string> = {
  xxsmall: "4px",
  xsmall: "8px",
  small: "12px",
  medium: "16px",
  large: "32px",
};

export const Spacer: React.FC<ISpacerProps> = ({ space }) => {
  const height = sizeMap[space];
  return <div style={{ height: height, width: "100%" }} />;
};
