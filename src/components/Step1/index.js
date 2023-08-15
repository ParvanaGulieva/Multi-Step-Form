import React from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import StyledStep1 from "./style";

const Step1 = ({ nextStep }) => {
  return (
    <StyledStep1>
      <div className="main">
        <div className="title">
          <p className="heading">Personal info</p>
          <p className="bodyL">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="inputContainer">
          <Input type="text" placeholder="e.g. Stephen King" label="Name" />
          <Input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            label="Email Address"
          />
          <Input
            type="number"
            placeholder="e.g. +1 234 567 890"
            label="Phone Number"
          />
        </div>
      </div>
      <div className="btn-container">
        <Button text="Next step" className="primary" onClick={nextStep} />
      </div>
    </StyledStep1>
  );
};

export default Step1;
