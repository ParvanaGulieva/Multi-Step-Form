import React, { useState } from "react";
import Button from "../../ui/Button";
import AddOnElement from "../AddOnElement";
import StyledStep3 from "./style";

const Step3 = ({
  isYearly,
  nextStep,
  prevStep,
  handleAddSelection,
  selectedAdds,
}) => {
  const isAnySelected = selectedAdds.length > 0;

  console.log(selectedAdds);
  return (
    <StyledStep3>
      <div className="main">
        <div className="title">
          <p className="heading">Pick add-ons</p>
          <p className="bodyL">Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="addContainer">
          <AddOnElement
            price={1}
            title="Online service"
            subtitle="Access to multiplayer games"
            isYearly={isYearly}
            onSelectionChange={(addTitle, isSelected) =>
              handleAddSelection(addTitle, isSelected, 1)
            }
          />
          <AddOnElement
            price={2}
            title="Larger storage"
            subtitle="Extra 1TB of cloud save"
            isYearly={isYearly}
            onSelectionChange={(addTitle, isSelected) =>
              handleAddSelection(addTitle, isSelected, 2)
            }
          />
          <AddOnElement
            price={2}
            title="Customizable Profile"
            subtitle="Custom theme on your profile"
            isYearly={isYearly}
            onSelectionChange={(addTitle, isSelected) =>
              handleAddSelection(addTitle, isSelected, 2)
            }
          />
        </div>
      </div>
      <div className="btn-container">
        <Button text="Go back" className="tertiary" onClick={prevStep} />
        <Button
          text="Next step"
          className="primary"
          onClick={nextStep}
          disabled={!isAnySelected}
        />
      </div>
    </StyledStep3>
  );
};

export default Step3;
