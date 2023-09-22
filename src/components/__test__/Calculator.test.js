import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  it('renders without errors', () => {
    render(<Calculator />);
  });

  it('displays the initial displayValue', () => {
    const { getByTestId } = render(<Calculator />);
    const display = getByTestId('display');
    expect(display.value).toBe('0');
  });

  it('updates the displayValue when a button is clicked', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByText('5'));
    expect(display.value).toBe('5');
  });

  it('correctly performs addition', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(display.value).toBe('8');
  });

  it('correctly performs subtraction', () => {
    const { getByTestId, getByText } = render(<Calculator />);
    const display = getByTestId('display');
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(display.value).toBe('2');
  });
});
