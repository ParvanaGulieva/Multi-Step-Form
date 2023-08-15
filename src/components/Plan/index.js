import React from "react";
import StyledPlan from "./style";

const Plan = ({ icon, planName, price, onClick, isActive, isYearly }) => {
  return (
    <StyledPlan onClick={onClick} className={isActive ? "active" : ""}>
      <div className="planImage">
        <img src={icon} alt="" />
      </div>
      <div className="details">
        <p className="bodyL">{planName}</p>
        <p className="bodyM">
          ${price}/{isYearly ? "yr" : "mo"}
        </p>
        {isYearly && <p className="bodyS">2 months free</p>}
      </div>
    </StyledPlan>
  );
};

export default Plan;
