import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Img } from './Img';

describe('Img Component', () => {
  it('should render the image and be visible', () => {
    render(
      <Img
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Image"
        width="150px"
        height="150px"
      />
    );
    const img = screen.getByRole('img', { name: /test image/i });
    expect(img).toBeInTheDocument();
    expect(img).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <Img
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Image"
        width="150px"
        height="150px"
      />
    );
    const img = screen.getByRole('img');
    
    const enabledFilter = window.getComputedStyle(img).filter;
    
    rerender(
      <Img
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Image"
        width="150px"
        height="150px"
        disabled
      />
    );
    
    const disabledFilter = window.getComputedStyle(img).filter;
    
    expect(enabledFilter).not.toBe(disabledFilter);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(
      <Img
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Image"
        disabled
      />
    );
    const img = screen.getByRole('img');
    const container = img.parentElement;
    
    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
