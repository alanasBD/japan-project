import React from "react";
import "./Button.css";
import arrowRight from "../../images/arrow-right.svg";
const Button = ({ text }) => {
  return (
    <button>
      <span>{text}</span>
      <img src={arrowRight} />
    </button>
  );
};

export default Button;
