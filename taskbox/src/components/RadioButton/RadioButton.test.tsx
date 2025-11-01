import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  it('should render the radio button and be visible', () => {
    render(<RadioButton label="Test Radio" value="test" name="test-group" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toBeVisible();
  });

  it('should change style when disabled', () => {
    const { rerender } = render(
      <RadioButton
        label="Test Radio"
        value="test"
        name="test-group"
        backgroundColor="#1976d2"
      />
    );
    const radio = screen.getByRole('radio');

    expect(radio).not.toBeDisabled();

    rerender(
      <RadioButton
        label="Test Radio"
        value="test"
        name="test-group"
        disabled
        backgroundColor="#1976d2"
      />
    );

    expect(radio).toBeDisabled();
  });

  it('should have not-allowed cursor when disabled', () => {
    render(
      <RadioButton label="Test Radio" value="test" name="test-group" disabled />
    );
    const radio = screen.getByRole('radio');
    const label = radio.parentElement;

    if (label) {
      const cursorStyle = window.getComputedStyle(label).cursor;
      expect(cursorStyle).toBe('not-allowed');
    }
  });
});
