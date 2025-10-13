import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calendar } from './Calendar';

const sampleEvents = [
  {
    title: 'Test Event',
    start: new Date().toISOString(),
    location: 'Test Location',
  },
];

describe('Calendar Component', () => {
  it('should render the calendar and be visible', () => {
    render(<Calendar events={sampleEvents} />);
    const heading = screen.getByText(/upcoming classes/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should display events', () => {
    render(<Calendar events={sampleEvents} />);
    const event = screen.getByText(/test event/i);
    expect(event).toBeInTheDocument();
  });

  it('should show empty state when no events', () => {
    render(<Calendar events={[]} />);
    const emptyText = screen.getByText(/no upcoming events/i);
    expect(emptyText).toBeInTheDocument();
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<Calendar events={sampleEvents} disabled />);
    const heading = screen.getByText(/upcoming classes/i);
    const container = heading.closest('div');
    
    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
