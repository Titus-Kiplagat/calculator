import Calculator from '../components/Calculator';

const CalculatorApp = () => (
  <div className="flex flex-col md:flex-row md:gap-48 m-4 md:my-10">
    <p className="text-xl font-black text-orange-900">Let&apos;s do some math!</p>
    <Calculator />
  </div>
);

export default CalculatorApp;
