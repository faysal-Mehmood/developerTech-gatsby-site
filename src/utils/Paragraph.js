import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./utils.scss";
const Paragraph = ({ text, color, size, className, fontweight }) => {
  const customClasses = classNames("para-text", className);
  return (
    <p className={customClasses} style={{ color: color, fontSize: size, fontWeight: fontweight }}>
      {text}
    </p>
  );
};
Paragraph.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  fontweight: PropTypes.string,
};
export default Paragraph;
