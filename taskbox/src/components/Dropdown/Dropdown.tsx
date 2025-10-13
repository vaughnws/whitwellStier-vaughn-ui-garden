import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{
  $backgroundColor?: string;
  $color?: string;
}>`
  font-family: 'Open Sans', sans-serif;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  width: 100%;
  min-width: 200px;
  
  background-color: ${(props) =>
    props.disabled ? '#e0e0e0' : props.$backgroundColor || '#ffffff'};
  color: ${(props) => (props.disabled ? '#999999' : props.$color || '#333333')};
  
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  
  &:hover {
    border-color: ${(props) => (props.disabled ? '#ddd' : '#999')};
  }
  
  &:focus {
    outline: none;
    border-color: ${(props) => (props.disabled ? '#ddd' : '#1976d2')};
    box-shadow: ${(props) =>
      props.disabled ? 'none' : '0 0 0 2px rgba(25, 118, 210, 0.2)'};
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 13px;
    min-width: 150px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  placeholder = 'Select an option',
  backgroundColor,
  color,
  disabled = false,
  onChange,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $color={color}
      className={className}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
