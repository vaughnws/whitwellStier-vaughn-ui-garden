import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text Component', () => {
  it('should render the text and be visible', () => {
    render(<Text content="Test Text Content" />);
    const text = screen.getByText(/test text content/i);
    expect(text).toBeInTheDocument();
    expect(text).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(<Text content="Test Text" color="#333333" />);
    const text = screen.getByText(/test text/i);

    // Check enabled state
    const enabledColor = window.getComputedStyle(text).color;

    // Rerender with disabled prop
    rerender(<Text content="Test Text" disabled color="#333333" />);

    // Check disabled state
    const disabledColor = window.getComputedStyle(text).color;

    // Colors should be different
    expect(enabledColor).not.toBe(disabledColor);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<Text content="Test Text" disabled />);
    const text = screen.getByText(/test text/i);

    const cursorStyle = window.getComputedStyle(text).cursor;
    expect(cursorStyle).toBe('not-allowed');
  });
});
