import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./utils.scss";
const Heading = ({ title, color, size, className, fontweight }) => {
  const customClasses = classNames("heading-text", className);
  return (
    <h3 className={customClasses} style={{ color: color, fontSize: size, fontWeight: fontweight }}>
      {title}
    </h3>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  fontweight: PropTypes.string,
};
export default Heading;
