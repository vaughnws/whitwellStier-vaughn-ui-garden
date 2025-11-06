import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioContainer = styled.label<{ disabled?: boolean >`
  display: inline-flex;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  user-select: none;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledRadio = styled.div<{
  $checked?: boolean;
  $backgroundColor?: string;
  disabled?: boolean;
}>`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${props =>
      props.disabled
        ? '#cccccc'
        : props.$checked
          ? props.$backgroundColor || '#1976d2'
          : '#999999'};
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background-color: ${props => (props.disabled ? '#f5f5f5' : '#ffffff')};

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props =>
      props.disabled
        ? '#cccccc'
        : props.$checked
          ? props.$backgroundColor || '#1976d2'
          : 'transparent'};
    transition: all 0.3s ease;
  }

  ${RadioContainer}:hover & {
    border-color: ${props =>
      props.disabled
        ? '#cccccc'
        : props.$backgroundColor
          ? `${props.$backgroundColor}dd`
          : '#1565c0'};
  }
`;

const LabelText = styled.span<{ $color?: string; disabled?: boolean }>`
  color: ${props => (props.disabled ? '#999999' : props.$color || '#333333')};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  name,
  checked = false,
  backgroundColor,
  color,
  disabled = false,
  onChange,
  className,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <RadioContainer disabled={disabled} className={className}>
      <HiddenRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <StyledRadio
        $checked={checked}
        disabled={disabled}
        $backgroundColor={backgroundColor}
      />
      <LabelText disabled={disabled} $color={color}>
        {label}
      </LabelText>
    </RadioContainer>
  );
};
