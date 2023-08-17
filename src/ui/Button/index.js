import React from "react";
import StyledButton from "./style";

const Button = ({ className, text, onClick, disabled, type }) => {
  return (
    <StyledButton
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
