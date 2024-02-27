import React from "react";
import PropTypes from "prop-types";

const directionDegree = {
  top: "0deg",
  bottom: "180deg",
  right: "90deg",
  left: "270deg",
};

const ArrowIcon = ({ direction }) => {
  const rotateDirection = `rotate(${directionDegree[direction]})`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="white"
      style={{ transform: rotateDirection }}
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
};

ArrowIcon.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default ArrowIcon;
