import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label Component', () => {
  it('should render the label and be visible', () => {
    render(<Label text="Test Label" />);
    const label = screen.getByText(/test label/i);
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(<Label text="Test Label" color="#333333" />);
    const label = screen.getByText(/test label/i);
    
    // Check enabled state
    const enabledColor = window.getComputedStyle(label).color;
    
    // Rerender with disabled prop
    rerender(<Label text="Test Label" disabled color="#333333" />);
    
    // Check disabled state
    const disabledColor = window.getComputedStyle(label).color;
    
    // Colors should be different
    expect(enabledColor).not.toBe(disabledColor);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<Label text="Test Label" disabled />);
    const label = screen.getByText(/test label/i);
    
    const cursorStyle = window.getComputedStyle(label).cursor;
    expect(cursorStyle).toBe('not-allowed');
  });
});
