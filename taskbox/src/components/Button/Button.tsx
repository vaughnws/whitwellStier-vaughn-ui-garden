import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  $backgroundColor?: string;
  $color?: string;
  $size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}>`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  line-height: 1;
  transition: all 0.3s ease;

  /* Size variants */
  padding: ${props => {
    switch (props.$size) {
      case 'small':
        return '8px 16px';
      case 'large':
        return '16px 32px';
      default:
        return '12px 24px';
    }
  }};

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

  /* Colors */
  background-color: ${props =>
    props.disabled ? '#cccccc' : props.$backgroundColor || '#e25a16ff'};
  color: ${props => (props.disabled ? '#666666' : props.$color || '#ffffff')};

  opacity: ${props => (props.disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${props =>
      props.disabled
        ? '#cccccc'
        : props.$backgroundColor
          ? `${props.$backgroundColor}dd`
          : '#c33100ff'};
  }

  &:active {
    transform: ${props => (props.disabled ? 'none' : 'scale(0.98)')};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${props => {
      switch (props.$size) {
        case 'small':
          return '6px 12px';
        case 'large':
          return '14px 28px';
        default:
          return '10px 20px';
      }
    }};

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

export const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor,
  color,
  disabled = false,
  onClick,
  size = 'medium',
  className,
}) => {
  return (
    <StyledButton
      type="button"
      $backgroundColor={backgroundColor}
      $color={color}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      $size={size}
      className={className}
    >
      {label}
    </StyledButton>
  );
};
