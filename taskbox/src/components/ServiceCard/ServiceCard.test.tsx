import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ServiceCard } from './ServiceCard';

const sampleServices = [
  {
    name: 'Test Service',
    subtitle: 'Test Description',
    url: 'https://test.com',
  },
];

describe('ServiceCard Component', () => {
  it('should render the service card and be visible', () => {
    render(<ServiceCard services={sampleServices} />);
    const heading = screen.getByText(/services/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should display service information', () => {
    render(<ServiceCard services={sampleServices} />);
    const serviceName = screen.getByText(/test service/i);
    const serviceSubtitle = screen.getByText(/test description/i);
    expect(serviceName).toBeInTheDocument();
    expect(serviceSubtitle).toBeInTheDocument();
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<ServiceCard services={sampleServices} disabled />);
    const heading = screen.getByText(/services/i);
    const container = heading.closest('div');

    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
