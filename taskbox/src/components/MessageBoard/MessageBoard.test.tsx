import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageBoard } from './MessageBoard';

const sampleMessages = [
  {
    id: 1,
    username: 'Test User',
    text: 'Test message',
    timestamp: new Date().toISOString(),
  },
];

describe('MessageBoard Component', () => {
  it('should render the message board and be visible', () => {
    render(<MessageBoard messages={sampleMessages} currentUsername="Test User" />);
    const heading = screen.getByText(/message board/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should display messages', () => {
    render(<MessageBoard messages={sampleMessages} currentUsername="Test User" />);
    const message = screen.getByText(/test message/i);
    expect(message).toBeInTheDocument();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <MessageBoard messages={sampleMessages} currentUsername="Test" />
    );
    const heading = screen.getByText(/message board/i);
    const container = heading.closest('div');
    
    const enabledOpacity = container ? window.getComputedStyle(container).opacity : '1';
    
    rerender(
      <MessageBoard messages={sampleMessages} currentUsername="Test" disabled />
    );
    
    const disabledOpacity = container ? window.getComputedStyle(container).opacity : '1';
    
    expect(enabledOpacity).not.toBe(disabledOpacity);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<MessageBoard messages={sampleMessages} currentUsername="Test" disabled />);
    const heading = screen.getByText(/message board/i);
    const container = heading.closest('div');
    
    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
