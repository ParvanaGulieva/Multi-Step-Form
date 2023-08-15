import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Step1 from "../../components/Step1";
import Step2 from "../../components/Step2";
import Step3 from "../../components/Step3";
import Step4 from "../../components/Step4";
import Confirmation from "../../components/Confirmation";
import StyledLayout from "./style";

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);
  const [isPlanSelected, setIsPlanSelected] = useState(false);
  const [selectedAdds, setSelectedAdds] = useState([]);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChangeYear = () => {
    setIsYearly(!isYearly);
  };

  const handleChangePlanSummary = () => {
    setCurrentStep(2);
  };

  const handlePlanSelection = (name, price) => {
    setSelectedPlan(name);
    setSelectedPlanPrice(price);
    setIsPlanSelected(true);
  };

  const handleAddSelection = (addTitle, isSelected, price) => {
    if (isSelected) {
      setSelectedAdds([...selectedAdds, { title: addTitle, price }]);
    } else {
      setSelectedAdds(selectedAdds.filter((addon) => addon.title !== addTitle));
    }
  };

  console.log(selectedAdds);
  return (
    <StyledLayout>
      <Navbar currentStep={currentStep} />
      <div className="mainSection">
        {currentStep === 1 && <Step1 nextStep={nextStep} />}
        {currentStep === 2 && (
          <Step2
            handleChange={handleChangeYear}
            isYearly={isYearly}
            prevStep={prevStep}
            handlePlanSelection={handlePlanSelection}
            isPlanSelected={isPlanSelected}
            selectedPlan={selectedPlan}
            selectedPlanPrice={selectedPlanPrice}
            nextStep={(plan, price) => {
              setSelectedPlan(plan);
              setSelectedPlanPrice(price);
              nextStep();
            }}
          />
        )}
        {currentStep === 3 && (
          <Step3
            isYearly={isYearly}
            nextStep={nextStep}
            prevStep={prevStep}
            handleAddSelection={handleAddSelection}
            selectedAdds={selectedAdds}
          />
        )}
        {currentStep === 4 && (
          <Step4
            handleChangePlanSummary={handleChangePlanSummary}
            nextStep={nextStep}
            selectedPlan={selectedPlan}
            selectedPlanPrice={selectedPlanPrice}
            isYearly={isYearly}
            selectedAdds={selectedAdds}
          />
        )}
        {currentStep === 5 && <Confirmation />}
      </div>
    </StyledLayout>
  );
};

export default Layout;
