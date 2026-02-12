import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default greeting', () => {
  render(<App />);
  const greeting = screen.getByText(/hello,\s*guest/i);
  expect(greeting).toBeInTheDocument();
});
