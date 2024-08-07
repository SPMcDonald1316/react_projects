import { render, screen } from '@testing-library/react';
import App from '../src/App'
import { expect, test } from 'vitest';

test('renders brand element', () => {
  render(<App />);
  const element = screen.getByText(/Microblog/);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('navbar-brand');
});

