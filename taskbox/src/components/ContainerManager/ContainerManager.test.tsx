import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContainerManager } from './ContainerManager';

const sampleContainers = [
  { name: 'test-container', status: 'running' as const },
];

describe('ContainerManager Component', () => {
  it('should render the container manager and be visible', () => {
    render(<ContainerManager containers={sampleContainers} />);
    const heading = screen.getByText(/containers/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it('should display containers', () => {
    render(<ContainerManager containers={sampleContainers} />);
    const container = screen.getByText(/test-container/i);
    expect(container).toBeInTheDocument();
  });

  it('should show unlock button when locked', () => {
    render(
      <ContainerManager
        containers={sampleContainers}
        isPinUnlocked={false}
        onUnlock={() => {}}
      />
    );
    const unlockButtons = screen.getAllByRole('button');
    expect(unlockButtons.length).toBeGreaterThan(0);
  });

  it('should have not-allowed cursor when disabled', () => {
    render(<ContainerManager containers={sampleContainers} disabled />);
    const heading = screen.getByText(/containers/i);
    const container = heading.closest('div');

    if (container) {
      const cursorStyle = window.getComputedStyle(container).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
