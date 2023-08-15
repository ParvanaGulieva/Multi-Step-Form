import React from "react";
import StyledNavbar from "./style";
import StepItem from "../StepItem";
import sidebarDesktop from "../../assets/images/sidebar-desktop.svg";
import sidebarMobile from "../../assets/images/bg-sidebar-mobile.svg";

const Navbar = ({ currentStep }) => {
  return (
    <StyledNavbar>
      <div className="steps">
        <StepItem num={1} title="YOUR INFO" active={currentStep === 1} />
        <StepItem num={2} title="SELECT PLAN" active={currentStep === 2} />
        <StepItem num={3} title="ADD-ONS" active={currentStep === 3} />
        <StepItem
          num={4}
          title="SUMMARY"
          active={currentStep === 4 || currentStep === 5}
        />
      </div>
      <div className="sidebarImg">
        <img src={sidebarDesktop} alt="sidebar" />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
