// Button.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders without errors', () => {
    const onClickMock = jest.fn();
    render(<Button label="5" bgColor="bg-gray-300" onClick={onClickMock} />);
  });

  test('Button renders correctly', () => {
    const onClickMock = jest.fn();
    const { asFragment, getByText } = render(
      <Button label="5" bgColor="bg-gray-300" onClick={onClickMock} />,
    );

    expect(asFragment()).toMatchSnapshot();

    const button = getByText('5');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledWith('5');
  });
});
