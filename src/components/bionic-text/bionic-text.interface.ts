import type { CSSProperties, ElementType } from 'react';

export interface IBionicTextProps {
  text: string;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}