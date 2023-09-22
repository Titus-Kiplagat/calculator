import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  test('Home component renders correctly', () => {
    render(<Home />);

    const welcomeText = screen.getByText('Welcome to how page!');
    expect(welcomeText).toBeInTheDocument();
  });
});
