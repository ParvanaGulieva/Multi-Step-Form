import React from "react";
import Button from "../../ui/Button";
import StyledStep4 from "./style";

const Step4 = ({
  handleChangePlanSummary,
  nextStep,
  selectedPlan,
  selectedPlanPrice,
  isYearly,
  selectedAdds,
}) => {
  const calculateTotalPrice = () => {
    let totalPrice = isYearly ? selectedPlanPrice * 10 : selectedPlanPrice;

    selectedAdds.forEach((add) => {
      totalPrice += isYearly ? add.price * 10 : add.price;
    });

    return totalPrice;
  };

  return (
    <StyledStep4>
      <div className="main">
        <div className="title">
          <p className="heading">Finishing up</p>
          <p className="bodyL">
            Double-check everything looks OK before confirming.{" "}
          </p>
        </div>
        <div className="priceContainer">
          <div className="selectedPlan">
            <div className="planContainer">
              <div className="plan">
                <p className="planTitle">
                  {selectedPlan}({isYearly ? "Yearly" : "Monthly"}){" "}
                </p>
                <p className="link" onClick={handleChangePlanSummary}>
                  Change
                </p>
              </div>
              <p className="planPrice">
                ${isYearly ? selectedPlanPrice * 10 : selectedPlanPrice}/
                {isYearly ? "yr" : "mo"}
              </p>
            </div>
            <div className="separator"></div>
            {selectedAdds.map((add, id) => (
              <div className="selectedAdd" key={id}>
                <p className="addTitle">{add.title}</p>
                <p className="addPrice">
                  +${isYearly ? add.price * 10 : add.price}/
                  {isYearly ? "yr" : "mo"}
                </p>
              </div>
            ))}
          </div>
          <div className="total">
            <p className="totalPer">
              Total (per {isYearly ? "year" : "month"})
            </p>
            <p className="totalPrice">
              +${calculateTotalPrice()}/{isYearly ? "yr" : "mo"}
            </p>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <Button text="Submit" className="secondary" onClick={nextStep} />
      </div>
    </StyledStep4>
  );
};

export default Step4;
