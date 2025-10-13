import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LogsViewer } from './LogsViewer';

const sampleLogs = [
  { container: 'test-container', message: 'Test message' },
];

describe('LogsViewer Component', () => {
  it('should render the logs viewer and be visible', () => {
    render(<LogsViewer logs={sampleLogs} />);
    const heading = screen.getByText(/recent activity/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should display log entries', () => {
    render(<LogsViewer logs={sampleLogs} />);
    const container = screen.getByText(/test-container/i);
    const message = screen.getByText(/test message/i);
    expect(container).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<LogsViewer logs={sampleLogs} disabled />);
    const heading = screen.getByText(/recent activity/i);
    const container = heading.closest('div');
    
    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
