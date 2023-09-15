import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import QuoteDisplay from './QuoteDisplay';

function Calculator() {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = calculatorState;
  let displayValue = `${total || ''} ${operation || ''} ${next || ''}`;

  if (displayValue.trim() === '') { displayValue = '0'; }

  const handleButtonClick = (buttonLabel) => {
    const newCalculatorState = calculate(calculatorState, buttonLabel);
    setCalculatorState(newCalculatorState);
  };

  const buttons = [
    { label: 'AC', bgColor: 'bg-gray-300' },
    { label: '+/-', bgColor: 'bg-gray-300' },
    { label: '%', bgColor: 'bg-gray-300' },
    { label: '÷', bgColor: 'bg-orange-400' },
    { label: '7', bgColor: 'bg-gray-300' },
    { label: '8', bgColor: 'bg-gray-300' },
    { label: '9', bgColor: 'bg-gray-300' },
    { label: 'x', bgColor: 'bg-orange-400' },
    { label: '4', bgColor: 'bg-gray-300' },
    { label: '5', bgColor: 'bg-gray-300' },
    { label: '6', bgColor: 'bg-gray-300' },
    { label: '-', bgColor: 'bg-orange-400' },
    { label: '1', bgColor: 'bg-gray-300' },
    { label: '2', bgColor: 'bg-gray-300' },
    { label: '3', bgColor: 'bg-gray-300' },
    { label: '+', bgColor: 'bg-orange-400' },
    { label: '0', bgColor: 'col-span-2 bg-gray-300' },
    { label: '.', bgColor: 'bg-gray-300' },
    { label: '=', bgColor: 'bg-orange-400' },
  ];

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg shadow-gray-400 mt-28">
        <div className="grid grid-cols-4 font-black text-xl">
          <form className="col-span-4">
            <input
              type="text"
              id="display"
              className="p-5 text-2xl text-right bg-gray-500 text-white focus:outline-none w-full rounded-lg"
              value={displayValue}
              placeholder="0"
              readOnly
            />
          </form>
          {buttons.map(({ label, bgColor }) => (
            <Button
              key={label}
              label={label}
              bgColor={bgColor}
              onClick={() => handleButtonClick(label)}
            />
          ))}
        </div>
      </div>
      <QuoteDisplay />
    </div>
  );
}

export default Calculator;
