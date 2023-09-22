import { render, screen } from '@testing-library/react';
import CalculatorApp from '../CalculatorApp';

describe('Calculator App', () => {
  it('should render the component without crashing', () => {
    render(<CalculatorApp />);
  });

  it('should display the calculator UI with all buttons', () => {
    render(<CalculatorApp />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(19);
  });
});
