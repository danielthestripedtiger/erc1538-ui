import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import boxedTree from './dist/js/d3-mitch-tree.min';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
