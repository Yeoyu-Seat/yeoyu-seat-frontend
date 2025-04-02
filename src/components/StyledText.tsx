import React from 'react';
import { TextStyle } from '../styles/TextStyle';
import { getTextStyleClass } from '../styles/TextStyleToken';

interface TextProps {
  style: TextStyle;
  children: React.ReactNode;
  className?: string;
}

export const StyledText: React.FC<TextProps> = ({
  style,
  children,
  className = '',
}: TextProps) => {
  return (
    <span className={`${getTextStyleClass(style)} ${className}`}>
      {children}
    </span>
  );
};
