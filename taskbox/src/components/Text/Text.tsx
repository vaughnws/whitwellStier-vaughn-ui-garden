import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{
  $backgroundColor?: string;
  $color?: string;
  $size?: 'small' | 'medium' | 'large';
  $align?: 'left' | 'center' | 'right';
  $weight?: 'normal' | 'bold';
  disabled?: boolean;
}>`
  font-family: 'Open Sans', sans-serif;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;
  margin: 0;

  /* Size variants */
  font-size: ${props => {
    switch (props.$size) {
      case 'small':
        return '12px';
      case 'large':
        return '18px';
      default:
        return '14px';
    }
  }};

  /* Text alignment */
  text-align: ${props => props.$align || 'left'};

  /* Font weight */
  font-weight: ${props => (props.$weight === 'bold' ? '700' : '400')};

  /* Colors */
  background-color: ${props =>
    props.disabled ? '#f5f5f5' : props.$backgroundColor || 'transparent'};
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};

  opacity: ${props => (props.disabled ? 0.6 : 1)};

  padding: 4px;
  border-radius: 4px;

  /* Responsive */
  @media (max-width: 768px) {
    font-size: ${props => {
      switch (props.$size) {
        case 'small':
          return '11px';
        case 'large':
          return '16px';
        default:
          return '13px';
      }
    }};
  }
`;

export const Text: React.FC<TextProps> = ({
  content,
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  align = 'left',
  weight = 'normal',
  className,
}) => {
  return (
    <StyledText
      $backgroundColor={backgroundColor}
      $color={color}
      disabled={disabled}
      $size={size}
      $align={align}
      $weight={weight}
      className={className}
    >
      {content}
    </StyledText>
  );
};
