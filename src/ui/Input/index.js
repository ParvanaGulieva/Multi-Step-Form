import React from "react";
import StyledInput from "./style";

const Input = ({
  type,
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <StyledInput>
      <div className="label">
        <label htmlFor={id}>{label}</label>
        {error && <div className="error-message">{error}</div>}
      </div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? "error" : ""}
      />
    </StyledInput>
  );
};

export default Input;
