import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NetworkStats } from './NetworkStats';

const sampleInterfaces = [
  { interface: 'eth0', address: '192.168.1.100' },
];

describe('NetworkStats Component', () => {
  it('should render the network stats and be visible', () => {
    render(<NetworkStats interfaces={sampleInterfaces} />);
    const heading = screen.getByText(/network/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should display network interfaces', () => {
    render(<NetworkStats interfaces={sampleInterfaces} />);
    const interfaceName = screen.getByText(/eth0/i);
    const address = screen.getByText(/192.168.1.100/i);
    expect(interfaceName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<NetworkStats interfaces={sampleInterfaces} disabled />);
    const heading = screen.getByText(/network/i);
    const container = heading.closest('div');
    
    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
