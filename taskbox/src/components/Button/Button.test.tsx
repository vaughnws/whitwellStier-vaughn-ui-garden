import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  it('should render the button and be visible', () => {
    render(<Button label="Test Button" />);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(<Button label="Test Button" backgroundColor="#1976d2" />);
    const button = screen.getByRole('button', { name: /test button/i });
    
    // Check enabled state
    const enabledBackground = window.getComputedStyle(button).backgroundColor;
    
    // Rerender with disabled prop
    rerender(<Button label="Test Button" disabled backgroundColor="#1976d2" />);
    
    // Check disabled state
    const disabledBackground = window.getComputedStyle(button).backgroundColor;
    
    // Background colors should be different
    expect(enabledBackground).not.toBe(disabledBackground);
    expect(button).toBeDisabled();
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<Button label="Test Button" disabled />);
    const button = screen.getByRole('button', { name: /test button/i });
    
    const cursorStyle = window.getComputedStyle(button).cursor;
    expect(cursorStyle).toBe('not-allowed');
  });

  it('should not trigger onClick when disabled', () => {
    let clicked = false;
    const handleClick = () => { clicked = true; };
    
    render(<Button label="Test Button" disabled onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /test button/i });
    
    button.click();
    expect(clicked).toBe(false);
  });
});
