import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Avatar from './index';

describe('Avatar Component', () => {
  it('renders initials when no src is provided', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeDefined();
  });

  it('renders image when src is provided', () => {
    const src = 'https://example.com/avatar.jpg';
    render(<Avatar name="John Doe" src={src} />);
    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toBe(src);
  });
});
