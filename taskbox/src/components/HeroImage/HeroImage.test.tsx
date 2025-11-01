import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  it('should render the hero image and be visible', () => {
    render(
      <HeroImage
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Hero"
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    const img = screen.getByRole('img', { name: /test hero/i });
    expect(img).toBeInTheDocument();
    expect(img).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <HeroImage
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Hero"
        title="Test Title"
      />
    );
    const img = screen.getByRole('img');

    const enabledFilter = window.getComputedStyle(img).filter;

    rerender(
      <HeroImage
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Hero"
        title="Test Title"
        disabled
      />
    );

    const disabledFilter = window.getComputedStyle(img).filter;

    expect(enabledFilter).not.toBe(disabledFilter);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(
      <HeroImage
        src="https://vaughnws.ca/aboutpic/vwithm.png"
        alt="Test Hero"
        title="Test Title"
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
