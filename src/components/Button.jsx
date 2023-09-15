import { PropTypes } from 'prop-types';

function Button({ label, bgColor, onClick }) {
  return (
    <button
      className={`col-span-1 p-5 ${bgColor} hover:bg-gray-400 border border-gray-200 rounded-lg`}
      type="button"
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default Button;
