import React from 'react';
import { render } from '@testing-library/react';
import StarBackground from './StarBackground';

test('renders StarBackground component', () => {
  const { container } = render(<StarBackground />);
  expect(container).toBeInTheDocument();
});