import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../Quote';

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([
    {
      quote: 'Test quote',
      author: 'Test author',
    },
  ]),
}));

describe('Quote Component', () => {
  it('should render a quote', async () => {
    render(<Quote />);
  });
});
