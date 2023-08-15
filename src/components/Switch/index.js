import React, { useState } from "react";
import StyledSwitch from "./style";

const SwitchComponent = ({ handleChange, isYearly }) => {
  return (
    <StyledSwitch>
      <span className={isYearly ? "label-text  " : "label-text active"}>
        Monthly
      </span>
      <label className="switch">
        <input type="checkbox" checked={isYearly} onChange={handleChange} />
        <span className="slider round"></span>
      </label>
      <span className={isYearly ? "label-text active " : "label-text"}>
        Yearly
      </span>
    </StyledSwitch>
  );
};

export default SwitchComponent;
