import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BionicBlock } from './bionic-block';

describe('BionicBlock component', () => {
  it('should apply bionic formatting to a single text node', () => {
    render(<BionicBlock>Hello world</BionicBlock>);
    expect(screen.getByText('Hel')).toBeInTheDocument();
    expect(screen.getByText('lo')).toBeInTheDocument();
    expect(screen.getByText('wor')).toBeInTheDocument();
    expect(screen.getByText('ld')).toBeInTheDocument();
  });

  it('should apply bionic formatting to multiple text nodes', () => {
    render(
      <BionicBlock>
        <p>First paragraph.</p>
        <p>Second paragraph.</p>
      </BionicBlock>
    );
    expect(screen.getByText('Fir')).toBeInTheDocument();
    expect(screen.getByText('st')).toBeInTheDocument();
    expect(screen.getByText('Sec')).toBeInTheDocument();
    expect(screen.getByText('ond')).toBeInTheDocument();

    const paragElements = screen.getAllByText('parag');
    expect(paragElements).toHaveLength(2);
    paragElements.forEach(el => {
      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe('STRONG');
    });

    const raphElements = screen.getAllByText('raph.');
    expect(raphElements).toHaveLength(2);
    raphElements.forEach(el => {
      expect(el).toBeInTheDocument();
      expect(el.tagName).not.toBe('STRONG');
    });
  });

  it('should handle nested elements', () => {
    render(
      <BionicBlock>
        <div>
          <span>Nested text.</span>
        </div>
      </BionicBlock>
    );
    expect(screen.getByText('Nes')).toBeInTheDocument();
    expect(screen.getByText('ted')).toBeInTheDocument();
    expect(screen.getByText('tex')).toBeInTheDocument();
    expect(screen.getByText('t.')).toBeInTheDocument();
  });

  it('should handle a mix of text nodes and elements', () => {
    render(
      <BionicBlock>
        <p>Some text.</p>
        Another text node.
      </BionicBlock>
    );
    expect(screen.getByText('So')).toBeInTheDocument();
    expect(screen.getByText('me')).toBeInTheDocument();
    expect(screen.getByText('tex')).toBeInTheDocument();
    expect(screen.getByText('t.')).toBeInTheDocument();
    expect(screen.getByText('Anot')).toBeInTheDocument();
    expect(screen.getByText('her')).toBeInTheDocument();
  });

  it('should handle children with no text nodes', () => {
    const { container } = render(
      <BionicBlock>
        <div />
        <span />
      </BionicBlock>
    );
    expect(container).not.toBeEmptyDOMElement();
    expect(screen.queryByText(/.+/)).toBeNull();
  });

  it('should handle empty strings and whitespace', () => {
    const { container } = render(<BionicBlock>  </BionicBlock>);
    expect(container).toBeEmptyDOMElement();
  });
});