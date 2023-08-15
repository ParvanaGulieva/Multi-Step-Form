import React, { useState } from "react";
import Button from "../../ui/Button";
import Plan from "../Plan";
import StyledStep2 from "./style";
import SwitchComponent from "../Switch";
import plan1 from "../../assets/images/icon-arcade.svg";
import plan2 from "../../assets/images/icon-advanced.svg";
import plan3 from "../../assets/images/icon-pro.svg";

const Step2 = ({
  handleChange,
  isYearly,
  prevStep,
  nextStep,
  selectedPlan,
  selectedPlanPrice,
  handlePlanSelection,
  isPlanSelected,
}) => {
  return (
    <StyledStep2>
      <div className="main">
        <div className="title">
          <p className="heading">Select your plan</p>
          <p className="bodyL">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="planContainer">
          <Plan
            icon={plan1}
            planName="Arcade"
            price={isYearly ? 9 * 10 : 9}
            isActive={selectedPlan === "Arcade"}
            onClick={() => handlePlanSelection("Arcade", 9)}
            isYearly={isYearly}
          />
          <Plan
            icon={plan2}
            planName="Advanced"
            price={isYearly ? 12 * 10 : 12}
            isActive={selectedPlan === "Advanced"}
            onClick={() => handlePlanSelection("Advanced", 12)}
            isYearly={isYearly}
          />
          <Plan
            icon={plan3}
            planName="Pro"
            price={isYearly ? 15 * 10 : 15}
            isActive={selectedPlan === "Pro"}
            onClick={() => handlePlanSelection("Pro", 15)}
            isYearly={isYearly}
          />
        </div>
        <SwitchComponent handleChange={handleChange} isYearly={isYearly} />
      </div>
      <div className="btn-container">
        <Button text="Go back" className="tertiary" onClick={prevStep} />
        <Button
          text="Next step"
          className="primary"
          onClick={() => nextStep(selectedPlan, selectedPlanPrice)}
          disabled={!isPlanSelected}
        />
      </div>
    </StyledStep2>
  );
};

export default Step2;
