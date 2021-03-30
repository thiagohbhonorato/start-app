import PropTypes from "prop-types";
import cn from "classnames";

export default function Input({ type, value, onChange, className, ...props }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={cn("input", className)}
      {...props}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};
