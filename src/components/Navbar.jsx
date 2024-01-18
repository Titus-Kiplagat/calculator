import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 select-none bg-gray-500 lg:flex lg:items-stretch w-full md:flex-row">
    <div className="flex justify-center flex-no-shrink items-stretch h-12">
      <Link to="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark text-2xl font-black uppercase">Math Calculator</Link>
    </div>
    <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
      <div className="flex justify-around lg:items-stretch  ml-auto">
        <Link to="home" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Home</Link>
        <Link to="calculator" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Calculator</Link>
        <Link to="quote" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Quote</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
