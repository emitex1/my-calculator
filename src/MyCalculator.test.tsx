import React from 'react';
import { render, screen } from '@testing-library/react';
import MyCalculator from './MyCalculator';

test('renders clear button', () => {
  render(<MyCalculator />);
  const clearBtn = screen.getByText(/Clear/i);
  expect(clearBtn).toBeInTheDocument();
});
