import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./utils.scss";
const PrimaryButton = ({ btnText, width, height, fontsize, color, className, padding }) => {
  const customClasses = classNames("btn-text", className);
  return (
    <button
      className={customClasses}
      style={{ width: width, height: height, fontSize: fontsize, color: color, padding: padding }}
    >
      {btnText}
    </button>
  );
};
PrimaryButton.propTypes = {
  btnText: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontsize: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  padding: PropTypes.string,
};
export default PrimaryButton;
