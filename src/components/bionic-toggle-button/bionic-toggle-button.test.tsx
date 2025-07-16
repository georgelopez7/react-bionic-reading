import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { BionicToggleButton } from './bionic-toggle-button';
import { useBionic } from '../../store/useBionic';

// Reset the store before each test
beforeEach(() => {
  useBionic.setState({ isBionic: true });
});

describe('BionicToggleButton component', () => {
  it('should display the enabled icon when isBionic is true', () => {
    render(<BionicToggleButton />);
    expect(screen.getByTestId('icon-enabled')).toBeInTheDocument();
  });

  it('should display the disabled icon when isBionic is false', () => {
    useBionic.setState({ isBionic: false });
    render(<BionicToggleButton />);
    expect(screen.getByTestId('icon-disabled')).toBeInTheDocument();
  });

  it('should toggle the isBionic state when clicked', () => {
    render(<BionicToggleButton />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByTestId('icon-disabled')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByTestId('icon-enabled')).toBeInTheDocument();
  });
});