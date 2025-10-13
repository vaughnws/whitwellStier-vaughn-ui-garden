import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Resources } from './Resources';

describe('Resources Component', () => {
  it('should render the resource bar and be visible', () => {
    render(<Resources label="CPU" value={50} />);
    const label = screen.getByText(/cpu/i);
    expect(label).toBeInTheDocument();
    expect(label).toBeVisible();
    
    const value = screen.getByText(/50%/);
    expect(value).toBeInTheDocument();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(<Resources label="CPU" value={50} />);
    const label = screen.getByText(/cpu/i);
    
    const enabledColor = window.getComputedStyle(label).color;
    
    rerender(<Resources label="CPU" value={50} disabled />);
    
    const disabledColor = window.getComputedStyle(label).color;
    
    expect(enabledColor).not.toBe(disabledColor);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<Resources label="CPU" value={50} disabled />);
    const label = screen.getByText(/cpu/i);
    const container = label.closest('div')?.parentElement;
    
    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });

  it('should display correct percentage value', () => {
    render(<Resources label="RAM" value={75.5} />);
    const value = screen.getByText(/76%/); // Rounded
    expect(value).toBeInTheDocument();
  });

  it('should clamp values between 0 and 100', () => {
    const { rerender } = render(<Resources label="Test" value={150} />);
    let value = screen.getByText(/100%/);
    expect(value).toBeInTheDocument();
    
    rerender(<Resources label="Test" value={-10} />);
    value = screen.getByText(/0%/);
    expect(value).toBeInTheDocument();
  });
});
