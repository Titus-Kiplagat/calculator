import { render } from '@testing-library/react';
import QuoteDisplay from '../QuoteDisplay';

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([{ quote: 'Test quote', author: 'Test author' }]),
}));

describe('QuoteDisplay', () => {
  it('QuoteDisplay component matches snapshot', () => {
    const { asFragment } = render(<QuoteDisplay />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render loading message when fetching quote', () => {
    // Mock the fetch function
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ quote: 'Test quote', author: 'Test author' }]),
    }));

    // Render the component
    const { getByText } = render(<QuoteDisplay />);

    // Assert that the loading message is rendered
    expect(getByText('Loading...')).toBeInTheDocument();

    // Clean up the mock
    global.fetch.mockRestore();
  });
});
