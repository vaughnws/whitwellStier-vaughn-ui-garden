import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Status } from './Status';

describe('Status Component', () => {
  it('should render the status and be visible', () => {
    render(<Status status="healthy" description="Test description" />);
    const status = screen.getByText(/healthy/i);
    expect(status).toBeInTheDocument();
    expect(status).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <Status status="healthy" description="Test" />
    );
    const status = screen.getByText(/healthy/i);
    
    const enabledColor = window.getComputedStyle(status).color;
    
    rerender(<Status status="healthy" description="Test" disabled />);
    
    const disabledColor = window.getComputedStyle(status).color;
    
    expect(enabledColor).not.toBe(disabledColor);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<Status status="healthy" disabled />);
    const status = screen.getByText(/healthy/i);
    const container = status.closest('div');
    
    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });

  it('should display custom status text', () => {
    render(<Status status="healthy" statusText="All Good" />);
    const customText = screen.getByText(/all good/i);
    expect(customText).toBeInTheDocument();
  });

  it('should display description when provided', () => {
    render(<Status status="warning" description="4/5 services running" />);
    const description = screen.getByText(/4\/5 services running/i);
    expect(description).toBeInTheDocument();
  });
});
