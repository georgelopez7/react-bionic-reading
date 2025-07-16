import React from 'react';

import { ISpacerProps, SpacerSize } from './spacer.interface';

const sizeMap: Record<SpacerSize, string> = {
  xsmall: '4px',
  small: '8px',
  medium: '16px',
  large: '32px',
};

export const Spacer: React.FC<ISpacerProps> = ({ space }) => {
  const height = sizeMap[space];
  return <div style={{ height, width: '100%' }} />;
};