import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the board', () => {
  const { container } = render(<App />);
  expect(container.querySelector('#board')).toBeInTheDocument();
});
