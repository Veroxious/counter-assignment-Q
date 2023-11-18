import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
    <Counter />;
})

test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/count/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const counterInit = screen.getByText(/0/i);
  expect(counterInit).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  render(<Counter />);
  userEvent.click(screen.getByText('+'));
  const test = screen.getByText(/1/i);
  expect(test).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  userEvent.click(screen.getByText('-'));
  const test = screen.getByText(/-1/i);
  expect(test).toBeInTheDocument();
});
