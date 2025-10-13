import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown Component', () => {
  it('should render the dropdown and be visible', () => {
    render(<Dropdown options={sampleOptions} placeholder="Select" />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <Dropdown options={sampleOptions} backgroundColor="#ffffff" />
    );
    const dropdown = screen.getByRole('combobox');
    
    const enabledBackground = window.getComputedStyle(dropdown).backgroundColor;
    
    rerender(
      <Dropdown options={sampleOptions} disabled backgroundColor="#ffffff" />
    );
    
    const disabledBackground = window.getComputedStyle(dropdown).backgroundColor;
    
    expect(enabledBackground).not.toBe(disabledBackground);
    expect(dropdown).toBeDisabled();
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<Dropdown options={sampleOptions} disabled />);
    const dropdown = screen.getByRole('combobox');
    
    const cursorStyle = window.getComputedStyle(dropdown).cursor;
    expect(cursorStyle).toBe('not-allowed');
  });
});
