import React from "react";
import StyledInput from "./style";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

const Input = ({ type, label, placeholder }) => {
  return (
    <StyledInput>
      <div className="label">
        <label htmlFor={label}>{label}</label>
      </div>
      <input type={type} id={label} placeholder={placeholder} />
    </StyledInput>
  );
};

export default Input;
