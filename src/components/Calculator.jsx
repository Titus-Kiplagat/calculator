import Button from './Button';

const Calculator = () => {
  const buttons = [
    { label: 'AC', bgColor: 'bg-gray-300' },
    { label: '+/-', bgColor: 'bg-gray-300' },
    { label: '%', bgColor: 'bg-gray-300' },
    { label: '/', bgColor: 'bg-orange-400' },
    { label: '7', bgColor: 'bg-gray-300' },
    { label: '8', bgColor: 'bg-gray-300' },
    { label: '9', bgColor: 'bg-gray-300' },
    { label: '*', bgColor: 'bg-orange-400' },
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
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg">
        <div className="grid grid-cols-4">
          <form className="col-span-4">
            <input
              type="text"
              id="display"
              className="p-5 text-2xl text-right bg-gray-500 text-white focus:outline-none"
              placeholder="0"
              readOnly
            />
          </form>
          {buttons.map(({ label, bgColor }) => (
            <Button key={label} label={label} bgColor={bgColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
