import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NewsTicker } from './NewsTicker';

const sampleNews = [
  { title: 'Test News Item', link: 'https://example.com' },
];

describe('NewsTicker Component', () => {
  it('should render the news ticker and be visible', () => {
    render(<NewsTicker news={sampleNews} />);
    const newsItem = screen.getByText(/test news item/i);
    expect(newsItem).toBeInTheDocument();
    expect(newsItem).toBeVisible();
  });

  it('should display loading message when no news', () => {
    render(<NewsTicker news={[]} />);
    const loading = screen.getByText(/loading tech news/i);
    expect(loading).toBeInTheDocument();
  });

  it('should have not-allowed cursor when disabled', () => {
    const { container } = render(<NewsTicker news={sampleNews} disabled />);
    const ticker = container.firstChild as HTMLElement;
    
    if (ticker) {
      const cursorStyle = window.getComputedStyle(ticker).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
