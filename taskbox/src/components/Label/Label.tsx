import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{
  $backgroundColor?: string;
  $color?: string;
  $size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: inline-block;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

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

  padding: ${props => {
    switch (props.$size) {
      case 'small':
        return '4px 8px';
      case 'large':
        return '8px 16px';
      default:
        return '6px 12px';
    }
  }};

  /* Colors */
  background-color: ${props =>
    props.disabled ? '#e0e0e0' : props.$backgroundColor || 'transparent'};
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};

  opacity: ${props => (props.disabled ? 0.6 : 1)};

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

export const Label: React.FC<LabelProps> = ({
  text,
  htmlFor,
  backgroundColor,
  color,
  disabled = false,
  size = 'medium',
  className,
}) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      $backgroundColor={backgroundColor}
      $color={color}
      disabled={disabled}
      $size={size}
      className={className}
    >
      {text}
    </StyledLabel>
  );
};
