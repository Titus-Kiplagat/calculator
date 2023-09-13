import { PropTypes } from 'prop-types';

function Button({ label, bgColor }) {
  return (
    <button
      className={`col-span-1 p-5 ${bgColor} hover:bg-gray-400 border  border-gray-200`}
      type="button"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,

};

export default Button;
