import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  it('should render the card and be visible', () => {
    render(
      <Card
        title="Test Card"
        content="Test content"
        imageSrc="https://vaughnws.ca/aboutpic/vwithm.png"
      />
    );
    const title = screen.getByText(/test card/i);
    expect(title).toBeInTheDocument();
    expect(title).toBeVisible();
    
    const content = screen.getByText(/test content/i);
    expect(content).toBeInTheDocument();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <Card
        title="Test Card"
        content="Test content"
        backgroundColor="#ffffff"
      />
    );
    const title = screen.getByText(/test card/i);
    const card = title.closest('div')?.parentElement;
    
    const enabledBackground = card ? window.getComputedStyle(card).backgroundColor : '';
    
    rerender(
      <Card
        title="Test Card"
        content="Test content"
        disabled
        backgroundColor="#ffffff"
      />
    );
    
    const disabledBackground = card ? window.getComputedStyle(card).backgroundColor : '';
    
    expect(enabledBackground).not.toBe(disabledBackground);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(
      <Card
        title="Test Card"
        content="Test content"
        disabled
      />
    );
    const title = screen.getByText(/test card/i);
    const card = title.closest('div')?.parentElement;
    
    if (card) {
      const cursorStyle = window.getComputedStyle(card).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
